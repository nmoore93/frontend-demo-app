import { Page } from "../../../common-components/page";
import { Tile, TileContent, TileHeader } from "../../../component-library/tile";

export const MenuPage = () => {
  return (
    <Page>
      <div className="flex flex-col gap-7 grow shrink basis-auto p-4">
        <Tile size="large">
          <TileHeader canCollapse title="Item Details" />
          <TileContent>Item Details</TileContent>
        </Tile>

        <Tile size="large">
          <TileHeader canCollapse title="Item Pricing" />
          <TileContent>Item Pricing</TileContent>
        </Tile>
      </div>
    </Page>
  );
};
