const INITIAL_STATE = 
{
    user: "Google"
}
export default (state = INITIAL_STATE , action)=>
{
    
    switch (action.type) {
        case "Go":
            return({
                ...state,
                name:action.name
            })
            
        default:
           
           return state;
    }
     
    
}