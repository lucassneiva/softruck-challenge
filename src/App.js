import car from './cars.png';
import './App.css';
import data from './frontend_data_gps.json';
import { useEffect, useState } from 'react';

// top={positionLong} left={positionLat}

function App() {
  const [positionLat, setPositionLat] = useState([]);

  const [positionLong, setPositionLong] = useState([]);

  useEffect(() => {
    getPos();
    console.log(positionLong, 'oi')
  }, [positionLat, positionLong]);

  // const getStyle = () => {
    let style = {
      width: "1em",
      height: "1em",
      position: "absolute",
      top: positionLong,
      left: positionLat,
      backgroundColor: "red"
    }
  // }
  
  const getPos = () => {
    const infos = data.courses[0].gps;
    infos.forEach(el => setPositionLong(...positionLong, el.longitude) );
    infos.forEach(el => setPositionLat(...positionLat, el.latitude) );
    console.log(positionLong, 'ooooooooooooo')
  };

  return (
    <div>
      <header>
        <div>
        <img src={car} className="car-sprite" alt="logo" style={style}/>
        </div>
          {/* { infos.map(({ courses: { gps: el } }) => <p> {el.longitude} </p>)} */}
      </header>
    </div>
  );
}

export default App;
