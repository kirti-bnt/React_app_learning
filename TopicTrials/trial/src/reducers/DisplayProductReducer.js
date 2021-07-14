const initialState = {
   data:[]

}

 const DisplayProductReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'CATEGORYCHANGE':
            return {...state,data:action.data}
        default: return state

    }

}

 export default DisplayProductReducer