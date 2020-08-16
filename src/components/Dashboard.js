import React from "react";
import Header from "./Header";
import Foodlist from "./Foodlist";
import PlaceModal from "./PlaceModal";
import RecipeModal from "./RecipeModal";
import axios from "axios";
import calcDistance from "../utils";

const key = process.env.REACT_APP_PLACE_KEY;

const app_id = process.env.REACT_APP_APP_ID;
const app_key = process.env.REACT_APP_APP_KEY;

class Dashboard extends React.Component{
    state={
        lat: 0,
        long: 0,
        placesList: [],
        distances: [],
        open: undefined,
        details: [],
        hours: [],
        q: "",
        recipeOpen: false,
        recipes: [],
    };
    
    componentDidMount()
    {
        navigator.geolocation.getCurrentPosition((position) =>{
            this.setState({lat: position.coords.latitude});
            this.setState({long: position.coords.longitude});
        });
    }

    close = () =>{
        this.setState({open: undefined});
    }
    
    recipeClose = () =>{
        this.setState({recipeOpen: undefined});
    }
    
    handlePlaceSearch = async (query) =>{
        this.setState({q: query});

        let distList = [];
        let openHours = [];


        //For placesearch request
        const location = this.state.lat+","+this.state.long;
        const url = "https://maps.googleapis.com/maps/api/place/textsearch/json";
        const fUrl = `https://cors-anywhere.herokuapp.com/${url}?query=${query}&type=restaurants&location=${location}&radius=15000&&key=${key}`;
        const res = await axios.get(fUrl, {crossdomain: true});

        this.setState({placesList: res.data.results});

        console.log(this.state.placesList);

        //get distance from current location and see if the restaurant is open
        this.state.placesList.forEach(place =>{
            const openOrNot = place.opening_hours;
            const distance = calcDistance(this.state.lat, this.state.long, place.geometry.location.lat, place.geometry.location.lng);
            distList.push(distance);
            openHours.push(openOrNot);
        });

        this.setState({hours: openHours});

        
        this.setState({distances: distList})
        this.setState({open: true});


        console.log(distList);
    }

    handleRecipeSearch = async() =>{
        this.close();
        this.setState({recipeOpen: true});
        const query = this.state.q;
        const search = query.replace(/ .*/, '') + " food";
        const url = `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${search}&app_id=${app_id}&app_key=${app_key}`;
        const results = await axios.get(url);

        

        this.setState({recipes: results.data.hits});
        console.log(this.state.recipes);

        
        
    }
    
    render(){
        return(
            <div className="main-container dash">
                <Header/>
                <div className="options-container">
                    <div className="sub-title-container">
                        <p className="sub-title">What are you in the mood for?</p>
                    </div>
                    <Foodlist handleSearch={this.handlePlaceSearch}/>
                </div>
                <PlaceModal open={this.state.open} close={this.close} distances={this.state.distances} places={this.state.placesList} hours={this.state.hours} handleRecipeSearch={this.handleRecipeSearch}/>
                <RecipeModal recipeOpen={this.state.recipeOpen} close={this.recipeClose} recipes={this.state.recipes}/>
            </div>
        )
    }
}


export default Dashboard;