import React, { useContext, useEffect, useState } from 'react';
import { createStore, createHook, defaults } from 'react-sweet-state';




const Store = createStore({
  
    initialState: {
      count: 0,
    },
    
    actions: {
     
      },
        
    },
  
  });
  export const useCangufy = createHook(Store);