import React, { useState } from 'react'

export const Notification = ({ notificationContent, showNotification, setShowNotification, notificationClassStyle }) => {

    const closeNotification = () => {
        setShowNotification(false);
    }

    return (
        <>
            {showNotification &&
                <div className={'notification ' + notificationClassStyle}>
                    <div className='notification__close' onClick={() => { closeNotification() }}></div>
                    <p>{notificationContent}</p>
                </div>
            }
        </>
    )
}
