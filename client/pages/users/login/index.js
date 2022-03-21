import { useState, useEffect } from "react";
import style from './login.module.css';
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from '../../../redux/features/auth/authSlice';
import { useRouter } from "next/router";

export default function Login() {
    const router = useRouter();
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = formData;
    const dispatch = useDispatch();
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if(isError){
            setError(message);
        }
        if(isSuccess || user){
            // navigate to home page?
            router.push('/');
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

    const onLogin = async (event) => {
        event.preventDefault();
        const userData = {
            username,
            password,
        }
        dispatch(login(userData));
    }

    return (
        <div className='text-center py-40'>
            <section className='font-mono text-stone-200 space-y-4'>
                <h1 className='text-4xl text-extrabold'>Login</h1>
                <p>Create your comp Pokemon today!</p>
            </section>
            {error ? error : null}
            <section className='form'>
                <form onSubmit={onLogin}>
                    <div className='form-group mt-4'>
                        <input 
                            type='text' 
                            className='form-control rounded-full text-center' 
                            id='username'
                            name='username'
                            value={username}
                            placeholder='Enter your username'
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
                            placeholder='Enter your password'
                            onChange={onChange}
                        ></input>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className={style.btn}>Login</button>
                    </div>
                </form>
            </section>
        </div>
    );
}