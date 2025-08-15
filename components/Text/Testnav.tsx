'use client';

import './navbar.css';
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  memo,
  JSX as ReactJSX,
} from 'react';
import { CSSTransition } from 'react-transition-group';

// أيقونات من react-icons
import {
  HiChevronDown,
  HiCog,
  HiChevronRight,
  HiArrowLeft,
  HiBolt,
} from 'react-icons/hi2';

type NavbarProps = {
  children: React.ReactNode;
};

type NavItemProps = {
  icon: React.ReactNode;
  children?: React.ReactNode;
};

type MenuKey = 'main' | 'settings' | 'animals';

type DropdownItemProps = {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  goToMenu?: MenuKey;
  onClick?: () => void;
  role?: 'button' | 'menuitem';
};

function App(): ReactJSX.Element {
  return (
    <Navbar>
      {/* لو تحتاج الأزرار الأخرى رجّع السطور التالية */}
      {/* <NavItem icon={<HiPlus className="w-6 h-6" aria-hidden />} />
      <NavItem icon={<HiBell className="w-6 h-6" aria-hidden />} />
      <NavItem icon={<HiChatBubbleLeft className="w-6 h-6" aria-hidden />} /> */}

      <NavItem icon={<HiChevronDown className="w-6 h-6" aria-hidden />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

const Navbar = memo(function Navbar({ children }: NavbarProps): ReactJSX.Element {
  return (
    <nav className="navbar" role="navigation" aria-label="Primary">
      <ul className="navbar-nav">{children}</ul>
    </nav>
  );
});

const NavItem = memo(function NavItem({ icon, children }: NavItemProps): ReactJSX.Element {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  // إغلاق القائمة عند الضغط خارجها
  const liRef = useRef<HTMLLIElement | null>(null);
  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (!liRef.current) return;
      if (!liRef.current.contains(e.target as Node)) close();
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [open, close]);

  // دعم الكيبورد
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Escape') close();
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    },
    [close, toggle]
  );

  return (
    <li className="nav-item" ref={liRef}>
      <button
        type="button"
        className="icon-button"
        onClick={toggle}
        onKeyDown={onKeyDown}
        aria-haspopup={!!children}
        aria-expanded={open}
      >
        {icon}
        <span className="sr-only">Toggle menu</span>
      </button>

      {open && children}
    </li>
  );
});

const DropdownItem = memo(function DropdownItem({
  leftIcon,
  rightIcon,
  children,
  onClick,
  role = 'menuitem',
}: DropdownItemProps): ReactJSX.Element {
  return (
    <button
      type="button"
      className="menu-item"
      role={role}
      onClick={onClick}
    >
      {leftIcon && <span className="icon-button">{leftIcon}</span>}
      <span className="menu-label">{children}</span>
      {rightIcon && <span className="icon-right">{rightIcon}</span>}
    </button>
  );
});

function DropdownMenu(): ReactJSX.Element {
  const [activeMenu, setActiveMenu] = useState<MenuKey>('main');
  const [menuHeight, setMenuHeight] = useState<number | null>(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const settingsRef = useRef<HTMLDivElement | null>(null);
  const animalsRef = useRef<HTMLDivElement | null>(null);

  const calcHeight = useCallback((el: HTMLElement) => {
    const h = el.offsetHeight;
    setMenuHeight((prev) => (prev === h ? prev : h));
  }, []);

  const go = useCallback((key: MenuKey) => setActiveMenu(key), []);

  // قياس تلقائي مع تبدّل القوائم
  useEffect(() => {
    // تعيين ارتفاع مبدئي عند أول تحميل
    const current =
      (activeMenu === 'main' && mainRef.current) ||
      (activeMenu === 'settings' && settingsRef.current) ||
      (activeMenu === 'animals' && animalsRef.current);
    if (current) calcHeight(current);
  }, [activeMenu, calcHeight]);

  // مراقبة تغير الحجم بواسطة ResizeObserver (اختياري لكنه لطيف)
useEffect(() => {
  // لا تكمّل إن لم نكن في المتصفح أو لا يوجد ResizeObserver أو لا يوجد العنصر
  if (typeof window === "undefined" || !("ResizeObserver" in window) || !dropdownRef.current) {
    return;
  }

  const ro = new ResizeObserver(() => {
    const current =
      (activeMenu === "main" && mainRef.current) ||
      (activeMenu === "settings" && settingsRef.current) ||
      (activeMenu === "animals" && animalsRef.current);

    if (current) {
      const h = current.offsetHeight;
      setMenuHeight((prev) => (prev === h ? prev : h));
    }
  });

  ro.observe(dropdownRef.current);

  return () => ro.disconnect();
}, [activeMenu]);
  return (
    <div
      className="dropdown"
      style={{ height: menuHeight ?? undefined }}
      ref={dropdownRef}
      role="menu"
      aria-label="User menu"
    >
      {/* القائمة الرئيسية */}
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={250}
        classNames="menu-primary"
        unmountOnExit
        nodeRef={mainRef}
        onEnter={() => {
          if (mainRef.current) calcHeight(mainRef.current);
        }}
      >
        <div className="menu" ref={mainRef}>
          <DropdownItem onClick={() => {}}>My Profile</DropdownItem>

          <DropdownItem
            leftIcon={<HiCog className="w-5 h-5" aria-hidden />}
            rightIcon={<HiChevronRight className="w-4 h-4" aria-hidden />}
            onClick={() => go('settings')}
          >
            Settings
          </DropdownItem>

          <DropdownItem
            leftIcon="🦧"
            rightIcon={<HiChevronRight className="w-4 h-4" aria-hidden />}
            onClick={() => go('animals')}
          >
            Animals
          </DropdownItem>
        </div>
      </CSSTransition>

      {/* الإعدادات */}
      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={250}
        classNames="menu-secondary"
        unmountOnExit
        nodeRef={settingsRef}
        onEntered={() => {
          if (settingsRef.current) calcHeight(settingsRef.current);
        }}
      >
        <div className="menu" ref={settingsRef}>
          <DropdownItem
            leftIcon={<HiArrowLeft className="w-5 h-5" aria-hidden />}
            onClick={() => go('main')}
          >
            <h2>My Tutorial</h2>
          </DropdownItem>

          {['HTML', 'CSS', 'JavaScript', 'Awesome!'].map((label) => (
            <DropdownItem key={label} leftIcon={<HiBolt className="w-5 h-5" aria-hidden />}>
              {label}
            </DropdownItem>
          ))}
        </div>
      </CSSTransition>

      {/* الحيوانات */}
      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={250}
        classNames="menu-secondary"
        unmountOnExit
        nodeRef={animalsRef}
        onEntered={() => {
          if (animalsRef.current) calcHeight(animalsRef.current);
        }}
      >
        <div className="menu" ref={animalsRef}>
          <DropdownItem
            leftIcon={<HiArrowLeft className="w-5 h-5" aria-hidden />}
            onClick={() => go('main')}
          >
            <h2>Animals</h2>
          </DropdownItem>

          {[
            { icon: '🦘', label: 'Kangaroo' },
            { icon: '🐸', label: 'Frog' },
            { icon: '🦋', label: 'Horse?' },
            { icon: '🦔', label: 'Hedgehog' },
          ].map(({ icon, label }) => (
            <DropdownItem key={label} leftIcon={icon}>
              {label}
            </DropdownItem>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
