import React from 'react';
import Particles from './particles';
import './stylesheet.css';
import Card from './card';
import MapComp from './map';
// import {Grid} from 'semantic-ui-react';

class Home extends React.Component{
    state={
        
    }
    render = ()=>{
        return(
            <div>
                <Particles/>
                <div className="wrapper">
                    <h1 style={{color:"white",fontSize:'2.5rem',padding:15,margin:0}}>Hop Me</h1>
                    <div className="disp">
                        <div className="flex">
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>

                        </div>
                        <div className="flex1">
                            <MapComp/>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Home;