import React, { Component } from 'react';
    
    
class Person extends Component {
    render() {
        return <div className="border border-dark border border-5 rounded-3 p-3 mb-2  ">
                    <h1>{ this.props.LastName} { this.props.FirstName}</h1>
                    <p>Age:{ this.props.Age}</p>
                    <p>Hair Color:{ this.props.HairColor}</p>
                </div>;
    }
}
    
export default Person;
