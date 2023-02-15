const myImage = document.querySelector("img");
//querySelector = seleciona o elemento do documento e guarda em uma variável

myImage.onclick = () => {
    //quando cliclar na imagem firefox-icon.png, vai trocar a imagem por outra de nome firefox2-icon.png
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "imagens/firefox-icon.png"){
        myImage.setAttribute("src", "imagens/firefox2-icon.png");
    }
        else{
            myImage.setAttribute("src","imagens/firefox-icon.png");

        }

    
    };

    let myButton = document.querySelector("button");
    let myHeading = document.querySelector("h1");
    function setUserName(){
        const myName = prompt("Por favor, digite o seu nome");
        if(!myName){
            //se myName não tiver valor, execute setUserName desde o inicio
            setUserName();
        }else{

        
        localStorage.setItem("name",myName);
        myHeading.textContent = `Mozilla é legal,${myName}`;
        };
    };

//prompt()- abre uma caixa de dialogo semelhante a alert(), em seguida o código chama uma API localStorage que nos permite armazenar no navegador os dados inseridos e recuperá-los posteriormente.
//usa-se a função setItem() do localStorage para criar e armazenar dados chamado 'name', configurando seu valor pra uma variável chamada myName, por fim definimos o textContent cabeçalho como uma string, mais o nome do usuário recém adicionado


    if(!localStorage.getItem("name")){
        setUserName();
    } else{
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Mozilla é legal,${storedName};`
    };
    //utiliza o not(!) para verificar se os dados nome existem, caso contrário, a função setUserName() é executada para criá-lo. Se existir, recuperamos o nome armazenado usando getItem() e definimos o textContent do cabeçalho como uma string, mais o nome do usuário, conforme fez dentro deo setUserName().

    myButton.onclick = () => {
        setUserName();
    };

    //quando o botão é clicado setUserName é ativado

