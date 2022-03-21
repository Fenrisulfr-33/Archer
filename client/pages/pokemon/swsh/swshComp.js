import { useState } from "react";
import Select from "react-select";
import style from './swshComp.module.css'

export default function SwShComp() {
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        ability: '',
        moveOne: '',
        moveTwo: '',
        moveThree: '',
        moveFour: '',
        item: 'Item',
        nature: 'Nature',
        hpEV: 0,
        atkEV: 0,
        defEV: 0,
        spAtkEV: 0,
        spDefEV: 0,
        spdEV: 0,
        briefDesc: ''
    });
    const { name, ability, moveOne, moveTwo, moveThree, moveFour, item, nature, hpEV, atkEV, defEV, spAtkEV, spDefEV, spdEV, briefDesc } = formData;
    const itemsOptions = [
        {name: 'item', label: 'Absorb Bulb'},
        {name: 'item', label: 'Adamant Orb'},
        {name: 'item', label: 'Air Ballon'},
        {name: 'item', label: 'Amulet Coin'},
        {name: 'item', label: 'Assault Vest'},
        {name: 'item', label: 'Berry Sweet'},
        {name: 'item', label: 'Big Root'},
        {name: 'item', label: 'Binding Band'},
        {name: 'item', label: 'Black Belt'},
        {name: 'item', label: 'Black Glasses'},
        {name: 'item', label: 'Black Sludge'},
    ];
    const natureOptions = [
        {name: 'nature', label: 'Adamant'},
        {name: 'nature', label: 'Bashful'},
        {name: 'nature', label: 'Bold'},
        {name: 'nature', label: 'Brave'},
        {name: 'nature', label: 'Calm'},
        {name: 'nature', label: 'Careful'},
        {name: 'nature', label: 'Docile'},
        {name: 'nature', label: 'Gentle'},
        {name: 'nature', label: 'Hardy'},
        {name: 'nature', label: 'Hasty'},
        {name: 'nature', label: 'Impish'},
        {name: 'nature', label: 'Jolly'},
        {name: 'nature', label: 'Lax'},
        {name: 'nature', label: 'Lonely'},
        {name: 'nature', label: 'Mild'},
        {name: 'nature', label: 'Modest'},
        {name: 'nature', label: 'Naive'},
        {name: 'nature', label: 'Naughty'},
        {name: 'nature', label: 'Quiet'},
        {name: 'nature', label: 'Quirky'},
        {name: 'nature', label: 'Rash'},
        {name: 'nature', label: 'Relaxed'},
        {name: 'nature', label: 'Sassy'},
        {name: 'nature', label: 'Serious'},
        {name: 'nature', label: 'Timid'},
    ];

    const onChange = (event) => {
        if (event.label){
            setFormData((prevState) => ({
                ...prevState,
                [event.name]: event.label
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [event.target.name]: event.target.value
            }));
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault(); 
    }
    console.log(formData);
    return (
        <div className='text-center py-40'>
            <section className='font-mono text-stone-200 space-y-4'>
                <h1 className='text-4xl text-extrabold'>Sword & Sheild</h1>
                <p>Create a custom Competitve Pokemon</p>
            </section>
            {error ? error : null}
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group mt-4'>
                        <input 
                            type='text' 
                            className='form-control rounded-full text-center' 
                            id='name'
                            name='name'
                            value={name}
                            placeholder={`Pokemon's Name`}
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <h4 className='text-extrabold text-stone-200 font-mono'>{`${name}'s Ability`}</h4>
                        <input 
                            type='text' 
                            className='form-control rounded-full text-center' 
                            id='ability'
                            name='ability'
                            value={ability}
                            placeholder={`Pokemon's Ability`}
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <h4 className='text-extrabold text-stone-200 font-mono'>Move One:</h4>
                        <input 
                            type='text' 
                            className='form-control rounded-full text-center' 
                            id='moveOne'
                            name='moveOne'
                            value={moveOne}
                            placeholder='Enter a Move'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                    <h4 className='text-extrabold text-stone-200 font-mono'>Move Two:</h4>
                        <input 
                            type='text' 
                            className='form-control rounded-full text-center' 
                            id='moveTwo'
                            name='moveTwo'
                            value={moveTwo}
                            placeholder='Enter a Move'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <h4 className='text-extrabold text-stone-200 font-mono'>Move Three:</h4>
                        <input 
                            type='text' 
                            className='form-control rounded-full text-center' 
                            id='moveThree'
                            name='moveThree'
                            value={moveThree}
                            placeholder='Enter a Move'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <h4 className='text-extrabold text-stone-200 font-mono'>Move Four:</h4>
                        <input 
                            type='text' 
                            className='form-control rounded-full text-center' 
                            id='moveFour'
                            name='moveFour'
                            value={moveFour}
                            placeholder='Enter a Move'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-control w-1/2 m-auto'>
                        <h4 className='text-extrabold text-stone-200 font-mono'>Held Item</h4>   
                        <Select
                            id='item'
                            onChange={onChange}
                            value={item}
                            placeholder={`${item}`}
                            options={itemsOptions}
                        />
                    </div>
                    <div className='form-control w-1/2 m-auto'>
                        <h4 className='text-extrabold text-stone-200 font-mono'>Select Nature</h4>
                        <Select
                            id='nature'
                            onChange={onChange}
                            value={nature}
                            placeholder={nature}
                            options={natureOptions}
                        />
                    </div>
                    <div className='form-group'>
                        <h4 className='text-extrabold text-stone-200 font-mono'>Hp EVs</h4>
                        <input 
                            type='text' 
                            className='form-control rounded-full text-center w-20' 
                            id='hpEV'
                            name='hpEV'
                            value={hpEV}
                            placeholder='0'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <h4 className='text-extrabold text-stone-200 font-mono'>Atk EVs</h4>
                        <input 
                            type='text' 
                            className='form-control rounded-full text-center w-20' 
                            id='atkEV'
                            name='atkEV'
                            value={atkEV}
                            placeholder='0'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <h4 className='text-extrabold text-stone-200 font-mono'>Def EVs</h4>
                        <input 
                            type='text' 
                            className='form-control rounded-full text-center w-20' 
                            id='defEV'
                            name='defEV'
                            value={defEV}
                            placeholder='0'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <h4 className='text-extrabold text-stone-200 font-mono'>SpAtk EVs</h4>
                        <input 
                            type='text' 
                            className='form-control rounded-full text-center w-20' 
                            id='spAtkEV'
                            name='spAtkEV'
                            value={spAtkEV}
                            placeholder='0'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <h4 className='text-extrabold text-stone-200 font-mono'>SpDef EVs</h4>
                        <input 
                            type='text' 
                            className='form-control rounded-full text-center w-20' 
                            id='spDefEV'
                            name='spDefEV'
                            value={spDefEV}
                            placeholder='0'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <h4 className='text-extrabold text-stone-200 font-mono'>Spd EVs</h4>
                        <input 
                            type='text' 
                            className='form-control rounded-full text-center w-20' 
                            id='spdEV'
                            name='spdEV'
                            value={spdEV}
                            placeholder='0'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <h4 className='text-extrabold text-stone-200 font-mono'>Brief Descritpion:</h4>
                        <textarea 
                            type='textbox' 
                            className='form-control rounded-md w-4/5' 
                            id='briefDesc'
                            name='briefDesc'
                            value={briefDesc}
                            placeholder='Enter a brief description about your build.'
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <button type='submit' className={style.btn}>Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

// export const getServerSideProps = async () => {
//     const response = await fetch(`${API_BASE_URL}/pokemon/BDSP`);
//     const national = await response.json();
//     return { props: { national } }
// }