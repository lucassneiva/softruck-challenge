import car from './cars.png';
import './App.css';
import data from './frontend_data_gps.json';
import { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';

function App(props) {

  const [positionLat, setPositionLat] = useState([]);
  
  const [positionLong, setPositionLong] = useState([]);
  
  useEffect(() => {
    getPos();
    console.log(positionLong, 'oi')
    console.log(positionLat, 'ola')
  }, [positionLat, positionLong]);
  
    // let style = {
    //   width: "1em",
    //   height: "1em",
    //   position: "absolute",
    //   top: positionLong,
    //   left: positionLat,
    //   backgroundColor: "red"
    // }
    
    const getPos = () => {
      const infos = data.courses[0].gps;
      infos.map(el => setPositionLong(el.longitude) );
      infos.map(el => setPositionLat(el.latitude) );
      console.log(positionLong, 'ooooooooooooo')
    };
    
    const Car = () => <img src={car} className="car-sprite" alt="car"/>;

  return (
    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: *** }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
        <Car lat={positionLat} lng={positionLong}/>
        </GoogleMapReact>
          {/* { infos.map(({ courses: { gps: el } }) => <p> {el.longitude} </p>)} */}
    </div>
  );
}

App.defaultProps = {
  center: {
    lat: -23.91,
    lng: -46.27
  },
  zoom: 15
};

export default App;
