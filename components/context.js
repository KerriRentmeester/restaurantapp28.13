//this magically appeared in 28.12. The video did not show the code, so I guessed by taking the following code from starter file folder: GraphQL squema...

/* /context/AppContext.js */

import React from "react";
// create auth context with default value

// set backup default for isAuthenticated if none is provided in Provider
const AppContext = React.createContext(
    {isAuthenticated:true, 
        cart: {items:[], 
        total:0},
        addItem:()=>{},
        removeItem:()=>{},
        user:false, 
        setUser:()=>{}
    });
export default AppContext;