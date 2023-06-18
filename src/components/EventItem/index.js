// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveEventId} = props
  const {id, imageUrl, name, location} = eventDetails

  const onClickEvent = () => {
    setActiveEventId(id)
  }

  return (
    <li className="event-items">
      <button type="button" onClick={onClickEvent} className="event-button">
        <img src={imageUrl} alt="event" className="events-image" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}
export default EventItem
