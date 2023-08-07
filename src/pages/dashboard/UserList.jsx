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
import DeleteIcon from '@mui/icons-material/Delete';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const UserList = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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
            name: "Lorem ipsum",
            number: 614
        },
        {
            name: "Lorem ipsum",
            number: 614
        },
        {
            name: "Lorem ipsum",
            number: 614
        },
        {
            name: "Lorem ipsum",
            number: 614
        },
        {
            name: "Lorem ipsum",
            number: 614
        },

    ];
    const fakeUser = [
        {
            name: "Victoria Perez",
            userID: "LA-0234",
            lorem: "Lorem Ipsum",
            date: "30 Apr, 2017 to 24 Otc 2020",
        },
        {
            name: "Victoria Perez",
            userID: "LA-0234",
            lorem: "Lorem Ipsum",
            date: "30 Apr, 2017 to 24 Otc 2020",
        },
        {
            name: "Victoria Perez",
            userID: "LA-0234",
            lorem: "Lorem Ipsum",
            date: "30 Apr, 2017 to 24 Otc 2020",
        },
        {
            name: "Victoria Perez",
            userID: "LA-0234",
            lorem: "Lorem Ipsum",
            date: "30 Apr, 2017 to 24 Otc 2020",
        },
        {
            name: "Victoria Perez",
            userID: "LA-0234",
            lorem: "Lorem Ipsum",
            date: "30 Apr, 2017 to 24 Otc 2020",
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
                    <Button className="rounded-lg bg-[#63666A] px-4 py-2.5 uppercase text-white" onClick={handleOpen} >Add User</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                </div>
                <div>
                    <MoreVertIcon />
                </div>
            </div>

            {/* //!data cards*/}
            <div className="row my-4">
                {fakeData.map((data) => (
                    <div className="col" >
                        <div className="card shadow" style={{ height: "110px" }}>
                            <div className="card-body">
                                <div className="d-flex">
                                    <h4
                                        style={{
                                            fontSize: "15px",
                                            fontWeight: "200",
                                            color: "#5E5873",
                                        }}
                                    >
                                        {data.name}
                                    </h4>
                                </div>
                                <h2 className="fs-2 my-2 text-black" style={{ fontWeight: "600" }}>
                                    {data.number}
                                </h2>
                            </div>
                        </div>
                    </div>
                ))};
            </div>

            {/* //! Table */}

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
                            <TableCell>User ID</TableCell>
                            <TableCell>Lorem ipsum</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Lorem ipsum</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fakeUser.map((data, i) => (
                            <TableRow
                                key={i}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <div className="flex items-center lg:gap-[120px]">
                                        <div>
                                            <Title>{data.name}</Title>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Token>{data.userID}</Token>
                                </TableCell>
                                <TableCell>
                                    <Token>{data.lorem}</Token>
                                </TableCell>
                                <TableCell>
                                    <Token>{data.date}</Token>
                                </TableCell>
                                <TableCell>
                                    <Token>{data.lorem}</Token>
                                </TableCell>
                                <TableCell>
                                    <IconButton aria-label="delete">
                                        <TaskAltIcon />
                                    </IconButton>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
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
