
import { create } from "domain";
import mongoose from "mongoose";

import { conectDB } from "../../lib/db";
import { Children } from "../models/Children.models";
import { Nanny } from "../models/Nanny.model";
import { Parents } from "../models/Parents.model";


const createNanny =async () => {
    await Nanny.create({
        firstName:'Euphegenia',
        lastName:'Doubtfire',
        minAge:5,
        maxAge:12,
        location:'Madrid',
        pricePerHour:10,
        additionalFeatures:['English']

    })
    await Nanny.create({
        firstName:'Mary',
        lastName:'Poppins',
        minAge:2,
        maxAge:10,
        location:'Aranjuez',
        pricePerHour:20,
        additionalFeatures:['English','Maths']

    })
    await Nanny.create({
        firstName:'Nanny',
        lastName:'McPhee',
        minAge:2,
        maxAge:10,
        location:'Aranjuez',
        pricePerHour:20,
        additionalFeatures:['Maths']

    })
   
    
}
const createParents =async () => {
    const parent1 = await Parents.create({
        firstName:'Emma',
        lastName:'Thompson',
        location:'Madrid',
        price_max:10,
        numChildren:2,
        additionalFeatures:['English']

    })
    const children1=await Children.create({
        
        name:'Emma',
        age:5,
        parentId:parent1._id
    })
    const parent2 = await Parents.create({
        firstName:'Robbie',
        lastName:'Willimas',
        location:'Aranjuez',
        price_max:15,
        numChildren:2,
        additionalFeatures:['Maths']

    })
    const children2=await Children.create({
        
        name:'Emma',
        age:5,
        parentId:parent2._id
    })
    const parent3 = await Parents.create({
        firstName:'Colin',
        lastName:'Firth',
        price_max:5,
        numChildren:3,
        additionalFeatures:['Maths']

    })
    const children3=await Children.create({
        
        name:'Emma',
        age:5,
        parentId:parent3._id
    })
   
    
}



(async ()=>{
    const { close }= await conectDB()
    try{        
        await Children.collection.drop();
        await Parents.collection.drop();
        await Nanny.collection.drop();
    }catch (error){
        console.log('There are no nanny to drop from db')
    }
    await createNanny();
    await createParents();
    await mongoose.disconnect().then(()=>{
        console.log('bye')
    })
  
})();
