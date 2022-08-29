
import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import { Chartsccc } from './Charts';
import { Example, Minichart } from './chartsss/lineChart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { useDispatch, useSelector } from 'react-redux';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Saitbarrightdashboard } from './ALL';
import { Drawer, Button, Modal } from 'antd';
import { Mailfun } from '../redux/action/Action';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';



export const datachart = [
    [
        "Month",
        "Last Year",
        "this Year",

    ],
    ["yanvar", 465, 338],
    ["febral", 135, 1120],
    ["mart", 157, 867],
    ["aprel", 139, 1110],
    ["may", 236, 691],
    ["iyun", 136, 691],
    ["iyul", 136, 691],
    ["avgust", 536, 691],
    ["sentyabr", 136, 1091],
    ["oktyabr", 1236, 691],
    ["noyabr", 136, 691],
    ["dekabr", 136, 691],
];
export const options = {
    vAxis: { title: "Cups" },
    hAxis: { title: "years" },
    seriesType: "bars",
    series: { 5: { type: "line" } },
};
const Dashboard = () => {
    const { contacts } = useSelector(state => state)
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false);
    const [placement] = useState('right');
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    // const onChange = (e) => {
    //     setPlacement(e.target.value);
    // };
    //////////////////modal tel//
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modaltel, setModaltel] = useState({ tel: '' });
    const showModal = (val) => {
        setIsModalVisible(true);
        setModaltel(val)
    };
    const showModalemail = (val) => {
        setIsModalVisible(true);
        setModaltel(val)
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    // /////////////////
    const mailclick = (id) => {
        dispatch(Mailfun(id))
    }
    return (
        <div className='dashboard'>
            <div className="dashboardleft">
                <div className="dashboardhed">
                    <h1 className='h1'>Dashboard</h1>
                    <Button type="primary" style={{ marginRight: '30px' }} onClick={showDrawer}>
                        ....
                    </Button>
                </div>
                <div className="proect_cards">
                    <div className="proect_card">
                        <img src="./img/40-bag.svg" alt="" />
                        <div className="body">
                            <p>proect</p>
                            <h4>932</h4>
                        </div>
                    </div>
                    <div className="proect_card">
                        <img src="./img/38-file.svg" alt="" />
                        <div className="body">
                            <p>proect</p>
                            <h4>932</h4>
                        </div>
                    </div>
                    <div className="proect_card">
                        <img src="./img/49-graph.svg" alt="" />
                        <div className="body">
                            <p>proect</p>
                            <h4>932</h4>
                        </div>
                    </div>
                    <div className="proect_card">
                        <img src="./img/investments.svg" alt="" />
                        <div className="body">
                            <p>proect</p>
                            <h4>932</h4>
                        </div>
                    </div>
                </div>
                <div className="activity">
                    <div className="activity_head">
                        <h3>Activity</h3>

                        {/* <p className='activity_p1'><span></span> Last Year</p>
                    <p className='activity_p2'><span></span> Last Year</p> */}
                    </div>
                    <Chart
                        chartType="ComboChart"
                        // data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
                        width="100%"
                        height="400px"
                        legendToggle
                        options={options}
                        data={datachart}
                    />

                    <div className="pieChart">
                        <h3>Pie chart</h3>
                        <div className="pieChartcard">
                            <Chartsccc />
                            <div className="piechartleft">
                                <Example />
                            </div>
                        </div>
                    </div>
                    <div className="analizcards">
                        <div className="analizcard">
                            <button className='balans1btn'><MonetizationOnIcon /></button>
                            <div className='dcolumn'>
                                <p>Total Balance</p>
                                <h5>$ 40.123</h5>
                            </div>
                            {/* <div  className='dcolumn'>
                          <h5>Average from last month</h5>
                          <p><span>+0,5%</span> invoices sent</p>
                        </div> */}
                        </div>
                        <div className="analizcard">
                            <button className='balans2btn'><ExpandMoreIcon /></button>
                            <div className='dcolumn'>
                                <p>$120.455</p>
                                <h5>$ 40.123</h5>
                            </div>
                            <>
                                <Minichart />
                            </>
                        </div>
                        <div className="analizcard">
                            <button className='balans3btn'><KeyboardControlKeyIcon /></button>
                            <div className='dcolumn'>
                                <p>$86.455</p>
                                <h5>Expense</h5>
                            </div>
                            <>
                                <Minichart />
                            </>
                        </div>
                    </div>
                </div>
                <div className="dashboardBody">
                    <div className="contact">
                        <div className="cantactHead">
                            <div className="contactTitle">
                                <h5>Contacts</h5>
                                <h4>You have <b><sup style={{ color: 'green' }}>{contacts.length}</sup></b> contacts</h4>
                            </div>

                        </div>
                        {
                            contacts.map((val) => (
                                <Card className="contactBody" key={val.id}>
                                    <img src={val.img} alt="rasm" />
                                    <CardActionArea >
                                        <CardContent>
                                            <div className="contactBodyTitle">
                                                <h6>{val.name}</h6>
                                                <p>{val.title}</p>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                    <div className="contactBodyBtnGroup">
                                        <button onClick={() => showModal(val.tel)} ><LocalPhoneIcon /></button>
                                        <button onClick={() => showModalemail(val.email)}><EmailIcon /></button>
                                    </div>
                                </Card>
                            ))
                        }
                        <Button variant="outlined" style={{ width: '100%', marginTop: '20px' }}>View More</Button>
                    </div>
                    <div className="massege">
                        <div className="cantactHead">
                            <div className="contactTitle">
                                <h5>Contacts</h5>
                                <h4>You have <b><sup style={{ color: 'green' }}>{contacts.length}</sup></b> contacts</h4>
                            </div>

                        </div>
                        {
                            contacts.map((val) => (
                                <Card className="contactBody" key={val.id}>
                                    <img src={val.img} alt="rasm" />
                                    <CardActionArea>
                                        <CardContent>
                                            <div className="contactBodyTitle">
                                                <h6>{val.name}</h6>
                                                <p>{val.title}</p>
                                            </div>
                                        </CardContent>
                                    </CardActionArea>
                                    <div className="contactBodyBtnGroup">
                                        {
                                            val.messege ?
                                                <button><DoneAllIcon /></button>
                                                :
                                                <button onClick={() => mailclick(val)} ><EmailIcon /></button>
                                        }
                                    </div>
                                </Card>
                            ))
                        }
                        <Button variant="outlined" style={{ width: '100%', marginTop: '20px' }}>View More</Button>
                    </div>
                </div>
            </div>
            <Drawer
                title="Basic Drawer"
                placement={placement}
                closable={false}
                onClose={onClose}
                visible={visible}
                key={placement}
            >
                <Saitbarrightdashboard />
            </Drawer>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>tell ... / Massege...</p>
                <h1 className='tel'>{modaltel}</h1>
            </Modal>
        </div>
    );
};

export default Dashboard;