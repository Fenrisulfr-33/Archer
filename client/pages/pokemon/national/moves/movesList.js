import MoveInd from './MoveInd';
import style from './movesList.module.css'

export default function MovesList({ moves, lvl = false }){
    const moveHeader = ['Name', 'Type', 'Cat.', 'PP', 'Pwr.', 'Acc.'];
    lvl ? moveHeader.unshift('Level') : null;

    return (
        <>
            <div className="overflow-x-auto ">
                <div className="min-w-screen m-10  flex items-center justify-center bg-stone-600 font-mono overflow-hidden rounded-lg">
                    <div className="w-full wide:w-5/6">
                        <div className="bg-stone-300 shadow-md rounded my-6">
                            <table className="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-stone-500 text-stone-300 uppercase text-sm leading-normal">
                                        {moveHeader.map((header) => (<th className={style.th}>{header}</th>))}
                                    </tr>
                                </thead>
                                <tbody className="text-stone-600 text-sm font-light">
                                    {moves.map((move) => <MoveInd key={move._id} move={move} lvl={lvl} />)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}