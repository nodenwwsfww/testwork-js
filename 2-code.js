// (файлы 1 и 2 не связаны друг с другом)
const shape = document.querySelector('.tn-atom');
let isClicked = false;

const defaultSize = shape.clientWidth;

shape.addEventListener('click', () => {

    const size = isClicked ? defaultSize : defaultSize * 1.2;

    shape.style.height = `${size}px`;
    shape.style.width = `${size}px`;

    shape.style.minWidth = shape.style.width;

    isClicked = !isClicked;
});
