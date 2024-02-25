


let imagemNova;
let textoNovo;
let layoutNovo;
var caminho = [];
var novasOpcoes = [];


function trocas(){
    trocarTexto(localStorage.getItem("textoGuardado"), localStorage.getItem("layoutGuardado"));
    trocarImagem(localStorage.getItem("imagemGuardada"));
    console.log(localStorage.getItem("opcao1Guardada"));
    //console.log("Valor do botão 1 é " + document.getElementById(botao1).value);

    console.log("Onload");

    caminho.push(localStorage.getItem("caminhoGuardado"));
    console.log(localStorage.getItem("caminhoGuardado"));
    console.log(caminho);

    if (caminho>=1) {

        console.log("aumentou o contador");
    }
    trocarOpcoes(localStorage.getItem("opcao1Guardada"),localStorage.getItem("opcao2Guardada"));

}

    

function opcao(opcao) {
    console.log("opção");
    caminho.push({opcao});
    //caminho.push(opcao);
    //console.log(contador);


   switch (opcao){
        case "1": 
            console.log("caso 1");
            textoNovo = "Finalmente eles haviam chegado. Os dias na estrada exigiram muito de todos eles e os riscos nem sempre estiveram em pé de igualdade com seus frutos. A vista da grande capital, contudo, equilibrou a balança: a beleza das montanhas ao fundo da cidade refletidas no rio que a circundava criava a ilusão de montanhas aquáticas.<br><br> Suas roupas surradas e sujas já haviam visto de tudo, menos uma cidade que parecia maior do que todos os seus sonhos. Lhes fora prometido que alí encontrariam lojas, comerciantes, mentirosos, empregadores e promessas de riquezas incomensuráveis.<br><br> Sua chegada confirmava toda especulação: todos pelo caminho até a capital falavam sobre a recompensa que a guarda da cidade oferecia por um grupo de mercenários que saqueou o acampamento de alguns guardas durante um treinamento.<br><br>A honra da guarda não pode permanecer manchada.<br><br> 1 - Entrar na cidade, a prioridade é buscar mais do que a recompensa por meros ladrões.<br><br> 2 - Buscar pelos assaltantes, uma boa recompensa sempre pode ajudar.";
            imagemNova = "Imagens/abertura.jpg";
            layoutNovo="direita";
            novasOpcoes=[2,3];
            //caminho=2;
            break;
        case "2":
            console.log("caso 2");
            textoNovo = "A entrada na cidade é silenciosa, na verdade não é bem isso: inicialmente todo o barulho da cidade é ofuscado pela grandiosidade de suas construções, suas diversa ruas e vielas. Em seguida vem a onda do barulho a cidade pulsante, todos falam e gritam ao mesmo tempo. É quase impossível ouvir os próprios pensamentos. Uma leve vertigem recai sobre os recém-chegados.<br><br> O nariz de Dana, a ladra do grupo, consegue discernir, entre outros odores, o cheiro de carne de porco assada. Seus ouvidos captam a melodia feliz de uma canção famosa e finalmente seus olhos confirmam o que já esperava: a placa de uma taverna, \"A canção do Bardo Gago\". Ela aponta o achado para o grupo, mas Bramor, o guerreiro sugere uma placa de avisos numa praça a alguns metros.<br><br>1 – Ir para a taverna, repouso de todo bom aventureiro<br><br>2 – Ir até a praça, vocês estão aqui a negócios.";
            imagemNova = "Imagens/cidadeInterior.jpg";
            layoutNovo="esquerda";
            novasOpcoes=[4,5];
            //console.log(h1t2i);
            console.log("opção 2");
            //layout("direita");
        
            break;
        case "3": 
            console.log("caso 3");
            textoNovo = "";
            imagemNova = "Imagens/cenario.jpg";
            layoutNovo = "cima";
            novasOpcoes = [6,7];
            break;
        case "4":
            console.log("caso 4");
            textoNovo = "Ao abrirem a porta do bar constatam que toda taverna é igual: barulho, aventureiros, espertinhos e comida. Antes que definissem uma mesa para se sentar, avistam Dana pedindo uma cerveja ao taverneiro enquanto sussurra coisas que talvez seja melhor não saber o conteúdo. Ao final ela desliza algumas moedas para o homem. Desconfiados todos do grupo conferem suas sacolas de moedas.<br><br>Em seguida Dana vai até um homem sozinho em uma mesa. Dessa vez é o homem quem mais fala.<br><br>Quando a conversa para, Dana volta até os companheiros que já estão numa mesa comendo.<br><br>\“Aquele homem é um ferreiro. Seu filho é do grupo de mercenários que saqueou os guardas da cidade. Ele assegura que o garoto é uma boa pessoa e que não sabe o que ocorreu. Está oferecendo 80 moedas de ouro para levarmos seu filho de um esconderijo até uma aldeia vizinha. O quê vocês decidem?\”<br><br>Todos se entreolham tentando entender como ela consegue fazer isso.<br><br>1 - Aceitar a oferta.<br><br>2 - Entregar o pai do jovem à guarda.";
            imagemNova = "Imagens/taverna.jpg";
            layoutNovo="baixo";
            novasOpcoes=[8,9];
            break;
        case "5":
            console.log("caso 5");
            break;
        case "8":
            console.log("caso 8");
            textoNovo = "O ferreiro, de nome Shatir, apresenta uma fala mais formal do que costumeiramente se esperaria de um ferreiro. Ele realmente acredita na inocência de seu filho e diz não saber o que realmente aconteceu.<br><br> O anão Dremar, clérigo do grupo, acena com a cabeça para todos atestando que as palavras do homem são sinceras.<br><br>Shatir abre um mapa sobre a mesa e aponta a localização do filho dentro da floresta na entrada da cidade.<br><br>Dana pergunta como ele sabe a localização do filho.<br><br>\"Não houve qualquer sinalização de que ele esteja lá, mas o coração de um pai sempre repousa na esperança. Nós íamos muito a esse local na infância dele. Ele tem que estar lá.\"<br><br>1 - Seguir até o ponto no mapa.<br><br>2 - Deixar esse pai com sua \"esperança\" e ir até a praça com os anúncios.";
            imagemNova = "Imagens/mapa.png";
            layoutNovo = "cima";
            novasOpcoes = [12,13];
            break;
        case "7":
            console.log("caso 5");
            break;
        case "9":
            console.log("caso 8");
            textoNovo = "sssCachorro, cachorro, cachorro Cachorro, cachorro, cachorro Cachorro, cachorro, cachorro Cachorro, cachorro, cachorro Cachorro, cachorro, cachorro Cachorro, cachorro, cachorro Cachorro, cachorro, cachorro Cachorro, cachorro, cachorro Cachorro, cachorro, cachorro Cachorro, cachorro, cachorro Cachorro, cachorro, cachorro Cachorro, cachorro, cachorro Cachorro, cachorro, cachorro Cachorro, cachorro, cachorro zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra zebra tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão tubarão coiote coiote coiote coiote coiote coiote coiote coiote coiote coiote coiote coiote coiote coiote coiote coiote coiote coiote coiote coiote coiote coiote coiote coiote coiote coiote papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio papagaio  vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca vaca ";
            imagemNova = "Imagens/cenario.jpg";
            layoutNovo="cima";
            novasOpcoes=[16,17];
            break;
        case "15":
            console.log("caso 5");
            break;
        case "16":
            console.log("caso 16");
            textoNovo = "O ferreiro, de nome Shatir, apresenta uma fala mais formal do que costumeiramente se esperaria de um ferreiro. Ele realmente acredita na inocência de seu filho e diz não saber o que realmente aconteceu.<br><br> O anão Dremar, clérigo do grupo, acena com a cabeça para todos atestando que as palavras do homem são sinceras.<br><br>Shatir abre um mapa sobre a mesa e aponta a localização do filho dentro da floresta na entrada da cidade.<br><br>Dana pergunta como ele sabe a localização do filho.<br><br>\”Não houve qualquer sinalização de que ele esteja lá, mas o coração de um pai sempre repousa na esperança. Nós íamos muito a esse local na infância dele. Ele tem que estar lá.\”<br><br>1 - Seguir até o ponto no mapa.<br><br>2 - Deixar esse pai com sua \”esperança\” e ir até a praça com os anúncios.";
            imagemNova = "Imagens/mapa.png";
            layoutNovo="esquerda";
            novasOpcoes=[10,11];
            break;
  

    }

    //localStorage.setItem("imagemNovaGuardada",imagemNova);

    localStorage.setItem("textoGuardado",textoNovo);
    localStorage.setItem("imagemGuardada",imagemNova);
    localStorage.setItem("caminhoGuardado",caminho);
    localStorage.setItem("opcao1Guardada",novasOpcoes[0]);
    localStorage.setItem("opcao2Guardada",novasOpcoes[1]);
    localStorage.setItem("layoutGuardado",layoutNovo);

    trocarLayout(layoutNovo);
}


