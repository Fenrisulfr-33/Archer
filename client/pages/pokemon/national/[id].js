import { useState } from "react";
import MovesList from "./moves/movesList";
import Image from "next/image";
const API_BASE_URL = process.env.BACKEND_URL;

export default function NationalInd({ pokemon }){
    // Add State to determine what generation this person wants on screen
    const [gen, setGen] = useState('gen_one'); // start off with most recent
    const [game, setGame] = useState('rb'); // start off with most recent
    // Going to need a nav bar to naviagte the generations

    return (
        <div className='grid grid-cols-1 tablet:grid-cols-2 w-4/5 m-auto font-mono text-center text-stone-200'>
            <h1 className='col-span-1 tablet:col-span-2 text-5xl text-center pb-10 text-stone-200'>{pokemon.name.english}</h1>
            <div className='col-span-1 grid grid-cols-1 tablet:grid-cols-2         font-mono text-stone-200 text-center'>
                <Image 
                    src={`/hires/${pokemon._id}.png`}
                    alt={`${pokemon.name}`}
                    height={100}
                    width={100}
                    layout='intrinsic'
                    className='col-span-1'
                />
                <div className='col-span-1 text-left align-middle'>
                    <div>
                        <h1 className='text-2xl font-mono font-extrabold'>Pokedex Information</h1>
                        <h4>{`National Dex Number: ${pokemon._id}`}</h4>
                        <span className='border-2 border-gray-400'>
                            Pokemon Type:
                            <Image 
                                src={`/types/${pokemon.type[0]}.svg`}
                                alt={`${pokemon.type[0]}`}
                                height={40}
                                width={40}
                            />
                            {pokemon.type[1] && 
                            <Image 
                                src={`/types/${pokemon.type[1]}.svg`}
                                alt={`${pokemon.type[1]}`}
                                height={40}
                                width={40}
                            />}
                        </span>
                        <h4>{`Pokemon Species: ${pokemon.species}`}</h4>
                        <h4>{`Pokemon Height Meters: ${pokemon.height.meters}`}</h4>
                        <h4>{`Pokemon Weight: ${pokemon.weight.kg}`}</h4>
                        <br />
                        <div id='abilities' className=''>
                            <p>{`Ability 1: ${pokemon.abilities[1]}`}</p>
                            {pokemon.abilities[2] && <p>{`Ability 2: ${pokemon.abilities[2]}`}</p>}
                            {pokemon.abilities['h'] && <p>{`Hidden Ability: ${pokemon.abilities['h']}`}</p>}
                        </div>
                        <br />
                        <h4>{`Pokemon Egg Groups: ${pokemon.eggGroups[0]}, ${pokemon.eggGroups[1]}`}</h4>
                        <h4>{`Gender Ratio: Male ${pokemon.genderRatio.male}% | Female: ${pokemon.genderRatio.female}%`}</h4>
                        <div>    
                            <h4>Base Stats:</h4>
                            <p>{`HP: ${pokemon.baseStats.hp}`}</p>
                            <p>{`Atk: ${pokemon.baseStats.atk}`}</p>
                            <p>{`Def: ${pokemon.baseStats.def}`}</p>
                            <p>{`SpAtk: ${pokemon.baseStats.spatk}`}</p>
                            <p>{`SpDef: ${pokemon.baseStats.spdef}`}</p>
                            <p>{`Spd: ${pokemon.baseStats.spd}`}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id='level-up-moves' className='col-span-1'>
                <h4 className=''>Learnt on Level Up</h4>
                <MovesList moves={pokemon.moves[gen][game].levelUp} levelUp={true} />
            </div>
            <div id='egg-moves' className='col-span-1'>
                <h4 className=''>Egg Moves</h4>
                <MovesList moves={pokemon.moves[gen][game].egg} />
            </div>
            {/* This would determine either TM's or TR's based upon generation */}
            <div id='machine-moves' className='col-span-1'>
                <h4 className=''>{`Tm's`}</h4>
                <MovesList moves={pokemon.moves[gen][game].machine} />
            </div>
            <div id='tutor-moves' className='col-span-1'>
                <h4 className=''>Tutor</h4>
                <MovesList moves={pokemon.moves[gen][game].tutor} />
            </div>
        </div>
    )
}

export const getServerSideProps = async (context) => {
    console.log(context);
    const response = await fetch(`${API_BASE_URL}/pokemon/national/${context.params.id}`);
    const pokemon = await response.json();
    return { props: { pokemon } }
}