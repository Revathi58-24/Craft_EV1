import React from "react";
import './Home.css'; 
import home from './assets/ho2.png';

const Home = () => {
    return (
        <div>
            <div>
                <img src={home} className="home-main-image" />
            </div>
            <div style={{ position: 'relative' }}>
                <img src="https://img.freepik.com/free-vector/scene-with-butterflies-garden_1308-43236.jpg?size=626&ext=jpg&ga=GA1.1.2008645636.1676467708&semt=ais" className="home-background-image" />
                <div className="home-text-overlay">
                    <h2>
                        <span style={{ color: '#5E3B55' }}>Welcome to Ennangal Vannangalaga</span> <br />
                        <span style={{ color: '#3B5E58' }}>A Journey into the World of Craftsmanship</span>
                    </h2>
                    <p>
                        At Ennangal Vannangalaga, I believe in the beauty
                        of handmade creations, the magic of creativity,
                        and the joy of sharing craftsmanship with the world.
                        As a solo entrepreneur, I'm dedicated to curating a
                        collection of exquisite handcrafted treasures
                        that celebrate the artistry and passion of artisans.
                    </p>
                </div>
            </div>
            <br />
        </div>
    );
}

export default Home;
