import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/CakeAction";

const CakeContainer=(props)=>{
    return(
        <>
        <h1>Number of Cakes-{props.numofCakes}</h1>
        <button onClick={props.buyCake}>Buy Cake</button>
        </>
    )
}


const mapStateToProps = (state) => {
    return{ numofCakes: state.Cake.numofCakes}
}

const mapDispatchToProps=dispatch=>{
    return{
        buyCake:()=>dispatch(buyCake())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)