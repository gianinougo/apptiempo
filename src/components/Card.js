import React from "react";
import Spinner from "./Spinner";


const Card = ({loadingData, showData, weather, forecast}) => {


    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + "/" + month + "/" + year;
    var url = "";

    var iconUrl3 = "";
    var iconUrl6 = "";
    var iconUrl9 = "";

    var forecastData3 = "";
    var forecastData6 = "";
    var forecastData9 = "";


    if(loadingData) {
        return <Spinner />;
    }

    if(showData) {
        url= "https://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";

        iconUrl3 = "https://openweathermap.org/img/w/" + forecast.list[1].weather[0].icon + ".png";
        iconUrl6 = "https://openweathermap.org/img/w/" + forecast.list[2].weather[0].icon + ".png";
        iconUrl9 = "https://openweathermap.org/img/w/" + forecast.list[3].weather[0].icon + ".png";

        forecastData3 = forecast.list[1].dt_txt.substring(8, 10) + "/" + forecast.list[1].dt_txt.substring(5, 7) + "/" + forecast.list[1].dt_txt.substring(0, 4) + " " + forecast.list[1].dt_txt.substring(11, 16);
        forecastData6 = forecast.list[2].dt_txt.substring(8, 10) + "/" + forecast.list[2].dt_txt.substring(5, 7) + "/" + forecast.list[2].dt_txt.substring(0, 4) + " " + forecast.list[2].dt_txt.substring(11, 16);
        forecastData9 = forecast.list[3].dt_txt.substring(8, 10) + "/" + forecast.list[3].dt_txt.substring(5, 7) + "/" + forecast.list[3].dt_txt.substring(0, 4) + " " + forecast.list[3].dt_txt.substring(11, 16);
    }


    return (
        <div className="mt-5">
            
            {
                showData === true ? (
                    <div className="container">
                        <div className="card mb-3 mx-auto bg-dark text-light">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <h3 className="card-title">{weather.name}</h3>
                                    <p className="card-date">{date}</p>
                                    <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}??C</h1>
                                    <p className="card-desc"><img src={url} alt={weather.weather[0].description} />{(weather.weather[0].description).toUpperCase()}</p>
                                    <img src= "https://images.pexels.com/photos/1106476/pexels-photo-1106476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start imagen" alt="city"></img>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-start mt-2">
                                        <h5 className="card-text">Temperatura m??xima: {(weather.main.temp - 273.15).toFixed(1)}??C </h5>
                                        <h5 className="card-text">Temperatura m??nima: {(weather.main.temp_min - 273.15).toFixed(1)}??C </h5>
                                        <h5 className="card-text">Sensaci??n t??rmica: {(weather.main.feels_like - 273.15).toFixed(1)}??C</h5>
                                        <h5 className="card-text">Humedad: {weather.main.humidity}%</h5>
                                        <h5 className="card-text">Velocidad del viento: {weather.wind.speed} m/s</h5>
                                    </div>
                                    
                                    <hr />
                                    <div className= "row mt-4">
                                        <h3 className="col-md-12 mb-4">Pron??stico</h3>
                                        <div className="col-md-4">
                                            <p>{forecastData3}h</p>
                                            <p><img src={iconUrl3} alt={forecast.list[1].weather[0].description} />{(forecast.list[1].weather[0].description)}</p>
                                            <p>{(forecast.list[1].main.temp - 273.15).toFixed(1)}??C</p>
                                        </div>
                                        <div className="col-md-4">
                                            <p>{forecastData6}h</p>
                                            <p><img src={iconUrl6} alt={forecast.list[2].weather[0].description} />{(forecast.list[2].weather[0].description)}</p>
                                            <p>{(forecast.list[2].main.temp - 273.15).toFixed(1)}??C</p>
                                        </div>
                                        <div className="col-md-4">
                                            <p>{forecastData9}h</p>
                                            <p><img src={iconUrl9} alt={forecast.list[3].weather[0].description} />{(forecast.list[3].weather[0].description)}</p>
                                            <p>{(forecast.list[3].main.temp - 273.15).toFixed(1)}??C</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ):(
                    <h2 className="text-ligjt">Sin datos</h2>
                )
            }

        </div>
    );
}

export default Card;

