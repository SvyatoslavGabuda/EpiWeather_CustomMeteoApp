import { Container } from "react-bootstrap";
import InputForm from "./InputForm";
import WeatherFetch from "./WeatherFetch";

const Home = () => {
  return (
    <>
      <Container className="home">
        <InputForm />

        <WeatherFetch />
      </Container>
    </>
  );
};
export default Home;
