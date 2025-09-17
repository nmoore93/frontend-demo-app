import { Select, SelectItem } from "../../../component-library/select";
import { Tile, TileContent, TileHeader } from "../../../component-library/tile";

export const ShopSelectorPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Tile size="medium">
        <TileHeader title="Select a shop" />
        <TileContent>
          <Select label="Select the shop to view:">
            <SelectItem href="/shop/123">Amazing Pizza Co.</SelectItem>
            <SelectItem href="/shop/123">New Pizza Co.</SelectItem>
          </Select>
        </TileContent>
      </Tile>
    </div>
  );
};
