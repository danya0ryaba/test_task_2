import ContentLoader from "react-content-loader"
import style from './CardLoader.module.scss'

export const CardLoader: React.FC = () => {
    return (
        <div className={style.card_loader}>
            <ContentLoader
                speed={1}
                width={1836}
                height={87}
                viewBox="0 0 1836 87"
                backgroundColor="#0F1318"
                foregroundColor="#0A0E12"
            >
                <rect x="0" y="0" rx="3" ry="3" width="1836" height="87" />
                <rect x="0" y="0" rx="3" ry="3" width="1836" height="87" />
            </ContentLoader>
        </div>
    )
}
