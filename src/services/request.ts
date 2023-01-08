
import { IStyles } from './../modules/showMoreStyles';

    const postData = async (url: string, data: string): Promise<string> => {
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    }

    const getResource = async (url: string): Promise<{styles: IStyles[]}> => {


        const res = await fetch(url);
        
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, ${res.status}`);
        }

        return await res.json();
    }

    export{postData, getResource};