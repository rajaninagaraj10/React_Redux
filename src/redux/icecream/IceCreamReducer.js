import { BUY_ICECREAM } from "./IceCreamTypes";

const iceCreamState={
    numOfIcecreams:20,
}

const IceCreamReducer=(state=iceCreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
            numOfIcecreams:state.numOfIcecreams -2,
        }
        default:return state;

    }

}

export default IceCreamReducer