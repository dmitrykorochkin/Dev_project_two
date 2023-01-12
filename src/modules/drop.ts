export const drop = (): void => {

    const fileInputs: NodeListOf<Element> = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefault, false);
        });
    })
    function preventDefault(e: Event) {
        e.preventDefault();
        e.stopPropagation(); 
    }

    const highlight = (item: any): void => {
        item.closest('.file_upload').style.border = '2px solid pink';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .1)';
    }
    const unhighlight = (item: any): void => {
        item.closest('.file_upload').style.border = 'none';
        if(item.closest('.calc_form')) {
            item.closest('.file_upload').style.backgroundColor = "fff555"
        } else {
            item.closest('.file_upload').style.backgroundColor = '#ededed)';
        }  
    }
    ['dragenter', 'dragover'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, ()=> highlight(input), false);
        });
    });
    ['dragleave', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, ()=> unhighlight(input), false);
        });
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e: Event): void => {
            input.files = e.dataTransfer.files;
            const file = (input.files as FileList)[0];
            const fileName:string = file.name.split('.')[0];
            const dots: string = fileName.length > 6 ? '...' : '.';
            const fileExt = file.name.split('.')[1];
            const name: string = `${fileName.toString().substring(0, 6)}${dots}${fileExt}`;
            (input.previousElementSibling as HTMLElement).textContent = name;
        })
    })
}