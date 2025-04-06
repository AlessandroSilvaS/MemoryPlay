import './style/App.css'
import Card from './components/Card'

const personNamesArray:Array<string | number> = ['Goku', 'Goku', 'Gohan', 'Gohan', 'Kuririn', 'Kuririn', 'Vegeta', 'Vegeta', 'Piccolo', 'Piccolo', 'shenlong', 'shenlong']

  let mixedPersonNamesArray:any = [...personNamesArray]

  for(let x:number = personNamesArray.length - 1; x > 0; x--){

    const randomIndex: number = Math.floor(Math.random() * (x + 1))
    const temp = mixedPersonNamesArray[x]
    mixedPersonNamesArray[x] = mixedPersonNamesArray[randomIndex]
    mixedPersonNamesArray[randomIndex] = temp

  }

const showCards = mixedPersonNamesArray.map((element: string, index: number) => {

    return <Card key={index} personUrl={element} changeImageDecisior={true  }/>

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