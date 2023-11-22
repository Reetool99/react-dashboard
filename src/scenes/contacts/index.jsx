import { Box } from "@mui/material";
import React from "react";
import Header from "../../component/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";
import { mockDataContacts } from "../../data/mockData";

const Contact = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      cellClassName: "name-column--cell",
      width: 130,
    },

    {
      field: "age",
      headerName: "Age",
      //   type: "number",
      headerAlign: "center",
      align: "center",
      width: 90,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 130,
    },
    {
      field: "email",
      headerName: "Email",
      width: 130,
    },
    {
      field: "address",
      headerName: "Address",
      width: 130,
    },
    {
      field: "city",
      headerName: "City",
      width: 130,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      width: 130,
    },
  ];
  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle={"List of Contacts for Future Reference"}
      />

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataContacts}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
    </Box>
  );
};

export default Contact;
