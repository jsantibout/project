import React from 'react'
import locationIcon from "./assets/locationIcon.png"


export default function Card(props) {   
    return(
        <div className="Card">
            <img src={props.imageUrl}/>
            <div className="Info">
                <div className="Country">
                    <img src={locationIcon}/>
                    <span>{props.location}</span>
                    <span href={props.googleMapsUrl}> View on Google Maps</span>
                </div>
                <h1>{props.title}</h1>
                <p className="dates">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    )
    
}


