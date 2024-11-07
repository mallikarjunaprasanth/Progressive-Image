import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Spinner } from "react-bootstrap";
import Gallery from '../Gallery/Gallery.jsx';
const Contact = lazy(() => import("../Contact/Contact.jsx"));
const Dashboard = lazy(() => import("../Dashboard/Dashboard.jsx"));
const Nav = lazy(() => import("../Nav/Nav.jsx"));

const Layout = () => {
    let loading = <div className='text-center p-2'><Spinner variant='primary' size='sm' /></div>
    return (
        <Routes>
            <Route path='/' element={<Suspense fallback={loading}><Nav /></Suspense>} >
                <Route path='/' element={<Suspense fallback={loading}><Dashboard /></Suspense>} />
                <Route path='contact' element={<Suspense fallback={loading}><Contact /></Suspense>} />
                <Route path='gallery' element={<Suspense fallback={loading}><Gallery /></Suspense>} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>

        </Routes>
    )
}

export default Layout