import { useState } from "react";
import { Card, Space } from "antd";
import moment from "moment";

import ChartFilters from "../ChartFilters/ChartFilters";
import Graph from "../../shared/components/Graph";
import {
  MONTH,
  MONTHFORMAT,
  ANALYTICS_HEADER,
} from "../../constants/constants";

import { filterArray } from "./../../shared/util/processArray";

const Analytics = ({ data, tags, teams }) => {
  const [searchedData, setSearchedData] = useState(data);

  const totalSpending = data.reduce(
    (acc, transaction) => (acc = acc + transaction.amount),
    0
  );

  const filterChart = (value, filterType) => {
    let filteredData = filterArray(data, filterType, value);
    setSearchedData(filteredData);
  };

  let timeData = data.map((transaction) =>
    moment(transaction.date).startOf(MONTH).format(MONTHFORMAT)
  );

  timeData = [...new Set(timeData)];

  return (
    <Card title={ANALYTICS_HEADER}>
      <Space align="center" direction="vertical">
        <Space>
          <div>Total Spent: ${totalSpending}</div>
        </Space>
        <div>
          <ChartFilters
            tags={tags}
            teams={teams}
            timeData={timeData}
            filterChart={filterChart}
          />
        </div>

        <div>
          <Graph data={searchedData} />
        </div>
      </Space>
    </Card>
  );
};

export default Analytics;
