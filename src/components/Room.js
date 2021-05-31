import React from 'react'
import { useGlobalContext } from '../context'
// Icons
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DoneAllIcon from '@material-ui/icons/DoneAll';

export const Room = ({ room, showLocation }) => {

  const { offers, handleOffer } = useGlobalContext()

  return (
    <div className='individual-room'>
      <img src={require(`../images/room${room.id}.jpg`).default} alt="" />
      <LocationOnIcon onClick={() => { showLocation(room.location) }} className="show-location-icon" />
      <div>
        <p><span className="bold">Name:</span> {room.namen}</p>
        <p><span className="bold">Rent:</span> <span style={{ color: 'green', fontWeight: '600' }}>$</span>{room.rent}</p>
        <p><span className="bold">Current Residents:</span> {room.residents}</p>
        <p><span className="bold">Contract Period:</span> {room.contract}-Month{room.contract !== 1 ? 's' : ''}</p>
        <p><span className="bold">Smoking:</span> {room.smokers === false ? 'Not allowed' : 'Allowed'}</p>
        <p><span className="bold">Pets:</span> {room.pets === false ? 'Not allowed' : 'Allowed'}</p>
        {offers.includes(room.id) ? <div className="offer-made">Offer Made <DoneAllIcon /></div> :
          <button onClick={() => handleOffer(room.id)} >Make Offer <MailOutlineIcon className="icon" /></button>}
      </div>
    </div>
  )
}
