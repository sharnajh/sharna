import React from "react";
import "./Card.css";

const Card = ({ title, description, imgUrl }) => {
    return (
        <div className="card">
            <h1>{title}</h1>
            <p>{description}</p>
            {/* <img src={imgUrl} alt={description} /> */}
        </div>
    )
}

export default Card;