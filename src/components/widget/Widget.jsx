import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Person2Icon from '@mui/icons-material/Person2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Widget = ({type}) => {

    let data; 
    const ammount = 1542;

    switch (type) {
            case "user":
                data = {
                    title : "USERS",
                    isMoney: false,
                    link: "SEE ALL",
                    percentage: "20",
                    icon: <Person2Icon className='icon'/>,
                } 
                break;
            case "products":
                data = {
                    title: "PRODUCTS",
                    isMoney: false,
                    link: "SEE ALL",
                    percentage: "20",
                    icon: <ShoppingCartIcon className='icon'/>,
                } 
                break;
            case "earnings":
                data = {
                    title: "EARNINGS",
                    isMoney: true,
                    link: "SEE ALL",
                    percentage: "20",
                    icon: <AttachMoneyIcon className='icon'/>,
                }
                break;
            default:
                break;
        }
    



  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney&& '$'   } {ammount}</span>
            <span className="link">{data.link}</span>

        </div>


        <div className="right">
            <span className="percentage">
                
                <KeyboardArrowUpIcon className='icon' />

                {data.percentage}%
            </span>
            {data.icon}

        </div>

    </div>
  )
}

export default Widget