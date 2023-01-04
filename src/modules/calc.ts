export const calc =

    ({
        size,
        material,
        options,
        promocode,
        result
    }:

    {
        size: string,
        material: string,
        options: string,
        promocode: string,
        result: string
    }

    ): void => {

        const sizeBlock = <HTMLInputElement>document.querySelector(size);
        const materialBlock = <HTMLInputElement>document.querySelector(material);
        const optionsBlock = <HTMLInputElement>document.querySelector(options);
        const promocodeBlock = <HTMLInputElement>document.querySelector(promocode);
        const resultBlock: any = document.querySelector(result);

        let sum: number = 0;

        const calcFunc = (): void => {
            sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

            if (sizeBlock.value == '' || materialBlock.value == '') {
                resultBlock.textContent = "Пожалуйста, выберете размер и материал картины";
            } else if (promocodeBlock.value === "IWANTPOPART") {
                resultBlock.textContent = Math.round(sum * 0.7)
            } else {
                resultBlock.textContent = sum;
            }

        };

        sizeBlock.addEventListener('change', calcFunc);
        materialBlock.addEventListener('change', calcFunc);
        optionsBlock.addEventListener('change', calcFunc);
        promocodeBlock.addEventListener('input', calcFunc);

    }