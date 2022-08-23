import React from 'react';
import { SaitbarrightEmail } from './ALL';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import SendIcon from '@mui/icons-material/Send';
import StarIcon from '@mui/icons-material/Star';
import DescriptionIcon from '@mui/icons-material/Description';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';






const Email = () => {

    return (
        <div className='emailpage'>
            <div className="emailcenterpage">
                <h1>Email</h1>
                <div className="emailBlock">
                    <div className="emailBlockleft">
                        <button className='newmail'>+ New Mail</button>
                        <ul>
                            <li> <BrandingWatermarkIcon/> inbox 99</li>
                            <li> <SendIcon/>Sent</li>
                            <li> <StarIcon/>Favorite</li>
                            <li> <DescriptionIcon/>Draft</li>
                            <li> <LabelImportantIcon/>Important</li>
                            <li> <AccessTimeIcon/>Scheduled</li>
                            <li> <KeyboardArrowDownIcon/>More</li>
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
                            <h6>Primary</h6>
                            <h6>Social</h6>
                            <h6>Promotion</h6>
                        </div>
                        <div className="body"></div>
                        <div className="footer"></div>
                    </div>
                </div>
            </div>
            <SaitbarrightEmail />
        </div>
    );
};

export default Email;