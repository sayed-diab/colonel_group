import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import colgen from '../assets/colgen.png';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import '../styles/col.css';
import one from '../assets/exp_gen/onee.png';
import two from '../assets/exp_gen/twoo.png';
import three from '../assets/exp_gen/three.png';
import four from '../assets/exp_gen/fourr.png';
import five from '../assets/exp_gen/fivee.png';
import ColMarq from '../components/ColMarq';
const Colgen = () => {
  const { t } = useTranslation();
  return (
    <div className="colgen sec_bg flex flex-col items-center justify-center">
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
            className="text-3xl md:text-5xl font-extrabold text-center"
          >
            {t('colgen.main_page.col_t')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg px-[30px] !mb-0 text-center text-[#737578]"
          >
            {t('colgen.main_page.col_p')}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="max-w-[500px]"
        >
          <img
            src={colgen}
            alt="colgen_logo"
          />
        </motion.div>
      </div>
      <div className="col_accordion z-10 mt-20">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-white text-2xl md:text-3xl font-bold text-center mt-10"
        >
          {t('colgen.main_page.col_w')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-lg text-center text-[#737578] max-w-[320px] md:max-w-[800px] mx-auto mt-4"
        >
          {t('colgen.main_page.col_w_p')}
        </motion.p>
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
              <AccordionTrigger className="hover:px-1">{t('colgen.main_page.col_a1_t')}</AccordionTrigger>
              <AccordionContent className="flex flex-col text-start gap-4 text-balance  text-white">
                <p>{t('colgen.main_page.col_a1_p')}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="arc"
              value="item-2"
            >
              <AccordionTrigger className="hover:px-1">{t('colgen.main_page.col_a2_t')}</AccordionTrigger>
              <AccordionContent className="flex flex-col text-start gap-4 text-balance text-white">
                <p>{t('colgen.main_page.col_a2_p1')}</p>
                <p>{t('colgen.main_page.col_a2_p2')}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="arc"
              value="item-3"
            >
              <AccordionTrigger className="hover:px-1">{t('colgen.main_page.col_a3_t')}</AccordionTrigger>
              <AccordionContent className="flex flex-col text-start gap-4 text-balance text-white">
                <p>{t('colgen.main_page.col_a3_p')}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="arc"
              value="item-4"
            >
              <AccordionTrigger className="hover:px-1">{t('colgen.main_page.col_a4_t')}</AccordionTrigger>
              <AccordionContent className="flex flex-col text-start gap-4 text-balance text-white">
                <p>{t('colgen.main_page.col_a4_p1')}</p>
                <p>{t('colgen.main_page.col_a4_p2')}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="w-full"
              value="item-5"
            >
              <AccordionTrigger className="hover:px-1">{t('colgen.main_page.col_a5_t')}</AccordionTrigger>
              <AccordionContent className="flex flex-col text-start gap-4 text-balance text-white">
                <p>{t('colgen.main_page.col_a5_p')}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="col_what flex flex-col z-10 items-center justify-center mt-30">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white text-4xl md:text-6xl"
        >
          {t('colgen.main_page.col_what')}
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="text-white max-w-[100ch] px-[30px] md:px-5 !mt-6"
        >
          <motion.li>
            <h4 className="font-bold text-xl">{t('colgen.main_page.col_what_t1')}</h4>
            <p className="text-[#737578]">{t('colgen.main_page.col_what_p1')}</p>
          </motion.li>
          <motion.li>
            <h4 className="font-bold text-xl">{t('colgen.main_page.col_what_t2')}</h4>
            <p className="text-[#737578]">{t('colgen.main_page.col_what_p2')}</p>
          </motion.li>
          <motion.li>
            <h4 className="font-bold text-xl">{t('colgen.main_page.col_what_t3')}</h4>
            <p className="text-[#737578]">{t('colgen.main_page.col_what_p3')}</p>
          </motion.li>
          <motion.li>
            <h4 className="font-bold text-xl">{t('colgen.main_page.col_what_t4')}</h4>
            <p className="text-[#737578]">{t('colgen.main_page.col_what_p4')}</p>
          </motion.li>
          <motion.li>
            <h4 className="font-bold text-xl">{t('colgen.main_page.col_what_t5')}</h4>
            <p className="text-[#737578]">{t('colgen.main_page.col_what_p5')}</p>
          </motion.li>
        </motion.ul>
      </div>
      <div className="col_why_ch z-10 flex flex-col  w-full  md:px-36  items-center justify-center my-40 ">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white  text-4xl md:text-6xl !mb-[40px]"
        >
          {t('colgen.main_page.col_why_ch_t')}
        </motion.h2>
        <div className="why_wrapper flex flex-wrap items-center justify-center gap-5">
          <div className="box rounded-2xl border border-[#ffffff1a] p-5 bg-transparent">
            <h4 className="text-white">{t('colgen.main_page.col_why_ch_t1')}</h4>
            <p className="text-[#c9c9c9] max-w-[60ch] ">{t('colgen.main_page.col_why_ch_p1')}</p>
          </div>
          <div className="box rounded-2xl border border-[#ffffff1a] p-5 bg-transparent">
            <h4 className="text-white">{t('colgen.main_page.col_why_ch_t2')}</h4>
            <p className="text-[#c9c9c9] max-w-[60ch] ">{t('colgen.main_page.col_why_ch_p2')}</p>
          </div>
          <div className="box rounded-2xl border border-[#ffffff1a] p-5 bg-transparent">
            <h4 className="text-white">{t('colgen.main_page.col_why_ch_t3')}</h4>
            <p className="text-[#c9c9c9] max-w-[60ch] ">{t('colgen.main_page.col_why_ch_p3')}</p>
          </div>
          <div className="box rounded-2xl border border-[#ffffff1a] p-5 bg-transparent">
            <h4 className="text-white">{t('colgen.main_page.col_why_ch_t4')}</h4>
            <p className="text-[#c9c9c9] max-w-[60ch] ">{t('colgen.main_page.col_why_ch_p4')}</p>
          </div>
          <div className="box rounded-2xl border border-[#ffffff1a] p-5 bg-transparent">
            <h4 className="text-white">{t('colgen.main_page.col_why_ch_t5')}</h4>
            <p className="text-[#c9c9c9] max-w-[60ch] ">{t('colgen.main_page.col_why_ch_p5')}</p>
          </div>
        </div>
      </div>
      <div className="projects z-10 flex flex-col  w-full md:px-36 overflow-hidden items-center justify-center my-30 ">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white text-4xl text-center md:text-6xl !mb-[50px]"
        >
          {t('colgen.main_page.col_exp')}
        </motion.h2>
        <ColMarq />
      </div>
      <div className="z-10 flex flex-col  w-full md:px-36 overflow-hidden items-center justify-center my-30">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white text-4xl text-center md:text-6xl !mb-[50px]"
        >
          {t('colgen.main_page.col_project')}
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
      <div className="z-10 flex flex-col px-6 w-full md:px-36 overflow-hidden items-center justify-center my-30">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: false }}
          className="col_disc max-w-[30ch] rounded-2xl border border-[#ffffff1a] p-5 text-[#c9c9c9] bg-[#807b7b57] mb-10"
        >
          <h3 className="!font-extrabold !mb-[30px] text-white">{t('colgen.main_page.col_discover_t1')}</h3>
          <p>{t('colgen.main_page.col_discover_p1')}</p>
          <p>{t('colgen.main_page.col_discover_p2')}</p>
          <p>{t('colgen.main_page.col_discover_p3')}</p>
          <p>{t('colgen.main_page.col_discover_p4')}</p>
          <p>{t('colgen.main_page.col_discover_p5')}</p>
          <p>{t('colgen.main_page.col_discover_p6')}</p>
          <p>{t('colgen.main_page.col_discover_p7')}</p>
          <p>{t('colgen.main_page.col_discover_p8')}</p>
          <p>{t('colgen.main_page.col_discover_p9')}</p>
          <p>{t('colgen.main_page.col_discover_p10')}</p>
          <p>{t('colgen.main_page.col_discover_p11')}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: false }}
          className="col_disc max-w-[30ch] rounded-2xl border border-[#ffffff1a] p-5 text-[#c9c9c9] bg-[#807b7b57] mb-10"
        >
          <h3 className="!font-extrabold !mb-[30px] text-white">{t('colgen.main_page.col_development_t1')}</h3>
          <p>{t('colgen.main_page.col_development_p1')}</p>
          <p>{t('colgen.main_page.col_development_p2')}</p>
          <p>{t('colgen.main_page.col_development_p3')}</p>
          <p>{t('colgen.main_page.col_development_p4')}</p>
          <p>{t('colgen.main_page.col_development_p5')}</p>
          <p>{t('colgen.main_page.col_development_p6')}</p>
          <p>{t('colgen.main_page.col_development_p7')}</p>
          <p>{t('colgen.main_page.col_development_p8')}</p>
          <p>{t('colgen.main_page.col_development_p9')}</p>
          <p>{t('colgen.main_page.col_development_p10')}</p>
          <p>{t('colgen.main_page.col_development_p11')}</p>
          <p>{t('colgen.main_page.col_development_p12')}</p>
          <p>{t('colgen.main_page.col_development_p13')}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: false }}
          className="col_disc max-w-[30ch] rounded-2xl border border-[#ffffff1a] p-5 text-[#c9c9c9] bg-[#807b7b57] mb-10"
        >
          <h3 className="!font-extrabold !mb-[30px] text-white">{t('colgen.main_page.col_Implementation_t1')}</h3>
          <p>{t('colgen.main_page.col_Implementation_p1')}</p>
          <p>{t('colgen.main_page.col_Implementation_p2')}</p>
          <p>{t('colgen.main_page.col_Implementation_p3')}</p>
          <p>{t('colgen.main_page.col_Implementation_p4')}</p>
          <p>{t('colgen.main_page.col_Implementation_p5')}</p>
          <p>{t('colgen.main_page.col_Implementation_p6')}</p>
          <p>{t('colgen.main_page.col_Implementation_p7')}</p>
          <p>{t('colgen.main_page.col_Implementation_p8')}</p>
          <p>{t('colgen.main_page.col_Implementation_p9')}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: false }}
          className="col_disc max-w-[30ch] rounded-2xl border border-[#ffffff1a] p-5 text-[#c9c9c9] bg-[#807b7b57] mb-10"
        >
          <h3 className="!font-extrabold !mb-[30px] text-white">{t('colgen.main_page.col_Monitoring_t1')}</h3>
          <p>{t('colgen.main_page.col_Monitoring_p1')}</p>
          <p>{t('colgen.main_page.col_Monitoring_p2')}</p>
          <p>{t('colgen.main_page.col_Monitoring_p3')}</p>
          <p>{t('colgen.main_page.col_Monitoring_p4')}</p>
          <p>{t('colgen.main_page.col_Monitoring_p5')}</p>
          <p>{t('colgen.main_page.col_Monitoring_p6')}</p>
          <p>{t('colgen.main_page.col_Monitoring_p7')}</p>
          <p>{t('colgen.main_page.col_Monitoring_p8')}</p>
          <p>{t('colgen.main_page.col_Monitoring_p9')}</p>
          <p>{t('colgen.main_page.col_Monitoring_p10')}</p>
        </motion.div>
      </div>
      <div className="accordion faq z-10 mx-auto max-w-[1000px] flex flex-col  lg:gap-0 items-center justify-center my-20">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white text-4xl text-center md:text-6xl !mb-[50px]"
        >
          {t('colgen.main_page.col_faq')}
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
            <AccordionTrigger className="hover:px-1 !text-xs">{t('colgen.main_page.col_faq_t1')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start  gap-4 text-balance mt-5 text-white">
              <p>{t('colgen.main_page.col_faq_p1')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-2"
          >
            <AccordionTrigger className="hover:px-1">{t('colgen.main_page.col_faq_t2')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start gap-4 text-balance mt-5 text-white">
              <p>{t('colgen.main_page.col_faq_p2')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-3"
          >
            <AccordionTrigger className="hover:px-1">{t('colgen.main_page.col_faq_t3')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start gap-4 text-balance mt-5 text-white">
              <p>{t('colgen.main_page.col_faq_p3')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-4"
          >
            <AccordionTrigger className="hover:px-1">{t('colgen.main_page.col_faq_t4')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start gap-4 text-balance mt-5 text-white">
              <p>{t('colgen.main_page.col_faq_p4_1')}</p>
              <p>{t('colgen.main_page.col_faq_p4_2')}</p>
              <p>{t('colgen.main_page.col_faq_p4_3')}</p>
              <p>{t('colgen.main_page.col_faq_p4_4')}</p>
              <p>{t('colgen.main_page.col_faq_p4_5')}</p>
              <p>{t('colgen.main_page.col_faq_p4_6')}</p>
              <p>{t('colgen.main_page.col_faq_p4_7')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-5"
          >
            <AccordionTrigger className="hover:px-1">{t('colgen.main_page.col_faq_t5')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start gap-4 text-balance mt-5 text-white">
              <p>{t('colgen.main_page.col_faq_p5_1')}</p>
              <p>{t('colgen.main_page.col_faq_p5_2')}</p>
              <p>{t('colgen.main_page.col_faq_p5_3')}</p>
              <p>{t('colgen.main_page.col_faq_p5_4')}</p>
              <p>{t('colgen.main_page.col_faq_p5_5')}</p>
              <p>{t('colgen.main_page.col_faq_p5_6')}</p>
              <p>{t('colgen.main_page.col_faq_p5_7')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-6"
          >
            <AccordionTrigger className="hover:px-1">{t('colgen.main_page.col_faq_t6')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start gap-4 text-balance mt-5 text-white">
              <p>{t('colgen.main_page.col_faq_p6_1')}</p>
              <p>{t('colgen.main_page.col_faq_p6_2')}</p>
              <p>{t('colgen.main_page.col_faq_p6_3')}</p>
              <p>{t('colgen.main_page.col_faq_p6_4')}</p>
              <p>{t('colgen.main_page.col_faq_p6_5')}</p>
              <p>{t('colgen.main_page.col_faq_p6_6')}</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="w-full"
            value="faq-7"
          >
            <AccordionTrigger className="hover:px-1">{t('colgen.main_page.col_faq_t7')}</AccordionTrigger>
            <AccordionContent className="flex flex-col text-start gap-4 text-balance mt-5 text-white">
              <p>{t('colgen.main_page.col_faq_p7_1')}</p>
              <p>{t('colgen.main_page.col_faq_p7_2')}</p>
              <p>{t('colgen.main_page.col_faq_p7_3')}</p>
              <p>{t('colgen.main_page.col_faq_p7_5')}</p>
              <p>{t('colgen.main_page.col_faq_p7_6')}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Colgen;
