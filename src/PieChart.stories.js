import React from "react";

import PieChart from "./PieChart";

export default {
  title: "PieChart",
  component: PieChart,
  argTypes: {
    radius: { control: { type: "range", min: 50, max: 150 } },
    separatorColor: { control: "color" },
    separatorDegree: { control: { type: "range", min: 0, max: 45 } },
    showValues: { control: "boolean" },
    showPercentages: { control: "boolean" },
    data: { control: "object" },
  },
};

const Template = (args) => <PieChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  radius: 100,
  separatorColor: "#808080",
  separatorDegree: 2,
  showValues: false,
  showPercentages: true,
  data: [
    { color: "#FF9430", value: 5 },
    { color: "#46DB75", value: 3 },
    { color: "#00A9FF", value: 2 },
  ],
};
