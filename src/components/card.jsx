
import React from 'react';
import hackathon from './../logo192.png';
import './eventcard.css';
import { navigate } from '@reach/router';
import './stylesheet.css';

class EventCard extends React.Component{
    render = ()=>{
        return(
            // <div className="content-div">
            //     <div className="eventcard">
                    <div className="card-disp">
                        <div className="img-comp">
                            <img className="event-img" alt="nitin" src={hackathon}/>

                        </div>
                        <div  className="text-comp">
                            <h3>{"title"}</h3>
                            <p>{"fuck jo"}</p>
                            <h3>{"mohan indir sucks his balls -gr"}</h3>
                        </div>
                    </div>
            //     </div>
            // </div>
        )
    }
}

export default EventCard;