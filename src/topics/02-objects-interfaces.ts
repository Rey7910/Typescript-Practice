const skills:string[] = ['Bash', 'Counter' , 'Hill'];


interface Character {
    name:string,
    hp:number,
    skills:string[],
    hometown?:string 

};

const strider:Character = {
    name: 'strider',
    hp: 100,
    skills: ['bash', 'counter'],
};

strider.hometown='Riverdelle'
console.table(strider)
export {};