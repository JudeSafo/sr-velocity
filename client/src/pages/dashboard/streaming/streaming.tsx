// Copyright Schulich Racing FSAE
// Written by Justin Tijunelis

import React, { useContext } from "react";
import { DashboardContext } from "../dashboard";
import ChartView from "./charts/chartView";

enum StreamingSection {
  CHARTS = "Real-time Charts",
  RAW_DATA = "Raw Data",
}

const Streaming: React.FC = () => {
  const section = useContext(DashboardContext);

  switch (section) {
    case StreamingSection.CHARTS:
      return <ChartView />;
    case StreamingSection.RAW_DATA:
      return <div id="streaming">{section}</div>;
    default:
      return <></>;
  }
};

export default Streaming;
