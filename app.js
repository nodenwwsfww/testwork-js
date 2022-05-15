function t_ready(t) {
    "loading" !== document.readyState ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", t) : document.attachEvent("onreadystatechange", function () {
        "loading" !== document.readyState && t()
    })
}

let currentActionName = 'Скруглять';

function generateCodeForSize(percent) {
    let hscode = `
    <script>
        // size
        const _shape = document.querySelector('.tn-atom');
        const size = _shape.clientWidth*(1 + ${percent}/100);
        _shape.style.width = size + 'px';
        _shape.style.height = size + 'px';
    </script>`;

    generatecode(hscode);
}

function generateCodeForBorder() {
    const borderInputsValue = [...document.querySelectorAll('.t-input-block>input')]
        .map((input) => +input.value);
    let hscode = `
    <script>
        // border
        let currentCorner = -1;
        values = [${[...borderInputsValue]}]
        corners = ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'];
        
        
        const shape = document.querySelector('.tn-atom');
        
        shape.addEventListener('click', () => {
            if (currentCorner === corners.length - 1) currentCorner = -1
            currentCorner++;
        
            shape.style.borderRadius = '0px';
        
            const currentCornerStyleName = corners[currentCorner];
            shape.style[currentCornerStyleName]  = values[currentCorner] + 'px';
        });
    </script>`;

    generatecode(hscode);
}

function genOptionsHtml(actionName = 'Скруглять') {
    const inputstoHide = document.querySelectorAll('.t-input-group');
    inputstoHide.forEach((block) => {
        if (block.dataset.inputLid === 'size-percent' || block.dataset.inputLid.includes('border-size')) block.remove();
    });

    if (actionName !== 'Менять размер' && actionName !== 'Скруглять') return;

    if (actionName === 'Менять размер') {
        ncinput('#test', 'Размер увеличения (без %)', 'size-percent', '');

        const sizeInput = document.querySelectorAll('.t-input-block>input')[0];
        if (sizeInput.name !== 'size-percent') return;

        sizeInput.addEventListener('input', ({target}) => {
            const percent = +target.value;
            if (!isNaN((percent))) generateCodeForSize(percent);
        });
    } else if (actionName === 'Скруглять') {
        ncinput('#test', 'Левый верхний угол', 'border-size-TopLeft', '');
        ncinput('#test', 'Правный верхний угол', 'border-size-TopRight', '');
        ncinput('#test', 'Правый нижний угол', 'border-size-BottomRight', '');
        ncinput('#test', 'Левый нижний угол', 'border-size-BottomLeft', '');

        const borderInputBlocks = [...document.querySelectorAll('.t-input-block')].slice(1);
        borderInputBlocks.forEach((block) => {
            block.addEventListener('input', ({target}) => {
                if (!target.name.includes('border-size')) return;
                generateCodeForBorder()
            });
        })
    }
}


t_ready(function () {
    let id = '#test';
    ncdropdown(id, 'По клику:', 'n-action', 'Скруглять;Менять размер');
    genOptionsHtml();

    document.querySelector('form').addEventListener('input', function (e) {
        e.preventDefault();

        const actionName = e.target.value.trim();
        if (actionName !== 'Скруглять' && actionName !== 'Менять размер') return;

        // Если поменялся, то генерим, если нет то ничего не делаем
        if (actionName !== currentActionName) genOptionsHtml(actionName);
        currentActionName = actionName;
    });

});

