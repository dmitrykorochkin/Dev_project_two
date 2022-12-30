export const checkTextInputs = (selector: string): void => {
    const txtInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(selector);
        txtInputs.forEach(txtInput => {
            txtInput.addEventListener('keypress', function (e: Event): void {
                 if((e.target as Element).key.match(/[^а-яё 0-8]/ig)) {
                    e.preventDefault();
                 }
            })
        })
}