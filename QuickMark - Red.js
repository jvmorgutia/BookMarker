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
            var newnode = document.createElement("mark");
            newnode.appendChild(document.createTextNode(selection));
            newnode.style.backgroundColor = "red";
            newnode.style.color = "white";
            range.insertNode(newnode);
        } else {
            alert('You need to select something first!');
        }
    }
})();