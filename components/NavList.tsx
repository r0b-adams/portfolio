import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTrail, useSprings, animated } from 'react-spring';

const data = [
  { name: 'projects', color: '#0300AD' },
  { name: 'about', color: '#E70503' },
  { name: 'contact', color: '#FDDE06' },
];

const NavList: React.FC = (): JSX.Element => {
  const router = useRouter();

  const linkTrail = useTrail(data.length, {
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 },
  });

  const routeStyles = useSprings(
    data.length,
    data.map((item) => ({
      from: { width: '0%', backgroundColor: item.color },
      to: { width: router.pathname === `/${item.name}` ? '100%' : '0%' },
    }))
  );

  return (
    <nav className='hidden md:block'>
      <ul className='flex space-x-12 font-semibold text-lg'>
        {linkTrail.map((mountStyle, idx) => (
          <animated.li
            key={data[idx].name}
            style={mountStyle}
            className='first-letter:uppercase'
          >
            <div
              className={
                router.pathname === `/${data[idx].name}`
                  ? 'pointer-events-none duration-100'
                  : 'hover:scale-125 duration-100'
              }
            >
              <Link href={`/${data[idx].name}`}>
                <a>{data[idx].name}</a>
              </Link>
              <animated.div
                style={routeStyles[idx]}
                className='h-2'
              ></animated.div>
            </div>
          </animated.li>
        ))}
      </ul>
    </nav>
  );
};

export default NavList;
