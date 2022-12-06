import { useState, useEffect } from 'react'
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
        return <h2>Loading...</h2>
      }


    return(
        <div>
            <div className="product-header" id="jl-header"></div>
            <div className='products'>
                <h1 className='product-name'>Speakers</h1>
                <ul className="product-container">
            
            {speakers.map(jlSpeakers => (
                <div key={jlSpeakers._id} className="productCards">
                         {/* {crew.profilePic && <img className="profilePic"  src={crew.profilePic} width={300} />} */}
                        <div className="text-area">
                         <div className="Name">
                         {jlSpeakers.name}
                         </div>
                          {/* <a href={crew.Instagram} >
                          <FontAwesomeIcon icon={faInstagram} size="2x"/>
                          </a> */}
                         <div className="description">
                         {jlSpeakers.description}
                         </div>
                         {/* <button>Delete</button> */}
                        </div>
                </div>
            ))}
            {/* </div> */}
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