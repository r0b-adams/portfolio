import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSpring, useSprings, animated } from 'react-spring';

type MenuProps = {
  active: boolean;
  handleToggle: () => void;
};

const data = [
  { path: 'projects', color: '#0300AD' },
  { path: 'about', color: '#E70503' },
  { path: 'contact', color: '#FDDE06' },
];

const NavOverlay: React.FC<MenuProps> = ({ active, handleToggle }) => {
  const path = useRouter().pathname.substring(1);

  const overlay = useSpring({
    from: { x: '100%', opacity: 0 },
    to: { x: active ? '0%' : '100%', opacity: active ? 1 : 0 },
  });

  const links = useSprings(
    data.length,
    data.map((item) => ({
      from: { borderBottomColor: 'transparent', borderBottomWidth: 4 },
      to: {
        borderBottomColor: path === item.path ? item.color : 'transparent',
      },
    }))
  );

  return (
    <animated.div
      style={overlay}
      className='fixed flex justify-center items-center top-0 bottom-0 left-0 right-0 bg-white z-10'
    >
      <nav>
        <ul className='font-bold text-3xl space-y-5 md:space-y-10'>
          {links.map((style, idx) => (
            <animated.li
              key={idx}
              style={style}
              className={
                path === data[idx].path
                  ? 'first-letter:uppercase pointer-events-none'
                  : 'first-letter:uppercase'
              }
            >
              <Link href={`/${data[idx].path}`}>
                <a onClick={handleToggle}>{data[idx].path}</a>
              </Link>
            </animated.li>
          ))}
        </ul>
      </nav>
    </animated.div>
  );
};

export default NavOverlay;
