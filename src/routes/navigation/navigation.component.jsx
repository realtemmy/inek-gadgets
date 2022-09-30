import NavigationInfo from "../../components/navigation-info/navigation-info.component";
import MainNavigation from "../../components/main-nav/main-nav.component";
import NavCategory from "../../components/nav-category/nav-category.component";
import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
        <NavigationInfo />
        <MainNavigation />
        <NavCategory />
        <Outlet />
    </div>
    
  );
};

export default Navigation;
