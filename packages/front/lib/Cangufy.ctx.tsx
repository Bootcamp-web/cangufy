import React, { useContext, useEffect, useState } from 'react';
import { createStore, createHook, defaults } from 'react-sweet-state';

const [items, setItems] = useState([]);

const addItem = (item) => {

  setItems((it) => [...it, item]);
};


const Store = createStore({
  
    initialState: {
      count: 0,
    },
    
    actions: {
      addItem,
  
      },
        
    },
  
  });
  export const useCangufy = createHook(Store);