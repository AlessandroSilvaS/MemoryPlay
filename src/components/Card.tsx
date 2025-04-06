    import '../style/Stylecompo/card.css'
    import React from 'react';
    import { useState } from 'react'

    interface CardProp{
        personUrl: string
        changeImageDecisior: boolean
    }

    const Card: React.FC<CardProp> = ({personUrl, changeImageDecisior}) => {

        const [url, setUrl] = useState('./logo.jpeg');

        function delay(ms: number){

            return new Promise(resolve => setTimeout(resolve, ms))

        }

            const changeImage = async () => {

                if(changeImageDecisior == true){

                    setUrl( personUrl + ".jpeg")

                    await delay(950)

                    setUrl('./logo.jpeg')
                }

                
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