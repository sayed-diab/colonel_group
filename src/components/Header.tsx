import { useEffect } from 'react';
import '../i18n';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Disclosure, DisclosureButton, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Drawer } from 'antd';
import logo from '../assets/logo-main.png';
import '../styles/header.css';
const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };
  useEffect(() => {
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowNavbar(true); // Start showing with animation
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [open, setOpen] = useState(false);
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);
  const navigation = [
    { name: t('about'), href: '/about' },
    { name: t('careers'), href: '/careers' },
    { name: t('news'), href: '/news' },
    { name: t('sectors'), href: '/sectors' },
    { name: t('faq'), href: '/faq' },
  ];
  return (
    <>
      <header className="header__ relative top-0 left-0 w-full px-3 sm:px-4  py-1 sm:py-8 z-50  text-white ">
        <Disclosure
          as="nav"
          className="mx-auto sticky px-2 sm:px-0 xl:px-8"
        >
          <div className="relative  flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
              <DisclosureButton
                className="group iconBar__ relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none"
                onClick={showDrawer}
              >
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6"
                />
              </DisclosureButton>
            </div>

            <div className="flex flex-1 items-center justify-center gap-x-8 xl:gap-x-20 ">
              <a
                className="logo__ flex items-center gap-x-2 mr-auto ml-0 md:mr-0"
                href="/"
              >
                <img
                  src={logo}
                  alt="logo"
                  className="max-w-12  hidden lg:block"
                />
                <img
                  src={logo}
                  alt="logo"
                  className="w-8 block lg:hidden"
                />
                <span className="font-[Qwigley] text-2xl lg:text-3xl ">{t('logo')}</span>
              </a>
              <div className="hidden  md:flex  sm:items-center md:justify-between">
                <div className="flex space-x-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? ' text-[#fed017]! sm:px-1 xl:px-3 py-2 text-sm font-medium' : 'hover:text-[#fed017] text-white sm:px-1 xl:px-3 py-2 text-sm  font-medium')}
                  >
                    {t('home')}
                  </NavLink>
                  <Menu
                    as="div"
                    className="relative flex flex-col items-center"
                  >
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5  cursor-pointer hover:text-white mx-auto text-center rounded-md text-white! py-2 text-sm font-medium hover:text-[#fed017]! transition duration-300">
                      {t('companies')}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 size-4 my-auto text-white"
                      />
                    </MenuButton>
                    <MenuItems
                      transition
                      className="Menu__ absolute border-1 border-[#fed017] right-0 z-10 mt-11 w-48 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                      <MenuItem>
                        <NavLink
                          to="/companies/colgen"
                          className={({ isActive }) => (isActive ? 'bg-gray-900 block px-3 py-2 text-white! rounded-t-md' : 'text-black! hover:bg-gray-900 rounded-t-md hover:text-white! block px-3 py-2 ')}
                        >
                          {t('companies_1')}
                        </NavLink>
                      </MenuItem>
                      <hr className="text-[#fed017]" />
                      <MenuItem>
                        <NavLink
                          to="/companies/coltech"
                          className={({ isActive }) => (isActive ? 'bg-gray-900 block px-3 py-2 text-white ' : 'text-black! hover:bg-gray-900  hover:text-white! block px-3 py-2 ')}
                        >
                          {t('companies_2')}
                        </NavLink>
                      </MenuItem>
                      <hr className="text-[#fed017]" />
                      <MenuItem>
                        <NavLink
                          to="/companies/colcons"
                          className={({ isActive }) => (isActive ? 'bg-gray-900 block px-2 py-2 text-white rounded-b-md' : 'text-black! hover:bg-gray-900 rounded-b-md hover:text-white! block px-3 py-2 ')}
                        >
                          {t('companies_3')}
                        </NavLink>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) => (isActive ? '  text-[#fed017]! sm:px-1 xl:px-3 py-2 text-sm font-medium' : 'hover:text-[#fed017]! transition duration-300 text-white sm:px-1 xl:px-3 py-2 text-sm font-medium')}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <button
                  className="cursor-pointer border border-[#eecd53] text-white! rounded-md px-3 py-1.5 sm:py-2 text-sm font-medium md:relative fixed top-1/2 !mx-20"
                  onClick={toggleLanguage}
                >
                  {i18n.language === 'ar' ? 'English' : 'عربي'}
                </button>
              </div>
            </div>
          </div>
        </Disclosure>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 3,
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="t_btn md:hidden fixed"
          onClick={toggleLanguage}
        >
          {i18n.language === 'ar' ? 'English' : 'عربي'}
        </motion.button>
        <Drawer
          placement="left"
          closable={true}
          onClose={onClose}
          open={open}
          className=""
        >
          <div className="flex flex-col  transition-all duration-300 items-center space-y-4 p-4">
            <NavLink
              onClick={onClose}
              to="/"
              className={({ isActive }) => (isActive ? 'bg-gray-700! w-fit text-white! rounded-md px-3 py-1.5 sm:py-2 text-sm font-medium' : ' py-1.5 sm:py-2 text-black! rounded-md px-3 text-sm font-medium ')}
            >
              {t('home')}
            </NavLink>
            <Menu
              as="div"
              className="relative flex flex-col items-center"
            >
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 text-gray-300  hover:text-white mx-auto text-center rounded-md  py-2 text-sm font-medium">
                {t('companies')}
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 size-4 my-auto text-gray-400"
                />
              </MenuButton>
              <MenuItems
                transition
                className="Menu__ absolute border-1 border-[#fed017] right-0 z-10 mt-11 w-48 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <NavLink
                    to="/companies/colgen"
                    className={({ isActive }) => (isActive ? 'bg-gray-900 block px-3 py-2 text-white! rounded-t-md' : 'text-black! hover:bg-gray-900 rounded-t-md hover:text-white! block px-3 py-2 ')}
                  >
                    {t('companies_1')}
                  </NavLink>
                </MenuItem>
                <hr className="text-[#fed017]" />
                <MenuItem>
                  <NavLink
                    to="/companies/coltech"
                    className={({ isActive }) => (isActive ? 'bg-gray-900 block px-3 py-2 text-white ' : 'text-black! hover:bg-gray-900  hover:text-white! block px-3 py-2 ')}
                  >
                    {t('companies_2')}
                  </NavLink>
                </MenuItem>
                <hr className="text-[#fed017]" />
                <MenuItem>
                  <NavLink
                    to="/companies/colcons"
                    className={({ isActive }) => (isActive ? 'bg-gray-900 block px-2 py-2 text-white rounded-b-md' : 'text-black! hover:bg-gray-900 rounded-b-md hover:text-white! block px-3 py-2 ')}
                  >
                    {t('companies_3')}
                  </NavLink>
                </MenuItem>
              </MenuItems>
            </Menu>
            {navigation.map((item) => (
              <NavLink
                onClick={onClose}
                key={item.name}
                to={item.href}
                className={({ isActive }) => (isActive ? '  bg-gray-700! w-fit text-white! rounded-md px-3 py-1.5 sm:py-2 text-sm font-medium' : ' py-1.5 sm:py-2 text-black! rounded-md px-3 text-sm font-medium')}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </Drawer>
      </header>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="header__ two fixed top-0 left-0 w-full px-3 sm:px-4  py-1 sm:py-8 z-50  text-white "
      >
        <Disclosure
          as="nav"
          className="mx-auto sticky px-2 sm:px-0 xl:px-8"
        >
          <div className="relative  flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
              <DisclosureButton
                className="group iconBar__ relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none"
                onClick={showDrawer}
              >
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6"
                />
              </DisclosureButton>
            </div>

            <div className="flex flex-1 items-center justify-center gap-x-8 xl:gap-x-20 ">
              <a
                className="logo__ flex items-center gap-x-2 mr-auto ml-0 md:mr-0"
                href="/"
              >
                <img
                  src={logo}
                  alt="logo"
                  className="max-w-12  hidden lg:block"
                />
                <img
                  src={logo}
                  alt="logo"
                  className="w-8 block lg:hidden"
                />
                <span className="font-[Qwigley] text-2xl lg:text-3xl ">{t('logo')}</span>
              </a>
              <div className="hidden  md:flex sm:items-center">
                <div className="flex space-x-4">
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? ' text-[#fed017]! sm:px-1 xl:px-3 py-2 text-sm font-medium' : 'hover:text-[#fed017] text-white sm:px-1 xl:px-3 py-2 text-sm  font-medium')}
                  >
                    {t('home')}
                  </NavLink>
                  <Menu
                    as="div"
                    className="relative flex flex-col items-center"
                  >
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5  cursor-pointer hover:text-white mx-auto text-center rounded-md text-white! py-2 text-sm font-medium hover:text-[#fed017]! transition duration-300">
                      {t('companies')}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 size-4 my-auto text-white"
                      />
                    </MenuButton>
                    <MenuItems
                      transition
                      className="Menu__ absolute border-1 border-[#fed017] right-0 z-10 mt-11 w-48 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                      <MenuItem>
                        <NavLink
                          to="/companies/colgen"
                          className={({ isActive }) => (isActive ? 'bg-gray-900 block px-3 py-2 text-white! rounded-t-md' : 'text-black! hover:bg-gray-900 rounded-t-md hover:text-white! block px-3 py-2 ')}
                        >
                          {t('companies_1')}
                        </NavLink>
                      </MenuItem>
                      <hr className="text-[#fed017]" />
                      <MenuItem>
                        <NavLink
                          to="/companies/coltech"
                          className={({ isActive }) => (isActive ? 'bg-gray-900 block px-3 py-2 text-white ' : 'text-black! hover:bg-gray-900  hover:text-white! block px-3 py-2 ')}
                        >
                          {t('companies_2')}
                        </NavLink>
                      </MenuItem>
                      <hr className="text-[#fed017]" />
                      <MenuItem>
                        <NavLink
                          to="/companies/colcons"
                          className={({ isActive }) => (isActive ? 'bg-gray-900 block px-2 py-2 text-white rounded-b-md' : 'text-black! hover:bg-gray-900 rounded-b-md hover:text-white! block px-3 py-2 ')}
                        >
                          {t('companies_3')}
                        </NavLink>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) => (isActive ? '  text-[#fed017]! sm:px-1 xl:px-3 py-2 text-sm font-medium' : 'hover:text-[#fed017]! transition duration-300 text-white sm:px-1 xl:px-3 py-2 text-sm font-medium')}
                    >
                      {item.name}
                    </NavLink>
                  ))}

                  <button
                    className="cursor-pointer border border-[#eecd53] text-white! rounded-md px-3 py-1.5 sm:py-2 text-sm font-medium md:relative fixed top-1/2 !mx-20"
                    onClick={toggleLanguage}
                  >
                    {i18n.language === 'ar' ? 'English' : 'عربي'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Disclosure>
        <Drawer
          placement="left"
          closable={true}
          onClose={onClose}
          open={open}
          className=""
        >
          <div className="flex flex-col  transition-all duration-300 items-center space-y-4 p-4">
            <NavLink
              onClick={onClose}
              to="/"
              className={({ isActive }) => (isActive ? 'bg-gray-700! w-fit text-white! rounded-md px-3 py-1.5 sm:py-2 text-sm font-medium' : ' py-1.5 sm:py-2 text-black! rounded-md px-3 text-sm font-medium ')}
            >
              {t('home')}
            </NavLink>
            <Menu
              as="div"
              className="relative flex flex-col items-center"
            >
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 text-gray-300  hover:text-white mx-auto text-center rounded-md  py-2 text-sm font-medium">
                {t('companies')}
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 size-4 my-auto text-gray-400"
                />
              </MenuButton>
              <MenuItems
                transition
                className="Menu__ absolute border-1 border-[#fed017] right-0 z-10 mt-11 w-48 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <NavLink
                    to="/companies/colgen"
                    className={({ isActive }) => (isActive ? 'bg-gray-900 block px-3 py-2 text-white! rounded-t-md' : 'text-black! hover:bg-gray-900 rounded-t-md hover:text-white! block px-3 py-2 ')}
                  >
                    {t('companies_1')}
                  </NavLink>
                </MenuItem>
                <hr className="text-[#fed017]" />
                <MenuItem>
                  <NavLink
                    to="/companies/coltech"
                    className={({ isActive }) => (isActive ? 'bg-gray-900 block px-3 py-2 text-white ' : 'text-black! hover:bg-gray-900  hover:text-white! block px-3 py-2 ')}
                  >
                    {t('companies_2')}
                  </NavLink>
                </MenuItem>
                <hr className="text-[#fed017]" />
                <MenuItem>
                  <NavLink
                    to="/companies/colcons"
                    className={({ isActive }) => (isActive ? 'bg-gray-900 block px-2 py-2 text-white rounded-b-md' : 'text-black! hover:bg-gray-900 rounded-b-md hover:text-white! block px-3 py-2 ')}
                  >
                    {t('companies_3')}
                  </NavLink>
                </MenuItem>
              </MenuItems>
            </Menu>
            {navigation.map((item) => (
              <NavLink
                onClick={onClose}
                key={item.name}
                to={item.href}
                className={({ isActive }) => (isActive ? '  bg-gray-700! w-fit text-white! rounded-md px-3 py-1.5 sm:py-2 text-sm font-medium' : ' py-1.5 sm:py-2 text-black! rounded-md px-3 text-sm font-medium')}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </Drawer>
      </motion.header>
    </>
  );
};

export default Header;
