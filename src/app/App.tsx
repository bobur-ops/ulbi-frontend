import { Suspense } from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';
import './styles/index.scss';

const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames('app', { hovered: true, selected: false }, [theme])}
    >
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
