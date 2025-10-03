
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
    let result = 0;
    for (let i =1 ; i <=N; i++){
        result = result + i;
    };
    console.log(result)
}
const productOfNumbers = (N) => {
    let result = 1;
    for (let i =1 ; i <=N; i++){
        result = result * i;
    };
    console.log(result)
}

const compareNumber = (N) => {
    if(N < 100 ){
        console.log(N + " est plus petit que 100.");
    }else{
        console.log(N + " est plus grand que 100.")
    }
}

const ageCategory = () => {
    let arrayOfAge = [];
    let poussin = [];
    let benjamin = [];
    let cadet = [];
    let junior = [];
    let senior = [];
    const randomAges = (min, max) => {
        min = Math.ceil(min);
        max = Math.ceil(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    for( let i = 0; i < 15; i++){
        arrayOfAge.push(randomAges(5, 64))
    }
    for( let i = 0; i < arrayOfAge.length; i++){
        let N = arrayOfAge[i];
        if(N < 11 ) {
            poussin.push(N);
        } if(N < 13){
            benjamin.push(N);
        } if (N < 15) {
            cadet.push(N);            
        } if (N < 17) {
            junior.push(N);
        } else {
            senior.push(N);
        }
    }        
console.log(poussin, benjamin, cadet, junior, senior)    
}
const getReducePrice = (N, TVA) => {
    const tauxTva = TVA + 1;
    let TTC = 0;
    let HT = N;
    let reducePrice = 0;
    if ( HT >= 2000) {
        reducePrice = (HT * 0.1);
        reducePrice = HT - reducePrice
        TTC = (reducePrice * tauxTva);
       
    } if (HT < 2000 && HT >= 1000) {
        reducePrice = HT - (HT *0.05);
        TTC = reducePrice * tauxTva;
    } else {
               TTC = HT * tauxTva;
    }
    let totalTVA = TTC - reducePrice;
    console.log(totalTVA)
    console.log (reducePrice)
    console.log(TTC);
}


exo(7,5,2,3);
priceExercice( 10, Tva20)
timeConversion(12)
secondsConversion(594230)
showQuinte()
showPairNumber(arrayOfNumbers)
multiplicationTable(5)
sommeOfNumbers(4)
productOfNumbers(4)
compareNumber(150)
ageCategory()
getReducePrice(1500, Tva20)