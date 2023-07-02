export const delay = async (ms: number, result?: any): Promise<{ [key: string]: any }> => {
    return new Promise(resolve => setTimeout(() => resolve(result), ms));
}