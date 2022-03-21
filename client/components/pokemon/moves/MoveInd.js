import style from './MoveInd.module.css';
import Image from 'next/image';

import { colors } from '../variables/typeColors';
import Link from 'next/link';

export default function MoveInd({ move: { _id, name: { english }, type, category, pp, power, accuracy, generation } }){
    const route = `/Pokemon/Move/${_id}`;
    const typeOne = colors[type.toLowerCase()];
    
    return(
        <tr className={style.tr}>
            <td className={style.stat}>{_id}</td>
            <td className={style.stat}><a href={route} className="hover:text-stone-400">{english}</a></td>
            <td className={`${style.stat} ${typeOne} bg-opacity-60`}>{type}</td>
            <td className={style.stat}>{category}</td>
            <td className={style.stat}>{pp}</td>
            <td className={style.stat}>{power}</td>
            <td className={style.stat}>{accuracy}</td>
            <td className={style.stat}>{generation}</td>
        </tr>
    )
}