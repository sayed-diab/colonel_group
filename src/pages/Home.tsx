import { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../styles/home.css';
import '../i18n';
import { useTranslation } from 'react-i18next';
import one from '../assets/groups/one-g.png';
import two from '../assets/groups/two-g.png';
import three from '../assets/groups/three-g.png';
import four from '../assets/groups/four-g.png';
import Marquee from '../components/Marquee';
import Cube from '../components/Cube';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import P1 from '../assets/features/p1.jpg';
import Marquee2 from '../components/Marquee2';
import minivid from '../assets/features/mini-vid.mp4';
import certificate from '../assets/features/certficate.png';
import ceo from '../assets/ceo.jpg';
import Lottie from 'lottie-react';
import loto_one from '../assets/Increase.json';
import loto_two from '../assets/Network.json';
import Loader from '../components/Loader';
import networkAR from '../assets/v1QQ66VY7B7RGu5DeY8EPEZ0s4.webp';
import networkEN from '../assets/78bAWdOWyyxGI46CcjagvqAWE4w.png';
import Ball from '../components/Ball';
declare global {
  interface Window {
    FinisherHeader?: new (options: object) => unknown;
  }
}

export default function HeroFinisher() {
  const { t } = useTranslation();
  useEffect(() => {
    if (window.FinisherHeader) {
      new window.FinisherHeader({
        count: 6,
        size: {
          min: 1193,
          max: 1500,
          pulse: 0,
        },
        speed: {
          x: {
            min: 0.1,
            max: 0.6,
          },
          y: {
            min: 0.1,
            max: 0.6,
          },
        },
        colors: {
          background: '#000000',
          particles: ['#e3ab00', '#000000', '#c7c9db', '#000000', '#e1de0f'],
        },
        blending: 'screen',
        opacity: {
          center: 0.8,
          edge: 0.05,
        },
        skew: 0,
        shapes: ['c'],
      });
    }
  }, []);

  return (
    <main className="relative">
      <div className="relative">
        <div
          className="finisher-header "
          style={{ width: '100%', height: '120vh' }}
        >
          <div className="hero_info z-10 flex items-start md:-mt-70 md:h-[120vh] flex-col  md:pb-50 mx-10  md:mx-40">
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.4,
                scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
              }}
              viewport={{ once: true }}
              className="z-10 flag text-white bg-neutral-800 rounded-4xl border-amber-300 border-1 py-2 px-3 mb-15"
            >
              {t('flag')}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.4,
                scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
              }}
              viewport={{ once: true }}
              className=" z-10 text-3xl md:text-5xl text-white font-bold mb-20"
            >
              {t('logo')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                delay: 1,
                duration: 0.6,
                // scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
              }}
              viewport={{ once: true }}
              className="z-10 max-w-[65ch] text-white text-sm md:text-md leading-6"
            >
              {t('hero_paragraph')}
            </motion.p>
            <div className="hero_imgs flex flex-col md:flex-row  mx-auto gap-10 md:gap-4 justify-center items-center  relative  mb-10">
              <motion.ul className="groups_ flex z-10">
                <motion.li
                  initial={{ opacity: 0, x: -13 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 1.5,
                    duration: 1.5,
                    // scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
                  }}
                >
                  <img
                    src={one}
                    alt="logo-one"
                    loading="lazy"
                  />
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 1.5,
                    duration: 1.5,
                    // scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
                  }}
                >
                  <img
                    src={two}
                    alt="logo-one"
                    loading="lazy"
                  />
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -17 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 1.5,
                    duration: 1.5,
                    // scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
                  }}
                >
                  <img
                    src={three}
                    alt="logo-one"
                    loading="lazy"
                  />
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -19 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 1.5,
                    duration: 1.5,
                    // scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
                  }}
                >
                  <img
                    src={four}
                    alt="logo-one"
                    loading="lazy"
                  />
                </motion.li>
              </motion.ul>
              <motion.p
                initial={{ opacity: 0, filter: 'blur(20px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{
                  delay: 1,
                  duration: 0.9,
                  // scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
                }}
                viewport={{ once: true }}
                className="mb-0! z-10 text-white "
              >
                {t('groups_paragraph')}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <Marquee />
      <div className="cube-container flex flex-col md:flex-row px-[65px] md:px-[30px] items-center justify-center gap-10 md:gap-36 mt-20 mb-20">
        <div className="cube_info flex flex-col max-w-[65ch]">
          <motion.h2
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.4,
              scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
            }}
            viewport={{ once: true }}
            className="text-white  max-w-[65ch] text-3xl"
          >
            {t('cube_title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{
              delay: 1,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="text-[#737578]  mt-4"
          >
            {t('cube_paragraph')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{
              delay: 1,
              duration: 0.6,
            }}
            viewport={{ once: true }}
          >
            <Link
              className="text-white learn_btn"
              to="/sectors"
            >
              {t('cube_button')}
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </motion.div>
        </div>
        <Cube />
      </div>
      <div className="flex flex-col p-5 items-center justify-center mt-[300px] mb-[100px]">
        <motion.h2
          initial={{ opacity: 0, filter: 'blur(20px)', scale: 0 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.7,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
          }}
          viewport={{ once: true }}
          className="text-white  max-w-[26ch] text-3xl md:text-4xl text-center !mb-[100px] font-bold"
        >
          {t('features_title')}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.7,
            scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <div className="features flex max-w-[1100px] items-center justify-center gap-2">
            <div className="box_one flex flex-col md:flex-row  h-fit md:h-[350px]  gap-5 border border-[#977408] rounded-2xl p-5 overflow-hidden">
              <h3 className="text-white text-2xl font-bold">{t('features_news')}</h3>
              <motion.div
                initial={{ opacity: 0, y: -200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                  scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
                }}
                viewport={{ once: true }}
                className="flex flex-col items-start justify-center max-w-fit md:w-[400px] md:mx-20"
              >
                <img
                  src={P1}
                  alt="featured_p1"
                  loading="lazy"
                  className="rounded w-full md:w-[400px] h-[200px] object-cover mb-3"
                />
                <p className="text-[#c9c9c9] mb-2.5 text-sm">{t('features_p1_p')}</p>
                <p className="text-white font-bold ">{t('features_p1_p2')}</p>
              </motion.div>
            </div>
            <div className="box_two flex flex-col h-fit md:h-[350px] border-1 border-[#977408] rounded-2xl p-5 overflow-hidden">
              <h3 className="text-white text-2xl font-bold">{t('features_p3_t')}</h3>
              <p className="text-[#c9c9c9]">{t('features_p3_p')}</p>
              <Marquee2 />
            </div>
          </div>
          <div className="features flex max-w-[1100px] items-center justify-center gap-2 mt-[10px]">
            <div className="box_one flex  flex-col md:flex-row h-fit md:h-[230px]  gap-5 border-1 border-[#977408] rounded-2xl p-5 overflow-hidden">
              <div className="feature_info flex flex-col">
                <h3 className="text-white text-2xl font-bold">{t('features_p2_t')}</h3>
                <p className="text-[#c9c9c9] mb-2.5">{t('features_p2_p')}</p>
              </div>
              <video
                className="w-[100%] md:min-w-[60%] object-cover"
                src={minivid}
                autoPlay
                loop
                muted
              ></video>
            </div>
            <div className="box_two flex  flex-col  h-fit md:h-[230px] border-1 border-[#977408] rounded-2xl p-5 overflow-hidden">
              <div className="feature_info flex flex-col">
                <h3 className="text-white text-2xl font-bold">{t('features_p4_t')}</h3>
                <p className="text-[#c9c9c9] mb-2.5">{t('features_p4_p')}</p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.4,
                }}
                viewport={{ once: true }}
                className="certificates w-[100%] overflow-hidden"
              >
                <img
                  src={certificate}
                  alt="certificate"
                  loading="lazy"
                  className="w-[100%]  h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col justify-center items-center mb-[200px]">
        <motion.p className="p-5 text-white  text-xl md:max-w-[120ch] text-center">{t('quotes')}</motion.p>
        <div className="quotes_info flex gap-4">
          <div className="flex flex-col items-center justify-center rounded-full bg-white w-[64px] h-[64px]">
            <img
              src={ceo}
              alt="Ceo of Colonel Group"
              loading="lazy"
              className="rounded-full w-[60px] h-[60px] object-cover"
            />
          </div>
          <span className="text-white my-auto">{t('quotes_info')}</span>
        </div>
      </div>
      <div className="lead flex flex-col items-center justify-center mt-[100px] mb-[200px]">
        <motion.h2
          initial={{ opacity: 0, filter: 'blur(20px)', scale: 0 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="text-white  max-w-[26ch] text-3xl md:text-4xl text-center !mb-[150px] md:mb-50 font-bold"
        >
          {t('com_leading_t')}
        </motion.h2>
        <div className="card_one flex flex-col max-w-[1100px] md:flex-row items-center justify-center p-5 md:gap-20">
          <div className="card_info flex flex-col items-center md:items-start justify-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.4,
                scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
              }}
              viewport={{ once: true }}
              className="text-white  max-w-[65ch] text-3xl "
            >
              {t('companies_1')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                delay: 1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="text-[#737578] max-w-[64ch] text-center md:text-start mt-4"
            >
              {t('com_leading_p1')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
              viewport={{ once: true }}
            >
              <Link
                className="text-white learn_btn"
                to="/companies/colcons"
              >
                {t('cube_button')}
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="lotto  w-[300px] md:w-[600px]"
          >
            <Lottie
              animationData={loto_one}
              loop={true}
              className=" w-full h-full"
            />
          </motion.div>
        </div>
        <div className="card_one flex flex-col-reverse max-w-[1100px] md:flex-row items-center justify-center p-5 gap-10 md:gap-20 mb-[50px] md:mb-[0px]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="lotto  w-[300px] md:w-[600px] "
          >
            <Lottie
              animationData={loto_two}
              loop={true}
              className=" w-full h-full"
            />
          </motion.div>
          <div className="card_info flex flex-col items-center md:items-start justify-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.4,
                scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
              }}
              viewport={{ once: true }}
              className="text-white  max-w-[65ch] text-3xl "
            >
              {t('companies_2')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                delay: 1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="text-[#737578] max-w-[64ch] text-center md:text-start mt-4"
            >
              {t('com_leading_p2')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
              viewport={{ once: true }}
            >
              <Link
                className="text-white learn_btn"
                to="/companies/colgen"
              >
                {t('cube_button')}
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="card_one flex flex-col max-w-[1100px] md:flex-row items-center justify-center p-5 md:gap-20">
          <div className="card_info flex flex-col items-center md:items-start justify-center">
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.4,
                scale: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
              }}
              viewport={{ once: true }}
              className="text-white  max-w-[65ch] text-3xl "
            >
              {t('companies_3')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                delay: 1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="text-[#737578] max-w-[64ch] text-center md:text-start mt-4"
            >
              {t('com_leading_p3')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
              viewport={{ once: true }}
            >
              <Link
                className="text-white learn_btn"
                to="/companies/coltech"
              >
                {t('cube_button')}
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="lotto mt-[50px] md:mt-[100px] w-[300px] md:w-[600px] flex items-center justify-center"
          >
            <Loader />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col max-w-[1100px] items-center justify-center mx-auto mb-[100px]">
        <motion.h2
          initial={{ opacity: 0, filter: 'blur(20px)', scale: 0 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="text-white  max-w-[26ch] text-3xl md:text-4xl text-center !mb-[100px] md:mb-[100px] font-bold"
        >
          {t('head_network')}
        </motion.h2>
        <div className="network">
          <motion.img
            initial={{ opacity: 0, filter: 'blur(20px)', scale: 0 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="network AR"
            src={networkAR}
            alt="network"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="network EN"
            src={networkEN}
            alt="network"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center p-5 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, filter: 'blur(20px)', scale: 0 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="text-white  max-w-[26ch] text-2xl md:text-4xl text-center !mb-[100px] md:mb-[100px] font-bold"
        >
          {t('stratgy')}
        </motion.h2>
        <div className="flex gap-10 md:gap-20 items-center justify-center flex-wrap ">
          <motion.div
            initial={{ opacity: 0, filter: 'blur(20px)', scale: 0 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="stratgy_card text-white p-5 flex flex-col items-center justify-center"
          >
            <motion.h3 className="text-center text-xl md:text-4xl">{t('stratgy_t1')}</motion.h3>
            <motion.p className="text-center md:text-xl  max-w-[26ch] md:max-w-[64ch] text-[#c9c9c9]">{t('stratgy_p1')}</motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(20px)', scale: 0 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            transition={{
              delay: 0.7,
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="stratgy_card text-white p-5 flex flex-col items-center justify-center"
          >
            <motion.h3 className="text-center text-xl md:text-4xl">{t('stratgy_t2')}</motion.h3>
            <motion.p className="text-center md:text-xl max-w-[26ch] md:max-w-[64ch] text-[#c9c9c9]">{t('stratgy_p2')}</motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(20px)', scale: 0 }}
            whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            transition={{
              delay: 0.9,
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="stratgy_card text-white p-5 flex flex-col items-center justify-center"
          >
            <motion.h3 className="text-center text-xl md:text-4xl">{t('stratgy_t3')}</motion.h3>
            <motion.p className="text-center md:text-xl max-w-[26ch] md:max-w-[64ch] text-[#c9c9c9]">{t('stratgy_p3')}</motion.p>
          </motion.div>
        </div>
      </div>
      <div className="why flex flex-col max-w-[1100px] items-center justify-center p-5 overflow-hidden mx-auto my-[100px]">
        <motion.h2
          initial={{ opacity: 0, filter: 'blur(20px)', scale: 0 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="text-white  max-w-[26ch] text-3xl md:text-4xl text-center font-bold"
        >
          {t('why_t')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, filter: 'blur(20px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{
            delay: 0.6,
            duration: 0.6,
          }}
          viewport={{ once: true }}
          className="text-[#737578] max-w-[64ch] text-center !mb-[100px]"
        >
          {t('why_p')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 0.6,
          }}
          viewport={{ once: true }}
          className="why_wrapper grid grid-cols-1 w-full md:grid-cols-2 gap-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="why_box rounded-2xl border border-[#704536b3] p-5 text-white"
          >
            <motion.h4
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                delay: 0.7,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="font-bold text-2xl"
            >
              {t('why_t1')}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="text-[#D9D9D9]"
            >
              {t('why_p1')}
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.7,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="why_box rounded-2xl border border-[#704536b3] p-5 text-white"
          >
            <motion.h4
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="font-bold text-2xl"
            >
              {t('why_t2')}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                delay: 0.9,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="text-[#D9D9D9]"
            >
              {t('why_p2')}
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="why_box rounded-2xl border border-[#704536b3] p-5 text-white"
          >
            <motion.h4
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                delay: 0.9,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="font-bold text-2xl"
            >
              {t('why_t3')}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                delay: 1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="text-[#D9D9D9]"
            >
              {t('why_p3')}
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="why_box rounded-2xl border border-[#704536b3] p-5 text-white"
          >
            <motion.h4
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                delay: 1,
                duration: 0.6,
              }}
              className="font-bold text-2xl"
            >
              {t('why_t4')}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                delay: 1.1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="text-[#D9D9D9]"
            >
              {t('why_p4')}
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1,
              duration: 0.6,
            }}
            viewport={{ once: true }}
            className="why_box rounded-2xl border border-[#704536b3] p-5 text-white"
          >
            <motion.h4
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                delay: 1.1,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="font-bold text-2xl"
            >
              {t('why_t5')}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{
                delay: 1.2,
                duration: 0.6,
              }}
              viewport={{ once: true }}
              className="text-[#D9D9D9]"
            >
              {t('why_p5')}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
      <div className="contact_container "></div>
    </main>
  );
}
