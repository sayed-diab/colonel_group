import { Link } from 'react-router-dom';
import '../styles/footer.css';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo-main.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import Ball from '../components/Ball';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../styles/footer.css';
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer contact_container bg-[#171717] text-white ">
      <div className="max-w-[1200px] flex flex-col-reverse md:flex-row mx-auto items-center justify-center pt-[100px] pb-[100px] gap-10">
        <div className="contact_info p-5 md:w-1/2 text-white  flex flex-col ">
          <motion.h3 className=" font-bold  text-lg md:text-2xl">{t('contact_w')}</motion.h3>
          <motion.p className="px-3 text-xs md:text-lg text-[#c9c9c9]">{t('contact_p1')}</motion.p>
          <motion.p className="px-3 text-xs md:text-lg text-[#c9c9c9]">{t('contact_p2')}</motion.p>
          <motion.p className="px-3 text-xs md:text-lg text-[#c9c9c9]">{t('contact_p3')}</motion.p>
          <motion.p className="px-3  text-xs md:text-lg text-[#c9c9c9] !mb-4">{t('contact_p4')}</motion.p>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(20px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{
              delay: 0.8,
              duration: 0.6,
            }}
            viewport={{ once: true }}
          >
            <Link
              className="text-white learn_btn !text-xs md:!text-sm "
              to="/careers"
            >
              {t('contact_b')}
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </motion.div>
        </div>
        <Ball />
      </div>
      <div className="footer-container  flex flex-col items-center w-full">
        {/* <hr className="mb-[20px] text-[#8a8a8a4d] w-full" /> */}
        <hr className="!border-[#463d3d75] mb-[30px] w-full" />
        <div className="footer-content flex flex-col gap-5 md:flex-row justify-between items-center w-full max-w-[1200px] pb-10 md:pb-10 md:py-10 md:px-4">
          <div className="footer-logo">
            <Link to="/">
              <img
                src={logo}
                alt="Colonel Group Logo"
                className="w-[150px] h-[50px] object-contain"
              />
            </Link>
          </div>
          <div className="footer-links flex flex-col justify-center items-center">
            <ul className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8">
              <li className="text-white text-sm hover:text-[#eecd53] transition-colors duration-300">
                <Link to="/">{t('home')}</Link>
              </li>
              <li className="text-white text-sm hover:text-[#eecd53] transition-colors duration-300">
                <Link to="/about">{t('about')}</Link>
              </li>
              <li className="text-white text-sm hover:text-[#eecd53] transition-colors duration-300">
                <Link to="/news">{t('news')}</Link>
              </li>
              <li className="text-white text-sm hover:text-[#eecd53] transition-colors duration-300">
                <Link to="/sectors">{t('sectors')}</Link>
              </li>
              <li className="text-white text-sm hover:text-[#eecd53] transition-colors duration-300">
                <Link to="/faq">{t('faq')}</Link>
              </li>
            </ul>
            <span className="text-xs text-[#c9c9c9]">{t('rights')}</span>
            <a
              href="https://sayed-dev.vercel.app/"
              target="_blank"
              className="mt-6 hidden md:block"
            >
              <span className="text-xs text-[#494545]">created By</span> <span className="text-xs text-[#c9c9c9] hover:underline font-bold">Diab</span>
            </a>
          </div>
          <a
            href="https://www.linkedin.com/company/colonelae/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="socials rounded-md border border-[#ddd] py-1.5 px-1.5">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white"
              />
            </div>
          </a>
          <a
            href="https://sayed-dev.vercel.app/"
            target="_blank"
            className="mt-6 block md:hidden"
          >
            <span className="text-xs text-[#494545]">created By</span> <span className="text-xs text-[#c9c9c9] hover:underline font-bold">Diab</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
