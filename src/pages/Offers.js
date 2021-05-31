import React from 'react'
import { useGlobalContext } from '../context'
import { Offer } from '../components/Offer'

export const Offers = () => {

  const { offers } = useGlobalContext()

  return (
    <div className='offers-page'>
      {offers.length === 0 ? 'You have not made any offers yet...' : offers.map((offer) => {
        return <Offer offer={offer} key={offer} />
      })}
    </div>
  )
}
