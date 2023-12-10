import React from "react";
import "./Card.css";

const Card = ({ title, description, imgUrl, URL }) => {
    return (
        <a href={URL} target="_blank" rel="noreferrer">
            <div className="card">
                <h2>{title}</h2>
                <p>{description}</p>
                {/* <img src={imgUrl} alt={description} /> */}
            </div>
        </a>
    )
}

export default Card;