import React from 'react';


class AddBuilding extends React.Component{
	onFormSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        this.props.addBuilding(
            data.get('Code'),
            data.get('Name'),
            data.get('Longitude'),
            data.get('Latitude'),
            data.get('Address')
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <label for="addBuildingName">Name</label>
                    <input id="addBuildingName" name="Name" type="text"/>

                    <label for="addBuildingCode">Code</label>
                    <input id="addBuildingCode" name="Code" type="text"/>

                    <label for="addAddress">Address</label>
                    <input id="addAddress" name="Address" type="text"/>

                    <label for="addBuildingLongitude">Longitude</label>
                    <input id="addBuildingLongitude" name="Longitude" type="text"/>

                    <label for="addBuildingLatitude">Latitude</label>
                    <input id="addBuildingLatitude" name="Latitude" type="text"/>

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
export default AddBuilding;