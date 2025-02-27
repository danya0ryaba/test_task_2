import { DateMatches } from "../types/type";

export async function fetchMathes(url: string): Promise<DateMatches> {
    const apiUrl = 'https://app.ftoyd.com/fronttemp-service/';
    try {
        const response = await fetch(apiUrl + url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}