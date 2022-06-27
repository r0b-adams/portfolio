import Link from 'next/link';
import { useTrail, animated, config } from 'react-spring';
import { useEffect } from 'react';

const data = [
  { stroke: '#FDDE06', id: 'yellow', d: 'M 3.7271811,2 V 23' },
  { stroke: '#E70503', id: 'red', d: 'M 3.7271811,2 21.343297,22.53033' },
  {
    stroke: '#0300AD',
    id: 'blue',
    d: 'm 3.7271811,2 h 6.4999999 c 2.643593,2e-7 4.624355,1.1435937 5.696152,3 1.071797,1.8564065 1.071797,4.1435935 0,6 -1.071797,1.856405 -3.052559,3 -5.696152,3 H 8.7271811',
  },
];

const Logo: React.FC = () => {
  const [trail, api] = useTrail(data.length, () => ({ x: 0 }));

  useEffect(() => {
    api.start({ x: 1, config: config.molasses });
  }, []);

  return (
    <Link href='/'>
      <a className='h-[50px] aspect-square lg:h-[100px] relative z-50'>
        <svg
          id='logo'
          className='h-full w-full'
          width='24.0px'
          height='24.0px'
          viewBox='0 0 24.0 24.0'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          {trail.map(({ x }, idx) => (
            <animated.path
              fill='none'
              key={data[idx].id}
              id={data[idx].id}
              d={data[idx].d}
              stroke={data[idx].stroke}
              strokeWidth='2'
              strokeDasharray={100}
              strokeDashoffset={x.to((x) => (1 - x) * 100)}
            />
          ))}
        </svg>
      </a>
    </Link>
  );
};

export default Logo;
