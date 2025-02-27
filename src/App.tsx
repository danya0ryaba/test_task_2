import { useEffect } from 'react'
import { Card } from './components/Card/Card'
import { CardLoader } from './components/Card/CardLoader/CardLoader'
import { Header } from './components/Header/Header'
import { Match } from './types/type'

import './style/global.scss'
import { getCards } from './store/cardsSlice/cardsSlice'
import { useAppDispatch, useAppSelector } from './store/store'

function App() {

  const dispatch = useAppDispatch()

  const { data, isLoading, error } = useAppSelector(state => state.cardsSlice)

  useEffect(() => {
    dispatch(getCards('fronttemp'))
  }, [dispatch])

  return (
    <div className='container'>
      <Header error={error} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {data.map((item: Match) => isLoading ? <CardLoader key={item.title} /> : <Card {...item} key={item.title} />)}
      </div>

    </div>
  )
}

export default App
