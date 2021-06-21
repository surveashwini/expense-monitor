import Datatable from "../../shared/components/Datatable";

const Overview = ({ data, columns }) => {
  return <div>{data && <Datatable data={data} columns={columns} />}</div>;
};

export default Overview;
