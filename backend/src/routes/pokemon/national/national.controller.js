const asyncHandler = require('express-async-handler'); // This lets use use try catch without always have to catch an error
const National = require('../../../models/nationalModel');
const Moves = require('../../../models/movesModel');

/* ------- Middleware Functions -------- */

/* ---------- CRUDL Functions ---------- */

/**
 *  Finds a pokemon base upon its nationa dex _id , and reassgins its move values as object with basic move information

 * @returns {JSON} all data for a specific Pokemon
 */
const readPokemon = asyncHandler(async (request, response) => {
    const pokemon = await National.findById(Number(request.params.id)).lean(); // Get the requested pokemon by natioinal dex id
    const moves = await Moves.find().lean(); // Getting all the moves right away will be faster then requesting it everytime we need information
   
    if (!pokemon) {  // Case for if pokemon does not exsist
        response.status(400);
        throw new Error('Pokemon not found.');
    } else if(!moves) { // Case for if moves is not connecting
        /* 
            Eventually make this not required as you should still be able to get pokemon data without connecting to moves
            But for now, I want it this way.
        */
        response.status(400);
        throw new Error('Moves data not found, error on Server/Database side.');
    } else {
        /*
            Moves Hierachy inside Pokemon object
            --------------
            moves {object}
            |-- gen_one {object}
            |   |-- rb {object}
            |   |   |-- levelup [array of objects { id: ##, level: 1 }], id being the move id
            |   |   |-- machine [array of numbers correlating to move id]
            |   |   |-- egg [array of numbers correlating to move id]
            |   |   |-- tutor [array of numbers correlating to move id]
            |   |-- y {object}
            |   |   |-- levelup [array of objects { id: ##, level: 1 }], id being the move id
            |   |   |-- machine [array of numbers correlating to move id]
            |   |   |-- egg [array of numbers correlating to move id]
            |   |   |-- tutor [array of numbers correlating to move id]
            |-- gen_two {object}
            --------------
            ** This contiunes the same format through generation eight **
        */

        /*
            Time Complexity: O(n) - As generations are added and moves are added the Time will increase but the functionality will always stay the same
            Space Complexity: ** Original Object plus more ** - figure this out
        */
        for (const generation in pokemon.moves) {
            for (const game in pokemon.moves[generation]) {
                for (const type in pokemon.moves[generation][game]){
                    if (type === 'levelUp') { // Levelup's array is formatted with objects { id:##, level: 1 }
                        /*
                            For each move in a pokemons document,
                            go through and add move name, power, accuracy, and other variables 
                            to display on a singular pokemon page via the national/:id page
                            
                            The goal is on one Pokemon page you can select any generation and see the moves in semi detail, with links to the
                            moves database singular page if you want to see more
                        */
                        pokemon.moves[generation][game][type].forEach((move) => {
                            const found = moves[move.id - 1]; // Get the data from the Moves Collection
                            // Create key and values for the new move
                            move['name'] = found.name.english;
                            move['type'] = found.type;
                            move['category'] = found.category;
                            move['pp'] = found.pp;
                            move['accuracy'] = found.accuracy;
                            move['power'] = found.power;
                        })
                    } else {
                        const detailMoves = []; // create the new array
                        // call the other three arrays of just move numbers, egg, tutor, and machine
                        pokemon.moves[generation][game][type].forEach((move) => {
                            const foundMove = moves[move - 1]; // Get the data from the Moves Collection
                            // Create a new object to replace the Number
                            const { name, type, category, pp, accuracy, power, } = foundMove;
                            const newMove = {
                                id: move - 1,
                                name: name.english,
                                type,
                                category,
                                pp,
                                accuracy,
                                power
                            }
                            detailMoves.push(newMove); // Found it easiest to push the new objects into a new array
                            
                        })
                        pokemon.moves[generation][game][type] = detailMoves; // Change the old moves to the new Array
                    }
                }
            }
        }
        response.status(200).json(pokemon);
    }
});

/**
 *  lists all pokemon in order of national dex _id
 * 
 * @returns {JSON}
 *  The Pokemon Natioanl Dex up to 898
 */
const listNational = asyncHandler(async (request, response) => {
    const national = await National.find().lean().sort({_id: 1});
    response.status(200).json(national);
});

module.exports = {
    read: [readPokemon],
    list: [listNational]
}