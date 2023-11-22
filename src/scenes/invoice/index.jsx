import { useTheme } from "@emotion/react";
import React from "react";
import { tokens } from "../../theme";
import { Box, Typography } from "@mui/material";
import Header from "../../component/Header";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";

const Invoice = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    {
      field: "name",
      headerName: "Name",
      cellClassName: "name-column--cell",
      width: 190,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 190,
    },
    {
      field: "email",
      headerName: "Email",
      width: 190,
    },

    {
      field: "cost",
      headerName: "Cost",
      width: 190,
      renderCell: (params) => {
        console.log(params.row.cost);
        return (
          <Typography sx={{ color: colors.greenAccent[500] }}>
            {params.row.cost}
          </Typography>
        );
      },
    },
    {
      field: "date",
      headerName: "Date",
      width: 190,
    },
  ];
  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle={"List of Invoice Balances"} />

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
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoice;
