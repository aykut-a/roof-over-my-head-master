import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuIcon from '@material-ui/icons/Menu';

export const HamburgerMenu = ({ setHamburgerOpen }) => {
  const { offers } = useGlobalContext()
  return (
    <div className="hamburger-menu">
      <MenuIcon className="back-hamburger" onClick={() => setHamburgerOpen(false)} />
      <Link to='/' className="hamburger-btn" onClick={() => setHamburgerOpen(false)}> Home </Link>
      <Link to='/about' className="hamburger-btn" onClick={() => setHamburgerOpen(false)}> About </Link>
      <Link to='/rooms' className="hamburger-btn" onClick={() => setHamburgerOpen(false)}> Rooms </Link>
      <Link to='/offers' className="hamburger-btn" onClick={() => setHamburgerOpen(false)}> Offers <div className="offer-count">{offers.length}</div>
        <MailOutlineIcon /> </Link>
      <button className="hamburger-btn" >Login <AccountCircleOutlinedIcon /> </button>
    </div>
  )
}
