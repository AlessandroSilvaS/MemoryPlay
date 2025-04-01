import '../style/Stylecompo/card.css'
import { useState } from 'react'

const Card = () => {

    const [url, setUrl] = useState("/public/img/logo.jpeg")

    const cardElement = document.querySelectorAll(".card-front")
    const cardElementsArrays = Array.from(cardElement) as HTMLDivElement[]


        cardElementsArrays.map((element) => {

            const CardFunctional = element.addEventListener('click', () => {

                if(url == "/public/img/logo.jpeg"){

                    setUrl("https://cdn.pixabay.com/photo/2020/01/02/06/29/goku-4735092_1280.jpg")

                }else if(url == "https://cdn.pixabay.com/photo/2020/01/02/06/29/goku-4735092_1280.jpg"){

                    setUrl("/public/img/logo.jpeg")

                }

            })


        }) 

    return( 

        <>
            <div className="card-front" >

                <img src={url} alt="image not found" className='image-person' />
                {/* <p className='name-person'>Goku</p> */}

            </div>
        </>

    )

}

export default Card
//https://cdn.pixabay.com/photo/2020/01/02/06/29/goku-4735092_1280.jpg