import style from './CardStatus.module.scss'

type CardStatusType = {
    className?: string
    theme: Status
}

export enum Status {
    Finished = 'Live',
    Scheduled = 'Finished',
    Ongoing = 'preparing'
}

export const CardStatus: React.FC<CardStatusType> = ({
    className,
    theme
}) => {
    return (
        <div className={`${style.status} ${className} ${style[theme]}`}>
            {theme === Status.Ongoing ? 'Match preparing' : theme}
        </div>
    )
}