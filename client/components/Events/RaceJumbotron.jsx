import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import data from '../../resources/dummydata';
import EventInfoModal from './EventInfoModal.jsx';
// import runnerImage from './images/leeds_runner.jpg';

class RaceJumbotron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      races: this.props.races,
      eventModal: false,
      // isModalOpen: false,
    };
    // this.onModalOpen = this.onModalOpen.bind(this);
  }

   handleClose () {
     this.setState({eventModal: false});
   }
   handleShow () {
     this.setState({eventModal: true});
   }

  // onModalOpen() {
  //   this.setState({ isModalOpen: !this.state.isModalOpen });

  // {
  //   name: 'Hilltop Half-Marathon',
  //   description: 'Test your endurance in the hills of Nashville',
  //   event_type: '',
  //   start_time: '',
  //   end_time: '',
  //   start_location: '',
  //   end_location: '',
  //   image_url: '',
  //   thumbnail_photo: '',
  //   difficulty_level: 'intermediate',
  //   running_distance: 13.5,
  //   leader: '',
  //   link: '',
  //   attendees: '',
  //   promoted: true,
  //   created_at: '',
  //   updated_at: '',
  //   numAttending: 532,
  // },

  render() {
    return (
      <div>
        <Carousel>
          {this.state.races.map((race) => (
            <Carousel.Item className="carousel-img" key={race.id}>
              <img
                className="d-block w-100"
                src="./images/leeds_runner.jpg"
                alt="First slide"
              />
              <Carousel.Caption key={race.id}>
                <div className="carousel-caption">
                  <div className="race-description">
                    <h2>{race.name}</h2>
                    <div>
                      <span>Register at: {race.link}</span>
                    </div>
                    <div><span>{race.description}</span></div>
                  </div>
                  <div className="race-details">
                    <div>
                      <i style={{'color': 'var(--white)'}} className="fas fa-clock"></i>
                      <span>&nbsp;{new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'short' }).format(new Date(race.start_time))}</span>
                    </div>
                    <div>
                      <i style={{'color': 'var(--white)'}} className="fas fa-globe-americas"></i>
                      <span>&nbsp;{race.start_location}</span>
                    </div>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <h1 onClick={this.handleShow.bind(this)} >
          Hilltop
        </h1>
        <EventInfoModal
         event={this.state.races[0]}
         show={this.state.eventModal}
         handleClose={this.handleClose.bind(this)}/>
      </div>
    );
  };
}

export default RaceJumbotron;