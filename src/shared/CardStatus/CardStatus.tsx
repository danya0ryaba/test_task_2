import style from './CardStatus.module.scss'

type CardStatusType = {
    className?: string
    theme: Status
}

export enum Status {
    live = 'live',
    finished = 'finished',
    preparing = 'preparing'
}

export const CardStatus: React.FC<CardStatusType> = ({
    className,
    theme
}) => {
    return (
        <div className={`${style.status} ${className} ${style[theme]}`}>
            {theme === Status.preparing ? 'Match preparing' : theme}
        </div>
    )
}