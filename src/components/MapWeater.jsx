// https://tile.openweathermap.org/map/{layer}/{z}/{x}/{y}.png?appid=

import { useEffect, useState } from "react";

const MapWeater = () => {
  const [map, setMap] = useState();
  const fetchMap = async () => {
    try {
      const response = await fetch(
        `https://tile.openweathermap.org/map/precipitation_new/25/10/10.png?appid=96b5e7127c7d577f64d2826b0fa80050`
      );
      setMap(response.url);
      console.log(response);
      //   if (response.ok) {
      //     const data = await response.json();
      //     console.log(data);
      //   } else {
      //     console.log("qualcosa è andato storto");
      //   }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMap();
  }, []);

  return (
    <>
      <h2>map</h2>
      <img src={map} alt="" />
    </>
  );
};
export default MapWeater;
