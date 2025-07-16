import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  );

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
    setIsDark(!isDark);
  };

  useEffect(() => {
    // Optional: persist theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <Button onClick={toggleTheme} variant="ghost" className="text-forest-600 hover:text-forest-700">
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  );
};
