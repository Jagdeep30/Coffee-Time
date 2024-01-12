const initialState = {
    cart:new Map(),
    cartSize : 0,
    user:{},
    login:false
}

const dataReducer = (state=initialState,action)=>{
    if(action.type === 'addToCart'){
        if(state.cart.has(action.payload)){
            state.cart.set(action.payload,state.cart.get(action.payload)+1);
        }else{
            state.cart.set(action.payload,1);
        }
        state.cartSize++;
        return {...state};
    }
    else if(action.type === 'deleteFromCart'){
        if(state.cart.has(action.payload)){
        if(state.cart.get(action.payload)===1)state.cart.delete(action.payload);
        else state.cart.set(action.payload,state.cart.get(action.payload)-1);
        if(state.cartSize!==0)state.cartSize--;}
        return {...state};
    }
    else if(action.type==='login'){
        state.login = action.payload;
        return {...state};
    }
    else if(action.type==='logout'){
        state.login = action.payload;
        return {...state};
    }
    else if(action.type==='addUser'){
        state.user = action.payload;
        return {...state};
    }
    else if(action.type==='deleteUser'){
        state.user = {};
        return {...state};
    }
    else{
        return {...state};
    }
}

export default dataReducer;