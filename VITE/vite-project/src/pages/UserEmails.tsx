import React, { useEffect, useState } from 'react';
import { useUserVisibleAgentsStore } from '../stores/VisibleAgentsStore';
import { useUserEmailRulesStore } from '../stores/UserEmailRulesStore';
// import { useBackendRequestsStore } from '../stores/BackendRequestsStore';


const UserEmails: React.FC = () => {
    // const loadingStore = useBackendRequestsStore()
    const userAgentsStore = useUserVisibleAgentsStore()
    const userEmailRulesStore = useUserEmailRulesStore()
    const [email, setEmail] = useState<string>('');
    const [matchingPattern, setMatchingPattern] = useState<string>('');

    //=====
    const [agentOptions, setAgentOptions] = useState<{ label: string | null | undefined, value: string | null | undefined }[]>(userAgentsStore.userObject?.Agents?.map((agt: any) => ({ label: agt!.name, value: agt!.id })) || [])
    const [agent, setAgent] = useState<{ label: string | null | undefined, value: string | null | undefined }>({ label: userAgentsStore.userObject?.Active_agent?.name, value: userAgentsStore.userObject?.Active_agent?.id })

    useEffect(() => {
        console.log('use effect fired')
        useUserVisibleAgentsStore.subscribe(
            (state) => state.userObject, // zustand selector middleware, i.e subscribe only for changes on this property 
            (userObject) => {
                if (Array.isArray(userObject?.Agents)) {
                    setAgentOptions(userObject!.Agents!.map(agt => ({ label: agt!.name, value: agt!.id })))
                } else {
                    setAgentOptions([])
                }
                if (userObject?.Active_agent?.id) {
                    setAgent({ label: userObject?.Active_agent?.name, value: userObject?.Active_agent?.id })
                }
            }
        )
    }, []);
    const handleAgentChange = async (event: any) => {
        const selectedValue = event.target.value;
        const selectedOption = agentOptions.find((option) => option.value === selectedValue);
        selectedOption && setAgent(selectedOption);
    };
    //=====


    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleMatchingPatternChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMatchingPattern(e.target.value);
    };

    const handleCreateNew = async () => {
        // loadingStore.setLoading(true)
        // Perform any action you want with the two string values
        await userEmailRulesStore.createUserEmailRule(userAgentsStore.userObject?.id, userAgentsStore.userObject?.sub, agent.value, email, matchingPattern)//.then(() => loadingStore.setLoading(false))

        // Reset the form after processing the values (optional)
        setEmail('');
        setMatchingPattern('');
    };

    useEffect(() => {


    }, [userAgentsStore.userObject]);

    return (
        <div className="p-4">


            <h1 className="text-2xl font-bold mb-4">User Agents</h1>
            {!userEmailRulesStore.userEmailRules ||
                !Array.isArray(userEmailRulesStore.userEmailRules) ||
                userEmailRulesStore.userEmailRules.length === 0 ? (
                <p>You have no email rules defined yet 123.</p>
            ) : (
                <ul className="list-disc list-inside">
                    {userEmailRulesStore.userEmailRules.map((rule) => (
                        <div key={rule?.id} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-cols-4 gap-4">
                        <div className="bg-blue-200 p-4">{rule.email}</div>
                        <div className="bg-green-200 p-4">{rule.agent} Kb</div>
                        <div className="bg-green-200 p-4">{rule.match_pattern}</div>
                        <div className="bg-yellow-200 p-4"><button
                                onClick={async () => { await userAgentsStore.deleteAgent(String(userAgentsStore.userObject?.sub), String(rule?.id), Number(rule?.rev)) }}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >Delete</button></div>
                    </div>
                    ))}
                </ul>
            )
            }
            <div className="p-4">
                <select
                    value={agent ? String(agent.value) : ''}
                    onChange={handleAgentChange}
                    className="border border-gray-300 px-2 py-1 rounded-md text-white bg-blue-500"
                >
                    {/* <option value="">Select an option</option> */}
                    {agentOptions.map((option) => (
                        <option className={String(agent.value) === option.value ? 'option text-black' : ''} key={option.value} value={String(option.value)}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder="Enter Email"
                    className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    value={email}
                    onChange={handleEmailChange}
                />
                <input
                    type="text"
                    placeholder="Enter Matching pattern for rule to trigger"
                    className="w-full p-2 border border-gray-300 rounded-md mb-2"
                    value={matchingPattern}
                    onChange={handleMatchingPatternChange}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                    onClick={handleCreateNew}
                >
                    Create New
                </button>
            </div>
        </div >
    );
};

export default UserEmails;
