import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import '../styles/col.css';

const Careers = () => {
  const { t } = useTranslation();

  return (
    <main className="coltech colgen sec_bg flex flex-col items-center justify-center">
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
        <div className="flex flex-col items-center justify-center text-white mt-[120px]">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className=" text-3xl md:text-5xl font-extrabold text-center"
          >
            {t('col_career.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg px-[30px] max-w-[60ch] !mb-0 text-center text-[#737578]"
          >
            {t('col_career.p')}
          </motion.p>
        </div>
      </div>
      <div className="col_why_ch cons z-10 flex flex-col  w-full  md:px-36  items-center justify-center my-40 ">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white  text-3xl md:text-5xl !mb-[40px]"
        >
          {t('col_career.why_t')}
        </motion.h2>
        <div className="why_wrapper flex flex-wrap items-center justify-center gap-5">
          <div className="box text-center rounded-2xl border border-[#ffffff1a] p-5 bg-transparent">
            <h4 className="text-white">{t('col_career.why_t1')}</h4>
            <p className="text-[#c9c9c9] max-w-[60ch] ">{t('col_career.why_p1')}</p>
          </div>
          <div className="box text-center rounded-2xl border border-[#ffffff1a] p-5 bg-transparent">
            <h4 className="text-white">{t('col_career.why_t2')}</h4>
            <p className="text-[#c9c9c9] max-w-[60ch] ">{t('col_career.why_p2')}</p>
          </div>
          <div className="box text-center rounded-2xl border border-[#ffffff1a] p-5 bg-transparent">
            <h4 className="text-white">{t('col_career.why_t3')}</h4>
            <p className="text-[#c9c9c9] max-w-[60ch] ">{t('col_career.why_p3')}</p>
          </div>
          <div className="box text-center rounded-2xl border border-[#ffffff1a] p-5 bg-transparent">
            <h4 className="text-white">{t('col_career.why_t4')}</h4>
            <p className="text-[#c9c9c9] max-w-[60ch] ">{t('col_career.why_p4')}</p>
          </div>
          <div className="box text-center rounded-2xl border border-[#ffffff1a] p-5 bg-transparent">
            <h4 className="text-white">{t('col_career.why_t5')}</h4>
            <p className="text-[#c9c9c9] max-w-[60ch] ">{t('col_career.why_p5')}</p>
          </div>
        </div>
      </div>
      <div className="careers flex flex-col z-10 items-center justify-center my-32">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white  text-3xl md:text-5xl !mb-[40px]"
        >
          {t('col_career.oppo_t')}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="box mx-[10px]  rounded-2xl border border-[#ffffff1a] bg-[#dddddd15] p-8"
          >
            <h4 className="text-white">{t('col_career.oppo_t1')}</h4>
            <ul className="text-[#c9c9c9] max-w-[60ch] ml-5 text-sm !mt-[20px] flex flex-col  gap-y-2">
              <li>{t('col_career.oppo_ul1_1')}</li>
              <li>{t('col_career.oppo_ul1_2')}</li>
              <li>{t('col_career.oppo_ul1_3')}</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="box mx-[10px]  rounded-2xl border border-[#ffffff1a] bg-[#dddddd15] p-8"
          >
            <h4 className="text-white">{t('col_career.oppo_t2')}</h4>
            <ul className="text-[#c9c9c9] max-w-[60ch] ml-5 text-sm !mt-[20px] flex flex-col  gap-y-2">
              <li>{t('col_career.oppo_ul2_1')}</li>
              <li>{t('col_career.oppo_ul2_2')}</li>
              <li>{t('col_career.oppo_ul2_3')}</li>
              <li>{t('col_career.oppo_ul2_4')}</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="box mx-[10px]  rounded-2xl border border-[#ffffff1a] bg-[#dddddd15] p-8"
          >
            <h4 className="text-white">{t('col_career.oppo_t3')}</h4>
            <ul className="text-[#c9c9c9] max-w-[60ch] ml-5 text-sm !mt-[20px] flex flex-col  gap-y-2">
              <li>{t('col_career.oppo_ul3_1')}</li>
              <li>{t('col_career.oppo_ul3_2')}</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Careers;
