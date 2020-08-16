import React from "react";

const Foodlist = (props) =>{
    const food_types = ["Mexican", "Italian", "Indian", "Korean", "Chinese", "Thai", "Chicken", "Halal", "Japanese", "Pizza", "Burgers", "Sandwiches", "Greek", "French", "Filipino", "Spanish", "Vietnamese", "Caribbean"];

    const handleClick = (q) =>{
        let search = q + " Restaurant";
        console.log(search);
        props.handleSearch(search);
    };


    const listItems = food_types.map((food_type) =>
    <li key={food_type}>
        <button className="food-type" id={food_type} value={food_type} onClick={(e) => handleClick(e.target.value)}>
            <div className="opac"></div> 
            <p className="food-name">{food_type}</p>
        </button>
        
    </li>
    );
    return(
        <ul className="list-of-restaurants">{listItems}</ul>
    );
}

export default Foodlist;