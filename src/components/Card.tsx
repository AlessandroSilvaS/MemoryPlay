import '../style/Stylecompo/card.css'

const Card = () => {

    return(
        <>
            <div className="card-front">
                <img src="https://cdn.pixabay.com/photo/2020/01/02/06/29/goku-4735092_1280.jpg" alt="image not found" className='image-person'/>
                <p className='name-person'>Goku</p>
            </div>

            <div className="card-back">
                {/* <img src="#" alt="image not found" /> */}
            </div>
        </>

    )
}

export default Card