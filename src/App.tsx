import './style/App.css'

import Card from './components/Card'

const personNamesArray:Array<string | number> = ['Goku', 'Goku', 'Gohan', 'Gohan', 'Kuririn', 'Kuririn', 'Vegeta', 'Vegeta', 'Piccolo', 'Piccolo', 'shenlong', 'shenlong']

  let mixedPersonNamesArray: any = []

  for(let x:number = personNamesArray.length; x > 0; x--){

    const randomIndex: number = Math.floor(Math.random() * (x + 1))

    mixedPersonNamesArray.push(personNamesArray[randomIndex])
  }



const showCards = mixedPersonNamesArray.map((element: string, index: number) => {

    return <Card key={index} personUrl={element}/>

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