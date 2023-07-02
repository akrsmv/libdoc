import React, { useState, ChangeEvent } from 'react';
import { Storage } from 'aws-amplify';
import { useUserVisibleAgentsStore } from '../stores/VisibleAgentsStore';
import Accordion from './Accordion';

const UploadFile: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [isNotForCurrentDate, setIsNotForCurrentDate] = useState<boolean>(false);
  const [uploading, setUploading] = useState(false);
  const userAgentsStore = useUserVisibleAgentsStore()

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSelectedDateChange = (event: any) => {
    setSelectedDate(event.target.value);
    console.log('changed selected date to: ', selectedDate)
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }

    try {
      setUploading(true);
      let datePortionOfS3Key = new Date().toISOString().slice(0, 10)
      if (isNotForCurrentDate && !selectedDate) {
        console.error("you must select date if you are not uploading for the current date!")
      }
      if (isNotForCurrentDate) {
        datePortionOfS3Key = new Date(selectedDate).toISOString().slice(0, 10)
        console.log('shoud use this datePortion: ', datePortionOfS3Key)
      }
      const result = await Storage.put(
        `${userAgentsStore?.userObject?.sub}/${datePortionOfS3Key}/${userAgentsStore?.userObject?.active_agent}/${selectedFile.name}`,
        selectedFile, {
        metadata: {
          userId: userAgentsStore.userObject?.sub,
          active_agent: userAgentsStore?.userObject?.active_agent
        }
      });
      console.log('File uploaded successfully:', result);
      setSelectedFile(null);
    } catch (error: any) {
      console.error('Error uploading file:', error);
      if (error.response && error.response.status === 403) {
        // Access Denied or Forbidden error occurred
        const responseError = error.response.data;
        console.log('Response error:', responseError);
      }
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4">
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-500"
          checked={isNotForCurrentDate}
          onChange={() => setIsNotForCurrentDate(!isNotForCurrentDate)}
        />
      </label>
      {isNotForCurrentDate && (<div className="w-64">
          <div className="w-64">
            <input
              type="date"
              className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedDate}
              onChange={handleSelectedDateChange}
            />
          </div>
        </div>)}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-2"
      />
      <button
        onClick={handleUpload}
        disabled={!selectedFile || uploading}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {uploading ? 'Uploading...' : 'Upload File'}
      </button>
    </div>
  );
};

export default UploadFile;
