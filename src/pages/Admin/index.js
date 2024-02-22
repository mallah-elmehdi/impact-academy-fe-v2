import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardWrap, Footer, Navbar } from '../../components';
import { ADMIN_NAVBAR } from '../../constants/admin';
import ProtectionAdmin from './ProtectionAdmin';
import { useDispatch, useSelector } from 'react-redux';
import { provinceAll } from '../../contexts/province/apis';

const Admin = () => {
    const dispatch = useDispatch();
    const { provinces } = useSelector((store) => store.province);

    useEffect(() => {
        if (provinces.length === 0) {
            dispatch(provinceAll());
        }
    }, []);

    return (
        <ProtectionAdmin>
            <DashboardWrap>
                <Navbar navbarItems={ADMIN_NAVBAR} />
                <Container sx={{ p: 3, flexGrow: 1 }}>
                    <Outlet />
                </Container>
                <Footer />
            </DashboardWrap>
        </ProtectionAdmin>
    );
};

export default Admin;
