export default (state = false, action)=>{
    switch(action.type){
        case "SHOW_MODAL":
            return action.payload
            break;
        default:
            return state
            break
    }

}