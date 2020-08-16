import React from "react";

const Recipe = ({title, image, ingredients, calories}) =>{
    return(
        <div className="recipe-in-list-container">
            <div className="recipe-pic-holder">
                <img src={image} alt="" className="recipe-picture"/>
            </div>
            <div className="recipe-ingredients">
            <div className="recipe-title-holder">
                <p className="recipe-title">{Object.keys(title).length > 100 ? "" : title }</p>
            </div>
            <div className="ingredient-list-container">
                <ul className="ingredients-list">
                    {ingredients.map((ingredients, index) =>(
                        <li key={index} className="ingredient-list-item">- {ingredients.text}</li>
                    ))}
                </ul>
            </div>
        </div> 
            <div className="recipe-rest-info">
                    <p className="recipe-cals">{Math.round(calories)} Calories</p>
            </div>

        </div>
    )
};

export default Recipe;