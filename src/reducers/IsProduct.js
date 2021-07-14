const IsProduct=(state=false,action)=>{
    switch(action.type){
        case 'ADDPRODUCT':
                return state=true;
        case 'REMOVEPRODUCT':
              return state=false;
        default :
            return state;

    }

};



export default IsProduct;
