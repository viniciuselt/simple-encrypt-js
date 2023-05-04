function criptografar() {
    var chave = document.getElementById("frase").value;
    var encrypt = "";
  
    for (var i = 0; i < chave.length; i++) {
      var letter = chave[i];  
    if (letter == 'A' || letter == 'a') {
        encrypt += '4';
    } else if (letter == 'B' || letter == 'b') {
        encrypt += '8';
    } else if (letter == 'C' || letter == 'c') {
        encrypt += 'ç';
    } else if (letter == 'D' || letter == 'd') {
        encrypt += '0';
    } else if (letter == 'E' || letter == 'e') {
        encrypt += '3';
    } else if (letter == 'F' || letter == 'f') {
        encrypt += '*';
    } else if (letter == 'G' || letter == 'g') {
        encrypt += '¨';
    } else if (letter == 'H' || letter == 'h') {
        encrypt += '&';
    } else if (letter == 'I' || letter == 'i') {
        encrypt += '5';
    } else if (letter == 'J' || letter == 'j') {
        encrypt += '~';
    } else if (letter == 'K' || letter == 'k') {
        encrypt += '|';
    } else if (letter == 'L' || letter == 'l') {
        encrypt += '-';
    } else if (letter == 'M' || letter == 'm') {
        encrypt += '%';
    } else if (letter == 'N' || letter == 'n') {
        encrypt += '@';
    } else if (letter == 'O' || letter == 'o') {
        encrypt += ':';
    } else if (letter == 'P' || letter == 'p') {
        encrypt += '#';
    } else if (letter == 'Q' || letter == 'q') {
        encrypt += '+';
    } else if (letter == 'R' || letter == 'r') {
        encrypt += '!';
    } else if (letter == 'S' || letter == 's') {
        encrypt += '>';
    } else if (letter == 'T' || letter == 't') {
        encrypt += '^';
    } else if (letter == 'U' || letter == 'u') {
        encrypt += '<';
    } else if (letter == 'V' || letter == 'v') {
        encrypt += ';';
    } else {
        encrypt += letter;
    }
    }
    
    document.getElementById("resultado").innerHTML = "A criptografia gerada para sua frase foi: " + encrypt;
    }