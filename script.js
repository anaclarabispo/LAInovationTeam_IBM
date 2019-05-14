/*  LA Inovation Team - IBM        */
/*  Data: 13/05/2019               */
/*  Name: Ana Clara Emanulle Bispo */

var funcName = ["John Doe", "Peter Parker", "Mary Jane WatsonParker", "James Doe", "John Elvis Doe", "Jane Doe", "Penny Parker"];
var nomeMail = [];
var email = [];
var aux = [];
var id = 0;
var namesMap = new Map();

/* Compõe o nome inicial do e-mail (Seleção de Letras e Nomes) */
const priLetra = funcName.map(([v]) => v);

const segName = funcName.map(name => {
  return name.split(' ').slice(-2).join(' ');
});

const segLetra = segName.map(([v]) => v);

const ultiName = funcName.map(name => {
  return name.split(' ').slice(-1);
});

if (((funcName[2] == "Mary Jane WatsonParker") || (funcName[4] == "John Elvis Doe"))) {
  var mails1 = {
    "priLetra": priLetra, "segLetra": segLetra, "ultiName": ultiName
  };
} else {
  var mails2 = {
    "priLetra": priLetra, "ultiName": ultiName
  };
}

/* Gera nome inicial do e-mail antes do @ */
function montaMail(mails1, mails2) {
  for (const j in mails1.ultiName) {
    if (((funcName[j] == "Mary Jane WatsonParker") || (funcName[j] == "John Elvis Doe"))) {
      aux.push(mails1.ultiName[j] + "." + mails1.priLetra[j] + "." + mails1.segLetra[j]);
    } else {
      aux.push(mails1.ultiName[j] + "." + mails1.priLetra[j]);
    }
  }
  return aux
}
nomeMail = montaMail(mails1);

/* Consolida o Nome + Dominio e verifica duplicidade de e-mails */
function consolidaMail(nomeMail) {

  for (var i = 0; i < nomeMail.length; i++) {
    checkDuplicity(nomeMail[i]);
  }
  return email;
}

/* Valida duplicidade de e-mails*/
function checkDuplicity(nome) {
  var indice = namesMap.get(nome + "@company.com");
  if (indice == null) {
    namesMap.set(nome + "@company.com", 0);
    email.push(nome + "@company.com")
  }
  if (indice >= 0) {
    indice++;
    if (namesMap.get(nome + indice + "@company.com") > 0) {
      indice++;
    }
    namesMap.set(nome + indice + "@company.com", indice);
    email.push(nome + indice + "@company.com")
  }
}

/* Impressão - Output */
console.log('                Lista de E-mail Criados - Dominio Company                ');
for (var i = 0; i < funcName.length; i++) {
  if (i == funcName.length -1) {
    console.log(funcName[i] + " < " + consolidaMail(nomeMail)[i] + " >. ");
  } else {
    console.log(funcName[i] + " < " + consolidaMail(nomeMail)[i] + " >, ");
  }
}