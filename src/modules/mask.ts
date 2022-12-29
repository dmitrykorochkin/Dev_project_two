
export const mask = (selector: string): void => {

    const setCursorPosition = (pos: number, elem: any) => {
        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }

    function createMask (this:HTMLInputElement, e: Event): void  {

        const matrix: string = `+7 (___) ___ __ __`;
        let iterator: number = 0;
        const def: string = matrix.replace(/\D/g, '');
        let value: string = this.value.replace(/\D/g, '');
        
    
        if (def.length >= value.length) {
            value = def
        }
        this.value = matrix.replace(/./g, function (a: string): string {
            return /[_\d]/.test(a) && iterator < value.length ? value.charAt(iterator++) : iterator >= value.length ? '' : a;
        })

        if (e.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            } else {
                setCursorPosition(this.value.length, this);
            }
        }
    }
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', createMask)
        input.addEventListener('focus', createMask)
        input.addEventListener('blur', createMask)
    })

}

