import React, { createContext, useState } from 'react'


export const adddata = createContext("");
export const updateddata = createContext("");
export const deleteddata = createContext("");

const ContextProvider = ({children})=> {

    const [udata, setUdata] = useState("");
    const [updatedata, setUpdateddata] = useState("");
    const [deletedata, setDeleteddata] = useState("");

  return (
    <adddata.Provider value={{udata, setUdata}}>
        <updateddata.Provider value={{updatedata, setUpdateddata}}>
            <deleteddata.Provider value={{deletedata, setDeleteddata}}>
                {children}
            </deleteddata.Provider>
        </updateddata.Provider>
    </adddata.Provider>
  )
}

export default ContextProvider