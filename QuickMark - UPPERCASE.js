javascript: (function() {
    titleCaseText();

    function titleCaseText() {
        var selection = "";
        var range;
        if (window.getSelection) {
            selection = window.getSelection();
            if (selection.rangeCount) {
                range = selection.getRangeAt(0);
                selection = selection.toString();
            }
        }
        if (selection != '') {
            range.deleteContents();
            range.insertNode(document.createTextNode(selection.toUpperCase()));
        } else {
            alert('You need to select something first!');
        }
    }
})();