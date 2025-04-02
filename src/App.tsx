import './style/App.css'

import Card from './components/Card'

const personNamesArray = ['Goku', 'Goku', 'Gohan', 'Gohan', 'Kuririn', 'Kuririn', 'Vegeta', 'Vegeta', 'Piccolo', 'Piccolo', 'shenlong', 'shenlong']

const showCards = personNamesArray.map((element: string) => {

  let numberChoisends: Array<number> = []

  while(numberChoisends.length <= personNamesArray.length){

    let indexElements: number = Math.floor(Math.random() * 13)

    if(numberChoisends.includes(indexElements) == false){

      numberChoisends.push(indexElements)

      return <Card key={indexElements} personUrl={element}/>
    }

  }
})

function App() {

  return (
    <>
    <div className="grid">
      {showCards}
    </div>

    </>
  )
}

export default App