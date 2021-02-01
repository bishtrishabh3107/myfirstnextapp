import { Divider } from '@chakra-ui/react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';

function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };
  return (
    <div>
      <nav className="h-20 px-20 py-6 flex flex-row justify-between font-semibold  md:flex-col md:py-3 sm:flex-col">
        <div className="header__Logo text-2xl text-blue-900 text-center dark:text-red-400">
          <Link href="/">
            <a>ᗺR Labs</a>
          </Link>
        </div>
        <div className="header__List text-center sm:invisible">
          <Link href="/services">
            <a className="mx-16 hover:text-red-400">Services</a>
          </Link>
          <Link href="/blogs">
            <a className="mx-16 hover:text-red-400">Blogs</a>
          </Link>
          <Link href="/mentoring">
            <a className="mx-16 hover:text-red-400">Mentoring</a>
          </Link>
        </div>
        <span className="absolute top-0 right-0">
          <Button colorScheme="twitter" variant="ghost" onClick={switchTheme}>
            Dark Mode
          </Button>
        </span>
      </nav>
      <Divider />
    </div>
  );
}

export default Header;
