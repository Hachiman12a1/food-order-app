import React from 'react';
import { Fragment } from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';

Meals.propTypes = {
    
};

function Meals(props) {
    return (
        <Fragment>
            <MealsSummary/>
            <AvailableMeals/>
        </Fragment>
    );
}

export default Meals;