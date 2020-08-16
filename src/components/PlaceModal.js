import React from "react";
import Modal from "react-modal";
import PlaceList from "./Placelist";
import x from "../assets/x.svg";

const PlaceModal = (props) =>{
    
    const handleClick = () =>{
        props.handleRecipeSearch();
    }

    return(
        
        <Modal 
            isOpen={props.open}
            onRequestClose={props.close}
            contentLabel="Choose"
            className="modal"
            ariaHideApp={false}
            >
            <div className="place-modal-wrapper">
                    <div className="places-modal-header">
                        <p className="place-modal-title">Choose a restaurant or find recipes below</p>
                        <img src={x} alt="close" className="close-button-logo" onClick={props.close}/>
                    </div>
                    <div>
                        <PlaceList distances={props.distances} places={props.places} hours={props.hours} />
                    </div>
                    <div className="recipe-button-div">
                        <button className="recipe-button" onClick={() => handleClick()}>Find Recipes</button>
                    </div>
            </div>
        </Modal>
        

    )
};

export default PlaceModal;