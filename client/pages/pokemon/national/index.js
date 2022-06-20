import PokemonList from "../../../components/pokemon/pokemonList/PokemonList";
import SideMenu from "../../../components/nav/SideMenu/SideMenu";

const API_BASE_URL = process.env.BACKEND_URL;

export default function NationalDex({ national }) {
    
    return (
        <div className='flex'>
            <div id='side-menu' className='tablet:h-screen w-1/5'>
                <SideMenu />
            </div>
            <div id='pokemon-content' className='w-4/5'> 
                    <PokemonList listData={national}/>
            </div>
        </div>
    )     
}

export const getServerSideProps = async () => {
    const response = await fetch(`${API_BASE_URL}/pokemon/national`);
    const national = await response.json();
    return { props: { national } }
}