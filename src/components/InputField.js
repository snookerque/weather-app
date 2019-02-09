import React from 'react';

class InputField extends React.Component{
    render(){
        return(
                <form onSubmit = {this.props.fetchWeather}>
                    <input type="text" class ="textInput" name="inputCity" placeholder="Enter City..."/>
                    <button class ="btn btn-success">Forecast</button>
                </form>         
        )
    }
}

export default InputField;