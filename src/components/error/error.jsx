import Style from './error.module.css'
import { useNavigate } from 'react-router-dom'

export default function Error () {
    const navigate = useNavigate()
    return (
        <div className={Style.background}>
            <main className={Style.error}>
                <h1>ERROR <span>404</span>: Page not found</h1>
                <p>It looks like you`re trying to access a page that doesn`t exist!</p>
                <button onClick={() => navigate('/')}>Back to top</button>
            </main>
        </div>
    )
}