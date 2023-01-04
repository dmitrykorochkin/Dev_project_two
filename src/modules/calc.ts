export const calc =

    ({ 
        size,
        material,
        options,
        promocode,
        result
    }:

    {
        size: number,
        material: string,
        options: string,
        promocode: string,
        result: string
    }

    ): void => {

        const sizeBlock:any = document.querySelector(size);
        const materialBlock: HTMLElement = document.querySelector(material);
        const optionsBlock: HTMLElement = document.querySelector(options);
        const promocodeBlock: HTMLElement = document.querySelector(promocode);
        const resultBlock: HTMLElement = document.querySelector(result);

        let sum: number = 0;

        const calcFunc = (): void => {
            sum
        }
    }