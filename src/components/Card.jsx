import React from 'react';
import PropTypes from 'prop-types';

Card.propTypes = {
    pokemon: PropTypes.array,
    loading: PropTypes.bool,
};
Card.defaultProps = {
    pokemon: [],
    loading: true,
}
function Card({pokemon,loading,infoPokemon}) {
    // console.log(pokemon);
    return (
        <>
        {
            loading ? <h1>Loading....</h1>:
            pokemon.map((item) => {
                return(
                    <>
                        <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                            <h2>{item.id}</h2>
                            <img src={item.sprites.back_default} alt="" />
                            <h2>{item.name}</h2>
                        </div>
                    </>
                )
            })
        }
            
        </>
    );
}

export default Card;