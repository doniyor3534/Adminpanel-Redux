import React, { useEffect, useState } from 'react';
import { Navbarpage, Saitbar } from './ALL';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard';
import Email from './Email';
import Contact from './Contact';
import Crypto from './Crypto';
import Kanban from './Kanban';
import Invoice from './Invoice';
import Banking from './Banking';
import Ticketing from './Ticketing';
import { Drawer } from 'antd';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch, useSelector } from 'react-redux';
import { Loaderfun } from '../redux/action/Action';



const HOME = () => {
    const { loader } = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => {
            dispatch(Loaderfun())
        }, 1000)
    }, [])
    const [visible, setVisible] = useState(false);
    const [placement] = useState('left');
    const showDrawer = () => {
        setVisible(!visible);
    };
    const onClose = () => {
        setVisible(false);
    };
    // const onChange = (e) => {
    //     setPlacement(e.target.value);
    // };
   
    return (
        <div className='home'>
            <div className="saitbarLg">
                <Saitbar />
            </div>
            {
                loader ?
                    <div className="loaderCard">
                        <div className="spinner-border text-primary " role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :''
            }
            <div className="homeceneter">
                <button type="primary" className='burgermenu' style={{ marginRight: '10px' }} onClick={showDrawer}>
                    <ArrowForwardIosIcon style={visible ? { transform: 'rotate(180deg)', color: 'red' } : { transform: 'rotate(0deg)', color: 'green' }} />
                </button>
                <Navbarpage />
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

            <Drawer
                placement={placement}
                closable={false}
                onClose={onClose}
                visible={visible}
                key={placement}

            >
                <Saitbar />
            </Drawer>

        </div>
    );
};

export default HOME;