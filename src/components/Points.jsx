import React, { useEffect, useState } from 'react'

export const Points = ({ points }) => {

    const [flicker, setFlicker] = useState(false)

    useEffect(() => {
        flickerColor()
    }, [points]);

    const flickerColor = () => {
        setFlicker(true);

        // Change color back after some millisecond
        setTimeout(() => {
            setFlicker(false);
        }, 250);
    }

    return (
        <div className={'points' + (flicker ? ' points--flicker' : '')}>
            <h2>{points} Points</h2>
        </div>
    )
}
