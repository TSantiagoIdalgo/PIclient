import { useHandle } from '../../../../hooks/commonHooks/useHandle'
import Logged from '../../../../assets/icon/user/access.png'
import UserInfo from '../../userInfo/userinfo'
import Style from './isLogged.module.css'

export default function IsLogged () {
    const { state, changeState } = useHandle()
    return (
      <div>
        <button className={Style.login} onClick={changeState}>
            <img src={Logged} alt="logged" className={Style.logged_button}/>
        </button>
        {state ? <UserInfo/> : null}
      </div>
    )
}