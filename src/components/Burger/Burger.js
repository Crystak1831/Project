import React from 'react';

import classes from './Burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";


//start the ingredient render burger to screen

const burger = (props) =>{

    //Object.keys returns an array of a given object's own property names
    const transformedIngrediencts = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
               return <BurgerIngredient key = {igKey + i} type={igKey}/>
            })
        })
        .reduce((arr,el) =>{
            return  arr.concat(el)
        },[])
    console.log(transformedIngrediencts)

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngrediencts}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};
export default burger
