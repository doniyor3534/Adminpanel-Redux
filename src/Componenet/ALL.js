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
                <NavLink activeClassNAme='active' to='/'> <HomeIcon />  Dashboard</NavLink>
                <NavLink activeClassNAme='active' to='/email'> <EmailIcon />  Email</NavLink>
                <NavLink activeClassNAme='active' to='/contact'> <PermContactCalendarIcon />  Contact</NavLink>
                <NavLink activeClassNAme='active' to='/crypto'> <CurrencyExchangeIcon />  Crypto</NavLink>
                <NavLink activeClassNAme='active' to='/kanban'> <ViewCompactIcon />  Kanban</NavLink>
                <NavLink activeClassNAme='active' to='/invoice'> <ArticleIcon />  Invoice</NavLink>
                <NavLink activeClassNAme='active' to='/banking'> <AccountBalanceWalletIcon />  Banking</NavLink>
                <NavLink activeClassNAme='active' to='/ticketing'> <CreditCardIcon />   Ticketing</NavLink>
            </ul>
        </div>
    )
}

export const Saitbarrightdashboard=()=>{
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
                        <div className="userraviesCard">
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
                                   <span style={{border:`3px solid ${val.rangi} `}}></span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export const SaitbarrightEmail = () => {
    const { comments, resentActiv } = useSelector(state => state)
    return (
        <div className=" saitbarright">
            <div className="serverStatus">
                <img src="./img/Group 16.png" alt="" />
            </div>
            <h3>Email</h3>
            <div className="userravieCards">
                {
                    comments.map((val) => (
                        <div className="userraviesCard">
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
                                   <span style={{border:`3px solid ${val.rangi} `}}></span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
