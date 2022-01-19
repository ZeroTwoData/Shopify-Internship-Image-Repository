import React, { useState, useEffect } from 'react';
import './Home.css';
import Cards from '../Cards'
import SearchBar from '../SearchBar';


import { Toolbar } from '@material-ui/core';
import UploadButton from '../UploadButton'
import { app } from '../../base'



function Home() {

    const [input, setInput] = useState("");
    const [itemList, setItemList] = useState([]);
    const [displayItemList, setDisplayItemList] = useState([]);

    const [toggle, setToggle] = useState(false);

    const db = app.firestore();

    const handleSearch = e => {
        let target = e.target;
        setInput(target.value);
        console.log("target is", target.value);
        if (target.value !== "") {
            setDisplayItemList(itemList.filter(x => x.imageName.toLowerCase().includes((target.value).toLowerCase())))
        } else {
            setDisplayItemList(itemList)
        }

    }

    useEffect(async () => {

        const imageCollection = await db.collection('imageCollection').get();
        var tempList = imageCollection.docs.map(doc => {
            console.log(doc.data());
            return doc.data();
        })
        setItemList(tempList);
        setDisplayItemList(tempList);
        console.log(tempList);

        console.log("images loaded");
    }, [toggle]);


    return (
        <>
            <div id="home_container">
                {/* About Website information */}
                <div className="home_content" id="home_about">
                    <h1>Aesthetico</h1>
                    <p>Let Dreams Become Reality</p>
                </div>

                <Toolbar flex id="toolbar">
                    <SearchBar input={input}
                        updateInput={handleSearch} id="searchbar" />
                    <UploadButton setToggle={setToggle} toggle={toggle} id="uploadbutton" />
                </Toolbar>

                {/* Images Collection */}
                <Cards itemList={displayItemList} />
            </div>
        </>
    );
}

export default Home;