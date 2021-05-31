import React from 'react'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
// Icons
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MenuIcon from '@material-ui/icons/Menu';
// Importing logo 
import Logo from '../images/logo.png'

export const Header = ({ hamburger, setHamburgerOpen }) => {

  const { offers } = useGlobalContext()

  return (
    <div className="header" >
      <Link to="/" className="header-logo" >
        <img src={Logo} alt="" />
      </Link>
      {hamburger ?
        <>
          <div className="hamburger-menu-button" onClick={() => setHamburgerOpen(true)}>
            <MenuIcon className="icon" />
          </div>
        </>
        :
        <>
          <Link to='/' className="header-btn"> Home </Link>
          <Link to='/about' className="header-btn"> About </Link>
          <Link to='/rooms' className="header-btn"> Rooms </Link>
          <div className="side-buttons">
            <Link to='/offers' className="side-button"> Offers <div className="offer-count">{offers.length}</div>
              <MailOutlineIcon /> </Link>
            <button className="side-button" >Login <AccountCircleOutlinedIcon />  </button>
          </div>
        </>
      }
    </div>
  )
}
