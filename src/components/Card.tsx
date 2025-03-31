import '../style/Stylecompo/card.css'
import { useState } from 'react'
import { useRef } from 'react'

const Card = () => {

    const [displayCardB, setDisplayCardB] = useState("none")
    const [displayCardF, setDisplayCardF] = useState("flex")

    const frontRef = useRef(null)
    const backRef = useRef(null)




    return(

        <>
            <div className="card-front" ref={frontRef}>

                <img src="https://cdn.pixabay.com/photo/2020/01/02/06/29/goku-4735092_1280.jpg" alt="image not found" className='image-person'/>
                <p className='name-person'>Goku</p>

            </div>

            <div className="card-back" ref={backRef}>

                <img src="#" alt="image not found" />

            </div>
        </>

    )

}

export default Card