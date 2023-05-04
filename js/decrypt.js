function descriptografar() {
    var chave = document.getElementById("frase2").value;
    var decrypt = "";
  
    for (var i = 0; i < chave.length; i++) {
      var letter = chave[i];  
    if (letter == '4') {
        decrypt += 'a';
    } else if (letter == '8') {
        decrypt += 'b';
    } else if (letter == 'ç') {
        decrypt += 'c';
    } else if (letter == '0') {
        decrypt += 'd';
    } else if (letter == '3') {
        decrypt += 'e';
    } else if (letter == '*') {
        decrypt += 'f';
    } else if (letter == '¨') {
        decrypt += 'g';
    } else if (letter == '&') {
        decrypt += 'h';
    } else if (letter == '5') {
        decrypt += 'i';
    } else if (letter == '~') {
        decrypt += 'j';
    } else if (letter == '|') {
        decrypt += 'k';
    } else if (letter == '-') {
        decrypt += 'l';
    } else if (letter == '%') {
        decrypt += 'm';
    } else if (letter == '@') {
        decrypt += 'n';
    } else if (letter == ':') {
        decrypt += 'o';
    } else if (letter == '#') {
        decrypt += 'p';
    } else if (letter == '+') {
        decrypt += 'q';
    } else if (letter == '!') {
        decrypt += 'r';
    } else if (letter == '>') {
        decrypt += 's';
    } else if (letter == '^') {
        decrypt += 't';
    } else if (letter == '<') {
        decrypt += 'u';
    } else if (letter == ';') {
        decrypt += 'v';
    } else {
        decrypt += letter;
    }
    }
    
    document.getElementById("resultado2").innerHTML = "A criptografia gerada para sua frase foi: " + decrypt;
    }