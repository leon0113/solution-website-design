import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@material-tailwind/react";
import styled from "@emotion/styled";

const Subscriptions = () => {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    fontWeight: "500",
  }));
  const Token = styled(Typography)(({ theme }) => ({
    fontSize: "12px",
    fontWeight: "400",
  }));

  const fakeData = [
    {
      customer: {
        title: "Alexa Jones",
        token: "10003657",
      },
      subscription: {
        title: "1 Week Compaign",
        token: "10003657",
      },
      status: {
        status: "Active",
        auto: "Auto - Renews on September, 2023",
      },
    },
    {
      customer: {
        title: "Alexa Jones",
        token: "10003657",
      },
      subscription: {
        title: "1 Week Compaign",
        token: "10003657",
      },
      status: {
        status: "Active",
        auto: "Auto - Renews on September, 2023",
      },
    },
    {
      customer: {
        title: "Alexa Jones",
        token: "10003657",
      },
      subscription: {
        title: "1 Week Compaign",
        token: "10003657",
      },
      status: {
        status: "Active",
        auto: "Auto - Renews on September, 2023",
      },
    },
    {
      customer: {
        title: "Alexa Jones",
        token: "10003657",
      },
      subscription: {
        title: "1 Week Compaign",
        token: "10003657",
      },
      status: {
        status: "Active",
        auto: "Auto - Renews on September, 2023",
      },
    },
    {
      customer: {
        title: "Alexa Jones",
        token: "10003657",
      },
      subscription: {
        title: "1 Week Compaign",
        token: "10003657",
      },
      status: {
        status: "Active",
        auto: "Auto - Renews on September, 2023",
      },
    },
    {
      customer: {
        title: "Alexa Jones",
        token: "10003657",
      },
      subscription: {
        title: "1 Week Compaign",
        token: "10003657",
      },
      status: {
        status: "Active",
        auto: "Auto - Renews on September, 2023",
      },
    },
  ];

  return (
    <div>
      <div className="pt-3">
        <h2 className="text-3xl font-medium">Subscriptions</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 bg-white shadow-sm rounded-lg px-4 py-3">
        <div className="flex items-center gap-2">
          <h1 className="text-6xl font-normal text-[#28C76F]">4</h1>
          <p className="text-xl font-medium">Active</p>
        </div>
        <div className="flex items-center gap-2 border-r-2 border-gray-800">
          <h1 className="text-6xl font-normal text-gray-600">0</h1>
          <p className="text-xl font-medium">
            Expire <br /> with in 30 Days
          </p>
        </div>
        <div className="flex items-center gap-2  border-r-2 border-gray-800">
          <h1 className="text-6xl font-normal text-gray-600">0</h1>
          <p className="text-xl font-medium">
            Auto - Renew <br /> with in 30 Days
          </p>
        </div>
        <div className="flex items-center gap-2  border-r-2 border-gray-800">
          <h1 className="text-6xl font-normal text-gray-600">2</h1>
          <p className="text-xl font-medium">Trail</p>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-6xl font-normal text-gray-600">6</h1>
          <p className="text-xl font-medium">All</p>
        </div>
      </div>

      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{
          mt: "30px",
          borderRadius:"8px", 
          boxShadow:"0px 0px 20px -10px black"
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>Subscription</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fakeData.map((data, i) => (
              <TableRow
                key={i}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Title>{data.customer.title}</Title>
                  <Token>{data.customer.token}</Token>
                </TableCell>
                <TableCell>
                  <Title>{data.subscription.title}</Title>
                  <Token>{data.subscription.token}</Token>
                </TableCell>
                <TableCell>
                  <Title>{data.status.status}</Title>
                  <Token>{data.status.auto}</Token>
                </TableCell>
                <TableCell>
                  <Button variant="text">Manage</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Subscriptions;
