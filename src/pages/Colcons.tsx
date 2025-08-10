import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import colcons from '../assets/colcons.png';
import '../styles/col.css';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import one from '../assets/cons_projects/one.png';
import two from '../assets/cons_projects/two.png';
import three from '../assets/cons_projects/three.png';
import four from '../assets/cons_projects/four.png';
import five from '../assets/cons_projects/five.png';
const Colcons = () => {
  const { t } = useTranslation();
  return (
    <div className="colcons colgen sec_bg flex flex-col items-center justify-center">
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
            className="text-2xl md:text-5xl font-extrabold text-center"
          >
            {t('colcons.main_page.cons_t1')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-sm md:text-lg px-[30px] !mb-0 max-w-[80ch] text-center text-[#737578]"
          >
            {t('colcons.main_page.cons_p1')}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="max-w-[500px]"
        >
          <img
            src={colcons}
            alt="colcons_logo"
          />
        </motion.div>
      </div>
      <div className="z-10 flex flex-col items-center justify-center">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white max-w-[25ch] text-center text-xl md:text-3xl px-[30px] !mb-0"
        >
          {t('colcons.main_page.cons_t2')}
        </motion.h3>
        <div className="flex flex-col items-start justify-start max-w-[1200px] my-20 px-[30px]">
          <p className="text-white font-bold text-2xl !mb-2.5">{t('colcons.main_page.cons_p2_1')}</p>
          <p className="text-[#737578] font-light text-xl max-w-[80ch]">{t('colcons.main_page.cons_p2_2')}</p>
          <p className="text-white font-bold text-2xl !mb-2.5">{t('colcons.main_page.cons_p3_1')}</p>
          <p className="text-[#737578] font-light  text-xl max-w-[80ch]">{t('colcons.main_page.cons_p3_2')}</p>
        </div>
      </div>
      <div className="col_why_ch cons z-10 flex flex-col  w-full  md:px-36  items-center justify-center mt-40 mb-30">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white  text-4xl md:text-6xl !mb-[40px]"
        >
          {t('colcons.main_page.cons_what_t')}
        </motion.h2>
        <div className="why_wrapper flex flex-wrap items-center justify-center gap-5">
          <div className="box rounded-2xl border border-[#ffffff1a] p-5 bg-transparent">
            <h4 className="text-white">{t('colcons.main_page.cons_what_t1')}</h4>
            <p className="text-[#c9c9c9] max-w-[60ch] ">{t('colcons.main_page.cons_what_p1')}</p>
          </div>
          <div className="box rounded-2xl border border-[#ffffff1a] p-5 bg-transparent">
            <h4 className="text-white">{t('colcons.main_page.cons_what_t2')}</h4>
            <p className="text-[#c9c9c9] max-w-[60ch] ">{t('colcons.main_page.cons_what_p2')}</p>
          </div>
          <div className="box rounded-2xl border border-[#ffffff1a] p-5 bg-transparent">
            <h4 className="text-white">{t('colcons.main_page.cons_what_t3')}</h4>
            <p className="text-[#c9c9c9] max-w-[60ch] ">{t('colcons.main_page.cons_what_p3')}</p>
          </div>
          <div className="box rounded-2xl border border-[#ffffff1a] p-5 bg-transparent">
            <h4 className="text-white">{t('colcons.main_page.cons_what_t4')}</h4>
            <p className="text-[#c9c9c9] max-w-[60ch] ">{t('colcons.main_page.cons_what_p4')}</p>
          </div>
        </div>
      </div>
      <div className="meth z-10 flex flex-col rounded-3xl  items-center justify-center border border-[#ffffff1a] px-10 py-5 md:px-20 bg-transparent mt-5 mb-20 mx-[30px]">
        <p className="text-white font-bold">{t('colcons.main_page.cons_meth_t')}</p>
        <p className="text-[#737578] ">{t('colcons.main_page.cons_meth_p1')}</p>
        <p className="text-[#737578] ">{t('colcons.main_page.cons_meth_p2')}</p>
        <p className="text-[#737578] ">{t('colcons.main_page.cons_meth_p3')}</p>
        <p className="text-[#737578] ">{t('colcons.main_page.cons_meth_p4')}</p>
      </div>
      <div className="cons_serv z-10 flex flex-col items-center justify-center my-30">
        <motion.h3
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white max-w-[25ch] text-center text-3xl md:text-5xl !mb-0 md:!mb-15"
        >
          {t('colcons.main_page.cons_serv_t')}
        </motion.h3>
        <div className="flex flex-col items-start justify-start max-w-[1200px] my-20 px-[30px]">
          <p className="text-white font-bold text-sm md:text-2xl !mb-2.5">{t('colcons.main_page.cons_serv_t1')}</p>
          <p className="text-[#737578] font-light text-xs md:text-xl max-w-[80ch]">{t('colcons.main_page.cons_serv_p1')}</p>
          <p className="text-white font-bold text-sm md:text-2xl !mb-2.5">-{t('colcons.main_page.cons_serv_t2')}</p>
          <p className="text-[#737578] font-light text-xs  md:text-xl max-w-[80ch]">{t('colcons.main_page.cons_serv_p2_1')}</p>
          <p className="text-[#737578] font-light text-xs  md:text-xl max-w-[80ch]">{t('colcons.main_page.cons_serv_p2_2')}</p>
          <p className="text-white font-bold text-sm md:text-2xl !mb-2.5">{t('colcons.main_page.cons_serv_t3')}</p>
          <p className="text-[#737578] font-light text-xs  md:text-xl max-w-[80ch]">{t('colcons.main_page.cons_serv_p3_1')}</p>
          <p className="text-[#737578] font-light text-xs  md:text-xl max-w-[80ch]">{t('colcons.main_page.cons_serv_p3_2')}</p>
          <p className="text-white font-bold text-sm md:text-2xl !mb-2.5">{t('colcons.main_page.cons_serv_t4')}</p>
          <p className="text-[#737578] font-light text-xs  md:text-xl max-w-[80ch]">{t('colcons.main_page.cons_serv_p4_1')}</p>
          <ul>
            <li>
              <p className="text-[#737578] font-light  md:text-xl max-w-[80ch] !mb-1 px-3">{t('colcons.main_page.cons_serv_ul_1')}</p>
            </li>
            <li>
              <p className="text-[#737578] font-light  md:text-xl max-w-[80ch] !mb-1 px-3">{t('colcons.main_page.cons_serv_ul_2')}</p>
            </li>
            <li>
              <p className="text-[#737578] font-light  md:text-xl max-w-[80ch] !mb-1 px-3">{t('colcons.main_page.cons_serv_ul_3')}</p>
            </li>
            <li>
              <p className="text-[#737578] font-light  md:text-xl max-w-[80ch] !mb-1 px-3">{t('colcons.main_page.cons_serv_ul_4')}</p>
            </li>
          </ul>
          <p className="text-[#737578] font-light text-xs  md:text-xl max-w-[80ch]">{t('colcons.main_page.cons_serv_p4_2')}</p>
          <p className="text-white font-bold text-sm md:text-2xl !mb-2.5">{t('colcons.main_page.cons_serv_t5')}</p>
          <p className="text-[#737578] font-light text-xs  md:text-xl max-w-[80ch]">{t('colcons.main_page.cons_serv_p5_1')}</p>
        </div>
      </div>
      <div className="z-10 flex flex-col  w-full md:px-36 overflow-hidden items-center justify-center my-30">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white text-xl text-center md:text-6xl !mb-[50px]"
        >
          {t('colcons.main_page.cons_works')}
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
          {t('colcons.main_page.cons_faq_t')}
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
            <AccordionTrigger className="hover:px-1 !text-xs md:!text-sm py-4">{t('colcons.main_page.cons_faq_t1')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-xs text-start  gap-4 text-balance mt-5 text-white">
              <p>{t('colcons.main_page.cons_faq_p1_1')}</p>
              <p>{t('colcons.main_page.cons_faq_p1_2')}</p>
              <p>{t('colcons.main_page.cons_faq_p1_3')}</p>
              <p>{t('colcons.main_page.cons_faq_p1_4')}</p>
              <p>{t('colcons.main_page.cons_faq_p1_5')}</p>
              <p>{t('colcons.main_page.cons_faq_p1_6')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-2"
          >
            <AccordionTrigger className="hover:px-1 !text-xs md:!text-sm py-4">{t('colcons.main_page.cons_faq_t2')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-xs text-start gap-4 text-balance mt-5 text-white">
              <p>{t('colcons.main_page.cons_faq_p2_1')}</p>
              <p>{t('colcons.main_page.cons_faq_p2_2')}</p>
              <p>{t('colcons.main_page.cons_faq_p2_3')}</p>
              <p>{t('colcons.main_page.cons_faq_p2_4')}</p>
              <p>{t('colcons.main_page.cons_faq_p2_5')}</p>
              <p>{t('colcons.main_page.cons_faq_p2_6')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-3"
          >
            <AccordionTrigger className="hover:px-1 !text-xs md:!text-sm py-4">{t('colcons.main_page.cons_faq_t3')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-xs text-start gap-4 text-balance mt-5 text-white">
              <p>{t('colcons.main_page.cons_faq_p3_1')}</p>
              <p>{t('colcons.main_page.cons_faq_p3_2')}</p>
              <p>{t('colcons.main_page.cons_faq_p3_3')}</p>
              <p>{t('colcons.main_page.cons_faq_p3_4')}</p>
              <p>{t('colcons.main_page.cons_faq_p3_5')}</p>
              <p>{t('colcons.main_page.cons_faq_p3_6')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-4"
          >
            <AccordionTrigger className="hover:px-1 !text-xs md:!text-sm py-4">{t('colcons.main_page.cons_faq_t4')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-xs text-start gap-4 text-balance mt-5 text-white">
              <p>{t('colcons.main_page.cons_faq_p4_1')}</p>
              <p>{t('colcons.main_page.cons_faq_p4_2')}</p>
              <p>{t('colcons.main_page.cons_faq_p4_3')}</p>
              <p>{t('colcons.main_page.cons_faq_p4_4')}</p>
              <p>{t('colcons.main_page.cons_faq_p4_5')}</p>
              <p>{t('colcons.main_page.cons_faq_p4_6')}</p>
              <p>{t('colcons.main_page.cons_faq_p4_7')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-5"
          >
            <AccordionTrigger className="hover:px-1 !text-xs md:!text-sm py-4">{t('colcons.main_page.cons_faq_t5')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-xs text-start gap-4 text-balance mt-5 text-white">
              <p>{t('colcons.main_page.cons_faq_p5_1')}</p>
              <p>{t('colcons.main_page.cons_faq_p5_2')}</p>
              <p>{t('colcons.main_page.cons_faq_p5_3')}</p>
              <p>{t('colcons.main_page.cons_faq_p5_4')}</p>
              <p>{t('colcons.main_page.cons_faq_p5_5')}</p>
              <p>{t('colcons.main_page.cons_faq_p5_6')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-6"
          >
            <AccordionTrigger className="hover:px-1 !text-xs md:!text-sm py-4">{t('colcons.main_page.cons_faq_t6')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-xs text-start gap-4 text-balance mt-5 text-white">
              <p>{t('colcons.main_page.cons_faq_p6_1')}</p>
              <p>{t('colcons.main_page.cons_faq_p6_2')}</p>
              <p>{t('colcons.main_page.cons_faq_p6_3')}</p>
              <p>{t('colcons.main_page.cons_faq_p6_4')}</p>
              <p>{t('colcons.main_page.cons_faq_p6_5')}</p>
              <p>{t('colcons.main_page.cons_faq_p6_6')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-7"
          >
            <AccordionTrigger className="hover:px-1 !text-xs md:!text-sm py-4">{t('colcons.main_page.cons_faq_t7')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-xs text-start gap-4 text-balance mt-5 text-white">
              <p>{t('colcons.main_page.cons_faq_p7_1')}</p>
              <p>{t('colcons.main_page.cons_faq_p7_2')}</p>
              <p>{t('colcons.main_page.cons_faq_p7_3')}</p>
              <p>{t('colcons.main_page.cons_faq_p7_5')}</p>
              <p>{t('colcons.main_page.cons_faq_p7_6')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-8"
          >
            <AccordionTrigger className="hover:px-1 !text-xs md:!text-sm py-4">{t('colcons.main_page.cons_faq_t8')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-xs text-start gap-4 text-balance mt-5 text-white">
              <p>{t('colcons.main_page.cons_faq_p8_1')}</p>
              <p>{t('colcons.main_page.cons_faq_p8_2')}</p>
              <p>{t('colcons.main_page.cons_faq_p8_3')}</p>
              <p>{t('colcons.main_page.cons_faq_p8_5')}</p>
              <p>{t('colcons.main_page.cons_faq_p8_6')}</p>
              <p>{t('colcons.main_page.cons_faq_p8_7')}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Colcons;
