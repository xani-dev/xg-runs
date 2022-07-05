import "../Styles/weather-icons.css"

const WeatherInfo = (props) => {
    return <>
    <i className={'wi wi-accu-'+ props.iconNumber}></i>
    </>
} 

export default WeatherInfo;