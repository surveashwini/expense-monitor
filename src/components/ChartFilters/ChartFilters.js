import { useState } from "react";
import { Menu, Dropdown, Button } from "antd";

const ChartFilters = ({ tags, teams, timeData, filterChart }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    tags: "None",
    teams: "None",
    time: "None",
  });

  const generateMenu = (menuArray, menuType) => (
    <Menu>
      {menuArray.map((menuName, index) => {
        return (
          <Menu.Item key={index}>
            <Button
              type="text"
              onClick={(event) => selectFilter(event, menuName, menuType)}
            >
              {menuName}
            </Button>
          </Menu.Item>
        );
      })}
    </Menu>
  );
  const generateTimeMenu = generateMenu(timeData, "time");
  const generateTagsMenu = generateMenu(tags.response.data, "tags");
  const generateTeamsMenu = generateMenu(teams.response.data, "teams");

  const selectFilter = (event, value, filterType) => {
    event.preventDefault();
    filterChart(value, filterType);
    setSelectedFilters({ ...selectedFilters, [filterType]: value });
  };

  return (
    <div>
      <Dropdown overlay={generateTimeMenu} placement="bottomLeft">
        <Button>Time = {selectedFilters.time}</Button>
      </Dropdown>
      <Dropdown overlay={generateTagsMenu} placement="bottomLeft">
        <Button>Tags = {selectedFilters.tags}</Button>
      </Dropdown>
      <Dropdown overlay={generateTeamsMenu} placement="bottomLeft">
        <Button>Teams = {selectedFilters.teams}</Button>
      </Dropdown>
    </div>
  );
};

export default ChartFilters;
