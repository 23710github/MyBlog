import { Get } from ".";


export const getWeather = (lat:number,lon:number)=>Get('/weather/get',{lat,lon})