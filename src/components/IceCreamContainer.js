import React from "react";
import { connect } from "react-redux";
import {buyIceCream}  from "../redux/icecream/IceCreamAction";



const IceCreamContainer=(props)=>{
    return(
        <>
        <h1>Number of IceCreams-{props.numOfIcecreams}</h1>
        <button onClick={props.buyIceCream}>Buy Cake</button>
        </>
    )
}

const mapStateToProps=(state)=>{
    return{numOfIcecreams:state.IceCream.numOfIcecreams};

}
const mapDispatchToProps=(dispatch)=>{
    return{buyIceCream :()=>dispatch(buyIceCream())};

   

}
export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)