import { useEffect, useState } from 'react'
import { Card } from './components/Card/Card'
import { CardLoader } from './components/Card/CardLoader/CardLoader'
import { Header } from './components/Header/Header'
import { Match } from './types/type'
import { fetchMathes } from './services/getCards'

import './style/global.scss'

function App() {

  const [loading, setLoading] = useState(true)
  const [matches, setMatches] = useState<Match[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function asyncForGetMatches() {
      const response = await fetchMathes('fronttemp');
      if (!response.ok) {
        setLoading(false)
        setError(' Ошибка: не удалось загрузить информацию')
        throw new Error('Network response was not ok');
      }
      setLoading(false)
      setMatches(response.data.matches)
    }
    asyncForGetMatches()
    return () => {
      asyncForGetMatches()
    }
  }, [])

  return (
    <div className='container'>
      <Header error={error} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {matches.map(item => loading ? <CardLoader key={item.title} /> : <Card {...item} key={item.title} />)}
      </div>

    </div>
  )
}

export default App
