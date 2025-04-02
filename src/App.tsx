import './style/App.css'

import Card from './components/Card'

const personNamesArray = ['Goku', 'Goku', 'Gohan', 'Gohan', 'Kuririn', 'Kuririn', 'Vegeta', 'Vegeta', 'Piccolo', 'Piccolo', 'shenlong', 'shenlong']

let mixedPersonNamesArray: any = []

for(let x: number = 0; x <= 12; x++){

  let indexNumber = Math.floor(Math.random() * 12)

  if(mixedPersonNamesArray.includes(personNamesArray[indexNumber]) == false){

    mixedPersonNamesArray.push(personNamesArray[indexNumber])

  }else{

    x--
    
  }
}

console.log(mixedPersonNamesArray)


function App() {

  return (
    <>
    <div className="grid">
      {/* {showCards} */}
    </div>

    </>
  )
}

export default App