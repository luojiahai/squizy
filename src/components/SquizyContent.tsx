import React from "react";
import { Page } from "../hooks/usePageState";
import { SquizyStart } from "./SquizyStart";
import { SquizyLibrary } from "./SquizyLibrary";
import { SquizyStatistics } from "./SquizyStatistics";

interface SquizyContentProps {
  page: Page;
}

export const SquizyContent = (props: SquizyContentProps) => {
  if (props.page === Page.Start) {
    return <SquizyStart />;
  } else if (props.page === Page.Library) {
    return <SquizyLibrary />;
  } else if (props.page === Page.Statistics) {
    return <SquizyStatistics />;
  }
  return <></>;
};
