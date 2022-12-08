import { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import '../../styles/Products.css'

function JL(){

    const[speakers, setSpeakers] = useState([])

    useEffect(() =>{
        fetch('https://marine-store-api.web.app/JL-Audio')
        .then(results => results.json())
        .then(jlSpeakers => setSpeakers(jlSpeakers))
        .catch(err => console.error(err))
    }, [setSpeakers])

    if(!speakers){
        return (
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )
      }


    return(
        <div>
            <div className="product-header" id="jl-header"></div>
            <div className='products'>
              <h1 className='product-name'>Speakers</h1>
                <ul className="product-container">
            {speakers.map(jlSpeakers => (
                <div key={jlSpeakers.id} className="productCards">
                         {/* {jlSpeakers.profilePic && <img className="profilePic"  src={jlSpeakers.profilePic} width={300} />} */}
                         <div className="text-area">
                         <div className="Name">
                         {jlSpeakers.name}
                         </div>
                         <br/>
                         <div className="description">
                         {jlSpeakers.description}
                         </div>
                         <br/>
                         ${jlSpeakers.price}
                        </div>
                        <button>Add to cart</button>
                </div>
            ))}
        </ul>
            </div>
            <div className='products'>
                <h1 className='product-name'>Subwoofers</h1>
            </div>
            <div className='products'>
            <h1 className='product-name'>Amps</h1>
            </div>
            
        </div>
    )
}

export default JL