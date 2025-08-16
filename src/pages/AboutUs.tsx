import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import '../styles/col.css';
import '../styles/about_us.css';
const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="flex flex-col min-w-full relative items-center justify-center">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-end justify-center img_cover -mt-32 min-w-full min-h-[500px] rounded-b-3xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="text-white text-3xl z-1 md:text-5xl font-extrabold text-center !mb-10 "
          >
            {t('about_us.title')}
          </motion.h2>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
