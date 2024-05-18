import React from 'react'

export default function Personajes(props) {
    //console.log(props);
    const {characters} = props;
  return (
    <div className='characters'>
        <h1>PErsonajes</h1>
        <span className='back-home'>Home</span>
        <div className='container-characters'>
            {characters.map((characters, index) => 
                <div className='character-container' key={index}>
                    

                    <img src={characters.image} alt={characters.name}></img>
                    <div> 
                        <h3>{characters.name}</h3>
                        <h6>{characters.status === 'Alive' ? (
                            <span className='alive'>Vivo</span>
                        ) : (
                            <>
                                <span className='dead'>Muerto</span>
                            </>
                        )}</h6>
                        <p>
                            <samp className='text-grey'>Episodios:</samp>
                            <span>{characters.episode.length}</span>
                        </p>
                        <p>
                            <samp className='text-grey'>Especie:</samp>
                            <span>{characters.species}</span>
                        </p>
                    </div>
                </div> 
            )}
        </div>
    </div>
  )
}
