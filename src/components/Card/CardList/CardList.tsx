import { Match } from '../../../types/type'
import { CardInfo } from '../CardInfo/CardInfo'

import style from './CardList.module.scss'

export const CardList: React.FC<Match> = ({
    homeTeam,
    awayTeam,
}) => {
    return (
        <div className={style.open_card}>
            <CardInfo {...homeTeam} />
            <CardInfo {...awayTeam} />
        </div>
    )
}