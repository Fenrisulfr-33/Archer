import MoveInd from './moveInd';
import style from './movesList.module.css'

export default function MovesList({ moves, levelUp }){
    const addLevel = levelUp ? true : false;
    const list = moves.map((move) => <MoveInd key={moves.id} move={move} levelUp={addLevel}/>);
    
    return (
        <>
            <div className="overflow-x-auto ">
                <div className="min-w-screen m-10  flex items-center justify-center bg-stone-600 font-mono overflow-hidden rounded-lg">
                    <div className="w-full wide:w-5/6">
                        <div className="bg-stone-300 shadow-md rounded my-6">
                            <table className="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-stone-500 text-stone-300 uppercase text-sm leading-normal">
                                        {levelUp && <th className={style.th}>Level</th>}
                                        <th className={style.th}>Name</th>
                                        <th className={style.th}>Type</th>
                                        <th className={style.th}>Cat.</th>
                                        <th className={style.th}>PP</th>
                                        <th className={style.th}>Pwr.</th>
                                        <th className={style.th}>Acc.</th>
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