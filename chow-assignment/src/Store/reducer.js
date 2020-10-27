const initialState = {
    login:true,
    signup:false,
    clicked:false
}

export const reducer= (state= initialState, action)=>{
    if(action.type === 'CHANGE_TO_LOGIN'){
        return{
            ...state,
            login:true,
            signup:false
        }
        
        }
        else if(action.type === 'CHANGE_TO_SIGNUP'){
            return{
                ...state,
                login:false,
                signup:true
            }
            
    }
    else if(action.type === 'DROP_DOWN_STATE'){
         if(state.clicked === false) {
             return{
                 ...state,
                 clicked: true
             }
         }  
         else 
         return{
             ...state,
             clicked:false
         }   
    }
    return state;
}