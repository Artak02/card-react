import React from "react";
import stars from "./images/red-star.jpg"


export default function Card (props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "Sold Out"
    } else if (props.item.location === "Online") {
        badgeText = "Online" 
    }
    
    return(
        <div className="card" >
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.item.coverImg} className="card-image" />
            <div className="card-stats">
                <img src={stars} className="star-icon" />
                <span>{props.item.stats.rating}</span>
                <span className="grey">({props.item.stats.reviewCount}). </span>
                <span className="grey">{props.item.location}</span>
            </div>
                <p>{props.item.title}</p>
                <p className="card-price"><span className="bold">From ${props.item.price} </span>/ person</p>
        </div>
    )
}