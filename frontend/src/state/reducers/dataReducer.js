const initialState = {
    signIn : false,
    order : false,
    name : '',
    phone : '',
    address :'',
    password :'',
    voucher:'',
    email:''
}

const dataReducer = (state=initialState,action)=>{
    if(action.type === 'signIn'){
        state.signIn = action.payload;
        return {...state};
    }
    else if(action.type === 'signOut'){
        state.signIn = action.payload;
        return {...state};
    }
    else if(action.type === 'setOrder'){
        state.order = action.payload;
        return {...state};
    }
    else if(action.type === 'unSetOrder'){
        state.order = action.payload;
        return {...state};
    }
    else if(action.type === 'updateName'){
        state.name = action.payload;
        return {...state};
    }
    else if(action.type === 'updatePhone'){
        state.phone = action.payload;
        return {...state};
    }
    else if(action.type === 'updateAddress'){
        state.address = action.payload;
        return {...state};
    }
    else if(action.type === 'updatePassword'){
        state.password = action.payload;
        return {...state};
    }
    else if(action.type === 'updateVoucher'){
        state.voucher = action.payload;
        return {...state};
    }
    else if(action.type === 'updateEmail'){
        state.email = action.payload;
        return {...state};
    }
    else if(action.type === 'updateQuery'){
        state.query = action.payload;
        return {...state};
    }
    else{
        return {...state};
    }
}

export default dataReducer;