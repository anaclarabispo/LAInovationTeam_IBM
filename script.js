/*  LA Inovation Team - IBM        */
/*  Data: 13/05/2019               */ 
/*  Name: Ana Clara Emanulle Bispo */

var funcName = ["John Doe", "Peter Parker", "Mary Jane WatsonParker", "James Doe", "John Elvis Doe", "Jane Doe", "Penny Parker"];
var nomeMail = [];
var email = [];
var aux = [];
var id = 0;

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
  var mails1 = {"priLetra": priLetra, "segLetra": segLetra, "ultiName": ultiName};
} else {
  var mails2 = {"priLetra": priLetra, "ultiName": ultiName};
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
    if (nomeMail.indexOf(nomeMail[i]) !== nomeMail.lastIndexOf(nomeMail[i])) {
      id = id + 1; 
      email.push(nomeMail[i] + id + "@company.com");
    } else {
      email.push(nomeMail[i] + "@company.com");
    } 
  }
  return email;
}

/* Impressão - Output */
console.log('                Lista de E-mail Criados - Dominio Company                ');
console.log(funcName[0] + " < " + consolidaMail(nomeMail)[0] + " >, " +
  funcName[1] + " < " + consolidaMail(nomeMail)[1] + " >, " +
  funcName[2] + " < " + consolidaMail(nomeMail)[2] + " >, " +
  funcName[3] + " < " + consolidaMail(nomeMail)[3] + " >, " +
  funcName[4] + " < " + consolidaMail(nomeMail)[4] + " >, " +
  funcName[5] + " < " + consolidaMail(nomeMail)[5] + " >. ");