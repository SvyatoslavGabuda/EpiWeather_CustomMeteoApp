import { ListGroup } from "react-bootstrap";
import format from "date-fns/format";
const WeekWeater = ({ fiveMeteo }) => {
  return (
    <>
      <h2>Next five days:</h2>
      <ListGroup className="weekWeater">
        {fiveMeteo.map((el, i) => (
          <ListGroup.Item key={i} className="weeksDay">
            <img
              className="icona"
              src={`${process.env.PUBLIC_URL}/assets/icons/${el.weather[0].icon}.png`}
              alt="weather icon"
            />{" "}
            - {format(new Date(el.dt_txt), "d (E) MMM k:mm")} - {Math.floor(el.main.temp - 273.15)}
            °C - {el.weather[0].description}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};
export default WeekWeater;
