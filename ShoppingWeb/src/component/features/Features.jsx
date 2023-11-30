import React from "react";
import './features.css';

function Features() {
    return (
        <div className="features">
            <div className="container">
                <div className="left">
                    <h1>
                        Find the perfect for your business
                    </h1>
                    <div className="searchInput">
                        <img 
                            src="./searchButton.png" 
                            alt=""
                        />
                        <input type="text" placeholder='Try ""'/>
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Word Press</button>
                    <button>Web Design</button>
                    <button>Web Design</button>
                </div>

                <div  className="right">
                    <img 
                        src="E:\6150 Final\ShoppingWeb\src\component\features\header.png" 
                        alt="" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Features;