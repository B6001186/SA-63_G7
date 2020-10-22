import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DefaultApi } from '../../api/apis';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Link from '@material-ui/core/Link';
import {
    Content,
    Header,
    Page,
    pageTheme,
    ContentHeader,
} from '@backstage/core';
import { Link as RouterLink } from 'react-router-dom';
import {
    Button,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Grid
} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
    },
    title: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    logoutButton: {
        marginLeft: 10,
        marginRight: 10,
        color: 'white'
    }
}));

function redirecLogOut() {
    // redire Page ... http://localhost:3000/
    window.location.href = "http://localhost:3000/";
}

export default function ComponentsTable() {
    const classes = useStyles();
    const api = new DefaultApi();
    const [employees, setEmployees] = useState(Array);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getEmployees = async () => {
            const res = await api.listEmployee({ limit: 10, offset: 0 });
            setLoading(false);
            setEmployees(res);
        };
        getEmployees();
    }, [loading]);

    const deleteEmployees = async (id: number) => {
        const res = await api.deleteEmployee({ id: id });
        setLoading(true);
    };

    return (

        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" className={classes.title}>
                        ระบบจัดการโรคติดต่อ
      </Typography>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        size="medium"
                    >
                        <AccountCircle />
                        <Typography>
                            <Link variant="h6" onClick={redirecLogOut} className={classes.logoutButton}>
                                LOGOUT
            </Link>
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Content>
            <ContentHeader title="">
                <Button
                    size="large"
                    style={{ float: 'right', marginBottom: 'auto' }}
                    color="primary"
                    component={RouterLink}
                    to="/Employee"
                    variant="contained"
                >
                    เพิ่มข้อมูลบุคลากร
             </Button>
             </ContentHeader>

                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">รหัสพนักงาน</TableCell>
                                <TableCell align="center">คำนำหน้าชื่อ</TableCell>
                                <TableCell align="center">ชื่อ-นามสกุล</TableCell>
                                <TableCell align="center">เบอร์โทรศัพท์</TableCell>
                                <TableCell align="center">อีเมล</TableCell>
                                <TableCell align="center">วัน/เดือน/ปีเกิด</TableCell>
                                <TableCell align="center">แผนกที่รับผิดชอบ</TableCell>
                                <TableCell align="center">สถานที่ทำงาน</TableCell>
                                <TableCell align="center">เวลาเข้าเวร</TableCell>
                                <TableCell align="center">เวลาออกเวร</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {employees.map((item: any) => (
                                <TableRow key={item.id}>
                                    <TableCell align="center">{item.userId}</TableCell>
                                    <TableCell align="center">{item.edges?.titlename?.name}</TableCell>
                                    <TableCell align="center">{item.name}</TableCell>
                                    <TableCell align="center">{item.tel}</TableCell>
                                    <TableCell align="center">{item.email}</TableCell>
                                    <TableCell align="center">{item.birthdayDate}</TableCell>
                                    <TableCell align="center">{item.edges?.department?.name}</TableCell>
                                    <TableCell align="center">{item.edges?.place?.name}</TableCell>
                                    <TableCell align="center">{item.attendTime}</TableCell>
                                    <TableCell align="center">{item.finishTime}</TableCell>
                                    <TableCell align="center">
                                        <Button
                                            onClick={() => {
                                                deleteEmployees(item.id);
                                            }}
                                            style={{ marginLeft: 10 }}
                                            variant="contained"
                                            color="secondary"
                                        >
                                            Delete
               </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Content>
        </div>
    );
}