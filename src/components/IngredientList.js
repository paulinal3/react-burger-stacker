// ingredient list will loop over props(ingredients) and produce an Ingredient component for every ingredient in the arr
import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngredientList extends Component {
    render() {
        // here we need to store our group of ingredients(the component)
        let allIngredients = this.props.ingredients.map(mapIng => (
            <li onClick={this.props.add}>
                <Ingredient ingredient={mapIng} />
            </li>
        ))
        // then in our return, we'll render those as a necessary
        return (
            <section className='pane'>
                <h3>Ingredients:</h3>
                <ul className='ingredient-list'>
                    { allIngredients }
                </ul>
            </section>
        )
    }
}