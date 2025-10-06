
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