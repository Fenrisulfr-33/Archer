import style from './moveInd.module.css';
import { colors } from '../../../../components/pokemon/variables/typeColors';

export default function MoveInd({ move: { level, id, name, type, category, pp, power, accuracy }, levelUp }){
    const route = `/pokemon/moves/${id}`;
    const typeOne = colors[type.toLowerCase()];
    
    return(
        <tr className={style.tr}>
            {levelUp && <th className={style.th}>{level}</th>}
            <td className={style.stat}><a href={route} className="hover:text-stone-400">{name}</a></td>
            <td className={`${style.stat} ${typeOne} bg-opacity-60`}>{type}</td>
            <td className={style.stat}>{category}</td>
            <td className={style.stat}>{pp}</td>
            <td className={style.stat}>{power}</td>
            <td className={style.stat}>{accuracy}</td>
        </tr>
    )
}