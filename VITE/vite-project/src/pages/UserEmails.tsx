import React, { useState, useEffect } from 'react';
import { Storage } from 'aws-amplify';
import { useUserVisibleAgentsStore } from '../stores/VisibleAgentsStore';

const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
}

const getCurrentYear = () => {
    return Number(new Date().toISOString().slice(0, 4));
}

const getCurrentMonth = () => {
    return Number(new Date().toISOString().slice(5, 7));
}

const UserEmails: React.FC = () => {
    const [s3Objects, setS3Objects] = useState<{ [dateString: string]: string[] } | undefined>({});
    const [isNotForCurrentMonth, setIsNotForCurrentMonth] = useState<boolean>(false);
    const userAgentsStore = useUserVisibleAgentsStore()
    const [selectedDate, setSelectedDate] = useState('');

    const handleSelectedDateChange = (event: any) => {
        setSelectedDate(event.target.value);
        console.log('changed selected date to: ', selectedDate)
    };

    useEffect(() => {
        console.log('useEffect called')
        async function fetchS3ObjectsForDate(dateString: string): Promise<{ [x: string]: string[] } | undefined> {
            try {
                const objects = await Storage.list(`${userAgentsStore.userObject?.sub}/${dateString}/${userAgentsStore.userObject?.active_agent}`, { pageSize: 25, level: 'private' });
                return { [dateString]: objects.results.map(result => result.key!) }
            } catch (error) {
                console.error('Error fetching S3 objects:', error);
            }
        }

        async function fetchS3ObjectsForMonth(year: number, month: number) {
            const daysOfRequestedMonth = getDaysInMonth(year, month)
            const fetchRequests = []
            for (let day = 1; day <= daysOfRequestedMonth; day++) {
                const dateString = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`
                fetchRequests.push(fetchS3ObjectsForDate(dateString))
            }
            const allDaysResults: ({ [dateString: string]: string[] } | undefined)[] = await Promise.all(fetchRequests)
            console.log('AT FINAL ', allDaysResults)
            setS3Objects(allDaysResults.reduce((accum, next) => {
                return { ...accum, ...next }
            }, {}));
        }

        if (!isNotForCurrentMonth) {
            fetchS3ObjectsForMonth(getCurrentYear(), getCurrentMonth())
        } else {
            if (!selectedDate) {
                console.error("you need to select date if you dont want to see the current month objects")
            } else {
                const selectedYear = Number(new Date(selectedDate).toISOString().slice(0, 4))
                const selectedMonth = Number(new Date(selectedDate).toISOString().slice(5, 7))
                fetchS3ObjectsForMonth(selectedYear, selectedMonth)
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

            <h1 className="text-2xl font-bold mb-4">User Emails</h1>
            {s3Objects && Object.keys(s3Objects).length === 0 ? (
                <p>No User Emails configured</p>
            ) : (
                <ul className="list-disc list-inside">
                    {s3Objects && Object.values(s3Objects).reduce((arr, next) => arr.concat(next)).map((object) => (
                        <div key={object} className="flex justify-between">
                            <div className="w-9/10"><li>{object}</li></div>
                            <div className="w-1/10"><button
                                onClick={async () => { console.log('IBASE'); await downloadObject(object) }}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >Download</button></div>
                        </div>
                    ))}
                </ul>
            )
            }
        </div >
    );
};

export default UserEmails;
