import React from 'react'
import "./aboutCard.css"

const AboutCard = ({head,desc}) => {
    return (
        <div className='aboutContent'>
            <h2>{head}</h2>
            <p>{desc}</p>
            <p>{desc}</p>
        </div>
    )
}

export default AboutCard
