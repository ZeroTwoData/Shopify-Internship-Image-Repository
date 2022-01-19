import React, { useState, useEffect } from 'react';
import CardItem from './CardItem';

import './Cards.css'

function Cards(props) {
    const imageItems = props.itemList.map((item) =>
    
        <CardItem
            src={item.avatar}
            text={item.description}
            label={item.imageName}
        />
    )
    return (
        <div className='cards'>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className='cards_items'>
                        {/*Images (props) will be passed in this element*/}
                        {imageItems}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards
