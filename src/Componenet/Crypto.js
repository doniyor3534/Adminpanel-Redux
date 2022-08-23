import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { useSelector } from 'react-redux/es/exports';


const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
          {payload.value}
        </text>
      </g>
    );
  }
}



const Crypto = () => {
  const { cryptocardmass } = useSelector(state => state)
  return (
    <div className='cryptopage'>
      <div className="cryptoHome">
        <h1>Crypto</h1>
        <div className="cryptocards">
          {
            cryptocardmass.map((val) => (
              <div className="cryptoCard" key={val.id}>
                <h6>{val.name}</h6>
                <div className="cryptocardbody">
                  <ResponsiveContainer width={100} height={100} >
                    <LineChart
                      data={data}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <Line dataKey="pv" stroke="#8884d8" />
                      <Line dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                  <div className="cryptocardbodyrigh">
                    <h6>{val.sena}</h6>
                    <p>{val.foiz}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

      </div>

    </div>
  );
};

export default Crypto;