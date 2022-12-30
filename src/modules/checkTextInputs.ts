export const checkTextInputs = (selector: string): void => {
    const txtInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(selector);
        txtInputs.forEach(txtInput => {
            txtInput.addEventListener('keypress', function (e): void {
                const key: string = e.key;
                 if(key.match(/[^а-яё 0-9]/ig)) {
                    e.preventDefault();
                 }
            })
        })
}