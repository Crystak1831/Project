import React from 'react';

import classes from './Burger.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";


//start the ingredient render burger to screen

const burger = (props) =>{
    const transformedIngrediencts = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
               return <BurgerIngredient key = {igKey + i} type={igKey}/>
            })
        });
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
