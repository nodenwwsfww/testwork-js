//border radius (файлы 1 и 2 не связаны друг с другом)
const shape = document.querySelector('.tn-atom');

let currentCorner = -1;
corners = ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'];

shape.addEventListener('click', () => {
    if (currentCorner === corners.length - 1) currentCorner = -1
    currentCorner++;

    shape.style.borderRadius = '0px';

    const currentCornerStyleName = corners[currentCorner];
    shape.style[currentCornerStyleName] = `15px`;
});

