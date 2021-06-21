import { Input } from "antd";

const { Search } = Input;
const SearchBox = ({ handleSearch }) => {
  const onSearch = (value) => handleSearch(value);
  return (
    <Search
      placeholder="Search"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
  );
};

export default SearchBox;
