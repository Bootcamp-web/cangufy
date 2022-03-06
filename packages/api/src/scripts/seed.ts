
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
        email:'euphegenia.doubtfire@gmail.com',
        minAge:5,
        maxAge:12,
        location:'Aranjuez',
        pricePerHour:10,
        additionalFeatures:['English']

    })
    await Nanny.create({
        firstName:'Mary',
        lastName:'Poppins',
        email:'mary.poppins@gmail.com',
        minAge:2,
        maxAge:10,
        location:'Aranjuez',
        pricePerHour:10,
        additionalFeatures:['English','Maths']

    })
    await Nanny.create({
        firstName:'Nanny',
        lastName:'McPhee',
        email:'nanny.mcphee@gmail.com',
        minAge:2,
        maxAge:10,
        location:'Aranjuez',
        pricePerHour:10,
        additionalFeatures:['Maths']

    })
   
    
}
const createParents =async () => {
    const parent1 = await Parents.create({
        firstName:'Emma',
        lastName:'Thompson',
        location:'Madrid',
        email:'emma.thompson@gmail.com',
        price_max:10,
        numChildren:2,
        additionalFeatures:['English']

    })
    const children1P1=await Children.create({
        
        name:'Emma',
        age:5,
        parentId:parent1._id
    }) 
    const children2P1=await Children.create({
        
        name:'Paca',
        age:3,
        parentId:parent1._id
    })

    const parent2 = await Parents.create({
        firstName:'Robbie',
        lastName:'Willimas',
        email:'robbie.williams@gmail.com',
        location:'Aranjuez',
        price_max:15,
        numChildren:2,
        additionalFeatures:['Maths']

    })
    const children1P2=await Children.create({
        
        name:'Emma',
        age:5,
        parentId:parent2._id
    }) 
    const children2P2=await Children.create({
        
        name:'Paca',
        age:3,
        parentId:parent2._id
    })
    
    const parent3 = await Parents.create({
        firstName:'Colin',
        lastName:'Firth',
        email:'colin.firth@gmail.com',
        price_max:5,
        numChildren:3,
        additionalFeatures:['Maths']

    })
    const children1P3=await Children.create({
        
        name:'Emma',
        age:5,
        parentId:parent3._id
    }) 
    const children2P3=await Children.create({
        
        name:'Paca',
        age:3,
        parentId:parent3._id
    })
    const children3P3=await Children.create({
        
        name:'Paca',
        age:3,
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
