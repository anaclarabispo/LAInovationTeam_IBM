/*  LA Inovation Team - IBM        */
/*  Data: 13/05/2019               */ 
/*  Name: Ana Clara Emanulle Bispo */

var funcName = ["John Doe", "Peter Parker", "Mary Jane WatsonParker", "James Doe", "John Elvis Doe", "Jane Doe", "Penny Parker"];
var nomeMail  = [];
var arrayMail = [];
var repetidos = [];
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

var mails = {"priLetra": priLetra, "segLetra": segLetra, "ultiName": ultiName};

/* Gera nome inicial do e-mail antes do @ */
function montaMail(mails) {
    for (const j in mails.ultiName) {
      if (((funcName[j] == "Mary Jane WatsonParker") || (funcName[j] == "John Elvis Doe"))) {
          aux.push(mails.ultiName[j] + "." + mails.priLetra[j] + "." + mails.segLetra[j]);
      } else {
          aux.push(mails.ultiName[j] + "." + mails.priLetra[j]);
      }
    }
    return aux
  }

nomeMail = montaMail(mails);

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
for(var i = 0; i< funcName.length; i++){
  if(i == funcName.length -1 ){
    console.log(funcName[i] + " < " + consolidaMail(nomeMail)[i] + " >. ");    
  } else {
    console.log(funcName[i] + " < " + consolidaMail(nomeMail)[i] + " >, ");
  }
}