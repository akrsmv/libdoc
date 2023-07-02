import { useEffect, useState } from "react";
import { useUserVisibleAgentsStore } from "../stores/VisibleAgentsStore";

export const UserAgentsBox = () => {
    const userAgentsStore = useUserVisibleAgentsStore()
    const [options, setOptions] = useState<{ label: string | null | undefined, value: string | null | undefined }[]>(userAgentsStore.userObject?.Agents?.map((agt:any) => ({ label: agt!.name, value: agt!.id })) || [])
    const [selectedOption, setSelectedOption] = useState<{ label: string | null | undefined, value: string | null | undefined }>({ label: userAgentsStore.userObject?.Active_agent?.name, value: userAgentsStore.userObject?.Active_agent?.id })

    useEffect(() => {
        console.log('use effect fired')
        useUserVisibleAgentsStore.subscribe(
            (state) => state.userObject, // zustand selector middleware, i.e subscribe only for changes on this property 
            (userObject) => {
                if (Array.isArray(userObject?.Agents)) {
                    setOptions(userObject!.Agents!.map(agt => ({ label: agt!.name, value: agt!.id })))
                } else {
                    setOptions([])
                }
                if (userObject?.Active_agent?.id) {
                    setSelectedOption({ label: userObject?.Active_agent?.name, value: userObject?.Active_agent?.id })
                }
            }
        )
    }, []);

    // useEffect(() => {
    //     useUserVisibleAgentsStore.subscribe(
    //         (state) => state.activeAgent, // zustand selector middleware, i.e subscribe only for changes on this property 
    //         (activeAgent) => setSelectedOption({label: activeAgent?.name, value: activeAgent?.id})
    //     )
    // }, []);

    const handleOptionChange = async (event: any) => {
        const selectedValue = event.target.value;
        const selectedOption = options.find((option) => option.value === selectedValue);
        if (selectedOption?.value !== userAgentsStore.userObject?.active_agent) {
            userAgentsStore.changeActiveAgent(String(selectedOption?.value), String(userAgentsStore.userObject?.sub))
        }
        selectedOption && setSelectedOption(selectedOption);
    };
    if (options.length > 1) {
        return (
            <select
                value={selectedOption ? String(selectedOption.value) : ''}
                onChange={handleOptionChange}
                className="border border-gray-300 px-2 py-1 rounded-md text-white bg-blue-500"
            >
                {/* <option value="">Select an option</option> */}
                {options.map((option) => (
                    <option className={String(selectedOption.value) === option.value ? 'option text-black': ''} key={option.value} value={String(option.value)}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    } else {
        return (
            <></>
        )
    }
}