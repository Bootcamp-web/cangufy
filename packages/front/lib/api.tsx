import axios from 'axios';
import React, {useEffect } from 'react';

const apiBaseURL = 'http://localhost:3001';

const api = axios.create({ baseURL: apiBaseURL });

export const getParents = async () => {
    const res = await api.get('/Parents');
    console.log(res)
    return res.data;
};


export const addParents = async (data)=>{
   console.log("data", data)
  const res = await api.post('/parents',data)
  console.log("add parents",res.data)
  return res.data
}

export const addChildren = async (data)=>{
    console.log("data desde children", data)
   const res = await api.post('/parents',data)
   console.log("add children",res.data)
   return res.data
 }

 export const addNanny = async (data)=>{
  console.log("data desde nanny", data)
 const res = await api.post('/nanny',data)
 console.log("add nanny",res.data)
 return res.data
}
// export const deleteIngredient = async (ingid)=>{
//   const res = await api.get(`/ingredients/${ingid}/delete`)
//   return res.data
// }