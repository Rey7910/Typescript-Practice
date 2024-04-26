
function addNumbers(a:number, b:number): number{
    return a+b;
};

const addNumberArrow = (a:number, b:number):string =>{
    return `${a+b}`;
};


function multiply(firstNumber: number, secondNumber?: number, base:number = 2): number{
    return firstNumber*base;
};

//const result:string = addNumbers(1,3).toString();
//const resultArrow: string = addNumberArrow(5,1);
//const resultMultiply: number = multiply(6);

//console.log({result, resultArrow, resultMultiply});


interface Character{
    name: string,
    hp:number,
    showHp: () => void,
}

const healCharacter = (character:Character, amount:number) =>{
    character.hp +=amount
};


const strider:Character={
    name: "Strider",
    hp: 300,
    showHp(){
        console.log(`Current hp value ${this.hp}`)
    }

};


console.log(strider.showHp());

healCharacter(strider, 20);

console.log(strider.showHp());

export {};