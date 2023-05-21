import React, {useEffect, useState} from "react";
import './App.css';

const TempApp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");

useEffect( () => {
    const fetchApi = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=82cd98eefadd4eaf66949c64027d0665`
    const response = await fetch(url);
  
  const resJson = await response.json();
  //console.log(resJson);
  setCity(resJson.main);


}
    fetchApi();
},[search] )

    return(
        <>
            <div className="container">
            
            <div className="box">
            <h4>Weather in</h4>
            <div className="inputData">

            <input type="search"
            value={search}
                className="inputField"
                placeholder="Enter the location"
                    onChange={ (event) => { setSearch(event.target.value) }}
                />

            </div>

            {!city ? (
                <p className="datafound"> No  data Found </p>
            )  : (
                <div className="main">
            <div className="info">
            <h5>{search}</h5>
            <h1 className="temp">
                {city.temp}°Cel
                </h1>
                <h2 className="sign">
                
                <i className="fa fa-solid fa-cloud-sun sun"></i>
                    
                </h2>
                
                
                <h3 className="tempmin_max">
                    Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
                </h3>
            </div>
            </div>
            )

            }
            

            </div>
            </div>
            
        </>
    )
}

export default TempApp;