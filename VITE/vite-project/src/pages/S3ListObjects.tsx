import React, { useState, useEffect } from 'react';
import { Storage } from 'aws-amplify';
import { useUserVisibleAgentsStore } from '../stores/VisibleAgentsStore';
import { useBackendRequestsStore } from '../stores/BackendRequestsStore';
import { useBlurringSpinnerStore } from '../stores/BlurringSpinnerStore';

export const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
}

export const getCurrentYear = () => {
    return Number(new Date().toISOString().slice(0, 4));
}

export const getCurrentDay = () => {
    return Number(new Date().toISOString().slice(8, 10));
}

export const getCurrentMonth = () => {
    return Number(new Date().toISOString().slice(5, 7));
}

const ListS3Objects: React.FC = () => {
    const backendStore = useBackendRequestsStore()
    const loadingStore = useBlurringSpinnerStore()
    const [s3Objects, setS3Objects] = useState<any[] | undefined>([]);
    const [isNotForCurrentMonth, setIsNotForCurrentMonth] = useState<boolean>(false);
    const userAgentsStore = useUserVisibleAgentsStore()
    const [selectedDate, setSelectedDate] = useState('');

    const handleSelectedDateChange = (event: any) => {
        setSelectedDate(event.target.value);
        console.log('changed selected date to: ', selectedDate)
    };

    useEffect(() => {
        console.log('useEffect called')
        async function loadS3ObjectsForDateRange(yearStringYYYY: string, monthStringMM: string): Promise<void> {
            if (backendStore.isSigningOut) {
                setS3Objects([]);
                return
            }
            loadingStore.setLoading(true)
            try {
                const objects = await Storage.list(`${userAgentsStore.userObject?.sub}/${userAgentsStore.userObject?.active_agent || 'Agent|DEFAULT#v_0|Agent|DEFAULT'}/${yearStringYYYY}/${monthStringMM}/`, { pageSize: 25 });
                loadingStore.setLoading(false)
                console.log(objects)
                setS3Objects(objects.results);
            } catch (error) {
                console.error('Error fetching S3 objects:', error);
                loadingStore.setLoading(false)
            }
        }

        if (!isNotForCurrentMonth) {
            loadS3ObjectsForDateRange(String(getCurrentYear()).padStart(2, '0'), String(getCurrentMonth()).padStart(2, '0'))
        } else {
            if (!selectedDate) {
                console.error("you need to select date if you dont want to see the current month objects")
            } else {
                console.log('selectedDate is', selectedDate)
                loadS3ObjectsForDateRange(String(new Date(selectedDate).toISOString().slice(0, 4)), String(new Date(selectedDate).toISOString().slice(5, 7)))
            }
        }

    }, [userAgentsStore.userObject, selectedDate]);

    const downloadObject = async (object: string) => {
        const objectUrl = await Storage.get(object, { expires: 10 }); // get a presigned link for download
        console.log('from download: ', objectUrl)
        window.open(objectUrl, '_blank'); // trigger download
    }

    return (
        <div className="p-4">
            <label className="inline-flex items-center">
                Load for another month?
                <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-500"
                    checked={isNotForCurrentMonth}
                    onChange={() => setIsNotForCurrentMonth(!isNotForCurrentMonth)}
                />
            </label>
            {isNotForCurrentMonth && (<div className="w-64">
                <div className="w-64">
                    <input
                        type="date"
                        className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={selectedDate}
                        onChange={handleSelectedDateChange}
                    />
                </div>
            </div>)}


            {s3Objects && s3Objects.length === 0 && Array.isArray(s3Objects) ? (
                <h1 className="text-2xl font-bold mb-4">No Files for this month</h1>
            ) : (
                <>
                    <h1 className="text-2xl font-bold mb-4">S3 Objects List ({ s3Objects?.length })</h1>

                    <div className="container mx-auto p-4">
                        {s3Objects && s3Objects.map((s3Object) => (
                            <div key={s3Object.key} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-cols-4 gap-4">
                                <div className="bg-blue-200 p-4">{s3Object.key.split('/').pop()}</div>
                                <div className="bg-green-200 p-4">{Number(s3Object.size / 1024).toFixed(2)} Kb</div>
                                <div className="bg-green-200 p-4">{s3Object.lastModified.toLocaleString()}</div>
                                <div className="bg-yellow-200 p-4"><button
                                    onClick={async () => { await downloadObject(s3Object.key) }}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >Download</button></div>
                            </div>
                        ))}
                    </div>
                    {/* <div>
                        <button
                            onClick={() => s3Objects?.map((s3Obj) => downloadObject(s3Obj.key))}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Download All
                        </button>
                    </div> */}
                </>
            )
            }
            {s3Objects && s3Objects.length !== 0 && Array.isArray(s3Objects) ? (

                <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4">
                    <div className="container mx-auto">
                        {/* Your summary content goes here */}
                        <p>total size of documents is {Number(s3Objects?.reduce((totalSize: number, s3Obj: any) => totalSize + s3Obj.size, 0) / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                </footer>
            )
                :
                <></>
            }
        </div >
    );
};

export default ListS3Objects;
