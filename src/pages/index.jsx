import React from 'react';
import '../css/custom.css'
import MainNav from '../components/Main/MainNav';
import MainFooter from '../components/Main/MainFooter';
import HomePage from './HomePage';
const Index = () => {

    return (
        <>
            <MainNav />

            <HomePage />

            <MainFooter />

        </>
    );
};

export default Index;