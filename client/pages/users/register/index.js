import { useEffect, useState } from "react";
import style from './register.module.css';
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from '../../../redux/features/auth/authSlice';
import { useRouter } from "next/router";

/**
 * useSelector = used to select something from the state
 *  ex: if we want to bring in the user, isLoading, isError, or isSuccess
 * useDispatch = if we want to dispatch a function like register, asyncThunk function, or reset reducer we useDispatch
 * 
 */

export default function Register() {
    const router = useRouter();
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        password2: '',
    });

    const { username, password, password2 } = formData;
    const dispatch = useDispatch();
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if(isError){
            setError(message);
        }
        if(isSuccess || user){
            // navigate to home page?
            // router.push('/');
        }
        // reset the state
        dispatch(reset());
    }, [user, isError, isSuccess, message, router, dispatch])

    const onChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        if (password !== password2) {
            setError('Passwords do not match')
        } else {
            const userData = {
                username,
                password,
            }
            dispatch(register(userData));
        }   
    }

    return (
        <div className='text-center py-40'>
            <section className='font-mono text-stone-200 space-y-4'>
                <h1 className='text-4xl text-extrabold'>Register</h1>
                <p>Create your account</p>
            </section>
            {error ? error : null}
            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className='form-group mt-4'>
                        <input 
                            type='text' 
                            className='form-control rounded-full text-center' 
                            id='username'
                            name='username'
                            value={username}
                            placeholder='Enter your name'
                            onChange={onChange}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <input 
                            type='password' 
                            className='form-control rounded-full text-center' 
                            id='password'
                            name='password'
                            value={password}
                            placeholder='Enter a password'
                            onChange={onChange}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <input 
                            type='password' 
                            className='form-control rounded-full text-center' 
                            id='password2'
                            name='password2'
                            value={password2}
                            placeholder='Enter your password again'
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