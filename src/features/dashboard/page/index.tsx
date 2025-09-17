import { Page } from "../../../common-components/page";
import { Tile, TileContent, TileHeader } from "../../../component-library/tile";

export const DashboardPage = () => {
  return (
    <Page>
      <div className="flex flex-col gap-7 grow shrink basis-auto p-4">
        <div className="flex justify-between gap-3">
          <Tile size="xsmall">
            <TileHeader title="Orders Today" />
            <TileContent>
              <span className="font-bold text-5xl">123</span>
            </TileContent>
          </Tile>

          <Tile size="xsmall">
            <TileHeader title="Earnings Today" />
            <TileContent>
              <span>$105.99</span>
            </TileContent>
          </Tile>

          <Tile size="xsmall">
            <TileHeader title="Best Selling Item Today" />
            <TileContent>Cheese Pizza</TileContent>
          </Tile>
        </div>
        <Tile size="full">
          <TileHeader canCollapse title="Last 7 Day's Orders" />
          <TileContent>Chart Was Here</TileContent>
        </Tile>
      </div>
    </Page>
  );
};
