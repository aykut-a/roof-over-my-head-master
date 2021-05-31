import React, { useState, useEffect, useRef } from 'react'
import rooms from '../components/Data'
// Components
import { Room } from '../components/Room'
// Icons 
import FilterListIcon from '@material-ui/icons/FilterList';
import SortIcon from '@material-ui/icons/Sort';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
import PetsIcon from '@material-ui/icons/Pets';
import PeopleIcon from '@material-ui/icons/People';
import EventIcon from '@material-ui/icons/Event';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
// City map 
import citymap from '../images/citymap.png'

export const Rooms = () => {

  const [allRooms, setAllRooms] = useState(rooms)

  const [showingLocation, setShowingLocation] = useState(false)

  const [maxRent, setMaxRent] = useState(800)
  const [residents, setResidents] = useState(0)
  const [contract, setContract] = useState(0)
  const [smokersAllowed, setSmokersAllowed] = useState(false)
  const [petsAllowed, setPetsAllowed] = useState(false)

  const rentRange = useRef(null)
  const contractSelector = useRef(null)
  const residentsSelector = useRef(null)

  useEffect(() => {
    rentRange.current.value = '800'
  }, [])

  const handleRent = (value) => {
    let rent = (Number(value) * 7) + 100
    setMaxRent(rent)
  }

  const [sortingType, setSortingType] = useState('None')

  useEffect(() => {
    filterRooms(rooms)
  }, [sortingType])


  const sortingSelector = useRef(null)

  const overlay = useRef(null)
  const pointOnMap = useRef(null)

  const showLocation = (location) => {
    if (showingLocation) {
      overlay.current.style.display = 'none'
      setShowingLocation(!showingLocation)
      return
    }
    if (!showingLocation) {
      let top = Number(location.split('')[0]) * 10
      let right = Number(location.split('')[1]) * 10
      pointOnMap.current.style.top = `${top}%`
      pointOnMap.current.style.right = `${right}%`
      overlay.current.style.display = 'flex'
      setShowingLocation(!showingLocation)
    }
  }

  function filterRooms(rooms) {
    let filteredRooms = rooms
    if (maxRent !== 'none') { filteredRooms = filteredRooms.filter((room) => room.rent <= maxRent) }
    if (residents !== 0) { filteredRooms = filteredRooms.filter((room) => room.residents <= residents) }
    if (contract !== 0) { filteredRooms = filteredRooms.filter((room) => room.contract <= contract) }
    if (petsAllowed) { filteredRooms = filteredRooms.filter((room) => room.pets === true) }
    if (smokersAllowed) { filteredRooms = filteredRooms.filter((room) => room.smokers === true) }
    if (sortingType === 'rent') { filteredRooms = filteredRooms.sort(function (a, b) { return a.rent - b.rent }) }
    if (sortingType === 'contract') { filteredRooms = filteredRooms.sort(function (a, b) { return a.contract - b.contract }) }
    if (sortingType === 'resident') { filteredRooms = filteredRooms.sort(function (a, b) { return a.residents - b.residents }) }
    setAllRooms(filteredRooms)
  }

  return (
    <div className="rooms-page-div">
      <div className="filters-container">
        <h3>Filters <FilterListIcon /></h3>
        <div className="filter column-filter">
          <p>Rent <MonetizationOnIcon className="filter-icon" /></p>
          <input type="range" min="0" max="100"
            ref={rentRange} onChange={() => { handleRent(rentRange.current.value) }}>
          </input>
          <p className="rent">${maxRent}</p>
        </div>
        <div className="filter column-filter">
          <p>Residents <PeopleIcon className="filter-icon" /></p>
          <select onChange={() => { setResidents(Number(residentsSelector.current.value)) }} ref={residentsSelector}>
            <option value="0">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
        <div className="filter column-filter">
          <p>Contract <EventIcon className="filter-icon" /></p>
          <select onChange={() => { setContract(Number(contractSelector.current.value)) }} ref={contractSelector}>
            <option value="0">All</option>
            <option value="1">1 Month</option>
            <option value="2">2 Months</option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
            <option value="12">12 Months</option>
          </select>
        </div>
        <div className="filter">
          <p>Smokers <SmokingRoomsIcon className="filter-icon" /></p>
          <input onChange={() => setSmokersAllowed(!smokersAllowed)} className="checkbox" type="checkbox"></input>
        </div>
        <div className="filter">
          <p>Pets <PetsIcon className="filter-icon" /></p>
          <input onChange={() => setPetsAllowed(!petsAllowed)} className="checkbox" type="checkbox"></input>
        </div>
        <button className="apply-filters-btn" onClick={() => { filterRooms(rooms) }}>Apply Filters</button>
      </div>

      <div className="rooms-container">
        <div className="sorting-options">
          <select onChange={() => { setSortingType(sortingSelector.current.value) }} ref={sortingSelector} className="sorting-selector">
            <option value="none">None</option>
            <option value="rent">Rent</option>
            <option value="contract">Contract</option>
            <option value="resident">Residents</option>
          </select>
          <p>Sorting By <SortIcon /></p>
        </div>

        <div className="filtered-rooms">
          <p>{allRooms.length === 0 ? '' : `We have ${allRooms.length} rooms available for you.`}</p>
          {allRooms.length === 0 ? 'There are no rooms available meeting your criteria.' :
            allRooms.map((room) => {
              return <Room key={room.id} room={room} showLocation={showLocation} />
            })
          }
        </div>
      </div>

      <div className="overlay" ref={overlay}>
        <div className="city-map">
          <div className="point-on-map" ref={pointOnMap}></div>
          <img src={citymap} alt="" />
          <HighlightOffIcon onClick={() => { showLocation() }} className="close-map" />
        </div>
      </div>

    </div>
  )
}
