import { useEffect, useState } from 'react'
import { Card } from './components/Card/Card'
import { CardLoader } from './components/Card/CardLoader/CardLoader'
import { Header } from './components/Header/Header'

import './style/global.scss'
import { Date, Match } from './types/type'


function App() {
  const apiUrl = import.meta.env.BASE_URL;

  const [loading, setLoading] = useState(false)
  const [matches, setMatches] = useState<Match[]>([])
  const [error, setError] = useState<string | null>(null)

  async function fetchMathes(url: string): Promise<Date> {
    try {
      setLoading(true)
      const response = await fetch(apiUrl + url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Date = await response.json();
      setLoading(false)
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      setLoading(false)
      setError((error as Error).message)
      throw error;
    }
  }

  useEffect(() => {
    fetchMathes('/fronttemp').then(data => setMatches(data.data.matches))
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
