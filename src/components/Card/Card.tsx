import { useState } from 'react'
import style from './Card.module.scss'
import { CardStatus, Status } from '../../shared/CardStatus/CardStatus'
import { CardList } from './CardList/CardList';
import { Match } from '../../types/type';

export const Card: React.FC<Match> = (props) => {

    const [openCard, setOpenCard] = useState(false);
    const classArrow = openCard ? 'rotate(180deg)' : 'rotate(0deg)';

    return (
        <article className={style.card}>
            <div className={style.main_card}>
                <div className={style.command}>
                    <img src={'../../../public/card.png'} alt="command avatar" />
                    <h4 className={style.name}>{props.awayTeam.name}</h4>
                </div>
                <div className={style.score}>
                    <span>{props.awayScore} : {props.homeScore}</span>
                    <CardStatus theme={Status[props.status]} />
                </div>
                <div className={style.command}>
                    <div className={style.command__two}>
                        <img src={'../../../public/card.png'} alt="command avatar" />
                        <h4 className={style.name}>{props.homeTeam.name}</h4>
                    </div>
                    <div className={style.arrow} style={{ transform: classArrow }} onClick={() => setOpenCard(prev => !prev)}>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.57157 6.09242L7.00588 6.6581L6.4402 6.09242L1.91353 1.56575C1.78113 1.43335 1.53854 1.42344 1.38461 1.56942C1.24566 1.71222 1.24687 1.93801 1.38824 2.07938L6.74323 7.43438C6.88581 7.57696 7.11428 7.57696 7.25686 7.43438L12.6119 2.07938C12.7544 1.9368 12.7544 1.70833 12.6119 1.56575C12.4693 1.42317 12.2408 1.42317 12.0982 1.56575L7.57157 6.09242Z" fill="white" stroke="white" strokeWidth="1.6" />
                        </svg>
                    </div>
                </div>
            </div>
            {openCard && <CardList {...props} />}
        </article>
    )
}