import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@material-tailwind/react";
import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import EditNoteIcon from "@mui/icons-material/EditNote";

const UserList = () => {
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
            name: {
                name: "David Wagner",
                email: "david_wagner@example.com",
            },
            createDate: "24 Otc, 2022",
            role: "Lorem Ipsum",
            admin: true,
        },
        {
            name: {
                name: "David Wagner",
                email: "david_wagner@example.com",
            },
            createDate: "24 Otc, 2022",
            role: "Lorem Ipsum",
            admin: true,
        },
        {
            name: {
                name: "David Wagner",
                email: "david_wagner@example.com",
            },
            createDate: "24 Otc, 2022",
            role: "Lorem Ipsum",
            admin: true,
        },
        {
            name: {
                name: "David Wagner",
                email: "david_wagner@example.com",
            },
            createDate: "24 Otc, 2022",
            role: "Lorem Ipsum",
            admin: true,
        },
        {
            name: {
                name: "David Wagner",
                email: "david_wagner@example.com",
            },
            createDate: "24 Otc, 2022",
            role: "Lorem Ipsum",
            admin: false,
        },
        {
            name: {
                name: "David Wagner",
                email: "david_wagner@example.com",
            },
            createDate: "24 Otc, 2022",
            role: "Lorem Ipsum",
            admin: true,
        },
        {
            name: {
                name: "David Wagner",
                email: "david_wagner@example.com",
            },
            createDate: "24 Otc, 2022",
            role: "Lorem Ipsum",
            admin: false,
        },
    ];

    return (
        <div>
            <div className="pt-3">
                <h2 className="text-3xl font-medium">User List</h2>
            </div>

            <div className="flex items-center justify-end gap-4">
                <div>
                    <input
                        type="text"
                        name=""
                        className="rounded-md border px-3 py-2.5 focus:outline-none"
                        placeholder="Search"
                        id=""
                    />
                </div>
                <div>
                    <button className="rounded-lg bg-[#63666A] px-4 py-2.5 uppercase text-white">
                        Add user
                    </button>
                </div>
                <div>
                    <MoreVertIcon />
                </div>
            </div>

            {/* //!====================================================================================================================== */}
            <div className="row my-4">
                <div className="col" >
                    <div className="card shadow" style={{ height: "140px" }}>
                        <div className="card-body">
                            <div className="d-flex">
                                <h4
                                    className="fs-4 text-muted"
                                    style={{
                                        letterSpacing: "0.3px",
                                        fontWeight: "500",
                                        color: "#5E5873",
                                    }}
                                >
                                    Reach
                                </h4>
                            </div>
                            <h2 className="fs-2 my-2" style={{ fontWeight: "600" }}>
                                hi
                            </h2>

                            {/* <h4
                                className="my-2"
                                style={{
                                    letterSpacing: "0.5px",
                                    fontWeight: "400",
                                    color: "#5E5873",
                                }}
                            >
                                Reach
                            </h4> */}
                        </div>
                    </div>
                </div>

                <div className="col" >
                    <div className="card shadow" style={{ height: "140px" }}>
                        <div className="card-body">
                            <div className="d-flex">
                                <h4
                                    className="fs-4 text-muted"
                                    style={{
                                        letterSpacing: "0.3px",
                                        fontWeight: "500",
                                        color: "#5E5873",
                                    }}
                                >
                                    Reach
                                </h4>
                            </div>
                            <h2 className="fs-2 my-2" style={{ fontWeight: "600" }}>
                                hi
                            </h2>

                            {/* <h4
                                className="my-2"
                                style={{
                                    letterSpacing: "0.5px",
                                    fontWeight: "400",
                                    color: "#5E5873",
                                }}
                            >
                                Reach
                            </h4> */}
                        </div>
                    </div>
                </div>

                <div className="col" >
                    <div className="card shadow" style={{ height: "140px" }}>
                        <div className="card-body">
                            <div className="d-flex">
                                <h4
                                    className="fs-4 text-muted"
                                    style={{
                                        letterSpacing: "0.3px",
                                        fontWeight: "500",
                                        color: "#5E5873",
                                    }}
                                >
                                    Engagement
                                </h4>
                            </div>
                            <h2 className="fs-2 my-2" style={{ fontWeight: "600" }}>
                                helloo
                            </h2>

                            {/* <h4
                                className="my-2"
                                style={{
                                    letterSpacing: "0.5px",
                                    fontWeight: "400",
                                    color: "#5E5873",
                                }}
                            >
                                Engagement
                            </h4> */}
                        </div>
                    </div>
                </div>

                <div className="col" >
                    <div className="card shadow" style={{ height: "140px" }}>
                        <div className="card-body">
                            <div className="d-flex">
                                <h4
                                    className="fs-4 text-muted"
                                    style={{
                                        letterSpacing: "0.3px",
                                        fontWeight: "500",
                                        color: "#5E5873",
                                    }}
                                >
                                    Link Clicks
                                </h4>
                            </div>
                            <h2 className="fs-2 my-2" style={{ fontWeight: "600" }}>
                                hiiii
                            </h2>

                            <h4
                                className="my-2"
                                style={{
                                    letterSpacing: "0.5px",
                                    fontWeight: "400",
                                    color: "#5E5873",
                                }}
                            >
                                Link Clicks
                            </h4>

                        </div>
                    </div>
                </div>
            </div>
            {/* //!====================================================================================================================== */}


            {/* Table */}

            <TableContainer
                component={Paper}
                sx={{
                    mt: "30px",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 20px -10px black",
                }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Create Date</TableCell>
                            <TableCell>Role</TableCell>
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
                                    <div className="flex items-center lg:gap-[120px]">
                                        <div>
                                            <Title>{data.name.name}</Title>
                                            <Token>{data.name.email}</Token>
                                        </div>
                                        <div>
                                            {data.admin ? (
                                                <button className="rounded-xl bg-[#63666A] px-12 py-2 text-white">
                                                    Admin
                                                </button>
                                            ) : (
                                                <button className="rounded-xl bg-[#EFF4FA] px-12 py-2 text-black">
                                                    Client
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Token>{data.createDate}</Token>
                                </TableCell>
                                <TableCell>
                                    <Token>{data.role}</Token>
                                </TableCell>
                                <TableCell>
                                    <IconButton aria-label="delete">
                                        <EditNoteIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete">
                                        <AutoDeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default UserList;
