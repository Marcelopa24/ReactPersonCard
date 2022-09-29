import React,{useState} from 'react'

const Person = ({
    LastName,
    FirstName,
    HairColor,
    Age
}) => {
const [personAge, setAge] =useState(Age)
    return (
<div className="border border-dark border border-5 rounded-3 p-3 mb-2  ">
                    <h1>{ LastName} { FirstName}</h1>
                    <p>Hair Color:{ HairColor}</p>
                    <p>Age:{personAge}</p>
                    <button class="btn btn-light border border-dark border border-2" onClick={() => setAge(personAge+1)}>Click</button>
                </div>
    )
}

export default Person