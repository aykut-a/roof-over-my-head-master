import React from 'react'
import { useGlobalContext } from '../context'
// Icons
import DeleteIcon from '@material-ui/icons/Delete';

export const Offer = ({ offer }) => {

  const { rooms, handleOffer } = useGlobalContext()

  const angebot = rooms.find((room) => room.id === offer)

  return (
    <div className="individual-offer">
      <img src={require(`../images/room${angebot.id}.jpg`).default} alt="" />
      <div className="individual-offer-info">
        <div><h4>Name</h4> {angebot.namen}</div>
        <div><h4>Rent</h4> ${angebot.rent}</div>
        <div><h4>Current Residents</h4>{angebot.residents}</div>
        <div><h4>Contract Period</h4>{angebot.contract}-Months</div>
        <div><h4>Smoking</h4>{angebot.smokers === false ? 'Not allowed' : 'Allowed'}</div>
        <div><h4>Pets</h4>{angebot.pets === false ? 'Not allowed' : 'Allowed'}</div>
      </div>

      <DeleteIcon onClick={() => { handleOffer(angebot.id) }} className="delete-offer-button" />
    </div>
  )
}