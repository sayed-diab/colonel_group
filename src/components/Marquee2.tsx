import P2 from '../assets/features/marquee/p2.webp';
import P3 from '../assets/features/marquee/p3.webp';
import P4 from '../assets/features/marquee/p4.webp';
import P5 from '../assets/features/marquee/p5.webp';
import P6 from '../assets/features/marquee/p6.webp';
import P7 from '../assets/features/marquee/p7.webp';
import P8 from '../assets/features/marquee/p8.webp';

import FastMarquee from 'react-fast-marquee';

const Marquee2 = () => {
  return (
    <FastMarquee
      gradient={true}
      gradientColor={'#171717'}
      gradientWidth={20}
      speed={100}
      className="features-marquee"
    >
      <img
        src={P2}
        alt="col-logos"
        loading="lazy"
      />
      <img
        src={P3}
        alt="col-logos"
        loading="lazy"
      />
      <img
        src={P4}
        alt="col-logos"
        loading="lazy"
      />
      <img
        src={P5}
        alt="col-logos"
        loading="lazy"
      />
      <img
        src={P6}
        alt="col-logos"
        loading="lazy"
      />
      <img
        src={P7}
        alt="col-logos"
        loading="lazy"
      />
      <img
        src={P8}
        alt="col-logos"
        loading="lazy"
      />
    </FastMarquee>
  );
};

export default Marquee2;
