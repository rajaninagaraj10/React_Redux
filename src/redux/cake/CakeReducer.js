import { BUY_CAKE } from "./CakeType";

const initialState={
    numofCakes:10
}

const CakeReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numofCakes:state.numofCakes -1,

        }
        default :return state;
    }
   

}

export default CakeReducer