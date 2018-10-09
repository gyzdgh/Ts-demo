{
    function createButton(text: string, container: HTMLElement) {
        let button: HTMLButtonElement = document.createElement('button');
        button.textContent = text;
        document.body.appendChild(button);
    }

    let container = document.createElement('div')
    container.classList.add('calculator')
    document.body.appendChild(container)

    let keys: Array<Array<string>> = [
        ['Clear','➗'],
        ['7','8','9','✖️'],
        ['4','5','6','-'],
        ['1','2','3','+'],
        ['0','.','='],
    ];


    keys.forEach((textList: Array<string>)=>{
        let div: HTMLElement = document.createElement('div');
        textList.forEach((text: string)=>{
            createButton(text, div);
        })
        container.appendChild(div)
    })
    
}
