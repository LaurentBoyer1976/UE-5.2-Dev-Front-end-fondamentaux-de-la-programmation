
/*
récupérer la valeur des chiffres combinés pour créer un index(i-1), centaine, dizaine et unité, à partir de chaque
nombre exemple [1,5,6] => 1 donne index 0, 5 donne index 4, 6 donne index 5 de. passer le nombre en string avec stringify.
Méthode Utilisée	Rôle
String(123)	        Convertit le nombre 123 en la chaîne "123".
Array.from(...)	    Crée un nouveau tableau à partir d'un objet itérable (ici, la chaîne "123").
... , Number	    La fonction de mappage appliquée à chaque caractère de la chaîne, les transformant en nombres (1, 2, 3).
Utiliser cette index pour effectuer l'addition des nombres au cube et stocker la valeur  dans un tableau.
*/



const equality = () => {

    let results = [];

       for (let i = 111; i <= 999; i++) {
        const digits = Array.from(String(i), Number);

        const sumOfCubedNumber = digits.reduce((sum, digit) => sum + Math.pow(digit, 3), 0);

        if (i === sumOfCubedNumber){
            results.push({
                number: i,
                digits: digits,
                sum:
                 sumOfCubedNumber
            })
        }
       }
        console.log("Les nombres dit d'Armstrong sont: ", results);
        return results;
}

equality()

/**
 * Information: revoir logique algo.
 * Note: éviter double boucle IF.
 */

const bankNote = [500, 200, 100, 50, 20, 10, 5];
const coins = [2, 1];

const returnedChange = (amount) =>{
    const result = [];
    let remaining = amount;
    
    bankNote.forEach(element => {
        if (remaining >=  element){
            const count = Math.floor(remaining / element);
            result.push({BankNote: element, quantity : count});
            remaining = remaining % element;
        };
    });     
       coins.forEach(piece => {
        if (remaining >=  piece){
            const count = Math.floor(remaining / piece);
            result.push({coins: piece, quantity : count});
            remaining = remaining % piece;
        };
    });
  console.log(result)
}

const luhnAlgoExercice = (argument) => {

    let isString = "";
    let char = "";
    let digit = 0;
    let arrayOfDigits =[];
    let result = [];
    let modulo= 0;
    let factor= 0;
    let arrayOfSumIsString = [];
   
console.log(modulo)
 if (typeof argument !== "string") {    
   isString = String(argument);
 } else {
    isString = argument
 }
for(let i = 0; i < isString.length; i++){
    let x = i ;
    x = i + 1 ;
    char = isString.substring(i, x);
    digit= parseInt(char, 10);
    console.log(digit)
    arrayOfDigits.push({ itemNbre: i, number:digit});    
}

const reversedArrayOfDigits = arrayOfDigits.toReversed();

reversedArrayOfDigits.forEach(({itemNbre, number}) => { // NOTE: spécifier que reversedArrayOfDigits possède les Propriétés index et number

        console.log("itemNbre:", itemNbre);

    modulo = itemNbre % 2; //TODO : corriger le modulo en fonction de la structure de l'objet. un tableau commence à 0 donc l'index de la position paire est un index impaire.

        console.log("valeur modulo: ",modulo)
    
        console.log("number:", number);

        console.log("factor avant if: ",factor)

        if(modulo === 1){
            factor = number * 2;
        console.log("factor dans if: ", factor);
            if(factor >= 10 && factor <= 18){
                factor =  factor - 9;
                result.push(factor);
            } else {               
                result.push(factor);
            }
            factor = 0;
        }  else {
            result.push(number)
        }           
    });
// Note: pour effectuer calcul final utiliser reduce()
 const sumOfResultNumbers = result.reduce(
    (a,b) => a + b, 0
 );
 
  const finalResult =(a)  => {
   
    let checksum = a;
    console.log(checksum)
    return checksum % 10 === 0;
    
  }
  
  const isValid = finalResult(sumOfResultNumbers)

 console.log(typeof isString, isString.length, result, "resultat à /10: ",sumOfResultNumbers,  isValid);

};
//Convertir les nombres > 12 chiffres en bigint.
//Note : Notation nombre entier > 12 chiffres exemple: 5355841717671462n
luhnAlgoExercice(9724874568221086n);