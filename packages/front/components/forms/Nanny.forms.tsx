import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { addNanny } from "../../lib/api";



//export const ParentsForms = ({onAddItem})=>{

export const NannyForms = ()=>{
    const [item, setItem] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = handleSubmit(async (item) => {
    console.log('Datos del form')
    console.log(item)
    const ing = await addNanny(item);
    reset();
  });
 


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
        <div style={{ padding: '20px' }}>
            <div>

                <input placeholder="First Name" {...register('firstName', { required: 'Add  First Name' })} />
                {/* <Error field="name" errors={errors} /> */}
                <input placeholder="Last Name" {...register('lastName', { required: 'Add Last Name' })} />   
                <input placeholder="Email" {...register('email', { required: 'Add email' })} />    
            </div>
            <div>
              <input placeholder="Min Age" {...register('minAge', { required: 'Add min age' })} /> 
              <input placeholder="Max Age" {...register('maxAge', { required: 'Add max age' })} />
            </div>
            <div>
                <input placeholder="location" {...register('location', { required: 'Add Location' })} />
               
                <input placeholder="pricePerHour" {...register('pricePerHour', { required: 'Add price max' })} />
            </div>
           
            <div>
                <input placeholder="aditional features" {...register('aditional features', { required: 'Add additional features' })} />
            </div>
          
            <button onClick={onSubmit} type="button">Add Nanny</button>
        </div>
     </form>
  );
};





