import { classNames } from 'shared/lib/classnames/classNames';
import { AppLink, AppLinktheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          theme={AppLinktheme.SECONDARY}
          to="/"
          className={cls.mainLink}
        >
          {t('Главная страница')}
        </AppLink>
        <AppLink theme={AppLinktheme.PRIMARY} to="/about">
          {t('О нас')}
        </AppLink>
      </div>
    </div>
  );
};
