import clsx from "clsx";
import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
  useState,
} from "react";

import ChevronIcon from "../../assets/chevron-icon.svg";

interface TileHeaderProps {
  canCollapse?: boolean;
  isExpanded?: boolean;
  onCollapseClick?: () => void;
  title: string;
}

export const TileHeader = ({
  canCollapse,
  isExpanded,
  onCollapseClick,
  title,
}: TileHeaderProps) => {
  return (
    <>
      <h2 className="font-bold text-base">{title}</h2>
      {canCollapse && (
        <div>
          <button onClick={onCollapseClick}>
            <span
              className={clsx(
                "inline-block transition-transform duration-500",
                isExpanded && "rotate-180",
              )}
            >
              <ChevronIcon />
            </span>
          </button>
        </div>
      )}
    </>
  );
};

interface TileContentProps {
  children: ReactNode;
}

export const TileContent = ({ children }: TileContentProps) => {
  return (
    <div className="flex-grow-1 flex-shrink-1 basis-[auto]">{children}</div>
  );
};

interface TileFooterProps {
  children: ReactNode;
}

export const TileFooter = ({ children }: TileFooterProps) => {
  return <>{children}</>;
};

interface TileProps {
  children: ReactNode;
  size: "full" | "large" | "medium" | "small" | "xsmall";
}

export const Tile = ({ children, size }: TileProps) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleCollapseClick = () => {
    setIsExpanded((isExpanded) => !isExpanded);
  };

  let header;
  let footer;
  const content: ReactElement[] = [];

  Children.forEach(children, (child) => {
    if (!isValidElement(child)) {
      return;
    }

    if (child.type === TileHeader) {
      header = cloneElement(child as ReactElement<TileHeaderProps>, {
        isExpanded,
        onCollapseClick: handleCollapseClick,
      });
    } else if (child.type === TileFooter) {
      footer = child;
    } else if (child.type === TileContent) {
      content.push(child);
    }
  });

  return (
    <div
      className={clsx(
        "bg-white w-full flex flex-col gap-2 p-3 rounded-sm shadow-sm",
        size === "large" && "max-w-lg",
        size === "medium" && "max-w-md",
        size === "small" && "max-w-sm",
        size === "full" && "max-w-full",
        size === "xsmall" && "max-w-xs",
      )}
    >
      {!!header && (
        <header className="flex flex-grow-0 flex-shrink-0 h-10 justify-between">
          {header}
        </header>
      )}
      <div
        className={clsx(
          "flex flex-col gap-2 overflow-hidden transition-[max-height] duration-500",
          isExpanded ? "max-h-screen" : "max-h-0",
        )}
      >
        {content}
        {!!footer && (
          <footer className="flex-grow-0 flex-shrink-0 h-14">{footer}</footer>
        )}
      </div>
    </div>
  );
};
