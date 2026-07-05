import React, { useEffect, useState } from 'react';
import { useUserVisibleAgentsStore } from '../stores/VisibleAgentsStore';


const UserAgents: React.FC = () => {
    const userAgentsStore = useUserVisibleAgentsStore()
    const [agentName, setAgentName] = useState<string>('');
    const [agentCode, setAgentCode] = useState<string>('');

    const handleNewAgentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgentName(e.target.value);
    };

    const handleNewAgentCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgentCode(e.target.value);
    };

    const handleCreateNew = async () => {
        // Perform any action you want with the two string values
        await userAgentsStore.createPrivateAgentForUser(userAgentsStore.userObject?.sub, agentName, agentCode)

        // Reset the form after processing the values (optional)
        setAgentName('');
        setAgentCode('');
    };

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
                            <div className="w-1/10"><button
                                onClick={async () => { await userAgentsStore.deleteAgent(String(userAgentsStore.userObject?.sub), String(agent?.id), Number(agent?.rev)) }}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >Delete</button></div>
                        </div>
                    ))}
                </ul>
            )
            }
            <div className="p-4">
                <input
                    type="text"
                    placeholder="Enter Agent Name"
                    className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    value={agentName}
                    onChange={handleNewAgentNameChange}
                />
                <input
                    type="text"
                    placeholder="Enter Agent Code"
                    className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    value={agentCode}
                    onChange={handleNewAgentCodeChange}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    onClick={handleCreateNew}
                >
                    Create New
                </button>
            </div>
            {/* <div className="w-1/10"><button
                onClick={async () => { await userAgentsStore.createPrivateAgentForUser(userAgentsStore.userObject?.sub) }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >Create New</button></div> */}
        </div >
    );
};

export default UserAgents;
