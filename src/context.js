import React, { useContext, useState } from 'react'
import rooms from './components/Data'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [offers, setOffers] = useState([])

  const handleOffer = (id) => {
    if (offers.includes(id)) {
      setOffers(offers => offers = offers.filter(item => item !== id))
      return
    }
    if (!offers.includes(id)) {
      setOffers(offers => offers = [...offers, id])
    }
  }

  return (
    <AppContext.Provider
      value={{ offers, handleOffer, rooms }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
