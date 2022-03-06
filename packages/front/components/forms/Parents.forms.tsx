import { constants } from "buffer";
import React, {useEffect, useState} from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useForm } from "react-hook-form";
import { addParents, getParents } from "../../lib/api";
import { ChildrenForms } from "./Children.forms";

//export const ParentsForms = ({onAddItem})=>{



export const ParentsForms = ()=>{
  const [children, setChildren] = useState([{name:'',age:-1}]);

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
 
  const _addChildren = ()=> setChildren([...children, {name: '', age: -1}])
  const _setChildren = (item) => {
    console.log('setChildren', item)
  }
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
        <div style={{display: 'flex', overflow: 'auto'}}>
          {children.map((child,_)=><ChildrenForms child= {child} setChildren= {_setChildren} key={_} />)}
          <button onClick={_addChildren} type="button">+</button>
        </div>
        <button onClick={onSubmit} type="button">Add parent</button>
      </div>
     </form>
  );
};





