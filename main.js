var canvas = new fabric.Canvas("meucanvas");
var jogador_x = 10;
var jogador_y = 10;
var altura_bloco = 30;
var largura_bloco = 30;
var jogador_objeto = " ";
var bloco_objeto = " ";

function update_Player() {
    fabric.Image.fromURL("player.png", function(Img) {
        jogador_objeto = Img;
        jogador_objeto.scaleToWidth(150); 
        jogador_objeto.scaleToHeight(140);
        jogador_objeto.set({
            top : jogador_x,
            left : jogador_y 
        });
        canvas.add(jogador_objeto);
    });
}

function update_block(imagem) {
    fabric.Image.fromURL(imagem, function(Img) {
        bloco_objeto = Img;
        bloco_objeto.scaleToWidth(largura_bloco); 
        bloco_objeto.scaleToHeight(altura_bloco);
        bloco_objeto.set({
            top : jogador_x,
            left : jogador_y
        });
        canvas.add(jogador_objeto);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    var keypressed = e.keyCode;
    console.log(keypressed);

    if (e.shiftKey==true && keypressed =="80") {
        console.log("p e shift sendo pressionado")
        altura_bloco = altura_bloco + 10;
        largura_bloco = largura_bloco + 10;
        document.getElementById("Altura").innerHTML = altura_bloco;
        document.getElementById("Largura").innerHTML = largura_bloco;
    }

    if (e.shiftKey==true && keypressed =="77") {
        console.log("m e shift sendo pressionado")
        altura_bloco = altura_bloco - 10;
        largura_bloco = largura_bloco - 10;
        document.getElementById("Altura").innerHTML = altura_bloco;
        document.getElementById("Largura").innerHTML = largura_bloco;
    }
    
    if (keypressed=="38") {
        up();
        console.log("Para cima");
    }
    if (keypressed=="40") {
        down();
        console.log("Para baixo");
    }
    if (keypressed=="37") {
        left();
        console.log("Para esquerda");
    }
    if (keypressed=="39") {
        right();
        console.log("Para direita");
    }

    if (keypressed=="87") {
        update_block("wall.jpg");
        console.log("w");
    }
    if (keypressed=="71") {
        update_block("ground.png");
        console.log("g");
    }
    if (keypressed=="76") {
        update_block("light_green.png");
        console.log("l");
    }
    if (keypressed=="84") {
        update_block("trunk.jpg");
        console.log("t");
    }

    if (keypressed=="82") {
        update_block("roof.jpg");
        console.log("r");
    }
    if (keypressed=="89") {
        update_block("yellow_wall.png");
        console.log("y");
    }
    if (keypressed=="68") {
        update_block("dark_greend.png");
        console.log("d");
    }
    if (keypressed=="85") {
        update_block("unique.png");
        console.log("u");
    }
    if (keypressed=="67") {
        update_block("cloud.jpg");
        console.log("c");
    }
}

function up() {
    if (jogador_y >=0) {
        jogador_y = jogador_y - altura_bloco;
        console.log("Altura do bloco = " + altura_bloco);
        console.log("A tecla para cima está sendo pressionada, x = " + jogador_x + ", y = " + jogador_y);
        canvas.remove(jogador_objeto);
        update_Player();
    }
}
function down() {
    if (jogador_y <= 500) {
        jogador_y = jogador_y + altura_bloco;
        console.log("Altura do bloco = " + altura_bloco);
        console.log("A tecla para baixo está sendo pressionada, x = " + jogador_x + ", y = " + jogador_y);
        canvas.remove(jogador_objeto);
        update_Player();
    }
}

function left() {
    if (jogador_x >= 0) {
        jogador_x = jogador_x - altura_bloco;
        console.log("Altura do bloco = " + altura_bloco);
        console.log("A tecla para esquerda está sendo pressionada, x = " + jogador_x + ", y = " + jogador_y);
        canvas.remove(jogador_objeto);
        update_Player();
    }
}

function right() {
    if (jogador_x <= 850) {
        jogador_x = jogador_x + altura_bloco;
        console.log("Altura do bloco = " + altura_bloco);
        console.log("A tecla para direita está sendo pressionada, x = " + jogador_x + ", y = " + jogador_y);
        canvas.remove(jogador_objeto);
        update_Player();  
    }
}
