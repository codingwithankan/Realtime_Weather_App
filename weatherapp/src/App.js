//importing bootstrap
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import "./App.css";
import {useState} from "react";
import {useEffect} from "react";
// import { Button } from "bootstrap";

function App() {
  const apikey="d95db281dc15e9fd25ed2631d14683a8"


  const[inputcity,setInputcity]=useState("")
  const [data,setData]= useState({})



  // getweatherdetails ke ander api call ho rha hai

const getweatherdetails = (cityName) =>{
  if(!cityName) return
  const apiURL="https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" +apikey
axios.get(apiURL).then((res) => {
console.log("response",res.data)
setData(res.data)

}).catch((err) => {
console.log("err",err)
})
}


const handlechangeInput =(e)=>{
  console.log("value",e.target.value)
  setInputcity(e.target.value)
}




// api function will be called when handleserch will be fired button on serch will be clicked
const handlesearch =() =>{
  getweatherdetails(inputcity)
}

useEffect(() => {
  getweatherdetails("delhi")
},[])






  return (
    <div className="col-md-12">
      <div className="weatherBG">
        <h1 className="heading">Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-2">
          <input type="text" className="form-control" value={inputcity} onChange={handlechangeInput} />
          <button className="btn btn-primary" type="button" onClick={handlesearch}>
            Search
          </button>
        </div>
        <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded weatherResultBox">
            <img className="weatherIcon" src="https://cdn-icons-png.flaticon.com/512/3845/3845731.png"/>
            <h5 className="weatherCity">{data?.name}</h5>
            <h6 className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
