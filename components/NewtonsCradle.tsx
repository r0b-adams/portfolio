import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const MASS = 3;
const FRICTION = 0;

const NewtonsCradle = () => {
  const [{ angle }, swing] = useSpring(() => ({ angle: 15 }));

  useEffect(() => {
    swing.start({
      loop: {
        angle: 0,
        reset: true,
        config: { friction: FRICTION, mass: MASS },
      },
    });
  }, []);

  return (
    <div className='flex flex-col items-center justify-evenly'>
      <div className='cradle'>
        <div className='bg-pm-red h-5 rounded w-full relative z-[1]'></div>
        <div className='w-[200px] flex justify-evenly border-top md:w-[300px]'>
          <animated.div
            style={{
              rotate: angle.to((a) => (a < 1 ? 0 : a)),
            }}
            className='w-1/5 flex flex-col justify-center items-center origin-top'
          >
            <div className='bg-pm-yellow w-1 h-20 md:h-32'></div>
            <div className='bg-pm-blue w-full aspect-square rounded-full'></div>
          </animated.div>

          <div className='w-1/5 flex flex-col justify-center items-center'>
            <div className='bg-pm-yellow w-1 h-20 md:h-32'></div>
            <div className='bg-pm-blue w-full aspect-square rounded-full'></div>
          </div>
          <div className='w-1/5 flex flex-col justify-center items-center'>
            <div className='bg-pm-yellow w-1 h-20 md:h-32'></div>
            <div className='bg-pm-blue w-full aspect-square rounded-full'></div>
          </div>
          <div className='w-1/5 flex flex-col justify-center items-center'>
            <div className='bg-pm-yellow w-1 h-20 md:h-32'></div>
            <div className='bg-pm-blue w-full aspect-square rounded-full'></div>
          </div>

          <animated.div
            style={{
              rotate: angle.to((a) => (a > 1 ? 0 : a)),
            }}
            className='w-1/5 flex flex-col justify-center items-center origin-top'
          >
            <div className='bg-pm-yellow w-1 h-20 md:h-32'></div>
            <div className='bg-pm-blue w-full aspect-square rounded-full'></div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default NewtonsCradle;
