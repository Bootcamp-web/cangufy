import React, {useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import { addBooking, addParents, getParents } from "../../lib/api";
import MatchCard from "../MatchCard";


export const BookignForms = ()=>{
  const [match, setMatch] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();


  const onSubmit = handleSubmit(async (item) => {
    console.log('Datos del form',item)
    const match = await addBooking(item);
    setMatch(match)
    console.log("match",match)
    reset();
  });
  
  


  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ padding: '20px' }}>
        <div>   
          <input placeholder="email" {...register('email', { required: 'Add email' })} />     
        </div>
        <div>
          <input placeholder="schedule" {...register('schedule', { required: 'Add  schedule' })} />
          
        </div>
       
        <button onClick={onSubmit} type="button">Add booking</button>
      </div>
     </form>
    <MatchCard match={match} /> 
    </>
  );
};





