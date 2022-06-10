import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from './Header';
import Footer from './Footer';

import { useTransition, animated } from 'react-spring';

const Layout: React.FC<{
  page: JSX.Element | JSX.Element[];
}> = ({ page }) => {
  const [show, set] = useState(false);

  useEffect(() => {
    window.onscroll = (_e) => {
      if (window.scrollY < 200) set(() => false);
      else set(() => true);
    };
  }, []);

  const pageTransition = useTransition(page, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
  });

  const btnTransition = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className='flex flex-col min-h-screen'>
      <Header />

      {pageTransition((style, nextPage) => (
        <animated.main
          style={style}
          className='flex grow hide-scrollbar w-[95%] m-auto lg:w-full'
        >
          {nextPage}
        </animated.main>
      ))}

      {btnTransition(
        (style, visible) =>
          visible && (
            <animated.button
              onClick={scrollToTop}
              style={style}
              className='fixed h-16 w-16 bottom-3 right-3 rounded-full flex items-center justify-center lg:hidden'
            >
              <Image src='/icons/upIcon.svg' alt='' layout='fill' />
            </animated.button>
          )
      )}

      <Footer />
    </div>
  );
};

export default Layout;
