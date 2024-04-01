import { classNames } from "shared/lib/classnames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinktheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink
          theme={AppLinktheme.SECONDARY}
          to={"/"}
          className={cls.mainLink}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinktheme.PRIMARY} to={"/about"}>
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
