import React from 'react';
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
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const UserListModalContent = (handleClose) => {
    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "14px",
        fontWeight: "500",
    }));
    const Token = styled(Typography)(({ theme }) => ({
        fontSize: "12px",
        fontWeight: "400",
    }));

    const fakeUser = [
        {
            name: "Admin",
        },
        {
            name: "Client",
        },
        {
            name: "Lorem ipsum",
        },
        {
            name: "Lorem ipsum",
        }
    ];
    return (
        <div className="flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <h2 className="flex items-center gap-2 text-xl font-semibold leadi tracki">
                Add User form
            </h2>
            <TableContainer
                component={Paper}
                sx={{
                    mt: "30px",
                    borderRadius: "8px",
                    boxShadow: "0px 0px 20px -10px black",
                }}
            >
                <Table sx={{ minWidth: 250 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Module Permission</TableCell>
                            <TableCell>Read</TableCell>
                            <TableCell>Write</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fakeUser.map((data, i) => (
                            <TableRow
                                key={i}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {data.name}
                                </TableCell>
                                <TableCell>
                                    <Checkbox {...label} defaultChecked style={{ color: 'black' }} />
                                </TableCell>
                                <TableCell>
                                    <Checkbox {...label} style={{ color: 'black' }} />
                                </TableCell>
                                <TableCell>
                                    <Checkbox {...label} defaultChecked style={{ color: 'black' }} />
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default UserListModalContent;    