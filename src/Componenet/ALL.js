import {Link} from 'react-router-dom'
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



export const Navbar =()=>{
    return(
        <nav className="navbar navbar-lg-expand ">
            <div className="navleft">
            <div className="btn-group">
                <button ><SearchIcon  /></button>
                <input type="search"  placeholder='search here....'   />
            </div>
            </div>
           <div className="navright">
           <button><TextsmsIcon/></button>
            <button><NotificationsActiveIcon/></button>
            <select >
                <option value="uz">uz</option>
                <option value="uz">uz</option>
                <option value="uz">uz</option>
            </select>
           </div>
        </nav>
    )
}

export const Saitbar=()=>{
    return(
        <div className="saitbar">
            <Link to='/' ><img src="./img/logo.svg" alt="" /></Link>
             <ul>
                <Link to='/'> <HomeIcon/>  Dashboard</Link> 
                <Link to='/email'> <EmailIcon/>  Email</Link> 
                <Link to='/contact'> <PermContactCalendarIcon/>  Contact</Link> 
                <Link to='/crypto'> <CurrencyExchangeIcon/>  Crypto</Link> 
                <Link to='/kanban'> <ViewCompactIcon/>  Kanban</Link>
                <Link to='/invoice'> <ArticleIcon/>  Invoice</Link> 
                <Link to='/banking'> <AccountBalanceWalletIcon/>  Banking</Link> 
                <Link to='/ticketing'> <CreditCardIcon/>   Ticketing</Link> 
             </ul>
        </div>
    )
}
export const Saitbarright=()=>{
    return(
        <div className="saitbar saitbarright">
            <Link to='/' ><img src="./img/logo.svg" alt="" /></Link>
             <ul>
                <li><Link to='/'> <HomeIcon/>  Dashboard</Link> </li>
                <li><Link to='/'> <EmailIcon/>  Email</Link> </li>
                <li><Link to='/'> <PermContactCalendarIcon/>  Contact</Link> </li>
                <li><Link to='/'> <CurrencyExchangeIcon/>  Crypto</Link> </li>
                <li><Link to='/'> <ViewCompactIcon/>  Kanban</Link> </li>
                <li><Link to='/'> <ArticleIcon/>  Invoice</Link> </li>
                <li><Link to='/'> <AccountBalanceWalletIcon/>  Banking</Link> </li>
                <li><Link to='/'> <CreditCardIcon/>   Ticketing</Link> </li>
             </ul>
        </div>
    )
}