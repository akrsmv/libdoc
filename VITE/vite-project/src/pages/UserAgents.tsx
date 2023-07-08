import React, { useEffect } from 'react';
import { useUserVisibleAgentsStore } from '../stores/VisibleAgentsStore';


const UserAgents: React.FC = () => {
    const userAgentsStore = useUserVisibleAgentsStore()

    useEffect(() => {


    }, [userAgentsStore.userObject]);

    return (
        <div className="p-4">


            <h1 className="text-2xl font-bold mb-4">User Agents</h1>
            {!userAgentsStore.userObject ||
                !Array.isArray(userAgentsStore.userObject.Agents) ||
                userAgentsStore.userObject.Agents.length === 0 ? (
                <p>No Agents found for this user.</p>
            ) : (
                <ul className="list-disc list-inside">
                    {userAgentsStore.userObject.Agents.map((agent) => (
                        <div key={agent?.id} className="flex justify-between">
                            <div className="w-9/10"><li>{agent?.name}</li></div>
                            {/* <div className="w-1/10"><button
                                onClick={async () => { await downloadObject(object) }}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >Download</button></div> */}
                        </div>
                    ))}
                </ul>
            )
            }
            <div className="w-1/10"><button
                onClick={async () => { await userAgentsStore.createPrivateAgentForUser(userAgentsStore.userObject?.sub) }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >Create New</button></div>
        </div >
    );
};

export default UserAgents;
