import React from "react";
import InputField from "./InputField";
import WeatherResult from "./WeatherResult";
import HeadText from "./HeadText";

const Api_Key = "7fb75b26bcc95a25e0626523405c17d9";

class AppTheme1 extends React.Component{
	//set initial state
	state = {
		temperature: undefined,		
		humidity: undefined,
		forecast: undefined,		
	}
	//getWeather method. Calls API with input city and updates state props with returned data.
	getWeather = async (x) => {

		const request = x.target.elements.inputCity.value;
		//prevent page refreshing when form is submitted
		x.preventDefault();  
		
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${request}&appid=${Api_Key}`);
		const response = await api_call.json();
			
		this.setState({
			temperature: response.main.temp,
			humidity: response.main.humidity,
			forecast: response.weather[0].description,			
		})
	}
	
	render(){
		
		return(
			<div>
				<div className="wrapper2">				
					<div className="container">	
						<div className="headerContainer">
							<div className="col-xs-12 header">
								<HeadText />
							</div>
						</div>
						<div className="col-xs-6 inputContainer">						
							<InputField fetchWeather={this.getWeather} />
						</div>
						<div className="col-xs-6 resultContainer">
							<WeatherResult
								temperature={this.state.temperature}
								humidity={this.state.humidity}
								forecast={this.state.forecast}
							/>
						</div>
					</div>					
				</div>
			</div>
		)
	}		  
}

export default AppTheme1;