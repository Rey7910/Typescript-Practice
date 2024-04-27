
/*export class Person{
    public name:string;
    private address: string;

    constructor(name:string, address:string){
        this.name = name;
        this.address = address;
    }
}*/

export class Person{

    constructor(
        public name:string, 
        public lastName: string,
        public address:string = 'No address'
    ){}
}

// export class Hero extends Person{
//     constructor(
//         public alterEgo: string, 
//         public age:number,
//         public realName:string,
//     ){
//         super(realName, 'New york');
//     }
// }


export class Hero{
    
    //public person:Person;

    constructor(
        public alterEgo: string, 
        public age:number,
        public realName:string,
        public person: Person,
    ){
    //   this.person= new Person(realName,) 
    }
};


const tony = new Person('Tony','Stark','New York');
const ironman = new Hero('Iron man',45,'Tony Stark',tony);

console.log("Class: ",ironman);