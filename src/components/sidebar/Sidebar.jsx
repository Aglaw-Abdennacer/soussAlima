import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InfoIcon from '@mui/icons-material/Info';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top"><span className='logo'>SoussAlima</span></div>
        <hr />
        <div className="center">
            <ul>
                <p className="title"> MAIN </p>

                <li>
                    <DashboardIcon className='icon' />
                    <span>DashBoard</span>
                </li>

                <p className="title"> MANAGE </p>

                <li>
                    <GroupIcon className='icon' />
                    <span>Users</span>
                </li>
                <li>
                    <ShoppingCartIcon className='icon' />
                    <span>Products</span>
                </li>
                <li>
                    <WarehouseIcon className='icon'/>
                    <span>Stock</span>
                </li>
                <li>
                    <QueryStatsIcon className='icon'/>
                    <span>Stats</span>
                </li>

                <p className="title"> OTHERS </p>

                <li>
                    <NotificationsIcon className='icon' />
                    <span>Notifications</span>
                </li>
                <li>
                    <InfoIcon className='icon'/>
                    <span>About us</span>
                </li>
                <li>
                    <ExitToAppIcon className='icon'/>
                    <span>Log out</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
           <div className="colorOption"></div>
           <div className="colorOption"></div>
           <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar