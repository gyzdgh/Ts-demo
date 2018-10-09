{
    function createButton(text, container) {
        var button = document.createElement('button');
        button.textContent = text;
        document.body.appendChild(button);
    }
    var container_1 = document.createElement('div');
    container_1.classList.add('calculator');
    document.body.appendChild(container_1);
    var keys = [
        ['Clear', '➗'],
        ['7', '8', '9', '✖️'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '='],
    ];
    keys.forEach(function (textList) {
        var div = document.createElement('div');
        textList.forEach(function (text) {
            createButton(text, div);
        });
        container_1.appendChild(div);
    });
}
