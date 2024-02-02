let globalObj = {
    currUser:undefined
}

exports.getCurrUser = ()=>{
    return globalObj.currUser;
}

exports.setCurrUser = (user)=>{
    globalObj.currUser = user;
}