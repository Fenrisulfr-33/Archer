import Link from 'next/link';
import style from './SideMenu.module.css';

/**
 * This side bar naviagtion should be 2/12 of the page on the left with its own scroller
 * 
 * @returns 
 */
export default function SideMenu() {
    // create new lists as pages of links come available
    const pokemonlinks = [
        { route: '/pokemon', name: 'Pokemon Home' },
        { route: '/pokemon/national', name: 'National Dex' },
        { route: '/pokemon/BDSP', name: 'BDSP Comp' },
        { route: '/pokemon/moves', name: 'Move List' },
        { route: '/pokemon/swsh', name: 'Sword and Shield' },
    ];

    const LinkComp = ({ route, name }) => (
        <Link href={route} passhref><a className='text-gray-300 pl-4 hover:text-purple-300'>{name}</a></Link>
    );

    return (
        <div className={`${style.main} scrollbar scrollbar-thumb-purple-700 scrollbar-track-gray-900 scrollbar-thin`}>
            <h1 className={`text-lg text-purple-300 font-extrabold`}>Pokemon</h1>
            <hr className={`w-5/6`}/>
            {pokemonlinks.map((link, index) => <LinkComp key={index} route={link.route} name={link.name} />)}
        </div>
    )
}