import MovesList from "./MovesList";

export default function MovesListsByType({ moves }) {
    return (
        <>
            {moves.lvl && <div id='level-up-moves' className='col-span-1'>
            <h4 className=''>Learnt on Level Up</h4>
            <MovesList moves={moves.lvl} lvl={true} />
            </div>}
            {moves.egg && <div id='egg-moves' className='col-span-1'>
                <h4 className=''>Egg Moves</h4>
                <MovesList moves={moves.egg} />
            </div>}
            {/* This would determine either TM's or TR's based upon generation */}
            {moves.machine && <div id='machine-moves' className='col-span-1'>
                <h4 className=''>{`Tm's`}</h4>
                <MovesList moves={moves.machine} />
            </div>}
            {moves.record && <div id='record-moves' className='col-span-1'>
                <h4 className=''>Record</h4>
                <MovesList moves={moves.record} />
            </div>}
            {moves.tutor && <div id='tutor-moves' className='col-span-1'>
                <h4 className=''>Tutor</h4>
                <MovesList moves={moves.tutor} />
            </div>}
        </>
    );
}