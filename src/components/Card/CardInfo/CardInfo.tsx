import { TeamType } from '../../../types/type'

import userImage from '../../../assets/user.png'

import style from './CardInfo.module.scss'

export const CardInfo: React.FC<TeamType> = ({
    name,
    players,
    points,
    place,
    total_kills
}) => {
    return (
        <div className={style.open_card_item} key={name}>
            <ul className={style.users}>
                {players.map(item => (
                    <li className={style.user} key={item.username}>
                        <span className={style.user_name}>
                            <img src={userImage} alt="avatar" />
                            <h6 className={style.name}>{item.username}</h6>
                        </span>
                        <span className={style.user_name}>
                            <i className={style.kill}>Убийств:</i>
                            <h6 className={style.count}>{item.kills}</h6>
                        </span>
                    </li>)
                )}
            </ul>
            <ul className={style.info}>
                <li className={style.info_item}>
                    <span className={style.info_item_key}>Points: </span>
                    <span className={style.info_item_value}>+ {points}</span>
                </li>
                <li className={style.info_item}>
                    <span className={style.info_item_key}>Место: </span>
                    <span className={style.info_item_value}>{place}</span>
                </li>
                <li className={style.info_item}>
                    <span className={style.info_item_key}>Всего убийств: </span>
                    <span className={style.info_item_value}>{total_kills}</span>
                </li>
            </ul>
        </div>
    )
}
