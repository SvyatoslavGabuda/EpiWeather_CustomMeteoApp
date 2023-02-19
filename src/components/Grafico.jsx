import {
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";
// import Line from "reacharts"
import format from "date-fns/format";
const Grafico = (props) => {
  const newArr = props.fiveMeteo;

  const serve = newArr.map((el) => {
    return {
      time: format(new Date(el.dt_txt), "d MMM k:mm"),
      temp: Math.floor(el.main.temp - 273.15),
    };
  });
  //   console.log(serve);

  return (
    <>
      <h2>Temperature {props.period}:</h2>
      <ResponsiveContainer width="100%" height={230}>
        <AreaChart
          width={500}
          height={400}
          data={serve}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 10,
          }}
        >
          <Area type="monotone" dataKey="temp" stroke="#ccc" fill="#000000" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 15" vertical="false" />
          <XAxis stroke="#000000" dataKey="time" />

          <YAxis
            stroke="#000000"
            label={{ value: "Temperature in °C", angle: -90, position: "Left" }}
          />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};
export default Grafico;
