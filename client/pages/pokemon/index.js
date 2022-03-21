import PokemonHomePage from '../../data/pokemon_home.mdx';
import Article from '../../components/article/Article/Article';
import SideMenu from '../../components/nav/SideMenu/SideMenu';
import SwShCompForm from '../../components/pokemon/swshCompForm/swshCompForm';

export default function Pokemon() {
    return (
        <div className='flex flex-col tablet:flex-row'>
            <div className='tablet:h-screen w-1/5'>
                <SideMenu />
            </div>
            <div className='w-4/5'>
                <SwShCompForm />
            </div>
        </div>
    );
}