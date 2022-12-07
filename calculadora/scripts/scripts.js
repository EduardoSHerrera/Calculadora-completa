 let display = document.getElementById('display');

 let botoes = Array.from(document.getElementsByClassName("botao"));
 
 botoes.map(botao => {
    botao.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if(display.innerText){
                display.innerText = display.innerText.slice(0,-1);
                }
                break;
                case "=":
                    try{
                    display.innerText = eval(display.innerText);
                    } catch{
                        display.innerText = "Erro!";
                    }
                    break;
                default:
                display.innerText += e.target.innerText;
        }
    });
 });