export const addToCart = (id)=>{
    return (dispatch)=>{
        dispatch({
            type:'addToCart',
            payload:id
        })
    }
}
export const deleteFromCart = (id)=>{
    return (dispatch)=>{
        dispatch({
            type:'deleteFromCart',
            payload:id
        })
    }
}
export const loggedIn = ()=>{
    return (dispatch)=>{
        dispatch({
            type:'login',
            payload:true
        })
    }
}
export const loggedOut = ()=>{
    return (dispatch)=>{
        dispatch({
            type:'logout',
            payload:false
        })
    }
}
export const addUserData = (data)=>{
    return (dispatch)=>{
        dispatch({
            type:"addUser",
            payload:data
        })
    }
}
export const deleteUserData = ()=>{
    return (dispatch)=>{
        dispatch({
            type:'deleteUser',
            payload:''
        })
    }
}