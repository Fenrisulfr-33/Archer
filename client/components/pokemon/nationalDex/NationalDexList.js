import PokemonDexInd from './NationalDexInd';
import style from './NationalDexList.module.css';

export default function NationalDexList({ national }){
    const list = national.map((pokemon) => <PokemonDexInd key={pokemon._id} pokemon={pokemon} />);
    return (
        <>
            <div className="overflow-x-auto ">
                <div className="min-w-screen m-10 min-h-screen flex items-center justify-center bg-stone-600 font-mono overflow-hidden rounded-lg">
                    <div className="w-full wide:w-5/6">
                        <div className="bg-stone-300 shadow-md rounded my-6">
                            <table className="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-stone-500 text-stone-300 uppercase text-sm leading-normal">
                                        <th className={style.th}>Nat. Dex</th>
                                        <th className={style.th}>Pokemon</th>
                                        <th className={style.th}>Sprite</th>
                                        <th className={style.th}>Type</th>
                                        <th className={style.th}>Abilities</th>
                                        <th className={style.th}>HP</th>
                                        <th className={style.th}>Atk</th>
                                        <th className={style.th}>Def</th>
                                        <th className={style.th}>SpAtk</th>
                                        <th className={style.th}>SpDef</th>
                                        <th className={style.th}>Spd</th>
                                    </tr>
                                </thead>
                                <tbody className="text-stone-600 text-sm font-light">
                                    {list}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}