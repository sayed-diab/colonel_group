import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import coltech from '../assets/coltech.png';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { faArrowRight, faBuildingColumns, faChartSimple, faCode, faDatabase, faGaugeHigh, faGlobe, faHandHoldingMedical, faHouseSignal, faObjectUngroup } from '@fortawesome/free-solid-svg-icons';
import one from '../assets/tech_projects/one.png';
import two from '../assets/tech_projects/two.png';
import three from '../assets/tech_projects/three.png';
import four from '../assets/tech_projects/four.png';
import five from '../assets/tech_projects/five.png';
import '../styles/col.css';
const Coltech = () => {
  const { t } = useTranslation();

  return (
    <div className="coltech colgen sec_bg flex flex-col items-center justify-center">
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
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-2xl md:text-6xl font-extrabold text-center"
          >
            {t('coltech.main_page.tech_t1')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-sm px-[30px] !mb-0 max-w-[80ch] text-center text-[#737578]"
          >
            {t('coltech.main_page.tech_p')}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="max-w-[300px] md:max-w-[500px]"
        >
          <img
            src={coltech}
            alt="coltech_logo"
          />
        </motion.div>
      </div>
      <div className="z-10 flex flex-col items-center justify-center my-30">
        <motion.p
          className="text-white text-center text-lg md:text-xl px-[30px] !mb-15 max-w-[60ch]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {t('coltech.main_page.tech_p1')}
        </motion.p>
        <motion.p
          className="text-white text-center  text-lg md:text-xl px-[30px] !mb-15 max-w-[60ch]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {t('coltech.main_page.tech_p2')}
        </motion.p>
        <motion.p
          className="text-white text-center text-lg md:text-xl px-[30px] !mb-15 max-w-[60ch]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {t('coltech.main_page.tech_p3')}
        </motion.p>
        <motion.p
          className="text-[#737578] text-center text-lg md:text-xl px-[30px] !mb-15 max-w-[60ch]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="text-white px-[5px]">{t('coltech.main_page.tech_p4_1')}</span>
          {t('coltech.main_page.tech_p4_2')}
        </motion.p>
      </div>
      <div className="accordion faq z-10 mx-auto max-w-[1000px] flex flex-col  lg:gap-0 items-center justify-center my-20">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white text-2xl text-center md:text-6xl max-w-[15ch] !mb-[50px]"
        >
          {t('coltech.main_page.tech_int_t')}
        </motion.h2>
        <Accordion
          type="single"
          collapsible
          className="w-full text-white flex  items-start md:gap-x-2.5 justify-center px-5 flex-wrap"
        >
          <AccordionItem
            value="faq-1"
            className="w-full"
            data-state="closed"
          >
            <AccordionTrigger className="hover:px-1 !text-sm py-4">{t('coltech.main_page.tech_int_a_t1')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start gap-4 text-balance mt-5 text-white">
              <p>{t('coltech.main_page.tech_int_a_p1')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-2"
          >
            <AccordionTrigger className="hover:px-1 !text-sm py-4">{t('coltech.main_page.tech_int_a_t2')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start gap-4 text-balance mt-5 text-white">
              <p>{t('coltech.main_page.tech_int_a_p2')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-3"
          >
            <AccordionTrigger className="hover:px-1 !text-sm py-4">{t('coltech.main_page.tech_int_a_t3')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start gap-4 text-balance mt-5 text-white">
              <p>{t('coltech.main_page.tech_int_a_p3')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-4"
          >
            <AccordionTrigger className="hover:px-1 !text-sm py-4">{t('coltech.main_page.tech_int_a_t4')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start gap-4 text-balance mt-5 text-white">
              <p>{t('coltech.main_page.tech_int_a_p4')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-5"
          >
            <AccordionTrigger className="hover:px-1 !text-sm py-4">{t('coltech.main_page.tech_int_a_t5')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start gap-4 text-balance mt-5 text-white">
              <p>{t('coltech.main_page.tech_int_a_p5')}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="col_accordion z-10 mt-20">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-white text-2xl md:text-3xl font-bold text-center mt-10"
        >
          {t('coltech.main_page.tech_int_a2_t')}
        </motion.h2>

        <div className="accordion mx-auto max-w-[1000px] flex flex-col md:flex-row lg:gap-0 items-center justify-center mt-20">
          <Accordion
            type="single"
            collapsible
            className="w-full text-white flex  items-start md:gap-x-2.5 justify-center px-5 flex-wrap"
          >
            <AccordionItem
              value="item-1"
              className="arc"
              data-state="closed"
            >
              <AccordionTrigger className="hover:px-1 !text-sm py-4">{t('coltech.main_page.tech_int_a2_t1')}</AccordionTrigger>
              <AccordionContent className="flex flex-col text-start gap-4 text-balance  text-white">
                <p>{t('coltech.main_page.tech_int_a2_p1')}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="arc"
              value="item-2"
            >
              <AccordionTrigger className="hover:px-1 !text-sm py-4">{t('coltech.main_page.tech_int_a2_t2')}</AccordionTrigger>
              <AccordionContent className="flex flex-col text-start gap-4 text-balance text-white">
                <p>{t('coltech.main_page.tech_int_a2_p2')}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="arc"
              value="item-3"
            >
              <AccordionTrigger className="hover:px-1 !text-sm py-4">{t('coltech.main_page.tech_int_a2_t3')}</AccordionTrigger>
              <AccordionContent className="flex flex-col text-start gap-4 text-balance text-white">
                <p>{t('coltech.main_page.tech_int_a2_p3')}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="arc"
              value="item-4"
            >
              <AccordionTrigger className="hover:px-1 !text-sm py-4">{t('coltech.main_page.tech_int_a2_t4')}</AccordionTrigger>
              <AccordionContent className="flex flex-col text-start gap-4 text-balance text-white">
                <p>{t('coltech.main_page.tech_int_a2_p4')}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="w-full"
              value="item-5"
            >
              <AccordionTrigger className="hover:px-1 !text-sm py-4">{t('coltech.main_page.tech_int_a2_t5')}</AccordionTrigger>
              <AccordionContent className="flex flex-col text-start gap-4 text-balance text-white">
                <p>{t('coltech.main_page.tech_int_a2_p5')}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="z-10 sub_pages grid grid-cols-1 md:grid-cols-2 max-w-[1300px] my-30 gap-6">
        <Link
          to="/companies/coltech/aisol"
          className="text-white text-sm inline-block"
        >
          <div className="sub_box rounded-3xl bg-[#1d1b1b8a] px-10 py-6 flex flex-col gap-5">
            <div className="bg-[#332e2e] flex items-center justify-center w-[50px] h-[50px] rounded-xl">
              <FontAwesomeIcon
                icon={faLightbulb}
                className="text-[#006eb4] text-3xl"
              />
            </div>
            <h4 className="text-white text-xl">{t('coltech.main_page.tech_pages_t1')}</h4>
            <p className="text-[#a59e9e] md:h-[160px]">{t('coltech.main_page.tech_pages_p1')}</p>
            <div className="flex items-center gap-x-2">
              {t('coltech.main_page.tech_pages_more')}{' '}
              <span className="text-[#006eb4] learn_btn_tech">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </Link>
        <Link
          to="/companies/coltech/bigdata"
          className="text-white text-sm inline-block"
        >
          <div className="sub_box rounded-3xl bg-[#1d1b1b8a] px-10 py-6 flex flex-col gap-5">
            <div className="bg-[#332e2e] flex items-center justify-center w-[50px] h-[50px] rounded-xl">
              <FontAwesomeIcon
                icon={faDatabase}
                className="text-[#006eb4] text-3xl"
              />
            </div>
            <h4 className="text-white text-xl">{t('coltech.main_page.tech_pages_t2')}</h4>
            <p className="text-[#a59e9e] md:h-[160px]">{t('coltech.main_page.tech_pages_p2')}</p>
            <div className="flex items-center gap-x-2">
              {t('coltech.main_page.tech_pages_more')}
              <span className="text-[#006eb4] learn_btn_tech">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </Link>
        <Link
          to="/companies/coltech/fintech"
          className="text-white text-sm inline-block"
        >
          <div className="sub_box rounded-3xl bg-[#1d1b1b8a] px-10 py-6 flex flex-col gap-5">
            <div className="bg-[#332e2e] flex items-center justify-center w-[50px] h-[50px] rounded-xl">
              <FontAwesomeIcon
                icon={faBuildingColumns}
                className="text-[#006eb4] text-3xl"
              />
            </div>
            <h4 className="text-white text-xl">{t('coltech.main_page.tech_pages_t3')}</h4>
            <p className="text-[#a59e9e] md:h-[160px]">{t('coltech.main_page.tech_pages_p3')}</p>
            <div className="flex items-center gap-x-2">
              {t('coltech.main_page.tech_pages_more')}
              <span className="text-[#006eb4] learn_btn_tech">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </Link>
        <Link
          to="/companies/coltech/inno"
          className="text-white text-sm inline-block"
        >
          <div className="sub_box rounded-3xl bg-[#1d1b1b8a] px-10 py-6 flex flex-col gap-5">
            <div className="bg-[#332e2e] flex items-center justify-center w-[50px] h-[50px] rounded-xl">
              <FontAwesomeIcon
                icon={faHandHoldingMedical}
                className="text-[#006eb4] text-3xl"
              />
            </div>
            <h4 className="text-white text-xl">{t('coltech.main_page.tech_pages_t4')}</h4>
            <p className="text-[#a59e9e] md:h-[160px]">{t('coltech.main_page.tech_pages_p4')}</p>
            <div className="flex items-center gap-x-2">
              {t('coltech.main_page.tech_pages_more')}
              <span className="text-[#006eb4] learn_btn_tech">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </Link>
        <Link
          to="/companies/coltech/internet"
          className="text-white text-sm inline-block"
        >
          <div className="sub_box rounded-3xl bg-[#1d1b1b8a] px-10 py-6 flex flex-col gap-5">
            <div className="bg-[#332e2e] flex items-center justify-center w-[50px] h-[50px] rounded-xl">
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-[#006eb4] text-3xl"
              />
            </div>
            <h4 className="text-white text-xl">{t('coltech.main_page.tech_pages_t5')}</h4>
            <p className="text-[#a59e9e] md:h-[160px]">{t('coltech.main_page.tech_pages_p5')}</p>
            <div className="flex items-center gap-x-2">
              {t('coltech.main_page.tech_pages_more')}
              <span className="text-[#006eb4] learn_btn_tech">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </Link>
        <Link
          to="/companies/coltech/products"
          className="text-white text-sm inline-block"
        >
          <div className="sub_box rounded-3xl bg-[#1d1b1b8a] px-10 py-6 flex flex-col gap-5">
            <div className="bg-[#332e2e] flex items-center justify-center w-[50px] h-[50px] rounded-xl">
              <FontAwesomeIcon
                icon={faHouseSignal}
                className="text-[#006eb4] text-3xl"
              />
            </div>
            <h4 className="text-white text-xl">{t('coltech.main_page.tech_pages_t6')}</h4>
            <p className="text-[#a59e9e] md:h-[160px]">{t('coltech.main_page.tech_pages_p6')}</p>
            <div className="flex items-center gap-x-2">
              {t('coltech.main_page.tech_pages_more')}
              <span className="text-[#006eb4] learn_btn_tech">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </Link>
        <Link
          to="/companies/coltech/projacc"
          className="text-white text-sm inline-block"
        >
          <div className="sub_box rounded-3xl bg-[#1d1b1b8a] px-10 py-6 flex flex-col gap-5">
            <div className="bg-[#332e2e] flex items-center justify-center w-[50px] h-[50px] rounded-xl">
              <FontAwesomeIcon
                icon={faGaugeHigh}
                className="text-[#006eb4] text-3xl"
              />
            </div>
            <h4 className="text-white text-xl">{t('coltech.main_page.tech_pages_t7')}</h4>
            <p className="text-[#a59e9e] md:h-[160px]">{t('coltech.main_page.tech_pages_p7')}</p>
            <div className="flex items-center gap-x-2">
              {t('coltech.main_page.tech_pages_more')}
              <span className="text-[#006eb4] learn_btn_tech">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </Link>
        <Link
          to="/companies/coltech/software"
          className="text-white text-sm inline-block"
        >
          <div className="sub_box rounded-3xl bg-[#1d1b1b8a] px-10 py-6 flex flex-col gap-5">
            <div className="bg-[#332e2e] flex items-center justify-center w-[50px] h-[50px] rounded-xl">
              <FontAwesomeIcon
                icon={faCode}
                className="text-[#006eb4] text-3xl"
              />
            </div>
            <h4 className="text-white text-xl">{t('coltech.main_page.tech_pages_t8')}</h4>
            <p className="text-[#a59e9e] md:h-[160px]">{t('coltech.main_page.tech_pages_p8')}</p>
            <div className="flex items-center gap-x-2">
              {t('coltech.main_page.tech_pages_more')}
              <span className="text-[#006eb4] learn_btn_tech">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </Link>
        <Link
          to="/companies/coltech/solarch"
          className="text-white text-sm inline-block"
        >
          <div className="sub_box rounded-3xl bg-[#1d1b1b8a] px-10 py-6 flex flex-col gap-5">
            <div className="bg-[#332e2e] flex items-center justify-center w-[50px] h-[50px] rounded-xl">
              <FontAwesomeIcon
                icon={faChartSimple}
                className="text-[#006eb4] text-3xl"
              />
            </div>
            <h4 className="text-white text-xl">{t('coltech.main_page.tech_pages_t9')}</h4>
            <p className="text-[#a59e9e] md:h-[160px]">{t('coltech.main_page.tech_pages_p9')}</p>
            <div className="flex items-center gap-x-2">
              {t('coltech.main_page.tech_pages_more')}
              <span className="text-[#006eb4] learn_btn_tech">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </Link>
        <Link
          to="/companies/coltech/sysinter"
          className="text-white text-sm inline-block"
        >
          <div className="sub_box rounded-3xl bg-[#1d1b1b8a] px-10 py-6 flex flex-col gap-5">
            <div className="bg-[#332e2e] flex items-center justify-center w-[50px] h-[50px] rounded-xl">
              <FontAwesomeIcon
                icon={faObjectUngroup}
                className="text-[#006eb4] text-3xl"
              />
            </div>
            <h4 className="text-white text-xl">{t('coltech.main_page.tech_pages_t10')}</h4>
            <p className="text-[#a59e9e] md:h-[160px]">{t('coltech.main_page.tech_pages_p10')}</p>
            <div className="flex items-center gap-x-2">
              {t('coltech.main_page.tech_pages_more')}
              <span className="text-[#006eb4] learn_btn_tech">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </div>
          </div>
        </Link>
      </div>
      <div className="z-10 flex flex-col  w-full md:px-36 overflow-hidden items-center justify-center my-30">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white text-4xl text-center md:text-6xl !mb-[50px]"
        >
          {t('coltech.main_page.tech_work')}
        </motion.h2>
        <div className="col_exp grid grid-cols-1 md:grid-cols-2 px-6 gap-2.5 md:px-32">
          <img
            className="exp_img rounded-2xl"
            src={one}
            alt="exp"
          />
          <img
            className="exp_img rounded-2xl"
            src={two}
            alt="exp"
          />
          <img
            className="exp_img rounded-2xl"
            src={three}
            alt="exp"
          />
          <img
            className="exp_img rounded-2xl"
            src={four}
            alt="exp"
          />
          <img
            className="exp_img rounded-2xl"
            src={five}
            alt="exp"
          />
        </div>
      </div>
      <div className="accordion faq z-10 mx-auto max-w-[1000px] flex flex-col  lg:gap-0 items-center justify-center my-20">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white text-4xl text-center md:text-6xl !mb-[50px]"
        >
          {t('coltech.main_page.tech_faq_t')}
        </motion.h2>
        <Accordion
          type="single"
          collapsible
          className="w-full text-white flex !text-xs md:text-sm items-start md:gap-x-2.5 justify-center px-5 flex-wrap"
        >
          <AccordionItem
            value="faq-1"
            className="w-full"
          >
            <AccordionTrigger className="hover:px-1 text-xs md:!text-sm py-4">{t('coltech.main_page.tech_faq_t1')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start !text-xs md:text-sm gap-4 text-balance mt-5 text-white">
              <p>{t('coltech.main_page.tech_faq_p1_1')}</p>
              <p>{t('coltech.main_page.tech_faq_p1_2')}</p>
              <p>{t('coltech.main_page.tech_faq_p1_3')}</p>
              <p>{t('coltech.main_page.tech_faq_p1_4')}</p>
              <p>{t('coltech.main_page.tech_faq_p1_5')}</p>
              <p>{t('coltech.main_page.tech_faq_p1_6')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-2"
          >
            <AccordionTrigger className="hover:px-1 text-xs md:!text-sm py-4">{t('coltech.main_page.tech_faq_t2')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start !text-xs md:text-sm  gap-4 text-balance mt-5 text-white">
              <p>{t('coltech.main_page.tech_faq_p2_1')}</p>
              <p>{t('coltech.main_page.tech_faq_p2_2')}</p>
              <p>{t('coltech.main_page.tech_faq_p2_3')}</p>
              <p>{t('coltech.main_page.tech_faq_p2_4')}</p>
              <p>{t('coltech.main_page.tech_faq_p2_5')}</p>
              <p>{t('coltech.main_page.tech_faq_p2_6')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-3"
          >
            <AccordionTrigger className="hover:px-1 text-xs md:!text-sm py-4">{t('coltech.main_page.tech_faq_t3')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start !text-xs md:text-sm gap-4 text-balance mt-5 text-white">
              <p>{t('coltech.main_page.tech_faq_p3_1')}</p>
              <p>{t('coltech.main_page.tech_faq_p3_2')}</p>
              <p>{t('coltech.main_page.tech_faq_p3_3')}</p>
              <p>{t('coltech.main_page.tech_faq_p3_4')}</p>
              <p>{t('coltech.main_page.tech_faq_p3_5')}</p>
              <p>{t('coltech.main_page.tech_faq_p3_6')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-4"
          >
            <AccordionTrigger className="hover:px-1 text-xs md:!text-sm py-4">{t('coltech.main_page.tech_faq_t4')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start !text-xs md:text-sm gap-4 text-balance mt-5 text-white">
              <p>{t('coltech.main_page.tech_faq_p4_1')}</p>
              <p>{t('coltech.main_page.tech_faq_p4_2')}</p>
              <p>{t('coltech.main_page.tech_faq_p4_3')}</p>
              <p>{t('coltech.main_page.tech_faq_p4_4')}</p>
              <p>{t('coltech.main_page.tech_faq_p4_5')}</p>
              <p>{t('coltech.main_page.tech_faq_p4_6')}</p>
              <p>{t('coltech.main_page.tech_faq_p4_7')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-5"
          >
            <AccordionTrigger className="hover:px-1 text-xs md:!text-sm py-4">{t('coltech.main_page.tech_faq_t5')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start !text-xs md:text-sm gap-4 text-balance mt-5 text-white">
              <p>{t('coltech.main_page.tech_faq_p5_1')}</p>
              <p>{t('coltech.main_page.tech_faq_p5_2')}</p>
              <p>{t('coltech.main_page.tech_faq_p5_3')}</p>
              <p>{t('coltech.main_page.tech_faq_p5_4')}</p>
              <p>{t('coltech.main_page.tech_faq_p5_5')}</p>
              <p>{t('coltech.main_page.tech_faq_p5_6')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-6"
          >
            <AccordionTrigger className="hover:px-1 text-xs md:!text-sm py-4">{t('coltech.main_page.tech_faq_t6')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start !text-xs md:text-sm gap-4 text-balance mt-5 text-white">
              <p>{t('coltech.main_page.tech_faq_p6_1')}</p>
              <p>{t('coltech.main_page.tech_faq_p6_2')}</p>
              <p>{t('coltech.main_page.tech_faq_p6_3')}</p>
              <p>{t('coltech.main_page.tech_faq_p6_4')}</p>
              <p>{t('coltech.main_page.tech_faq_p6_5')}</p>
              <p>{t('coltech.main_page.tech_faq_p6_6')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-7"
          >
            <AccordionTrigger className="hover:px-1 text-xs md:!text-sm py-4">{t('coltech.main_page.tech_faq_t7')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start !text-xs md:text-sm gap-4 text-balance mt-5 text-white">
              <p>{t('coltech.main_page.tech_faq_p7_1')}</p>
              <p>{t('coltech.main_page.tech_faq_p7_2')}</p>
              <p>{t('coltech.main_page.tech_faq_p7_3')}</p>
              <p>{t('coltech.main_page.tech_faq_p7_5')}</p>
              <p>{t('coltech.main_page.tech_faq_p7_6')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-8"
          >
            <AccordionTrigger className="hover:px-1 text-xs md:!text-sm py-4">{t('coltech.main_page.tech_faq_t8')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start !text-xs md:text-sm gap-4 text-balance mt-5 text-white">
              <p>{t('coltech.main_page.tech_faq_p8_1')}</p>
              <p>{t('coltech.main_page.tech_faq_p8_2')}</p>
              <p>{t('coltech.main_page.tech_faq_p8_3')}</p>
              <p>{t('coltech.main_page.tech_faq_p8_5')}</p>
              <p>{t('coltech.main_page.tech_faq_p8_6')}</p>
              <p>{t('coltech.main_page.tech_faq_p8_7')}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Coltech;
