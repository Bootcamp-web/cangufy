import React, {useState} from "react";
import { useForm } from "react-hook-form";


export const ChildrenForms = (props)=>{
   

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = handleSubmit(async (item) => {
    props.setChildren(item)
  });
 


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
        <div style={{ padding: '20px' }}>
            <div>

                <input placeholder="Name" {...register('name', { required: 'Add  First Name' })} />
                {/* <Error field="name" errors={errors} /> */}  
            </div>
            <div>
                <input placeholder="Age" {...register('age', { required: 'Add price max' })} />
            </div>
       
            <button onClick={onSubmit} type="button">Add child</button>
        </div>
     </form>
  );
};





