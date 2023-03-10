export const drop = (): void => {

    const fileInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefault, false);
        });
    })
    function preventDefault(e: Event) {
        e.preventDefault();
        e.stopPropagation(); 
    }

    const highlight = (item: HTMLElement): void => {
        const closest: HTMLElement = item.closest('.file_upload') as HTMLElement;
        closest.style.border = '2px solid pink';
        closest.style.backgroundColor = 'rgba(0,0,0, .1)';
    }
    const unhighlight = (item: HTMLElement): void => {
        const closest = item.closest('.file_upload') as HTMLElement;
        closest.style.border = 'none';
        if(item.closest('.calc_form')) {
            closest.style.backgroundColor = "fff555"
        } else {
            closest.style.backgroundColor = '#ededed)';
        }  
    }
    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, ()=> highlight(input as HTMLElement), false);
        });
    });
    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, ()=> unhighlight(input as HTMLElement), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e: DragEvent): void => {
            input.files = (e.dataTransfer as DataTransfer).files;
            const file = (input.files as FileList)[0];
            const [fileName, fileExt]:string = file.name.split('.')[0];
            const dots: string = fileName.length > 6 ? '...' : '.';
            const name: string = `${fileName.toString().substring(0, 6)}${dots}${fileExt}`;
            (input.previousElementSibling as HTMLElement).textContent = name;
        })
    })
}