function trocarLayout(localImagem){

    //console.log("trocar layout");
    switch (localImagem){
        case "direita":
            window.location = "direita.html";
            break;
        case "esquerda":
            window.location = "esquerda.html"
            break;
        case "cima":
            window.location ="cima.html";
            break;
        case "baixo":
            window.location = "baixo.html";
            break;
    }

}

function trocarTexto(textoNovo,layoutNovo){
    //console.log("trocar texto");

    let limiteInferior;
    let limiteSuperior;

    //let textoNovo = "aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aaa aaa aaa aaa aaa aaa aaa aaa  aaaaaaaaaaaaaaaaaaa aaa aa";
    document.getElementById("texto").innerHTML=textoNovo;

    //console.log("trocar layout");
   

    //console.log(textoNovo.length);
    limiteInferior = 650;
    limiteSuperior = 950;
    if (textoNovo.length < limiteInferior) {
        document.getElementById("texto").style.fontSize = "160%";
        //console.log("menos de 5");
    }

    if (textoNovo.length >= limiteInferior && textoNovo.length <= limiteSuperior){
        document.getElementById("texto").style.fontSize = "140%";
    }

    if (textoNovo.length >limiteSuperior){
        document.getElementById("texto").style.fontSize = "120%";
    }


}

function trocarImagem(imagemNova){
    //console.log(imagemNova);
    document.getElementById("imagem").src = imagemNova;
}

function trocarOpcoes(opcao1, opcao2){
    console.log("trocar opções");
    document.getElementById("botao1").setAttribute("value",opcao1);
    //console.log(getElementById("botao1").value);
    document.getElementById("botao2").value = opcao2;
    
//    cocument.getElementById("botao1").setItem.value = opcao1;

    //console.log(document.getElementById("botao1").value);
}
//trocarTexto("Começando");
