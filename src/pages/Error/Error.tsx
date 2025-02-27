import { useNavigate } from "react-router-dom"
import { Button } from "../../shared/Button/Button"

import style from './Error.module.scss'

export const Error = () => {

    const navigate = useNavigate()

    return (
        <div className={style.error}>
            <Button onClick={() => navigate(-1)}>Вернуться на главную</Button>
            <h2 className={style.error_title}>ошибка</h2>
        </div>
    )
}
