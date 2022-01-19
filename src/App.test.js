import React, { Component } from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Home from './Components/Pages/Home';
import SearchBar from './Components/SearchBar';
import UploadButton from './Components/UploadButton';
import { fireEvent } from '@testing-library/react';

// Eight Total Tests Should Be Conducted (Checking 3 Categories):

// 1. Testing the rendering of Home.js Component

// 2. Testing the the rendering and functionality of SearchBar.js

// 3. Testing the rendering of the UploadButton.js

function testHomePage() { 

    let container = null;
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it("Home runs without crashing", () => {
        act(() => {
            render(<Home />, container);
        });

    });

    it("Home renders title correctly", () => {
        act(() => {
            render(<Home />, container);
        });
        let homeAboutDiv = container.querySelector("#home_about");
        expect(homeAboutDiv.querySelector("h1").textContent).toBe("Aesthetico");
        expect(homeAboutDiv.querySelector("p").textContent).toBe("Let Dreams Become Reality");
    }
    )

    it("Searchbar runs without crashing", () => {
        act(() => {
            render(<SearchBar />, container);
        });
    });

    it("Searchbar renders placeholder text", () => {
        act(() => {
            render(<SearchBar />, container);
        });
        let searchBarComponent = container.querySelector(".searchbox");

        expect(searchBarComponent.querySelector("input").placeholder).toEqual("Filter By Name");
    });

    it("Searchbar updates on input change", () => {
        act(() => {
            render(<SearchBar />, container);
        });
        let searchInput = container.querySelector(".searchbox").querySelector("input");
        fireEvent.change(searchInput, { target: { value: "Violet" } });
        expect(searchInput.value).toBe("Violet");

    });
    it("Searchbar function to have been called upon input change", () => {
        const updateInput = jest.fn();
        act(() => {

            render(<SearchBar input="" updateInput={updateInput} />, container);
        });
        let searchInput = container.querySelector(".searchbox").querySelector("input");
        fireEvent.change(searchInput, { target: { value: "Violet" } });
        expect(updateInput).toHaveBeenCalled();
    });

    it("UploadButton renders without crash", () => {
        act(() => {
            render(<UploadButton />, container);
        });
    });

    it("UploadButton renders text correctly", () => {
        act(() => {
            render(<UploadButton />, container);
        });

        expect(container.querySelector("#upload_image_button").textContent).toBe("Upload Build");
    });

}

testHomePage();