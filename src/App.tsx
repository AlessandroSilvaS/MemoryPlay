import './style/App.css'

import Card from './components/Card'

const personNamesArray:Array<string | number> = ['Goku', 'Goku', 'Gohan', 'Gohan', 'Kuririn', 'Kuririn', 'Vegeta', 'Vegeta', 'Piccolo', 'Piccolo', 'shenlong', 'shenlong']

let mixedPersonNamesArray: any = []

function mixeArray(originArray:Array<string | number>){

  const finalyArray:Array<string | number> = [...originArray]

  for(let x:number = originArray.length - 1; x > 0; x-- ){
  
    const randonNumber: number = Math.floor(Math.random() * (x + 1))
  
    finalyArray[x], originArray[randonNumber] = finalyArray[randonNumber], originArray[x]
  
  }

  return finalyArray

}

mixedPersonNamesArray = mixeArray(personNamesArray)

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