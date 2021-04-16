import React, {useState} from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import anne from "./img/anne-marie.jpg";
import elon from "./img/elon.jpg";
import eminem from "./img/eminem.jpg";
import jeff from "./img/jeff.jpg";
import rihana from "./img/rihana.jpg";
import maisie from "./img/maisie.jpg"
import { SwipeableDrawer } from '@material-ui/core';

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name:"Anne Marie",
            url:anne
        },
        {
            name:"Elon Musk",
            url:elon
        },
        {
            name:"Eminem",
            url: eminem
        },
        {
            name:"Jeff Bezos",
            url:jeff
        },
        {
            name:"Rihana",
            url:rihana
        },
        {
            name:"Maisie",
            url:maisie
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: "+nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name+ " left the screen.");

    }

    return (
        <div className="tinderCards">

            <div className="tinderCards__container">
                {people.map((person)=>(
                    <TinderCard
                        key = {person.name}
                        className="swipe"
                        preventSwipe = {['up','down']}
                        onSwipe = {(dir) => swiped(dir, person.name)}
                        onCardLeftScreen = {()=>outOfFrame(person.name)}
                    >                  

                    <div className="card" style={{backgroundImage: "url("+person.url+")"}}>
                        <h3>{person.name}</h3>
                    </div>      

                    </TinderCard>
                ))}
            </div>

        </div>
    );
}

export default TinderCards;
