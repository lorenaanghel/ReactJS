import React from "react";
import Table from "terra-table";

const UserTable = () => (
  <Table
    summaryId="striped-table"
    summary="This table displays striped rows."
    numberOfColumns={3}
    dividerStyle="horizontal"
    headerData={{
      cells: [
        { id: "h-id", key: "id", children: "ID" },
        { id: "h-username", key: "username", children: "Username" },
        { id: "h-name", key: "name", children: "Name" },
        { id: "h-phone", key: "phone", children: "Phone" },
        { id: "h-mail", key: "mail", children: "Mail" },
        { id: "h-address", key: "address", children: "Address" },
      ],
    }}
    bodyData={[]}
  />
);
export default UserTable;
