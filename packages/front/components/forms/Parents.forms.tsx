import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { addParents, getParents } from "../../lib/api";

//export const ParentsForms = ({onAddItem})=>{

export const ParentsForms = ()=>{
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
    const ing = await addParents(item);
    reset();
  });
 


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
        <div style={{ padding: '20px' }}>
            <div>

                <input placeholder="First Name" {...register('firstName', { required: 'Add  First Name' })} />
                {/* <Error field="name" errors={errors} /> */}
                <input placeholder="Last Name" {...register('lastName', { required: 'Add Last Name' })} />     
            </div>
            <div>
                <input placeholder="location" {...register('location', { required: 'Add Location' })} />
                <input placeholder="schedule" {...register('schedule', { required: 'Add  schedule' })} />
                <input placeholder="price max" {...register('price max', { required: 'Add price max' })} />
            </div>
            <div>
                <input placeholder="aditional features" {...register('aditional features', { required: 'Add additional features' })} />
            </div>
            <button onClick={onSubmit} type="button">Add parent</button>
        </div>
     </form>
  );
};





