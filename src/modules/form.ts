// import checkNumberInputs from './checkNumberInputs'


export const form = (): void => {
    const forms: NodeListOf<HTMLFormElement> = document.querySelectorAll('form');
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
    const uploads: any = document.querySelectorAll('[name="upload"]');


    // checkNumberInputs('input[name="user_phone"]')

    type MessageType = {
        loading: string,
        success: string,
        failure: string,
        spinner: string;
        ok: string;
        fail: string;
    }
    const message: MessageType = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'src/img/ok.png',
        fail: 'src/img/fail.png'
    }

    type pathType = {
        designer: string,
        question: string
    }
    const path: pathType = {
        designer: 'src/server.php',
        question: 'src/question.php'
    }

    const postData = async (url: string, data: string): Promise<string> => {
        const res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    }

    const clearInputs = (): void => {
        inputs.forEach(input => {
            input.value = '';
        })
        uploads.forEach(upload => {
            upload.previousElementSibling.textContent = 'Файл не выбран';
        })
    }
    uploads.forEach(upload => {
        upload.addEventListener('input', (): void => {
            
            let dots: string;
            const arr: any = upload.files[0].name.split('.')
            arr[0].length > 5 ? dots = '...' : dots = '.';
            const name: any = arr.substring(0, 6) + dots + arr[1];
            upload.previousElementSibling.textContent = name
        })
    })

    forms.forEach(form => {
        form.addEventListener('submit', (e: Event) => {
            e.preventDefault();
            const statusMessage: Element = document.createElement('div');
            statusMessage.classList.add('status');
            form.parentNode?.appendChild(statusMessage);

            form.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                form.style.display = 'none';
            }, 400);

            const statusImg: HTMLImageElement = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusMessage.appendChild(statusImg);

            const textMessage: HTMLDivElement = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData: any = new FormData(form);
            let api: any;
            form.closest('.popup-design') || form.classList.contains('calc_form') ? api = path.designer : api = path.question

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok)
                    textMessage.textContent = message.success;
                })
                .catch((): any => {
                    statusImg.setAttribute('src', message.fail)
                    textMessage.textContent = message.failure;
                })
                .finally((): void => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                        form.style.display = 'block';
                        form.classList.remove('fadeOutUp');
                        form.classList.add('fadeInUp');
                    }, 5000);
                })
        })
    })
}
export default form