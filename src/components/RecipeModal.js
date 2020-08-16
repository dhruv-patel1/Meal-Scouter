import React from "react";
import Modal from "react-modal";
import Recipe from "./Recipe";
import x from "../assets/x.svg";

const RecipeModal = (props) =>{

    const open = props.recipeOpen;
    console.log(open);
    return(
        <Modal 
            isOpen={props.recipeOpen}
            onRequestClose={props.close}
            contentLabel="Choose"
            className="modal recipe-modal-popup"
            ariaHideApp={false}
            >
            <div className="recipe-container">
            <div className="places-modal-header">
                <p className="place-modal-title">Recipes</p>
                <img src={x} alt="close" className="close-button-logo" onClick={props.close}/>
            </div>

            <div className="recipes-container">
            {
                props.recipes.map((recipe) =>(
                    <div className="recipe-div">
                    <Recipe
                        key={recipe.recipe.calories}
                        title={recipe.recipe.label}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                        calories={recipe.recipe.calories}
                        className="recipe-and-info"
                        />
                    </div>
                ))
            }
            </div>
            </div>
            
        </Modal>

    )
};

export default RecipeModal;