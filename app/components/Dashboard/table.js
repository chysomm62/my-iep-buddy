import Table from "../common/table/table";

const columns = [
  {
    id: 1,
    Header: "Id",
    accessor: "id",
    width: "20px",
  },
  {
    id: 2,
    accessor: "name",
    Header: "Affiliate Name",
  },
  { id: 3, accessor: "orderId", Header: "Order Id" },
  { id: 4, accessor: "orderValue", Header: "Order Value" },
  {
    id: 5,
    accessor: "trackingMethod",
    Header: "Tracking Method",
  },
  { id: 6, accessor: "date", Header: "Date" },
];
const data = [
  {
    id: 1,
    name: "Chi Basil",
    orderId: "001ABC",
    orderValue: "\u20A65000.00",
    trackingMethod: "Link",
    date: "12/12/22",
  },
  {
    id: 2,
    name: "Chi Basil",
    orderId: "001ABC",
    orderValue: "\u20A65000.00",
    trackingMethod: "Coupon",
    date: "12/12/22",
  },
];

const StudentsTable = () => {
  return (
    <>
      <Table Data={data} Columns={columns} />
    </>
  );
};

export default StudentsTable;
