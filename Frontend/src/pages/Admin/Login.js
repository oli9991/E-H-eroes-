import { Formik } from 'formik';
import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import Input from '../../components/Input.jsx';
import AdminLayout from '../../utils/AdminLayout.jsx';
import { auth, logInWithEmailAndPassword } from '../../utils/AuthWrapper.jsx';

const Login = () => {
    const navigate = useNavigate();
    const user = auth.currentUser;

    const handleLogin = (values) => {
        const { email, password } = values;
        console.log(email, password)
        logInWithEmailAndPassword(email, password).then(() => {
            navigate('/')
        });
    };

    console.log(user)
    if (user) {
        <Navigate to='/' replace={true} />
    }
    return (
        <AdminLayout>
            <div className={'Container'}>
                <div className={'Welcome'}>
                    <p className={'Txt145'}>Welcome back</p>
                </div>
                <Formik
                    initialValues={{ email: 'example@gmail.com' }}
                    onSubmit={handleLogin}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <>
                            <div className={'Form'}>
                                <Input
                                    placeholder={'Your email address'}
                                    label='Address'
                                    onChange={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                />
                                <Input
                                    placeholder={'Password'}
                                    label='Password'
                                    onChange={handleChange('password')}
                                    onBlur={handleBlur('password')}
                                    value={values.password}
                                    type='password'
                                />
                            </div>
                            <div className={'Welcome'}>
                                <Button onClick={handleSubmit}>Login</Button>
                                <div className={'RegisterOption'}>
                                    <Link
                                        className={'RegisterLink'}
                                        to="/register"
                                    >
                                        Register now
                                    </Link>

                                </div>
                            </div>
                        </>
                    )}
                </Formik>
            </div>
        </AdminLayout>
    );
};


export default Login;
