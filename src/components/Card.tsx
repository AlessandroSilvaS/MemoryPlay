import '../style/Stylecompo/card.css'
// import { useState } from 'react'
// import { useRef } from 'react'

const Card = () => {

    // const [displayCardB, setDisplayCardB] = useState("none")
    // const [displayCardF, setDisplayCardF] = useState("flex")

    // const frontRef = useRef(null)
    // const backRef = useRef(null)

    const cardFront = document.querySelectorAll("card-front")
    const cardFrontElements = Array.from(cardFront) as HTMLDivElement[]
    const cardBack = document.querySelectorAll(".card-back")
    const cardBackElements = Array.from(cardBack) as HTMLDivElement[]

    if(cardBack.length > 0){

        cardBackElements.forEach((element, index) => {

            const divElement = element as HTMLDivElement
            divElement.addEventListener('click', () => {

                if(divElement.style.display != 'none'){

                    divElement.style.display = 'none'
                    cardFrontElements[index].style.display = 'flex'
                    
                }
            })
        }) 
    }

    return( 

        <>
            <div className="card-front" >

                <img src="https://cdn.pixabay.com/photo/2020/01/02/06/29/goku-4735092_1280.jpg" alt="image not found" className='image-person' />
                <p className='name-person'>Goku</p>

            </div>

            <div className="card-back" >

                <img src="./public/img/logo.jpeg" alt="image not found" />

            </div>
        </>

    )

}

export default Card