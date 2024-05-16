import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useLocation} from "react-router-dom";
import {Box, Button, Modal, TextField} from "@mui/material";

function createData(
    name: string,
    description: string,
) {
    return { name, description };
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const rows = [
    createData('SDE 1', 'description for SDE1'),
    createData('SDE 2', 'description for SDE2'),
];

const BasicTable = ()=> {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);




    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://catfact.ninja/fact');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Job</TableCell>
                        <TableCell align="right">Description</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">
                                {row.description}
                            </TableCell>
                            <TableCell align="right">
                                <Button onClick={() => {}} variant="contained" color="primary">
                                    View details
                                </Button>
                            </TableCell>
                            <TableCell align="right">
                                <Button onClick={() => {}} variant="contained" color="primary">
                                    Search users
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const RecruiterHomePage: React.FC = (props: { email: string}) => {
    const location = useLocation();
    const { email } = location.state || {};
    const [job, setJob] = useState('');
    const [description, setDescription] = useState('');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        rows.push({ name: job, description })
    };
    const handleJobChange = (event) => {
        setJob(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    return (
        <div>
            <h1>This is a Recruiter's home page</h1>
            <BasicTable></BasicTable>
            <br/>
            <Button onClick={handleOpen}>Add Job</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField id="outlined-basic" label="job" variant="outlined" value={job}
                               onChange={handleJobChange}/>
                    <br/>
                    <br/>
                    <TextField id="outlined-basic" label="description" variant="outlined" value={description}
                               onChange={handleDescriptionChange}/>
                    <br/>
                    <Button onClick={handleClose}>Add job</Button>
                </Box>
            </Modal>
        </div>
    );
};

export default RecruiterHomePage;