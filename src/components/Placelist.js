import React from "react";

const PlaceList = ({distances, places, hours}) =>{

const listPlaces = places.map((place, index) =>

    <li key={place.place_id}>
        <div className="place-container">
            <div className="info-container">
                <div className="info-name">
                    <p className="place-name">{place.name}</p>
                </div>
                <div className="info-address">
                    <p className="place-address">{place.formatted_address}</p>
                </div>
                <div className="info-rating-open">
                    <p className="additional-info">Rating: {place.rating}/5</p>
                    {hours[index] ? <p className="additional-info">Open Now</p> : <p className="additional-info">Closed</p>}
                </div>
                <div className="distance-container">
                    <p className="info-distance">{distances[index]} miles away</p>
                </div>
                
            </div>
        </div>
    </li>
);



    return(
        <ul className="list-of-places">{listPlaces}</ul>
    );

};

export default PlaceList;