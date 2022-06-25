import { useTypewriter, Cursor } from 'react-simple-typewriter';

const IntroSubtitle = () => {
  const { text } = useTypewriter({
    words: [
      'Software Engineer',
      'Human Person',
      'Programmer',
      'Always Learning',
      'Web Developer',
      'Just Getting Started',
    ],
    loop: true,
  });

  return (
    <h2 className='text-2xl md:text-4xl inline-block'>
      {text}
      <Cursor />
    </h2>
  );
};

export default IntroSubtitle;
