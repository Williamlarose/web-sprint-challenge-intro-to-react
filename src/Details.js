import React from 'react'


function Details(props) {
    const { person, close } = props
    return

    (<div>
        <p>{person.height}</p>
        <p>{person.mass}</p>
        <p>{person.hair_color}</p>
        <p>{person.eye_color}</p>
        <p>{person.skin_color}</p>
        <p>{person.gender}</p>
        <button onClick={close}>Close</button>
    </div>)
}
export default Details