export const picture = (imgSelector: string): void => {
    const blocks: NodeListOf<HTMLElement> = document.querySelectorAll(imgSelector);

    const showImg = (block: any): void => {
        const img: HTMLImageElement = block.querySelector('img');
        img.src = img.src.slice(0, -4) + `-1.png`;

        block.querySelectorAll('p:not(.sizes-hit)').forEach((p: HTMLElement) => {
            p.style.display = 'none';
        })
    }
    const hideImg = (block: any): void => {
        const img: HTMLImageElement = block.querySelector('img');
        img.src = img.src.slice(0, -6) + `.png`;

        block.querySelectorAll('p:not(.sizes-hit)').forEach((p: HTMLElement) => {
            p.style.display = 'block';
        })
    };
    blocks.forEach(block => {
        block.addEventListener('mouseover', (): void => {
            showImg(block)
        });
        block.addEventListener('mouseout', (): void => {
            hideImg(block)
        });
    })
}