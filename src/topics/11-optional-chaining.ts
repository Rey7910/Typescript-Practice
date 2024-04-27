export interface Passenger{
    
    name: string;
    children?:string[];
    

};


const passenger1:Passenger = {
    name:'Reycito'
};

const passenger2:Passenger = {
    name:'Random',
    children:['Nat','Eli']
};



const returnChildrenNumber = (passenger:Passenger) =>{
    
    const howManyChildren = passenger.children?.length || 0; 
    //if (!passenger.children) return 0;
    
    //const howManyChildren = passenger.children!.length; // non null assertion operator
    const {name} = passenger;

    console.log('Number of children: ',howManyChildren, ' and passenger name: ',name);

    return howManyChildren;
}

returnChildrenNumber(passenger1);