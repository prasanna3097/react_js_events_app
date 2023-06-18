// Write your code here
import './index.css'

const registrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationClosed: 'REGISTRATIONS_CLOSED',
}
const ActiveEventRegistrationDetails = props => {
  const {activeRegistrationStatus} = props

  const noActiveRegistration = () => (
    <p className="no-registration">
      Click on an event, to view its registration details
    </p>
  )

  const yetToRegister = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="yet-to-register-para">
        A live performance brings so much to your relationship with dance
        .Seeing live dance can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="yet-to-register-button" type="button">
        Register Here
      </button>
    </div>
  )

  const registeredView = () => (
    <div className="registered-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-head">
        You have already registered for the event
      </h1>
    </div>
  )
  const registrationClosed = () => (
    <div className="registration-closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registration-closed-image"
      />
      <h1 className="registration-closed-heading">
        Registrations are Closed Now!
      </h1>
      <p className="registration-closed-para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderActiveRegistrationStatus = () => {
    switch (activeRegistrationStatus) {
      case registrationStatus.yetToRegister:
        return yetToRegister()
      case registrationStatus.registered:
        return registeredView()
      case registrationStatus.registrationClosed:
        return registrationClosed()
      default:
        return noActiveRegistration()
    }
  }

  return (
    <div className="all-events-details">{renderActiveRegistrationStatus()}</div>
  )
}
export default ActiveEventRegistrationDetails
