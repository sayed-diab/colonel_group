import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import one from '../assets/news_posts/one.jpg';
import two from '../assets/news_posts/two.webp';
import three from '../assets/news_posts/three.jpg';
import four from '../assets/news_posts/four.jpg';
import five from '../assets/news_posts/five.jpg';
import six from '../assets/news_posts/six.webp';
import '../styles/col.css';
import { Link } from 'react-router-dom';
const News = () => {
  const { t } = useTranslation();
  return (
    <div className="news coltech colgen sec_bg flex flex-col items-center justify-center ">
      <div
        className="framer-say9z1"
        data-framer-name="Background"
      >
        <div
          className="framer-19uo04l"
          style={{ transform: 'perspective(1200px)' }}
        ></div>
        <div className="framer-1he43a3-container">
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'rgb(0, 0, 0)',
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='24' height='40' viewBox='0 0 24 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40c5.523 0 10-4.477 10-10V0C4.477 0 0 4.477 0 10v30zm22 0c-5.523 0-10-4.477-10-10V0c5.523 0 10 4.477 10 10v30z' fill='%23171717' fill-rule='evenodd'/%3E%3C/svg%3E\")",
              backgroundSize: '129.6px 216px',
              borderRadius: 0,
            }}
          ></div>
        </div>
      </div>
      <div className="col_head z-10 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center text-white mt-[60px]">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold !mt-20"
          >
            {t('col_news.main_page.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="!mb-20 text-[#737578] text-lg"
          >
            {t('col_news.main_page.subtitle')}
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 grid-col max-w-[1440px] gap-5 mb-30">
            <Link to="/news/colpart">
              <div className="news_box  flex flex-col gap-2.5 px-5  md:p-0">
                <div className="img_card overflow-hidden rounded-t-4xl">
                  <img
                    src={one}
                    alt="#"
                  />
                  <span className="date rounded-2xl bg-[#151616] text-white px-2.5 py-1">FEB - 4 - 2025</span>
                </div>
                <div className="flex flex-col justify-center items-center text-white px-5 py-4 bg-[#151616] rounded-2xl">
                  <p className="!mb-0 text-sm">{t('col_news.main_page.news_1')}</p>
                </div>
              </div>
            </Link>
            <Link to="/news/colsigns">
              <div className="news_box  flex flex-col gap-2.5 px-5  md:p-0">
                <div className="img_card overflow-hidden rounded-t-4xl">
                  <img
                    src={two}
                    alt="#"
                  />
                  <span className="date rounded-2xl bg-[#151616] text-white px-2.5 py-1">JAN - 4 - 2025</span>
                </div>
                <div className="flex flex-col justify-center items-center text-white px-5 py-4 bg-[#151616] rounded-2xl">
                  <p className="!mb-0 text-sm">{t('col_news.main_page.news_2')}</p>
                </div>
              </div>
            </Link>
            <Link to="/news/colexp">
              <div className="news_box  flex flex-col gap-2.5 px-5  md:p-0">
                <div className="img_card overflow-hidden rounded-t-4xl">
                  <img
                    src={three}
                    alt="#"
                  />
                  <span className="date rounded-2xl bg-[#151616] text-white px-2.5 py-1">JAN - 4 - 2025</span>
                </div>
                <div className="flex flex-col justify-center items-center text-white px-5 py-4 bg-[#151616] rounded-2xl">
                  <p className="!mb-0 text-sm">{t('col_news.main_page.news_3')}</p>
                </div>
              </div>
            </Link>
            <Link to="/news/colroot">
              <div className="news_box  flex flex-col gap-2.5 px-5  md:p-0">
                <div className="img_card overflow-hidden rounded-t-4xl">
                  <img
                    src={four}
                    alt="#"
                  />
                  <span className="date rounded-2xl bg-[#151616] text-white px-2.5 py-1">NOV - 7 - 2024</span>
                </div>
                <div className="flex flex-col justify-center items-center text-white px-5 py-4 bg-[#151616] rounded-2xl">
                  <p className="!mb-0 text-sm">{t('col_news.main_page.news_4')}</p>
                </div>
              </div>
            </Link>
            <Link to="/news/coltar">
              <div className="news_box  flex flex-col gap-2.5 px-5  md:p-0">
                <div className="img_card overflow-hidden rounded-t-4xl">
                  <img
                    src={five}
                    alt="#"
                  />
                  <span className="date rounded-2xl bg-[#151616] text-white px-2.5 py-1">OCT - 7 - 2024</span>
                </div>
                <div className="flex flex-col justify-center items-center text-white px-5 py-4 bg-[#151616] rounded-2xl">
                  <p className="!mb-0 text-sm">{t('col_news.main_page.news_5')}</p>
                </div>
              </div>
            </Link>
            <Link to="/news/colhik">
              <div className="news_box  flex flex-col gap-2.5 px-5  md:p-0">
                <div className="img_card overflow-hidden rounded-t-4xl">
                  <img
                    src={six}
                    alt="#"
                  />
                  <span className="date rounded-2xl bg-[#151616] text-white px-2.5 py-1">JAN - 1 - 2025</span>
                </div>
                <div className="flex flex-col justify-center items-center text-white px-5 py-4 bg-[#151616] rounded-2xl">
                  <p className="!mb-0 text-sm">{t('col_news.main_page.news_6')}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
