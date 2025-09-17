import { RouterProvider } from "react-aria-components";
import { Route, Routes, useHref, useNavigate } from "react-router";

import { DashboardPage } from "./features/dashboard/page";
import { MenuPage } from "./features/menu/page";
import { ShopSelectorPage } from "./features/shop-selector/page";

function App() {
  const navigate = useNavigate();

  return (
    <RouterProvider navigate={navigate} useHref={useHref}>
      <Routes>
        <Route element={<ShopSelectorPage />} path="/" />
        <Route element={<DashboardPage />} path="/shop/:shopId" />
        <Route element={<MenuPage />} path="/shop/:shopId/menu" />
      </Routes>
    </RouterProvider>
  );
}
export default App;
