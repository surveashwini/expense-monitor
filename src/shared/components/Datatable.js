import {
  DATE_FORMAT,
  BLUE,
  KEY,
  FIRST_COLUMN_HEADER,
  DATE,
  TAGS,
} from "../../constants/constants";
import moment from "moment";
import { Table, Tag } from "antd";

const { Column } = Table;

const Datatable = ({ data, columns }) => {
  return (
    <Table dataSource={data}>
      <>
        {columns.map((column) => (
          <Column
            title={column === KEY ? FIRST_COLUMN_HEADER : column}
            dataIndex={column.toLowerCase()}
            key={column.toLowerCase()}
            render={(data) => {
              if (column === { DATE }) {
                return <>{moment(data)?.format(DATE_FORMAT)}</>;
              } else if (column === { TAGS }) {
                return (
                  <>
                    {data.map((data) => (
                      <Tag color={BLUE} key={data}>
                        {data}
                      </Tag>
                    ))}
                  </>
                );
              }
              return data;
            }}
          />
        ))}
      </>
    </Table>
  );
};

export default Datatable;
