function makerndstr(len) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < len; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

$(document).ready(function () {
    SyntaxHighlighter.defaults['toolbar'] = true;
    SyntaxHighlighter.all();

    $('#reloadbutton').click(function () {
        var hparser = document.createElement('a');
        hparser.href = window.location.href;
        hparser.search = "jit=" + makerndstr(36);        
        window.location.assign(hparser.toString());
    });

});
