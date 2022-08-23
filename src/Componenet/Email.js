import React, { useState } from 'react';
import { SaitbarrightEmail } from './ALL';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import DescriptionIcon from '@mui/icons-material/Description';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import GroupsIcon from '@mui/icons-material/Groups';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useSelector } from 'react-redux';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Email = () => {
    const { comments } = useSelector(state => state)
    const [emailpagenation,setEmailpagenation]=useState(1)
    return (
        <div className='emailpage'>
            <div className="emailcenterpage">
                <h1>Email</h1>
                <div className="emailBlock">
                    <div className="emailBlockleft">
                        <button className='newmail'>+ New Mail</button>
                        <ul>
                            <li className='active'> <BrandingWatermarkIcon /> inbox 99</li>
                            <li> <SendIcon />Sent</li>
                            <li> <StarIcon />Favorite</li>
                            <li> <DescriptionIcon />Draft</li>
                            <li> <LabelImportantIcon />Important</li>
                            <li> <AccessTimeIcon />Scheduled</li>
                            <li> <KeyboardArrowDownIcon />More</li>
                        </ul>
                        <div className='labels'>
                            <p className="label">
                                Labels
                            </p>
                            <label htmlFor="work" className='work' >
                                <input type="checkbox" id='work' /> Work
                            </label>
                            <label htmlFor="SideProjects" className='SideProjects' >
                                <input type="checkbox" id='SideProjects' /> Side Projects
                            </label>
                            <label htmlFor="Offer" className='Offer' >
                                <input type="checkbox" id='Offer' /> Offer
                            </label>
                        </div>
                    </div>
                    <div className="emailBlockright">
                        <div className="head">
                            <h6 className={emailpagenation===1?'active':''} onClick={()=>setEmailpagenation(1)}> <BrandingWatermarkIcon />Primary</h6>
                            <h6 className={emailpagenation===2?'active':''} onClick={()=>setEmailpagenation(2)}> <GroupsIcon /> Social</h6>
                            <h6 className={emailpagenation===3?'active':''} onClick={()=>setEmailpagenation(3)}>  <CreditCardIcon />Promotion</h6>
                        </div>
                        <div className="body">
                            {
                               emailpagenation===1?
                               comments.map((val) => (
                                <div className="bodyCard" key={val.id}> 
                                    <img src={val.img} alt="rasm" />
                                    <div className="bodycardTitle">
                                        <h6>{val.name}</h6>
                                        <p>{val.comment}</p>
                                    </div>
                                    <div className="bodycardright">
                                        <p>1h</p>
                                        <div className="bodycardrightBtnGroup">
                                            <StarIcon />
                                            <AttachFileIcon />
                                        </div>
                                    </div>
                                </div>
                            ))
                            : emailpagenation===2?
                            comments.map((val) => (
                                <div className="bodyCard" key={val.id}> 
                                    <img src={val.img} alt="rasm" />
                                    <div className="bodycardTitle">
                                        <h6>{val.name}</h6>
                                        <p>{val.comment}</p>
                                    </div>
                                    <div className="bodycardright">
                                        <p>2h</p>
                                        <div className="bodycardrightBtnGroup">
                                            <StarIcon />
                                            <AttachFileIcon />
                                        </div>
                                    </div>
                                </div>
                            ))
                            :emailpagenation===3?
                            comments.map((val) => (
                                <div className="bodyCard" key={val.id}> 
                                    <img src={val.img} alt="rasm" />
                                    <div className="bodycardTitle">
                                        <h6>{val.name}</h6>
                                        <p>{val.comment}</p>
                                    </div>
                                    <div className="bodycardright">
                                        <p>3h</p>
                                        <div className="bodycardrightBtnGroup">
                                            <StarIcon />
                                            <AttachFileIcon />
                                        </div>
                                    </div>
                                </div>
                            ))
                            :'ddddddd'
                            }
                        </div>
                        <div className="footer">
                            <button><KeyboardArrowLeftIcon /></button>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                            <button><KeyboardArrowRightIcon /></button>
                        </div>
                    </div>
                </div>
            </div>
            <SaitbarrightEmail />
        </div>
    );
};

export default Email;