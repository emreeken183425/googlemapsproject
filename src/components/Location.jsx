import React, { useEffect, useState } from "react";
import {Search,GpsFixed} from '@material-ui/icons' 

const apiKey=import.meta.env.VİTE_APP_GMAP_API_KEY
const mapsApi="https://maps.googleapis.com/maps/api/js"


// load google map api js

function loadAsyncScript(src){
    return new Promise(executor:(resolve =>{
const script=document.createElement(tagName:"script");
Object.assign(script,source:{
  type:"text/javascript",
  async:true,
  src
})
script.addEventListener(type:"load",listener:()=>resolve(script));
document.head.appendChild(script);


    }))
}

const initMapScript=()=>{
  if(window.google){
    return Promise.resolve();
  }
  const src=`${mapsApi}?key=${apiKey}&libraries=placesv=weekly `
  return loadAsyncScript(src)
}

useEffect(() => {
 initMapScript().then(()=>{
  console.log("map loadded",window.google);
 })
}, deps:[])




function Location() {


  return (
    <div className="location" >
      <div>
        <div className="search">
          <span><Search/> </span>
          <input type="text" placeholder="search a location" />
        </div>
        <div className="adress">
            <table>
                <tr>City <span>...</span>   </tr>
                <tr>state <span>...</span>   </tr>
                <tr>zip <span>...</span>   </tr>
                <tr>country <span>...</span>   </tr>

            </table>
        </div>
      </div>
    </div>
  );
}

export default Location;
