import React from 'react';
import LandingPage from './components/LandingPage';
import Titles from './components/Titles';
import Form from './components/Form';
import Table from './components/Table';
import logo from './img/logo sepm.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLandingPage: true, // Initially show the landing page
      parkingLot: {
        1: { regNo: 'KA-01-AB-1234', carColor: 'Bike', isOccupied: true },
        2: { regNo: '4312', carColor: 'RED', isOccupied: false },
        3: { regNo: 'KA-09-AK-9268', carColor: 'Car', isOccupied: true },
        4: { regNo: 'KA-10-DE-8991', carColor: 'Bike', isOccupied: true },
        5: { regNo: '', carColor: 'RED', isOccupied: false },
        6: { regNo: '', carColor: 'GREEN', isOccupied: false },
        7: { regNo: '', carColor: 'YELLOW', isOccupied: false },
        8: { regNo: '', carColor: 'RED', isOccupied: false },
        9: { regNo: '', carColor: 'GREEN', isOccupied: false },
        10: { regNo: 'KA-10-AA-5555', carColor: 'Car', isOccupied: true },
      },
      slotsAvailable: 6,
    };

    this.addCar = this.addCar.bind(this);
    this.removeCar = this.removeCar.bind(this);
    this.goToParking = this.goToParking.bind(this);
    this.goToLandingPage = this.goToLandingPage.bind(this); // Add this line
  }

  addCar(slotNo, regNo, carColor) {
    let stateTmp = Object.assign({}, this.state);
    stateTmp.parkingLot[slotNo] = { regNo, carColor, isOccupied: true };
    this.setState({ stateTmp });
    this.setState({ slotsAvailable: this.state.slotsAvailable - 1 });
  }

  removeCar(slotNo) {
    this.state.parkingLot[slotNo].isOccupied = false;
    this.setState({ parkingLot: this.state.parkingLot });
    this.setState({ slotsAvailable: this.state.slotsAvailable + 1 });
  }

  goToParking() {
    this.setState({ showLandingPage: false });
  }

  goToLandingPage() { // Add this function
    this.setState({ showLandingPage: true });
  }

  render() {
    if (this.state.showLandingPage) {
      return <LandingPage goToParking={this.goToParking} />;
    }

    return (
      <div>
        <style>{`
        .logo{
          width: 60px;
          position: absolute;
          top: 4%;
          left: 2%;
          cursor: pointer; /* Add cursor pointer to indicate clickability */
        }
        `}
        </style>
        <img src={logo} className="logo" alt="Logo" onClick={this.goToLandingPage} /> {/* Add onClick here */}
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <Form parkingLot={this.state.parkingLot} addCar={this.addCar} />
                  <div className="tbl-header">
                    <table>
                      <thead>
                        <tr>
                          <th>Action</th>
                          <th>Slot No</th>
                          <th>Registration No</th>
                          <th>Vehicle</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="tbl-content">
                    <Table parkingLot={this.state.parkingLot} removeCar={this.removeCar} />
                  </div>
                  <h1 className="spot">Spots Left: <span>{this.state.slotsAvailable}</span></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
