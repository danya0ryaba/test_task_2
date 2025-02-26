import { Card } from './components/Card/Card'
import { Button } from './shared/Button/Button'
import { CardStatus, Status } from './shared/CardStatus/CardStatus'
import './style/global.scss'


function App() {

  return (
    <>
      <Button onClick={() => { }} disabled={false}>Обновить</Button>
      <CardStatus theme={Status.live} />
      <CardStatus theme={Status.finished} />
      <CardStatus theme={Status.preparing} />
      <Card />
    </>
  )
}

export default App
