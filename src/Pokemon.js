import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import mockData from './mockData';
import { toFirstCharUppercase } from './constants'

const Pokemon = props => {
    const { match } = props;
    const { params } = match;
    const { pokemonId } = params;

    const [pokemon, setPokemon] = useState(mockData[`${pokemonId}`]);

    // const toFirstCharUppercase = name => name.charAt(0).toUpperCase() + name.slice(1);

    const generatePokemonJSX = () => {
        const { name, id, species, height, weight, types, sprites } = pokemon
        const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
        const { front_default } = sprites;
        
        return (
            <>
                <Typography variant="h2">
                    {`${id}.`} {toFirstCharUppercase(name)}
                    <img src={front_default} alt="..."/>
                </Typography>
                <img style={{ width: "300px", height: "300px" }} src={fullImageUrl} alt="..."/>
            </>
        )
    }

    return (
        <>
            {generatePokemonJSX()}
        </>
    );
};

export default Pokemon