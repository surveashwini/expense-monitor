import { useState } from "react";
import { Card, Space } from "antd";

import { SEARCH_HEADER } from "../../constants/constants";
import SearchBox from "../../shared/components/SearchBox";
import Datatable from "../../shared/components/Datatable";

import { filterArray } from "./../../shared/util/processArray";

const Search = ({ data, columns }) => {
  const [searchedData, setSearchedData] = useState(data);

  const handleSearch = (value) => {
    let filteredData = filterArray(data, null, value);
    setSearchedData(filteredData);
  };
  return (
    <Card title={SEARCH_HEADER}>
      <Space direction="vertical">
        <p>
          <SearchBox handleSearch={handleSearch} />
        </p>

        <Datatable data={searchedData} columns={columns} />
      </Space>
    </Card>
  );
};

export default Search;
