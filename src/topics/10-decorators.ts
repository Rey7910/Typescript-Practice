function classDecorator<T extends {new (...args:any[]):{}}>(constructor: T){
    return class extends constructor{
        newProperty = 'New property';
        hello = 'Override';
    }
}


@classDecorator
export class SuperClass{
    public myProperty:string="ABC-123";

    print(){
        console.log('Hello world');
    };
};

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);