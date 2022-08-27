import React, { useState } from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import AppsIcon from '@mui/icons-material/Apps';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import StarIcon from '@mui/icons-material/Star';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { ADD, DEL, Reytingfun } from '../redux/action/Action';
import { Modal, Cascader, DatePicker, Form, Input, InputNumber, Radio, Select, Switch, TreeSelect, Button, message, Upload,Empty  } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { UploadOutlined } from '@ant-design/icons';
import DeleteIcon from '@mui/icons-material/Delete';


const Contact = () => {
    const { comments } = useSelector(state => state)
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        id: null,
        name: '',
        comment: '',
        email: '',
        foiz: '',
        img: '',
        narx: null,
        tel: null
    })
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    // /////form/////////
    const [componentSize, setComponentSize] = useState('default');
    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    // ///////////upload//////////
    const props = {
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        listType: 'picture',

        beforeUpload(file) {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onload = () => {
                    const img = document.createElement('img');
                    img.src = reader.result;

                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        canvas.width = img.naturalWidth;
                        canvas.height = img.naturalHeight;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0);
                        ctx.fillStyle = 'red';
                        ctx.textBaseline = 'middle';
                        ctx.font = '33px Arial';
                        ctx.fillText('Ant Design', 20, 20);
                        canvas.toBlob((result) => resolve(result));
                    };
                };
            });
        },
    };
    // ///////////////////inputfun/////
    const inputfun = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const send = () => {
        dispatch(ADD({ ...input, id: new Date().getTime() }))
    }
    const deletFun=(id)=>{
        dispatch(DEL(id))
    }
    return (
        <div className='contactpage'>
            <div className="contactTitle">
                <h1 className='h1'>Contact</h1>
                <div className="contactTitleRight">
                    <select name="newest" id="newest" className='newest' >
                        <option value="newest">newest</option>
                        <option value="newest">newest</option>
                        <option value="newest">newest</option>
                    </select>
                    <button><FormatAlignLeftIcon /></button>
                    <button><AppsIcon /></button>
                    <button className='newbtn' onClick={showModal} ><AddIcon /></button>
                </div>
            </div>
            <div className="contactCards">
                 
                {
                    comments.length >0 ?
                    comments.map((val) => (
                        <div className="contactcard" key={val.id}>
                            <div className="contactcardHead">
                                <img src={val.img} alt="rasm" />
                                <Box
                                    sx={{
                                        '& > legend': { mt: 2 },
                                    }}
                                >
                                    <Typography component="legend">Controlled</Typography>
                                    <Rating
                                        name="simple-controlled"
                                        value={val.reyting}
                                    // onChange={()=>reytincheng(val)}
                                    />
                                </Box>
                            </div>
                            <div className="contactardbody">
                                <h5>{val.name}</h5>
                                <p>iOS Programmer</p>
                            </div>
                            <h5 className='contactEmailP' >{val.email}</h5>
                            <h5 className='contactEmailP' >+998-{val.tel}</h5>
                            <div className="contactCardBody">
                                <div className="contactcadFooter">
                                    <button><HomeRepairServiceIcon /> Astraq Companies</button>
                                    <button><CallIcon /> +012 345 689</button>
                                </div>
                                <div className="contactcadFooter">
                                    <button><DeleteIcon style={{ color: 'red' ,cursor:'pointer'}} onClick={()=>deletFun(val.id)} /></button>
                                    <button><EmailIcon /> image.png</button>
                                </div>
                            </div>
                        </div>
                    ))
                    : <div className="noPage">
                        <Empty />
                    </div>
                }
            </div>
            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <form onSubmit={send} >
                    <label htmlFor="Name">Name</label>
                    <input type="text" className='form-control  my-2' placeholder='Name' name='name' onChange={inputfun} value={input.name} />
                    <label htmlFor="email">Email</label>
                    <input type="email" className='form-control  my-2' placeholder='Email' name='email' onChange={inputfun} value={input.email} />
                    <label htmlFor="commint" >Commint</label>
                    <input type="text" className='form-control  my-2' placeholder='commint' name='comment' onChange={inputfun} value={input.comment} />
                    <label htmlFor="Foiz">Foiz</label>
                    <input type="number" className='form-control my-2' placeholder='...%' name='foiz' onChange={inputfun} value={input.foiz} />
                    <label htmlFor="img">Image</label>
                    <input type="file" className='form-control my-2' placeholder='img' name='img' onChange={inputfun} value={input.img} />
                    <label htmlFor="narx">Narx</label>
                    <input type="number" className='form-control my-2' placeholder='narx' name='narx' onChange={inputfun} value={input.narx} />
                    <label htmlFor="tel">Tel</label>
                    <input type="number" className='form-control my-2' placeholder='+998....' name='tel' onChange={inputfun} value={input.tel} />
                    <button className='btn btn-primary w-50 my-3' >Add</button>
                </form>
                <img src="C:\\fakepath\\photo_2022-05-10_07-57-00.jpg" alt="" />
            </Modal>
        </div>
    );
};

export default Contact;