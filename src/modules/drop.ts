export const drop = (): void =>{

    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
        fileInputs.forEach(input => {
            input.addEventListener(eventName, preventDefault, false);
        });
    })
    function preventDefault(e: Event) {
        e.preventDefault();
        e.stopPropagation();
    }

    const highlight = (item) => {
        item.closest('.file_upload').style.border = '5px solid green';
        item.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, .7)';
    }
    const unhighlight = (item): void => {
        item.closest('.file_upload').style.border = 'none';
        item.closest('.file_upload').style.backgroundColor = '#fff)';
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
}