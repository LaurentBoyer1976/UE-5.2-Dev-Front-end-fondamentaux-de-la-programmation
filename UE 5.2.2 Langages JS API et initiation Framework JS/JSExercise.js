const stringResult = "Résultat de l\’opération = ";
const Tva20 = 0.2;
const arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const exo = (A, B, C, D) => {

    const addition = (N1, N2) => {
         const somme = N1 + N2;
        console.log(stringResult+ somme);
        return somme;
    }
    addition(A, B);
   
 
    const subtract = A - B;
    console.log(stringResult + subtract);

    const rest = A % B;
    console.log(stringResult + rest);

    const multiplication = (F1 , F2) => {
        const product = F1 * F2;
        return product;
    };

    const square = (N) => {
        const squareResult = N * N;
        console.log(squareResult);
        return squareResult;                     
    };
    square(A);

    const cube = (N) => {
        const cubeResult = N * N * N;
        console.log(cubeResult);
        return cubeResult;
    };
    cube(B);

    const mathSquare = (N, exp2) =>{
        const mathSquareResult = Math.pow(N, exp2)
        console.log(mathSquareResult)
        return mathSquareResult; 
    };
    const mathCube = (N, exp3) =>{
        const mathCubeResult = Math.pow(N, exp3)
        console.log(mathCubeResult)
        return mathCubeResult 
    };

    mathSquare(A, C);
    console.log("carré de 7 avec Math.pow " + Math.pow(A, C));

    mathCube(B,D);
    console.log("cube de 5 avec Math.pow " + Math.pow(B, D));
    

    
    const rectangleSolution = (L, l, n) => {
        const perimeterResult = multiplication (L, n) + multiplication(l , n);
        const surfaceResult =  multiplication (L, l)
        console.log("le rectangle à un périmètre de " + perimeterResult + " et une surface égale à "+ surfaceResult)
    };
    rectangleSolution(A, B, C)

   const circleSolution = (R) => {
        const diameterCircle = addition(R, R);
        const perimeterCircle = diameterCircle * Math.PI;
        const circleSurface = square(R) *Math.PI;
        console.log("Le diamètre du cercle est égale à "+diameterCircle+", le périmètre du cercle est égale à "+perimeterCircle+" et sa surface à "+circleSurface);
    };
    circleSolution(A)

};

const priceExercice = (HT, TVA) =>{
        const tauxTva = TVA + 1;
        const ttcPrice = (HT * tauxTva);
        console.log("Le prix TTC est de "+ ttcPrice)
};
const timeConversion = (D) =>{
    const dayToHours = D * 24;
    const dayToMinutes = dayToHours * 60;
    const dayToSeconds = dayToMinutes * 60; 
    console.log( D+" jours"+" sont égales à "+ dayToHours+ "H" + " ce qui équivaut à "+ dayToMinutes +"mn"+ " et est égales à "+ dayToSeconds+"s.");

};
const secondsConversion = (S) => {
    const secondToDay = Math.trunc(S/86400);
    S = S % 86400;
    const secondToHours = Math.trunc(S/3600);
    S = S % 3600;
    const secondToMinutes = Math.trunc( S / 60)
    const seconds = S % 60; 
    console.log(secondToDay+"D"+ " "+ secondToHours+"H"+ " "+ secondToMinutes+"mn"+ " "+ seconds+"s") 

};

const showQuinte = () => {
    let quinte = "";
    for(let i =0 ; i < 6 ; i++) {
        quinte = quinte + i;
    }
    console.log(quinte);
}

const showPairNumber = (array) => {
    let filteredNumber = [];
    let length = array.length;
    for(let i =0; i < length ; i++){
        let n = array[i];
        let moduloN = n % 2;
        if (moduloN === 0) {
            filteredNumber.push(n);
        }
    }
    console.log(filteredNumber)
}
const multiplicationTable = (N) => {
    let table =[];
    for (let i = 0 ; i < 11 ; i++){
        let result = N * i;
        table.push(result)
    }
    console.log(table)
}
const sommeOfNumbers = (N) => {
    let table = [];
    for (let i =0 ; i < 5; i++){
        let result = N + i;
        
    }

}

exo(7,5,2,3);
priceExercice( 10, Tva20)
timeConversion(12)
secondsConversion(594230)
showQuinte()
showPairNumber(arrayOfNumbers)
multiplicationTable(5)