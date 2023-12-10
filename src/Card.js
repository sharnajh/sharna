import React from "react";
import "./Card.css";

const Card = ({ title, description, imgUrl, URL }) => {
    return (
        <div className="card">
            <a href={URL} target="_blank" rel="noreferrer"><h1>{title}</h1></a>
            <p>{description}</p>
            {/* <img src={imgUrl} alt={description} /> */}
        </div>
    )
}

export default Card;