import Head from 'next/head';
import Image from 'next/image';
import type { NextPage } from 'next/types';
import { useEffect } from 'react';
import { useTrail, useSpring, animated } from 'react-spring';
import SkillBadge from '../components/SkillBadge';

const lgs = ['typescript', 'javascript', 'html', 'css'];
const fts = [
  'react',
  'redux',
  'next',
  'jquery',
  'mui',
  'tailwind',
  'bootstrap',
  'materialize',
];
const bks = [
  'node',
  'express',
  'mysql',
  'postgresql',
  'sequelize',
  'mongodb',
  'mongoose',
];
const dvs = ['git', 'github', 'heroku', 'vercel'];

const ResumeSpring: React.FC<{}> = () => {
  const [{ y }, spring] = useSpring(() => ({ y: 0.25 }));
  useEffect(() => {
    spring.start({
      y: 1,
      config: {
        mass: 1,
        tension: 125,
        friction: 3,
      },
    });
  }, []);

  return (
    <div className='flex flex-col items-center relative pb-10'>
      <div className='h-2 bg-pm-blue w-32' />
      <animated.svg
        style={{ scaleY: y.to((y) => y) }}
        id='spring'
        className='origin-top'
        width='50px'
        height='100px'
        viewBox='0 0 210 297'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill='none'
          stroke='#c7c7c7'
          strokeOpacity='1'
          strokeWidth='8px'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M 105,-61.5 0,-40.5 H 210 L 0,1.5 H 210 L 0,43.5 H 210 L 0,85.5 h 210 l -210,42 h 210 l -210,42 h 210 l -210,42 h 210 l -210,42 h 210 l -210,42 h 210 l -210,42 h 210 l -105,21 v 0 0'
        />
      </animated.svg>

      <animated.div
        style={{ translateY: y.to((y) => 100 * y - 100) }}
        className='py-1 px-3 mb-5 relative z-[2] border rounded bg-white'
      >
        <a
          href='https://docs.google.com/document/d/19xx33HJgE1exxapGl27CtC0BB-9VG4i79WCdg-UFkfk/edit?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
          className='font-semibold '
        >
          Resume
        </a>
        <div className='origin-center h-1 bg-pm-red' />
      </animated.div>
    </div>
  );
};

const About: NextPage = () => {
  const [avatar, avAPI] = useSpring(() => ({ scale: 0, opacity: 0 }));
  const [lg, lgAPI] = useTrail(lgs.length, () => ({ opacity: 0, y: 20 }));
  const [ft, ftAPI] = useTrail(fts.length, () => ({ opacity: 0, y: 20 }));
  const [bk, bkAPI] = useTrail(bks.length, () => ({ opacity: 0, y: 20 }));
  const [dv, dvAPI] = useTrail(dvs.length, () => ({ opacity: 0, y: 20 }));

  useEffect(() => {
    lgAPI.start({ opacity: 1, y: 0 });
    ftAPI.start({ opacity: 1, y: 0 });
    bkAPI.start({ opacity: 1, y: 0 });
    dvAPI.start({ opacity: 1, y: 0 });
  }, []);

  return (
    <>
      <Head>
        <title>{'Robert Adams | About'}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='container'>
        <h1 className='my-5 text-3xl sm:text-5xl md:text-7xl font-bold'>
          About
        </h1>

        <div className='md:flex'>
          <div className='flex flex-col items-center pt-8 md:w-1/3'>
            <animated.div style={avatar}>
              <div className='rounded-full'>
                <Image
                  onLoadingComplete={() =>
                    avAPI.start({ scale: 1, opacity: 1 })
                  }
                  src='/images/avatar.jpg'
                  alt='avatar'
                  layout='intrinsic'
                  height={164}
                  width={164}
                  className='avatar rounded-full'
                />
              </div>
            </animated.div>
            <h2 className='py-4 pb-1 text-xl font-bold lg:text-3xl'>
              Robert Adams
            </h2>
            <p className='text-gray-600'>Software Engineer</p>
            <ResumeSpring />
          </div>

          <div className='md:w-2/3 space-y-5'>
            <p>
              Following a successful start to a career specializing in the
              repair and modification of avionics equipment, the shifting nature
              of the industry led me to realize that I needed to make a change
              in order to find a more challenging, dynamic, and fulfilling
              opportunity.
            </p>
            <p>
              Immersing myself in programming has really solidified my
              appreciation for what I find rewarding: learning new things,
              problem solving, and helping build something tangible. I’m eager
              and excited to contribute my skills to a collaborative environment
              and I look forward to learning more!
            </p>

            <div className='space-y-2'>
              <h3 className='font-semibold'>Languages</h3>
              <div>
                <ul className='flex flex-wrap'>
                  {lg.map((style, idx) => (
                    <animated.li key={lgs[idx]} style={style}>
                      <SkillBadge icon={lgs[idx]} size={20} />
                    </animated.li>
                  ))}
                </ul>
              </div>

              <h3 className='font-semibold'>Front-End</h3>
              <div>
                <ul className='flex flex-wrap'>
                  {ft.map((style, idx) => (
                    <animated.li key={fts[idx]} style={style}>
                      <SkillBadge icon={fts[idx]} size={20} />
                    </animated.li>
                  ))}
                </ul>
              </div>

              <h3 className='font-semibold'>Back-End</h3>
              <div>
                <ul className='flex flex-wrap'>
                  {bk.map((style, idx) => (
                    <animated.li key={bks[idx]} style={style}>
                      <SkillBadge icon={bks[idx]} size={20} />
                    </animated.li>
                  ))}
                </ul>
              </div>

              <h3 className='font-semibold'>DevOps</h3>
              <div>
                <ul className='flex flex-wrap'>
                  {dv.map((style, idx) => (
                    <animated.li key={dvs[idx]} style={style}>
                      <SkillBadge icon={dvs[idx]} size={20} />
                    </animated.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
