import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import loc from './../maps-and-flags.png'
 
const AnyReactComponent = ({ text }) => <img src={loc} style={{height:'20px',width:'20px'}}></img>;
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: "AIzaSyC-9MbkfsOTr2OKxote-YJzqIsq-FnBUdU"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="centroid"
          />
          <AnyReactComponent
            lat={59.945413}
            lng={30.337844}
            text="data point"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;