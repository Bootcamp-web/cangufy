
import mongoose from "mongoose";
import { conectDB } from "../../lib/db";
import { Nanny } from "../models/Nanny.model";


const createNanny =async () => {
    await Nanny.create({
        first_name:'Lola',
        last_name:'Flores',
        min_age:5,
        max_age:12,
        location:'Madrid',
        pricePerHour:10,
        additionalFeatures:['English']

    })
    await Nanny.create({
        first_name:'Mary',
        last_name:'Poppins',
        min_age:2,
        max_age:10,
        location:'Aranjuez',
        pricePerHour:20,
        additionalFeatures:['English','Maths']

    })
    
}



(async ()=>{
    const { close }= await conectDB()
    try{
        await Nanny.collection.drop();
    }catch (error){
        console.log('There are no nanny to drop from db')
    }
    await createNanny();
    await mongoose.disconnect().then(()=>{
        console.log('bye')
    })
  
})();
