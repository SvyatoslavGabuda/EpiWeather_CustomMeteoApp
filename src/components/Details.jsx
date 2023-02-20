import { Row, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import TodayWeater from "./TodayWeater";
import WeekWeater from "./WeekWeater";
import Grafico from "./Grafico";
import { intervalToDuration } from "date-fns";
import { useEffect } from "react";
import format from "date-fns/format";
const Details = () => {
  const meteoOne = useSelector((state) => state.meteoOneDay);
  const meteoFive = useSelector((state) => state.meteoFiveDays);
  //   let sunRise = [];
  //   if (meteoFive.length > 0) {
  //     sunRise = intervalToDuration({ start: 0, end: meteoOne.sys.sunrise });
  //   }
  //   useEffect(() => {
  //     if (meteoFive.length > 0) {
  //       sunRise = intervalToDuration({ start: 0, end: meteoOne.sys.sunrise });
  //     }
  //   }, [meteoOne, meteoFive]);

  return (
    <>
      {meteoFive.length > 0 && (
        <Container>
          <Row className="mt-3">
            <h2>{meteoOne.name} meteo details:</h2>
          </Row>
          <Row>
            <Row className="justify-content-center align-items-center h-100 ">
              <Col xs={5}>
                <Row>
                  <img
                    className="w-100 iconW"
                    src={`/assets/icons/${meteoOne.weather[0]?.icon}.png`}
                    alt="weather icon"
                  />
                </Row>
              </Col>
              <Col>
                <Row>
                  <h4>
                    <i className="bi bi-globe"></i> {meteoOne.weather[0]?.description}
                  </h4>
                  <p className="temp">
                    Temperature:
                    <strong>
                      <span>
                        {" "}
                        <i className="bi bi-thermometer-half"></i>
                        {Math.floor(meteoOne.main.temp - 273.15)}°C
                      </span>
                    </strong>
                  </p>
                  <p className="temp">
                    Pressure: <strong>{meteoOne.main?.pressure}(Pa)</strong>
                  </p>
                  <p className="temp">
                    Humidity: <strong>{meteoOne.main.humidity}%</strong>
                  </p>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  {" "}
                  Max Temperature: <strong>{Math.floor(meteoOne.main.temp_max - 273.15)}°C</strong>
                </p>
                <p>
                  {" "}
                  Min Temperature: <strong>{Math.floor(meteoOne.main.temp_min - 273.15)}°C</strong>
                </p>
              </Col>
              <Col>
                <p>
                  SunRise:
                  <strong> {format(new Date(meteoOne.sys.sunrise * 1000), "kk:mm")}</strong>
                </p>
                <p>
                  SunSet: <strong> {format(new Date(meteoOne.sys.sunset * 100), "kk:mm")}</strong>
                </p>
              </Col>
              <Col>
                <p>
                  Wind Direction: <strong>{meteoOne.wind.deg}°</strong>
                </p>
                <p>
                  Wind speed: <strong>{meteoOne.wind.speed} km/h</strong>
                </p>
              </Col>
            </Row>
          </Row>

          <Row>
            <Col>
              {meteoFive && (
                <Grafico period="in the next 24 hours" fiveMeteo={meteoFive.slice(0, 9)} />
              )}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
export default Details;
