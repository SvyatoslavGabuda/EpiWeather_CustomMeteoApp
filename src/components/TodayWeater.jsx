import { Row, Col } from "react-bootstrap";
import { millisecondsToHours } from "date-fns";

const TodayWeater = ({ meteo }) => {
  const sunrise = millisecondsToHours(meteo.sys.sunrise);
  return (
    <>
      <Row className="justify-content-center align-items-center h-100 ">
        <h2 className="align-self-start">Today:</h2>
        <Col xs={5}>
          <Row>
            <img
              className="w-100 iconW"
              src={`/assets/icons/${meteo?.weather[0]?.icon}.png`}
              alt="weather icon"
            />
          </Row>
        </Col>
        <Col>
          <Row>
            <h4>
              <i className="bi bi-globe"></i> {meteo?.weather[0]?.description}
            </h4>
            <p className="temp">
              Temperature:
              <strong>
                <span>
                  {" "}
                  <i className="bi bi-thermometer-half"></i>
                  {Math.floor(meteo.main.temp - 273.15)}°C
                </span>
              </strong>
            </p>
            <p className="temp">
              Pressure: <strong>{meteo?.main?.pressure}(Pa)</strong>
            </p>
            <p className="temp">
              Humidity: <strong>{meteo.main.humidity}%</strong>
            </p>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default TodayWeater;
