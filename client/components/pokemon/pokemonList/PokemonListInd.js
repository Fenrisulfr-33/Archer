import Link from 'next/link';
import Image from 'next/image';
import style from './PokemonListInd.module.css'
import { colors } from '../variables/typeColors';

export default function PokemonDexInd({ pokemon: { _id, baseStats: { hp, atk, def, spatk, spdef, spd }, name, type, abilities } }){
    const route = `/pokemon/national/${_id}`;
    const typeOne = colors[type[0].toLowerCase()];
    let typeTwo = type[1] ? colors[`${type[1].toLowerCase()}`] : '';
    
    return(
        <tr className="border-b border-stone-400 hover:bg-stone-200">
            <td className="py-3 px-6 text-center font-medium whitespace-nowrap">{_id}</td>
            <td className="py-3 px-6 text-center font-medium whitespace-nowrap">
                <a href={route} className="hover:text-stone-400">{name.english}</a>
            </td>
            <td className='py-3 px-6 text-center whitespace-nowrap'>
            <Image 
                    src={`/sprites/${_id}.png`}
                    alt={`${name.english}`}
                    height={40}
                    width={40}
                    layout='intrinsic'
                    className='col-span-1'
                />
            </td>
            <td className="py-3 px-6 text-center font-medium whitespace-nowrap">
                <div className="grid grid-cols-1 phone:grid-cols-2 font-bold">
                    <div className={`${style.type} ${typeOne}`}>{type[0]}</div>
                    <div className={`${style.type} ${typeTwo}`}>{type[1]}</div> 
                </div>
            </td>
            <td className="py-3 px-6 text-center grid-cols-1 font-medium whitespace-nowrap">
                <div className="cols-1">{abilities[1]}</div>
                <div className="cols-1">{abilities[2]}</div>
                <div className="cols-1 italic">{abilities['h']}</div>
            </td>
            <td className={`${style.stat} bg-green-400`}>{hp}</td>
            <td className={`${style.stat} bg-rose-400`}>{atk}</td>
            <td className={`${style.stat} bg-orange-400`}>{def}</td>
            <td className={`${style.stat} bg-indigo-400`}>{spatk}</td>
            <td className={`${style.stat} bg-teal-400`}>{spdef}</td>
            <td className={`${style.stat} bg-sky-400`}>{spd}</td>
        </tr>
    )
}