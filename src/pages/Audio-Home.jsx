import '../styles/Audio-Home.css'

function AudioHome(){

    return(
        <div className="audio-container">
            <div className='jl-container'>
                <h1>JL Audio</h1>
                <button>View All</button>
            </div>
            <div className='fusion-container'>
                <h1>Fusion Audio</h1>
                <button>View All</button>
            </div>
            <div className='wetsound-container'>
                <h1>Wetsound</h1>
                <button>View All</button>
            </div>
            <div className='roswell-container'>
                <h1>Roswell</h1>
                <button>View All</button>
            </div>
            <div className='rockford-container'>
                <h1>RockFord Fosgate</h1>
                <button>View All</button>
            </div>
        </div>
    )
}

export default AudioHome