import CustomerIcons from "../../assets/customers-icon.svg";
import FoodIcon from "../../assets/food-icon.svg";
import HomeIcon from "../../assets/home-icon.svg";
import MenuIcon from "../../assets/menu-icon.svg";
import { Link } from "../../component-library/link";

export const NavigationPanel = () => {
  return (
    <div className="w-64 border-r border-gray-300 p-4 h-dvh flex flex-col gap-2 bg-neutral-200">
      <div className="mb-4">
        <MenuIcon className="w-6 h-6" />
      </div>
      <Link href="/shop/123">
        <span>
          <HomeIcon className="w-6 h-6" />
        </span>
        Home{" "}
      </Link>

      <Link href="/shop/123/menu">
        <span>
          <FoodIcon className="w-6 h-6" />
        </span>
        Menu{" "}
      </Link>

      <Link href="/shop/123/customers">
        <span>
          <CustomerIcons className="w-6 h-6 fill-amber-500" />
        </span>
        Customers{" "}
      </Link>
    </div>
  );
};
