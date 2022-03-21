import { useState, useEffect } from 'react'
import * as Realm from "realm-web";
import PokemonNavBar from "../PokemonNavBar";
import MoveInd from './MoveInd';
import style from './MovesList.module.css'

export default function MovesList(){
    const [moves, setMoves] = useState([]);
    const [sort, setSort] = useState('asc');

    useEffect(() => {
        const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
        const app = new Realm.App({ id: REALM_APP_ID });
        const credentials = Realm.Credentials.anonymous();
        const getMoves = async () => {
            try {
                const user = await app.logIn(credentials);
                const allMoves = await user.functions.getMoves();
                setMoves(allMoves);
              } catch (error) {
                console.error(error);
              }
        }
        getMoves();
      }, []);

    const list = moves.map((move) => <MoveInd key={moves._id} move={move} />);
    
    return (
        <>
            <PokemonNavBar />
            <div className="overflow-x-auto ">
                <div className="min-w-screen m-10 min-h-screen flex items-center justify-center bg-stone-600 font-mono overflow-hidden rounded-lg">
                    <div className="w-full wide:w-5/6">
                        <div className="bg-stone-300 shadow-md rounded my-6">
                            <table className="min-w-max w-full table-auto">
                                <thead>
                                    <tr className="bg-stone-500 text-stone-300 uppercase text-sm leading-normal">
                                        <th className={style.th}>Move No.<button className={`bg-white text-black rounded-md ml-2`}>Sort</button></th>
                                        <th className={style.th}>Name</th>
                                        <th className={style.th}>Type</th>
                                        <th className={style.th}>Cat.</th>
                                        <th className={style.th}>PP</th>
                                        <th className={style.th}>Pwr.</th>
                                        <th className={style.th}>Acc.</th>
                                        <th className={style.th}>Gen.</th>
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