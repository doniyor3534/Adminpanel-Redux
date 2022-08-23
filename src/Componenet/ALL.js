import { Link, NavLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import ArticleIcon from '@mui/icons-material/Article';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import StarIcon from '@mui/icons-material/Star';
import ReportIcon from '@mui/icons-material/Report';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CollectionsIcon from '@mui/icons-material/Collections';
import LinearScaleIcon from '@mui/icons-material/LinearScale';
import SendIcon from '@mui/icons-material/Send';




export const Navbar = () => {
    return (
        <nav className="navbar navbar-lg-expand ">
            <div className="navleft">
                <div className="btn-group">
                    <button ><SearchIcon /></button>
                    <input type="search" placeholder='search here....' />
                </div>
            </div>
            <div className="navright">
                <button><TextsmsIcon /></button>
                <button><NotificationsActiveIcon /></button>
                <select >
                    <option value="uz">uz</option>
                    <option value="uz">uz</option>
                    <option value="uz">uz</option>
                </select>
            </div>
        </nav>
    )
}

export const Saitbar = () => {
    return (
        <div className="saitbar">
            <Link to='/' ><img src="./img/logo.svg" alt="" /></Link>
            <ul>
                <NavLink activeclassname='active' to='/'> <HomeIcon />  Dashboard</NavLink>
                <NavLink activeclassname='active' to='/email'> <EmailIcon />  Email</NavLink>
                <NavLink activeclassname='active' to='/contact'> <PermContactCalendarIcon />  Contact</NavLink>
                <NavLink activeclassname='active' to='/crypto'> <CurrencyExchangeIcon />  Crypto</NavLink>
                <NavLink activeclassname='active' to='/kanban'> <ViewCompactIcon />  Kanban</NavLink>
                <NavLink activeclassname='active' to='/invoice'> <ArticleIcon />  Invoice</NavLink>
                <NavLink activeclassname='active' to='/banking'> <AccountBalanceWalletIcon />  Banking</NavLink>
                <NavLink activeclassname='active' to='/ticketing'> <CreditCardIcon />   Ticketing</NavLink>
            </ul>
        </div>
    )
}

export const Saitbarrightdashboard = () => {
    const { comments, resentActiv } = useSelector(state => state)
    return (
        <div className=" saitbarright">
            <div className="serverStatus">
                <img src="./img/Group 16.png" alt="" />
            </div>
            <h3>User Ravies</h3>
            <div className="userravieCards">
                {
                    comments.map((val) => (
                        <div className="userraviesCard" key={val.id}>
                            <div className="userraviesCardHead">
                                <img src={val.img} alt="rasm" />
                                <div className="reytincard">
                                    <h6>{val.name}</h6>
                                    ******
                                </div>
                            </div>
                            <div className="userraviesCardBody">
                                <p>{val.comment}</p>
                            </div>
                            <div className="userraviesCardFooter">
                                <button className="archive">Archive</button>
                                <button className="accert">Accert</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="resentActive">

                <h6>Recent Activity</h6>
                <div className="resentcards">
                    {
                        resentActiv.map((val) => (
                            <div className="resentcard" key={val.id}>
                                <div className="resentcardHead">
                                    <h6>{val.name}</h6>
                                    <p>{val.title} </p>
                                </div>
                                <p>{new Date().getDay()}.{new Date().getMonth()}.{new Date().getFullYear()}</p>
                                <span style={{ border: `3px solid ${val.rangi} ` }}></span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export const SaitbarrightEmail = () => {
    return (
        <div className=" saitbarrightEmail">
            <div className="serverStatus">
                <h3>Preview</h3>
                <div className="praviewbtngroup">
                    <button><DeleteIcon /></button>
                    <button><OpenInFullIcon /></button>
                    <button><HighlightOffIcon /></button>
                </div>
            </div>
            <div className="wekiy">
                <div className="wekiyLeft">
                    <h3>Weekly Meeting Report</h3>
                    <p>Today, March 30th 2021  04:45 PM</p>
                </div>
                <div className="praviewbtngroup">
                    <button><StarIcon /></button>
                    <button><ReportIcon /></button>
                </div>
            </div>
            <div className="KarenHope">
                <h6>Karen Hope</h6>
                <p>soap@mail.com</p>
            </div>
            <p>Hi Madison, <br />

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

                Regards,
                Nadila</p>
            <div className="prewievCards">
                <div className="prewievCard">
                    <div className="prewievcardHead"></div>
                    <div className="prewievcardbody">
                        <AttachFileIcon />    Details.pdf
                    </div>
                </div>
                <div className="prewievCard">
                    <div className="prewievcardHead"></div>
                    <div className="prewievcardbody">
                        <AttachFileIcon />    IMG_001.jpg
                    </div>
                </div>
            </div>
            <div className="massegeCard">
                <div className="massegeCardhead">
                    <p>Write your message here...</p>
                </div>
                <div className="massegeCardbody">
                    <img src="./img/text.png" alt="" />
                </div>
            </div>
            <div className="priwievFooter">
                <AttachFileIcon />
                <CollectionsIcon />
                <LinearScaleIcon />
                <button>Send <SendIcon/></button>
            </div>
        </div>
    )
}
