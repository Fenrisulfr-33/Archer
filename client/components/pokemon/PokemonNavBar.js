import Link from "next/link"
import style from './PokemonNavBar.module.css'
import Image from "next/image"

export default function PokemonNavBar(){
    const Button = ({ route, name, classN }) => {
        return (
            <button className={classN}>
                <Link href={route}>{name}</Link>
            </button>
        )
    }

    return (
        <div className='realtive'>
            <nav className={style.main}>
                <Button route={'/pokemon'} name={'Home'} classN={style.btn}/>
                <Button route={'/pokemon/national'} name={'National Dex'} classN={style.btn}/>
                <Button route={'/pokemon/moves'} name={'Moves'} classN={style.btn}/>
                <Button route={'/pokemon/BDSP'} name={'BDSP'} classN={style.btn}/>
                <Button route={'/pokemon/swshComp'} name={'SwSh'} classN={style.btn}/>
                <Button route={'/pokemon/swshComp'} name={<Image 
                    src='/icons/sword.svg'
                    alt='Sword'
                    width={20}
                    height={20} 
                />
                } classN={style.btn}/>
            </nav> 
        </div>
    )
}