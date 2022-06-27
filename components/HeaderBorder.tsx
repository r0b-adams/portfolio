import { useRouter } from 'next/router';
import { useSprings, animated } from 'react-spring';

const data: { color: string; widths: { [key: string]: string } }[] = [
  {
    color: '#0300AD',
    widths: { '/projects': '100%', '/about': '33%', '/contact': '66%' },
  },
  {
    color: '#E70503',
    widths: { '/projects': '66%', '/about': '100%', '/contact': '33%' },
  },
  {
    color: '#FDDE06',
    widths: { '/projects': '33%', '/about': '66%', '/contact': '100%' },
  },
];

const HeaderBorder = () => {
  const router = useRouter();

  const springs = useSprings(
    data.length,
    data.map((item) => ({
      from: { width: '0%', backgroundColor: item.color },
      to: { width: item.widths[router.pathname] ?? '100%' },
    }))
  );

  return (
    <div className='space-y-1'>
      {springs.map((style, idx) => (
        <animated.div key={idx} style={style} className='h-2 relative z-10' />
      ))}
    </div>
  );
};

export default HeaderBorder;
