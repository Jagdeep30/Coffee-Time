export const signIn = ()=>{
    return (dispatch)=>{
        dispatch({
            type:'signIn',
            payload:true
        })
    }
}
export const sigOut = ()=>{
    return (dispatch)=>{
        dispatch({
            type:'signOut',
            payload:false
        })
    }
}
export const setOrder = ()=>{
    return (dispatch)=>{
        dispatch({
            type:'setOrder',
            payload:true
        })
    }
}
export const unSetOrder = ()=>{
    return (dispatch)=>{
        dispatch({
            type:'unSetOrder',
            payload:false
        })
    }
}

export const updateName = (name)=>{
    return (dispatch)=>{
        dispatch({
            type:'updateName',
            payload:name
        })
    }
}
export const updatePhone = (phone)=>{
    return (dispatch)=>{
        dispatch({
            type:'updatePhone',
            payload:phone
        })
    }
}
export const updateAddress= (address)=>{
    return (dispatch)=>{
        dispatch({
            type:'updateAddress',
            payload:address
        })
    }
}
export const updatePassword = (password)=>{
    return (dispatch)=>{
        dispatch({
            type:'updatePassword',
            payload:password
        })
    }
}
export const updateVoucher = (voucher)=>{
    return (dispatch)=>{
        dispatch({
            type:'updateVoucher',
            payload:voucher
        })
    }
}
export const updateMail = (email)=>{
    return (dispatch)=>{
        dispatch({
            type:'updateEmail',
            payload:email
        })
    }
}
export const updateQuery = (query)=>{
    return (dispatch)=>{
        dispatch({
            type:'updateQuery',
            payload:query
        })
    }
}