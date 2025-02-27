import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { getCards } from '../../store/cardsSlice/cardsSlice'
import { Match } from '../../types/type'
import { CardLoader } from '../../components/Card/CardLoader/CardLoader'
import { Card } from '../../components/Card/Card'

export const Home: React.FC = () => {

    const dispatch = useAppDispatch()
    const { data, isLoading } = useAppSelector(state => state.cardsSlice)

    useEffect(() => {
        dispatch(getCards('fronttemp'))
    }, [dispatch])

    return (
        <main>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {data.map((item: Match) => isLoading ?
                    <CardLoader key={item.title} />
                    :
                    <Card {...item} key={item.title} />)}
            </div>
        </main>
    )
}
