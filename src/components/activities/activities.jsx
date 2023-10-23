import { useActivities } from '../../hooks/activities/useActivities';
import { NavLink } from 'react-router-dom';
import Card from './card/card';
import Style from './activities.module.css'

export default function Activities () {
    const { activities } = useActivities()
    return (
        <div className={Style.background}>
            {activities?.map((a) => (
                <Card key={a.id} props={a}/>
            ))}

            <NavLink to='/addActivity' className={Style.add_template}>
                <span className={Style.add_template_icon}>+</span>
            </NavLink>
        </div>
    )
}