import { Match } from '../../../types/type'

import style from './CardList.module.scss'

export const CardList: React.FC<Match> = ({
    homeTeam,
    awayTeam,
}) => {
    return (
        <div className={style.open_card}>

            <div className={style.open_card_item}>
                <ul className={style.users}>
                    {homeTeam.players.map(item => (
                        <li className={style.user} key={item.username}>
                            <span className={style.user_name}>
                                <img src="../../../public/user.png" alt="avatar" />
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
                        <span className={style.info_item_value}>+ {homeTeam.points}</span>
                    </li>
                    <li className={style.info_item}>
                        <span className={style.info_item_key}>Место: </span>
                        <span className={style.info_item_value}>{homeTeam.place}</span>
                    </li>
                    <li className={style.info_item}>
                        <span className={style.info_item_key}>Всего убийств: </span>
                        <span className={style.info_item_value}>{homeTeam.total_kills}</span>
                    </li>
                </ul>
            </div>

            <div className={style.open_card_item}>
                <ul className={style.users}>
                    {awayTeam.players.map(item => (
                        <li className={style.user} key={item.username}>
                            <span className={style.user_name}>
                                <img src="../../../public/user.png" alt="avatar" />
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
                        <span className={style.info_item_value}>+{awayTeam.points}</span>
                    </li>
                    <li className={style.info_item}>
                        <span className={style.info_item_key}>Место:</span>
                        <span className={style.info_item_value}>{awayTeam.place}</span>
                    </li>
                    <li className={style.info_item}>
                        <span className={style.info_item_key}>Всего убийств: </span>
                        <span className={style.info_item_value}>{awayTeam.total_kills}</span>
                    </li>
                </ul>
            </div>

        </div>
    )
}
