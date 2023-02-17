import { Form, FloatingLabel, Button, Row, Col } from "react-bootstrap";
import countrys from "../contry/country.json";
import { useState } from "react";
import { useDispatch } from "react-redux";
const InputForm = () => {
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const dispatch = useDispatch();
  const search = (e) => {
    e.preventDefault();
    console.log("city", city);
    console.log("county", country);
    dispatch({
      type: "SAVE_CITY",
      payload: city,
    });
    dispatch({
      type: "SAVE_COUNTRY",
      payload: country,
    });
  };
  return (
    <>
      <Row className="mt-4">
        <Form onSubmit={search}>
          <Row className="row-cols-1 row-cols-sm-3">
            <Col className="my-1">
              <FloatingLabel controlId="floatingInput" label="City Name" className="h-100">
                <Form.Control
                  type="textemail"
                  placeholder="City Name here"
                  onChange={(e) => setCity(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col className="my-1">
              <Form.Select
                className="h-100"
                aria-label="Default select example"
                onChange={(e) => setCountry(e.target.value)}
              >
                <option>select the country</option>
                {countrys.map((el, i) => (
                  <option key={i} value={el.Code}>
                    {el.Name}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col className="my-1" lg={3} xl={2}>
              <Button type="submit" className="searchBtn h-100 w-100">
                <i className="bi bi-search"></i> Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </>
  );
};
export default InputForm;
