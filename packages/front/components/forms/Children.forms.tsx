import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { addChildren, addParents, getParents } from "../../lib/api";

//export const ParentsForms = ({onAddItem})=>{

export const ChildrenForms = ()=>{
   

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = handleSubmit(async (item) => {
    console.log('Datos del form')
    console.log(item)
    const ing = await addChildren(item);
    reset();
  });
 


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
        <div style={{ padding: '20px' }}>
            <div>

                <input placeholder="Name" {...register('Name', { required: 'Add  First Name' })} />
                {/* <Error field="name" errors={errors} /> */}  
            </div>
            <div>
                <input placeholder="Age" {...register('Age', { required: 'Add price max' })} />
            </div>
       
            <button onClick={onSubmit} type="button">Add children</button>
        </div>
     </form>
  );
};





