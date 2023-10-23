import Style from './added.module.css'
import { useNavigate } from 'react-router-dom'

export default function Added () {
    const navigate = useNavigate()
    return (
        <div className={Style.background}>
            <main className={Style.activity_form}>
              <h1>The activity has been created</h1>
              <button 
              className={Style.activity_form_button} 
              onClick={() => navigate('/activities')}>Return</button>
            </main>
          </div>
    )
}