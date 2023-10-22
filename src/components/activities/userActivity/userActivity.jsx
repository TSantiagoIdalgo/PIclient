import Style from './userActivity.module.css'
import axios from 'axios'

export default function UserActivity ({ activities, handleModal }) {

    async function deleteActivity (id) {
        await axios.delete(`https://piback-end.onrender.com/activities/${id}`)
        window.location.reload()
    }
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
                    <button onClick={() => deleteActivity(a.name)}>🗑️</button>
                </div>
            ))}
        </div>
    )
}