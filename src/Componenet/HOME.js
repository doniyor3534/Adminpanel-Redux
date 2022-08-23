import React from 'react';
import { Navbar, Saitbar } from './ALL';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import Email from './Email';
import Contact from './Contact';
import Crypto from './Crypto';
import Kanban from './Kanban';
import Invoice from './Invoice';
import Banking from './Banking';
import Ticketing from './Ticketing';

const HOME = () => {
    return (
        <div className='home'>
            <Saitbar />
            <div className="homeceneter">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/email" element={<Email />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/crypto" element={<Crypto />} />
                    <Route path="/kanban" element={<Kanban />} />
                    <Route path="/invoice" element={<Invoice />} />
                    <Route path="/banking" element={<Banking />} />
                    <Route path="/ticketing" element={<Ticketing />} />
                </Routes>
            </div>
          
        </div>
    );
};

export default HOME;