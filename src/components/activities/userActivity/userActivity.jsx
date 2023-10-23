import Style from './userActivity.module.css'
import { fetchActivities } from '../../../services/activities/activities'

export default function UserActivity ({ activities, handleModal }) {
    return (
        <div className={Style.activity}>
            <button onClick={handleModal} className={Style.activity_button}>X</button>

            {activities?.map((a) => (
                <div key={a.id} className={Style.activity_info}>
                    <h1>Activity</h1>
                    <h2>Name: {a.name}</h2>
                    <h2>Duration: {a.duration}</h2>
                    <h2>Difficulty: {a.difficulty}</h2>
                    <h2>Season: {a.season}</h2>
                    <button onClick={() => fetchActivities(a.name)}>🗑️</button>
                </div>
            ))}
            
        </div>
    )
}