function ncinput(rec, title, name, placeholder) {

    let line = '<div class="t-input-group t-input-group_in" data-input-lid="' + name + '"> <div class="t-input-title t-descr t-descr_md" data-redactor-toolbar="no" field="" style="">' + title + '</div> <div class="t-input-block"> <input type="text" name="' + name + '" class="t-input js-tilda-rule " value="" placeholder="' + placeholder + '" data-tilda-req="1" style="color:#221e1e; border:2px solid #0058ff; background-color:#f8f7f8; border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px;"> <div class="t-input-error"></div> </div> </div>';

    $(rec + ' .t-form__inputsbox').append(line);
    $('[name="' + name + '"]').val(placeholder);
}

function removeBreaks(code) {
    code = code.replace(/(\r\n|\n|\r)/gm, "<1br />");
    re1 = /<1br \/><1br \/>/gi;
    code = code.replace(re1, " ");
    re2 = /\<1br \/>/gi;
    code = code.replace(re2, " ");
    re3 = /\s +/g;
    code = code.replace(re3, " ");
    re4 = /<2br \/>/gi;
    code = code.replace(re4, "\n\n");
    return code;
}

function input2code(input, iclass, txt1, txt2, val1, repl, repl2) {
    let url = $('[name="' + input + '"]').val();
    if (repl != undefined) {
        url = url.replace(repl, repl2);
    }
    $(iclass).text(txt1 + url + txt2);

    if (url == '') {
        $(iclass).text(val1);
    }
}

function nspan(nolimclass, nolimdefault) {
    nolimclass = `<span class="hljs-id ${nolimclass}">${typeof nolimdefault == "undefined" ? '' : nolimdefault}</span>`;
    return nolimclass;
}

function nspan1(nolimclass) {
    nolimclass = `<span class="hljs-id ${nolimclass}">`;
    return nolimclass;
}

function nspan2() {
    return `</span>`;
}


function inputdropdown(i, iclass, iff, valmain) {
    let url = $('[name="' + i + '"]').val();

    if (url == iff) {
        $(iclass).text(valmain);
    }

}

function ncdropdown(rec, title, name, options) {

    var line = '<div class="t-input-group t-input-group_sb" data-input-lid=""> <div class="t-input-title t-descr t-descr_md" data-redactor-toolbar="no" field="" style="">' + title + '</div> <div class="t-input-block"> <div class="t-select__wrapper "> <select name="' + name + '" class="t-select js-tilda-rule " data-tilda-req="1" style="color:#221e1e; border:2px solid #0058ff; background-color:#f8f7f8; border-radius: 5px; -moz-border-radius: 5px; -webkit-border-radius: 5px;">';

    options = options.split(';');
    for (let i = 0; i < options.length; i++) {
        line += '<option value="' + options[i] + '">' + options[i] + '</option> '
    }
    line += '</select> </div> <div class="t-input-error"></div> </div> </div>'
    $(rec + ' .t-form__inputsbox').append(line);
}

function generatecode(code) {
    code = code.replace(/<style>/gm, '<span class="hljs-tag">&lt;<span class="hljs-title">style</span>&gt;</span>');
    code = code.replace(/<\/style>/gm, '<span class="hljs-tag">&lt;/<span class="hljs-title">style</span>&gt;</span>');

    code = code.replace(/<script>/gm, '<span class="hljs-tag">&lt;<span class="hljs-title">script</span>&gt;</span>');
    code = code.replace(/<\/script>/gm, '<span class="hljs-tag">&lt;/<span class="hljs-title">script</span>&gt;</span>');


    //code = removeBreaks(code);
    code = `<pre><span class="nlcopybtn">Копировать код</span><code class="auto hljs xml">${code}</pre>`;

    $(`.myCode`).html(code);
}