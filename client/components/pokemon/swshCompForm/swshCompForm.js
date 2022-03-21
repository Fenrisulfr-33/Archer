import { useState } from "react";
import style from './swshCompForm.module.css';

export default function SwShCompForm() {

    const [formData, setFormData] = useState({
        name: '',
        ability: '',
        moveOne: '',
        moveTwo: '',
        moveThree: '',
        moveFour: '',
        item: '',
        nature: '',
        hpEV: 0,
        atkEV: 0,
        defEV: 0,
        spAtkEV: 0,
        spDefEV: 0,
        spd: 0,
        breifDesc: ''
    });
    const {name, ability, moveOne, moveTwo, moveThree, moveFour, item, nature, hpEV, atkEV, defEV, spAtkEV, spDefEV, spd, breifDesc} = formData;

    const onSubmit = async () => {

    }

    const onChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    return(
        <div className='text-center py-40'>
            <section className='font-mono text-stone-200 space-y-4'>
                <h1 className='text-4xl text-extrabold'>Compeitivite Builds!</h1>
                <p>Add a Compeitivite build to your sword and sheild page</p>
            </section>
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group mt-4'>
                        <input 
                            type='text' 
                            className='form-control rounded-full text-center' 
                            id='name'
                            name='name'
                            value={name}
                            placeholder='Pokemons name'
                            onChange={onChange}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <input 
                            type='text' 
                            className='form-control rounded-full text-center' 
                            id='ability'
                            name='ability'
                            value={ability}
                            placeholder='Pokemons ability'
                            onChange={onChange}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <input 
                            type='text' 
                            className='form-control rounded-full text-center' 
                            id='ability'
                            name='ability'
                            value={ability}
                            placeholder='Pokemons ability'
                            onChange={onChange}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className={style.btn}>Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
}