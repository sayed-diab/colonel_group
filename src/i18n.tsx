import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        logo: 'Colonel Group',
        home: 'Home',
        companies: 'Colonel Companies',
        companies_1: 'Colonel General Trading',
        companies_2: 'Colonel Technologies',
        companies_3: 'Colonel Consulting & Training',
        about: 'About us',
        careers: 'Careers',
        news: 'News',
        sectors: 'Sectors',
        faq: 'FAQ',
        rights: '© 2025 Colonel Group. All rights reserved.',
        flag: 'With Expertise Since 2004',
        hero_paragraph: "Colonel Group: Bridging legacy expertise with future-ready solutions in defense, tech, and strategic training to tackle tomorrow's challenges today.",
        groups_paragraph: 'Trusted by a growing community',
        cube_title: 'Sectors We Serve: Strategic Solutions for Mission-Critical Industries',
        cube_paragraph: 'Colonel Group: Innovative solutions. Sustainable impact. Lasting value.',
        cube_button: 'Learn More',
        features_title: 'Our Your Window to the Latest News & Events from Colonel Group',
        features_news: 'Latest News:',
        features_p1_p: 'Major Defense Contract Secured',
        features_p1_p2: 'Colonel Group has been awarded a multi-year contract to provide advanced security',
        features_p2_t: 'Events & Exhibitions:',
        features_p2_p: 'Updates on our participation in local and international conferences, trade shows, and seminars, as well as events we host.',
        features_p3_t: 'Media Gallery:',
        features_p3_p: 'Photos and videos showcasing our projects, events, and corporate initiatives.',
        features_p4_t: 'Press Releases:',
        features_p4_p: 'Official statements on the Group’s activities and strategic direction.',
        quotes: '“We invite you to explore our website and deive deeper into our diverse companies and services—Our team of experts and specialists is ready to provide support, guidance, and tailored solutions to meet your needs and aspirations.”',
        quotes_info: 'Yaqoub Alnaqbi, Founder & CEO',
        com_leading_t: 'Discover Our Leading Companies',
        com_leading_p1: 'Your strong arm in comprehensive procurement, with expertise since 2004 in efficiently and reliably meeting the needs of both civilian and military sectors. Learn more about Colonel General Trading.',
        com_leading_p2: 'The innovation engine of the group, delivering cutting-edge technological solutions powered by artificial intelligence, big data analytics, and the Internet of Things (IoT), along with project acceleration services and government incubators to drive progress. Explore Colonel Technologies’ Solutions',
        com_leading_p3: 'The center of expertise in security and defense, offering specialized consulting and world-class training programs to build capabilities and enhance preparedness for tomorrow’s challenges. Discover Colonel Consulting & Training Service',
        head_network: 'Integrated Capabilities',
        stratgy: 'Colonel Group Trusted by Global Leaders Where Strategy Meets Excellence',
        stratgy_t1: '500+ Missions',
        stratgy_t2: 'Zero-Compromise Standards',
        stratgy_t3: '20+ Global Partners',
        stratgy_p1: 'Trusted by elite clients to execute high-stakes projects with precision.',
        stratgy_p2: 'Rigorous protocols ensuring operational excellence and compliance.',
        stratgy_p3: 'Effortlessly connecting with your favorite tools.',
        why_t: 'Why Choose Colonel Group?',
        why_p: 'Your Strategic Partner for a Promising Future',
        why_t1: 'Integrated Solutions',
        why_p1: 'We deliver seamless, end-to-end services through our three expert companies—trading, technology, and consulting—tailored to meet your unique challenges.',
        why_t2: 'Proven Expertise',
        why_p2: "Since 2004, we've partnered with government, defense, energy, and private sectors—backed by top-tier specialists and a strong track record of results.",
        why_t3: 'Innovation-Driven',
        why_p3: 'We lead with technology—AI, data analytics, and digital transformation are at our core, powering smarter, faster, future-ready solutions.',
        why_t4: 'Global Partnerships',
        why_p4: 'With a strong international network of suppliers, research centers, and allies, we bring world-class capabilities to every engagement.',
        why_t5: 'Local Insight',
        why_p5: 'We blend global vision with deep regional understanding—ensuring solutions that fit your market and your mission.',
        contact_w: 'Do you want to join the Colonel team?',
        contact_p1: 'If you believe you have the skills and drive to be part of our team, please send your CV along with a cover letter outlining your interests and experience to the following email address:',
        contact_p2: 'info@colonel.ae',
        contact_p3: 'Please include the job title you’re applying for in the subject line of your email.',
        contact_p4: 'We look forward to receiving your application and getting to know the exceptional talent that will help shape the future of Colonel Group.',
        contact_b: 'Colonel Careers',
      },
    },
    ar: {
      translation: {
        logo: 'مجموعة كولونيل',
        home: 'الرئيسية',
        companies: 'شركات كولونيل',
        companies_1: 'كولونيل للتجارة العامة',
        companies_2: 'تكنولوجيا كولونيل',
        companies_3: 'كولونيل للاستشارات والتدريب',
        about: 'عنا',
        careers: 'وظائف',
        news: 'أخبار',
        sectors: 'القطاعات',
        faq: 'الأسئلة الشائعة',
        rights: '© 2025 مجموعة كولونيل. جميع الحقوق محفوظة.',
        flag: 'خبرة منذ 2004',
        hero_paragraph: 'مجموعة كولونيل: جسر بين الخبرة التقليدية والحلول المستقبلية في الدفاع والتكنولوجيا والتدريب الاستراتيجي لمواجهة تحديات الغد اليوم.',
        groups_paragraph: 'يوم بعد يومًا ينمو مجتمع في ثقة محل',
        cube_title: 'القطاعات التي نقدمها: حلول استراتيجية للصناعات الحيوية',
        cube_paragraph: 'مجموعة كولونيل: حلول مبتكرة. تأثير مستدام. قيمة دائمة.',
        cube_button: 'أعرف المزيد',
        features_title: 'نافذتك لأحدث الأخبار والفعاليات من مجموعة كولونيل',
        features_news: ':أخر الأخبار',
        features_p1_p: 'تم تأمين عقد دفاعي كبير',
        features_p1_p2: 'تم منح مجموعة كولونيل عقدًا متعدد السنوات لتوفير تدريب أمني',
        features_p2_t: 'الفعاليات والمعارض:',
        features_p2_p: 'تحديثات حول مشاركتنا في المؤتمرات المحلية والدولية، والمعارض، والندوات، فضلاً عن الفعاليات التي نستضيفها.',
        features_p3_t: 'معرض الوسائط:',
        features_p3_p: 'صور وفيديوهات تعرض مشاريعنا وفعالياتنا ومبادراتنا المؤسسية.',
        features_p4_t: 'البيانات الصحفية:',
        features_p4_p: 'بيانات رسمية حول أنشطة المجموعة وتوجهاتها الاستراتيجية.',
        quotes: '"ندعوك لاستكشاف موقعنا الإلكتروني والتعمق أكثر في التعرف على شركاتنا وخدماتنا المتنوعة. فريقنا من الخبراء والمتخصصين جاهز لتقديم الدعم والإرشاد والحلول المخصصة لتلبية احتياجاتك وطموحاتك."',
        quotes_info: 'يعقوب النقبي، المؤسس والرئيس التنفيذي',
        com_leading_t: 'اكتشف شركاتنا الرائدة',
        com_leading_p1: 'ذراعك القوي في المشتريات الشاملة، بخبرة منذ عام ٢٠٠٤ في تلبية احتياجات القطاعات المدنية والعسكرية بكفاءة وموثوقية. تعرف على المزيد حول تجارة كولونيل الجنرال.',
        com_leading_p2: 'محرك الابتكار للمجموعة، يقدم حلول تكنولوجية متطورة مدعومة بالذكاء الاصطناعي وتحليلات البيانات الضخمة وإنترنت الأشياء (IoT)، بالإضافة إلى خدمات تسريع المشاريع وحاضنات حكومية لدفع التقدم. استكشف حلول كولونيل تكنولوجيا.',
        com_leading_p3: 'مركز الخبرة في الأمن والدفاع، يقدم استشارات متخصصة وبرامج تدريب عالمية المستوى لبناء القدرات وتعزيز الجاهزية لتحديات الغد. اكتشف خدمات الاستشارات والتدريب من كولونيل',
        head_network: 'القدرات المتكاملة',
        stratgy: 'مجموعة كولونيل الموثوق بها من قبل القادة العالميين حيث تلتقي الاستراتيجية بالتميز',
        stratgy_t1: '500+ مهمة',
        stratgy_t2: 'معايير عدم التنازل الصفرية',
        stratgy_t3: '20+ شركاء عالميين',
        stratgy_p1: 'موثوق به من قبل عملاء النخبة لتنفيذ مشاريع عالية المخاطر بدقة.',
        stratgy_p2: 'بروتوكولات صارمة لضمان التميز التشغيلي والتوافق.',
        stratgy_p3: 'الربط بسهولة مع أدواتك المفضلة.',
        why_t: 'لماذا تختار مجموعة كولونيل؟',
        why_p: ' شريكك الاستراتيجي لمستقبل واعد',
        why_t1: 'حلول متكاملة',
        why_p1: 'نقدم خدمات متكاملة وسلسة من البداية إلى النهاية من خلال شركاتنا الثلاث المتخصصة - التجارة، التكنولوجيا، والاستشارات - المصممة لتلبية تحدياتك الفريدة.',
        why_t2: 'خبرة مثبتة',
        why_p2: 'منذ عام ٢٠٠٤ ، تعاونّا مع الحكومة والدفاع والطاقة والقطاع الخاص - بدعم من متخصصين من الدرجة الأولى وسجل قوي من النتائج.',
        why_t3: 'مدفوع بالابتكار',
        why_p3: 'نحن نتصدر بالابتكار التكنولوجي - الذكاء الاصطناعي، وتحليل البيانات، والتحول الرقمي في صميم عملنا، مما يعزز حلولاً أكثر ذكاءً وسرعةً وجاهزية للمستقبل.',
        why_t4: 'الشراكات العالمية',
        why_p4: 'بفضل شبكة دولية قوية من الموردين ومراكز البحث والحلفاء، نوفر قدرات عالمية المستوى في كل مشاركة.',
        why_t5: 'رؤية محلية',
        why_p5: 'نحن ندمج الرؤية العالمية مع الفهم العميق للمنطقة - مما يضمن حلولاً تناسب سوقك ومهمتك.',
        contact_w: 'هل تريد الانضمام فريق كولونيل ؟',
        contact_p1: 'إذا كنت تعتقد أن لديك المهارات والدافع لتكون جزءًا من فريقنا، يُرجى إرسال سيرتك الذاتية مع رسالة تعريفية توضح اهتماماتك وخبراتك إلى عنوان البريد الإلكتروني التالي:',
        contact_p2: 'info@colonel.ae',
        contact_p3: 'يرجى تضمين عنوان الوظيفة التي تتقدم لها في سطر الموضوع في بريدك الإلكتروني.',
        contact_p4: 'نتطلع إلى تلقي طلبك والتعرف على المواهب الاستثنائية التي ستساعد في تشكيل مستقبل مجموعة كولونيل.',
        contact_b: 'تصفح الوظائف',
      },
    },
  },
  lng: 'en', // اللغة الافتراضية
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
