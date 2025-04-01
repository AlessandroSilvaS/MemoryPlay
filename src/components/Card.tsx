    import '../style/Stylecompo/card.css'
    import { useState } from 'react'

    const Card = () => {

        const [url, setUrl] = useState("/public/img/logo.jpeg");

            const changeImage = () => {

                setUrl(prevUrl => prevUrl == "img/logo.jpeg" ? "./public/img/Gohan.jpep" : "img/logo.jpeg"



                )
            }

        return( 

            <>
                <div className="card-front" >

                    <img src={url} onClick={changeImage} alt="image not found" className='image-person' />
                    {/* <p className='name-person'>Goku</p> */}

                </div>
            </>

        )

    }

    export default Card
    //https://cdn.pixabay.com/photo/2020/01/02/06/29/goku-4735092_1280.jpg
    //img/logo.jpeg