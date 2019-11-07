import React from 'react';
//import BuildingList from './BuildingList';
//import RemoveBuilding from './RemoveBuilding';

class ViewBuilding extends React.Component {
	
    getBuilding(id) {
        return this.props.data.find(building => {
            return building.id === id;
        });
	}
	getLong(longitude) {
        return this.props.data.find(building => {
            return building.longitude === longitude;
        });
	}
	

    Building(props) {
        return (
            <div class="Building">
                <div>
                    <class>Code</class>: {props.outputData.code}
                </div>
                <div>
                   <class>Name</class>: {props.outputData.name}
                </div>
                <div>
					
					<class>Coordinates</class> 
                        Latitude: {props.outputData.coordinates.latitude}, 
                        Longitude: {props.outputData.coordinates.longitude}
                    
				</div>
				
                <div>
                    < class>Address</ class>: {props.outputData.address}
                </div>
            </div>
        );
    }

    render() {
        var buildingInfo = <i>Click a building to get more info</i>;
		var outputData = this.getBuilding(this.props.buildingId);
		

        if (outputData) {
            buildingInfo = <this.Building outputData={outputData}/>
        }

        return (
            <div>
                <p>
                    {' '}
                    {buildingInfo}
                </p>
            </div>
        );
    }
}
export default ViewBuilding;
