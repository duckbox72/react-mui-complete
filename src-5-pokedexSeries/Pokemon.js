import React, { useState, useEffect } from 'react';
import { Button, CircularProgress, Link, Typography } from '@material-ui/core';
import { toFirstCharUppercase } from './constants'
import axios from 'axios';

const Pokemon = props => {
    const { history, match } = props;
    const { params } = match;
    const { pokemonId } = params;

    // POSSIBLE STATES
    // 1. pokemon=undefined -> (still) getting the info
    // -> return loading progress
    // 2. pokemon = good data -> info ok
    // -> return data
    // 3. pokemon = bad data / false -> request problem
    // -> return pokemon not found
    const [pokemon, setPokemon] = useState(undefined);

    useEffect(() => {
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(function (response) {
            const { data } = response;
            setPokemon(data);
        })
    }, [pokemonId])

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
                <Typography variant="h3">Pokemon Info</Typography>
                <Typography>
                    {"Species: "}
                    <Link href={species.url}>{species.name}</Link>
                </Typography>
                <Typography >Height: {height}</Typography>
                <Typography >Weight: {weight}</Typography>
                <Typography variant="h6">Types: </Typography>
                {types.map((typeInfo) => {
                    const { type } = typeInfo;
                    const { name } = type;
                    return <Typography key={name}>{`${name}`}</Typography>
                })}

            </>
        )
    }

    return (
        <>
            {pokemon === undefined && <CircularProgress />}
            {pokemon !== undefined && pokemon && generatePokemonJSX()}
            {pokemon === false && <Typography>Pokemon not found</Typography>}
            {pokemon !== undefined && (
                <Button variant="contained" onClick={() => history.push("/")}>
                    back to pokedex
                </Button>
            )}

        </>
    );
};

export default Pokemon