import { Link } from 'react-router-dom';
import '../styles/footer.css';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo-main.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer bg-[#171717] text-white">
      <div className="footer-container pt-3 flex flex-col items-center w-full">
        <hr className="mb-[20px] text-[#8a8a8a4d] w-full" />
        <hr className="text-[#8a8a8a4d] w-full" />
        <div className="footer-content flex justify-between items-center w-full max-w-[1200px] py-10 px-4">
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
            <ul className="flex justify-center items-center gap-8">
              <li className="text-white hover:text-[#eecd53] transition-colors duration-300">
                <Link to="/">{t('home')}</Link>
              </li>
              <li className="text-white hover:text-[#eecd53] transition-colors duration-300">
                <Link to="/about">{t('about')}</Link>
              </li>
              <li className="text-white hover:text-[#eecd53] transition-colors duration-300">
                <Link to="/news">{t('news')}</Link>
              </li>
              <li className="text-white hover:text-[#eecd53] transition-colors duration-300">
                <Link to="/sectors">{t('sectors')}</Link>
              </li>
              <li className="text-white hover:text-[#eecd53] transition-colors duration-300">
                <Link to="/faq">{t('faq')}</Link>
              </li>
            </ul>
            <span className="text-sm text-[#c9c9c9]">{t('rights')}</span>
          </div>
          <div className="socials">
            <a
              href="https://www.linkedin.com/company/colonelae/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
