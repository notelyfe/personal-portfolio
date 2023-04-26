import React from 'react'
import cardStyle from '../../Style/notification.module.css'

const NotificationCard = ({ notification, action, date, status, id, deleteNotifications }) => {

    return (
        <div className={cardStyle.cardContainer}>
            <div className={cardStyle.msgContainer}>
                <p>{notification}</p>
            </div>
            <div className={cardStyle.otherInfoContainer}>
                <small>{action}</small>
                <small>{date}</small>
                <small>{status}</small>
            </div>
            <div className={cardStyle.actionContainer}>
                <button
                    onClick={() => deleteNotifications(id)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default NotificationCard
