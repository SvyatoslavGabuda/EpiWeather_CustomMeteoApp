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
  console.log(newArr);

  const serve = newArr.map((el) => {
    return {
      time: format(new Date(el.dt_txt), "d MMM k:mm"),
      temp: Math.floor(el.main.temp - 273.15),
    };
  });
  console.log(serve);

  return (
    <>
      <h2>Temperature in the next five days:</h2>
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
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};
export default Grafico;
