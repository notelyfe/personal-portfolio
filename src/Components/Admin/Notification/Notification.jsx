import React, { useContext } from 'react'
import notifyStyle from '../../Style/notification.module.css'
import NotificationCard from './NotificationCard'
import Context from '../../../Context/Context'
import api, { getAccessToken } from '../../../Services/api'

const Notification = () => {

  const { notifications, setNotifications } = useContext(Context)

  const deleteNotifications = async (id) => {
    let ids = []

    if (id === null) {
      notifications.map((item) => {
        ids.push(item._id)
      })
    } else {
      ids.push(id)
    }

    try {

      if (ids.length > 0) {

        const res = await api.delete('/api/notifications/deleteNotify', {
          data: {
            ids
          },
          headers: {
            "access_token": getAccessToken()
          }
        })

        if (res.status === 200) {
          let remNotify = []

          for (let i = 0; i < ids.length; i++) {
            for (let j = 0; j < notifications.length; j++) {
              if (ids[i] !== notifications[j]._id) {
                remNotify.push(notifications[j])
              }
            }
          }
          id!==null?setNotifications(remNotify):setNotifications([])
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className={notifyStyle.dataWrapper}>
        <h1 className={notifyStyle.header}>Notifications</h1>
        <div className={notifyStyle.notifyContainer}>
          <div className={notifyStyle.topContainer}>
            <button onClick={() => deleteNotifications(null)}>Delete All</button>
          </div>
          <div className={notifyStyle.messageWrapper}>
            {notifications?.length > 0 ? (
              notifications.map((item) => {
                return (
                  <NotificationCard
                    key={item._id}
                    notification={item.notification_msg}
                    action={item.action}
                    date={item.notification_date}
                    status={item.status}
                    id={item._id}
                    deleteNotifications={deleteNotifications}
                  />
                )
              })

            ) : (
              <p>No Notification to display</p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Notification
