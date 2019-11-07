import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';

import AddBuilding from './components/AddBuilding';
//import RemoveBuilding from './components/RemoveBuilding';
//import Data from './data/data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      filterText: '',
      selectedBuilding: 0,
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  }

  addBuilding(code, name, longitude, latitude, address) {
    var Lastid = this.state.data[this.state.data.length - 1].id;
    var DataInput = this.state.data;
    DataInput.push({
      id: Lastid + 1,
      code: code,
      name: name,
      coordinates: {
        longitude: longitude,
        latitude: latitude
      },
      address: address
    });

    this.setState({
      data: DataInput
    });
  }

  removeBuilding(id) {
    var DataInput = this.state.data.filter(building => {
      return building.id !== id;
    });

        this.setState({
            data: DataInput
        });
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />

        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    removeBuilding={this.removeBuilding.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <ViewBuilding  
                data={this.props.data}
                buildingId={this.state.selectedBuilding}
              />
            </div>
          </div>
          <div>
            <AddBuilding
              addBuilding={this.addBuilding.bind(this)}
             />
          </div>
        <Credit />
        </main>
      </div>
    );
  }
}

export default App;
