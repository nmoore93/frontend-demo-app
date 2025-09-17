import { Page } from "../../../common-components/page";
import { Input } from "../../../component-library/input";
import { Tile, TileContent, TileHeader } from "../../../component-library/tile";

export const MenuPage = () => {
  return (
    <Page>
      <div className="flex flex-col gap-7 grow shrink basis-auto p-4">
        <Tile size="large">
          <TileHeader canCollapse title="Item Details" />
          <TileContent>
            <div className="flex flex-col gap-2">
              <div className="m-0.5">
                <Input label="Name" />
              </div>
              <div className="m-0.5">
                <Input
                  description="This will be shown as the description on your menu"
                  label="Description"
                />
              </div>
            </div>
          </TileContent>
        </Tile>

        <Tile size="large">
          <TileHeader canCollapse title="Item Pricing" />
          <TileContent>
            <div className="m-0.5">
              <Input label="Price" placeholder="$0.00" />
            </div>
          </TileContent>
        </Tile>
      </div>
    </Page>
  );
};
