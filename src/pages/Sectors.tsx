import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '../styles/sectors.css';
import '../styles/home.css';
import '../styles/col.css';
import Marquee from '@/components/Marquee';

const Sectors = () => {
  const { t } = useTranslation();

  return (
    <main>
      <div className="sectors colgen sec_bg relative flex flex-col items-center justify-start h-[300px] 2xl:h-[400px]">
        <div className="col_head_one -mt-[270px] 2xl:-mt-[200px] flex flex-col w-full text-white text-center items-center justify-center absolute">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl !mt-[300px]"
          >
            {t('col_sectors.title')}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 1,
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >
            <p className="max-w-[60ch] text-xs md:text-1xl">{t('col_sectors.p1')}</p>
            <p className="text-xs md:text-sm">{t('col_sectors.t2')}</p>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.7,
        }}
        className="logo-marquee z-20 flex flex-col items-center "
      >
        <Marquee />
      </motion.div>
      <div className="flex flex-col items-center text-white text-center my-30">
        <h2 className="text-2xl 2xl:text-4xl">{t('col_sectors.t3')}</h2>
        <p className="2xl:text-2xl text-[#b8b3b3] !mb-30 max-w-[60ch]">{t('col_sectors.p2')}</p>
        <div className="sectors_panels flex flex-col items-center !max-w-[1600px] gap-y-30">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="text-2xl 2xl:text-3xl !mb-10"
            >
              {t('col_sectors.row_1_t')}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="row_panels grid  grid-cols-1 md:grid-cols-3 2xl:gap-5 "
            >
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="panel mx-3 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
              >
                <p className="text-lg 2xl:text-2xl max-w-[20ch] ">{t('col_sectors.row_1_t1')}</p>
                <p className="max-w-[32ch] text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.row_1_p1')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="panel mx-3 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
              >
                <p className="text-lg 2xl:text-2xl max-w-[20ch] ">{t('col_sectors.row_1_t2')}</p>
                <p className="max-w-[32ch] text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.row_1_p2')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="panel mx-3 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
              >
                <p className="text-lg 2xl:text-2xl max-w-[20ch] ">{t('col_sectors.row_1_t3')}</p>
                <p className="max-w-[32ch] text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.row_1_p3')}</p>
              </motion.div>
            </motion.div>
          </div>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="text-2xl 2xl:text-3xl !mb-10"
            >
              {t('col_sectors.row_2_t')}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="row_panels grid  grid-cols-1 md:grid-cols-3 2xl:gap-5 "
            >
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="panel mx-3 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
              >
                <p className="text-lg 2xl:text-2xl max-w-[20ch] ">{t('col_sectors.row_2_t1')}</p>
                <p className="max-w-[32ch] text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.row_2_p1')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="panel mx-3 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
              >
                <p className="text-lg 2xl:text-2xl max-w-[20ch] ">{t('col_sectors.row_2_t2')}</p>
                <p className="max-w-[32ch] text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.row_2_p2')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="panel mx-3 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
              >
                <p className="text-lg 2xl:text-2xl max-w-[20ch] ">{t('col_sectors.row_2_t3')}</p>
                <p className="max-w-[32ch] text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.row_2_p3')}</p>
              </motion.div>
            </motion.div>
          </div>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="text-2xl 2xl:text-3xl !mb-10"
            >
              {t('col_sectors.row_3_t')}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="row_panels grid  grid-cols-1 md:grid-cols-3 2xl:gap-5 "
            >
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="panel mx-3 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
              >
                <p className="text-lg 2xl:text-2xl max-w-[20ch] ">{t('col_sectors.row_3_t1')}</p>
                <p className="max-w-[32ch] text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.row_3_p1')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="panel mx-3 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
              >
                <p className="text-lg 2xl:text-2xl max-w-[20ch] ">{t('col_sectors.row_3_t2')}</p>
                <p className="max-w-[32ch] text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.row_2_p2')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="panel mx-3 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
              >
                <p className="text-lg 2xl:text-2xl max-w-[20ch] ">{t('col_sectors.row_3_t3')}</p>
                <p className="max-w-[32ch] text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.row_3_p3')}</p>
              </motion.div>
            </motion.div>
          </div>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="text-2xl 2xl:text-3xl !mb-10"
            >
              {t('col_sectors.row_4_t')}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="row_panels grid  grid-cols-1 md:grid-cols-2 gap-5 "
            >
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="panel mx-3 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
              >
                <p className="text-lg 2xl:text-2xl max-w-[20ch] ">{t('col_sectors.row_4_t1')}</p>
                <p className="max-w-[32ch] text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.row_4_p1')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="panel mx-3 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
              >
                <p className="text-lg 2xl:text-2xl max-w-[20ch] ">{t('col_sectors.row_4_t2')}</p>
                <p className="max-w-[32ch] text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.row_4_p2')}</p>
              </motion.div>
            </motion.div>
          </div>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="text-2xl 2xl:text-3xl !mb-10"
            >
              {t('col_sectors.row_5_t')}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="row_panels grid  grid-cols-1 md:grid-cols-3 2xl:gap-5 "
            >
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="panel mx-3 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
              >
                <p className="text-lg 2xl:text-2xl max-w-[20ch] ">{t('col_sectors.row_5_t1')}</p>
                <p className="max-w-[32ch] text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.row_5_p1')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="panel mx-3 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
              >
                <p className="text-lg 2xl:text-2xl max-w-[20ch] ">{t('col_sectors.row_5_t2')}</p>
                <p className="max-w-[32ch] text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.row_5_p2')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="panel mx-3 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
              >
                <p className="text-lg 2xl:text-2xl max-w-[20ch] ">{t('col_sectors.row_5_t3')}</p>
                <p className="max-w-[32ch] text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.row_5_p3')}</p>
              </motion.div>
            </motion.div>
          </div>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="text-2xl 2xl:text-3xl !mb-10"
            >
              {t('col_sectors.row_6_t')}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="row_panels grid  grid-cols-1 md:grid-cols-3 2xl:gap-5 "
            >
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="panel mx-3 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
              >
                <p className="text-lg 2xl:text-2xl max-w-[20ch] ">{t('col_sectors.row_6_t1')}</p>
                <p className="max-w-[32ch] text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.row_6_p1')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="panel mx-3 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
              >
                <p className="text-lg 2xl:text-2xl max-w-[20ch] ">{t('col_sectors.row_6_t2')}</p>
                <p className="max-w-[32ch] text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.row_6_p2')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="panel mx-3 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
              >
                <p className="text-lg 2xl:text-2xl max-w-[20ch] ">{t('col_sectors.row_6_t3')}</p>
                <p className="max-w-[32ch] text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.row_6_p3')}</p>
              </motion.div>
            </motion.div>
          </div>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: -200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="text-2xl 2xl:text-3xl !mb-10"
            >
              {t('col_sectors.row_7_t')}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="row_panels grid  grid-cols-1 md:grid-cols-2 items-center gap-5 "
            >
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="panel mx-3 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
              >
                <p className="text-lg 2xl:text-2xl max-w-[20ch] ">{t('col_sectors.row_7_t1')}</p>
                <p className="max-w-[32ch] text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.row_7_p1')}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="panel mx-3 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
              >
                <p className="text-lg 2xl:text-2xl max-w-[20ch] ">{t('col_sectors.row_7_t2')}</p>
                <p className="max-w-[32ch] text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.row_7_p2')}</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.4,
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="panel last mt-30 flex items-center flex-col  rounded-4xl border-2 border-[#ffffff49]"
        >
          <p className="text-lg 2xl:text-2xl max-w-[30ch] ">{t('col_sectors.sec_t')}</p>
          <p className="last_p max-w-[60ch] font text-[14px] 2xl:text-[18px] text-[#b8b3b3]">{t('col_sectors.sec_p')}</p>
        </motion.div>
      </div>
    </main>
  );
};

export default Sectors;
