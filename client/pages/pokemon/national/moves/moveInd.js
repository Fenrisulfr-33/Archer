import style from './moveInd.module.css';
import { colors } from '../../../../components/pokemon/variables/typeColors';
import MyModal from './MoveModal';

export default function MoveInd({ move, lvl }){
    const { level, _id, name, type, category, pp, power, accuracy } = move;
    const route = `/pokemon/moves/${_id}`;
    const typeOne = colors[type.toLowerCase()];
    
    return(
        <tr className={style.tr}>
            {lvl && <th className={style.th}>{level}</th>}
            <td className={`${style.stat} hover:text-stone-400`}><MyModal move={move} /></td>
            <td className={`${style.stat} ${typeOne} bg-opacity-60`}>{type}</td>
            <td className={style.stat}>{category}</td>
            <td className={style.stat}>{pp}</td>
            <td className={style.stat}>{power}</td>
            <td className={style.stat}>{accuracy}</td>
        </tr>
    )
}