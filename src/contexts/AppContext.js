import React, { createContext, useEffect, useState } from 'react';
import React, { getProfile } from '../api/calls/index';


const AppContext = createContext({});

export const AppProvider = ({children}) => {
    const [ user, setUser ] = useState({});

    const value = {
        user,
        setUser,
    }
    useEffect(()=>{
        (async()=>{
            const profile = await getProfile()
            if(!profile.status){
                setErrors({
                  email: profile.error
                })
              }else{
            setUser(profile)

              }
            // console.log(await getProfile())

        })()
},[])
    return (
       <AppContext.Provider value={value}>
       	{children} 
       </AppContext.Provider>
    );
};

export default AppContext;

