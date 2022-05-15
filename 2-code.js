// (файлы 1 и 2 не связаны друг с другом)
const shape = document.querySelector('.tn-atom');
let isClicked = false;

const defaultSize = {
    width: shape.clientWidth,
    height: shape.clientHeight,
};
const changeShapeWidth = width => shape.style.width = `${width}px`;
const changeShapeHeight = height => shape.style.height = `${height}px`;

shape.addEventListener('click', () => {
    if (isClicked) {
        changeShapeWidth(defaultSize.width);
        changeShapeHeight(defaultSize.height);
    } else {
        changeShapeWidth(defaultSize.width * 1.2);
        changeShapeHeight(defaultSize.height * 1.2);
    }
    console.log('on', shape.style.width, shape.style.height)
    isClicked = !isClicked;
});
