import React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import AppsIcon from '@mui/icons-material/Apps';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux/es/exports';
import StarIcon from '@mui/icons-material/Star';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';

const Contact = () => {
    const { comments } = useSelector(state => state)
    return (
        <div className='contactpage'>
            <div className="contactTitle">
                <h1>Contact</h1>
                <div className="contactTitleRight">
                    <select name="newest" id="newest" className='newest' >
                        <option value="newest">newest</option>
                        <option value="newest">newest</option>
                        <option value="newest">newest</option>
                    </select>
                    <button><FormatAlignLeftIcon /></button>
                    <button><AppsIcon /></button>
                    <button className='newbtn'><AddIcon /></button>
                </div>
            </div>
            <div className="contactCards">
                {
                    comments.map((val) => (
                        <div className="contactcard" key={val.id}>
                            <div className="contactcardHead">
                                <img src={val.img} alt="rasm" />
                                <StarIcon />
                            </div>
                            <div className="contactardbody">
                                <h5>{val.name}</h5>
                                <p>iOS Programmer</p>
                            </div>
                            <div className="contactcadFooter">
                                <button><HomeRepairServiceIcon/> Astraq Companies</button>
                                <button><CallIcon/> +012 345 689</button>
                                <button><EmailIcon/> image.png</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Contact;