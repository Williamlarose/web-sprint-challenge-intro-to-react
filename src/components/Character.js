// Write your Character component here
import React, { useState } from 'react'

const People = function (props) {
    <h2>React Wars</h2>
    const { person, open } = props
    const [detailName, setDetailName] = useState(null)

    return (
        <div>
            <p>{person.name}</p>
            <button onClick={() => open(person.name)}> {person.birth_year}</button>

        </div >
    )
}
export default People