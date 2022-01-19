import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
    return (
        <>
            <li className="cards_item">
                <figure className="cards_item_pic-wrap" data-category={props.label} >
                    <img src={props.src} alt="Image"
                        className="cards_item_img" />
                </figure>
                <div className="cards_item_info">
                    <h5 className="cards_item_text" >{props.text}</h5>
                </div>
            </li>
        </>
    );
}

export default CardItem

