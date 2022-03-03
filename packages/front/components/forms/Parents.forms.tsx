import React, {useState} from "react";
import { useForm } from "react-hook-form";

//export const ParentsForms = ({onAddItem})=>{

export const ParentsForms = ()=>{
    const [item, setItem] = useState();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    watch,
  } = useForm();

  const submit = handleSubmit(async (data) => {
    console.log(data)
    //await onAddItem(data);
    reset();
  });
 


  return (
    <div>
      
        <div style={{ padding: '20px' }}>
            <input placeholder="Ingredient" {...register('name', { required: 'Add an ingrendient' })} />
            {/* <Error field="name" errors={errors} /> */}
            <input placeholder="" {...register('quantity', { required: 'Add quantity' })} />
            {/* <Error field="quantity" errors={errors} />
         */}
            <button onClick={submit} type="button">Add item</button>
        </div>
    </div>
  );
};
