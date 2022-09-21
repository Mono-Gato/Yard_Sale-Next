import React, { useRef } from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg';
import Image from 'next/image';
import Link from 'next/link';

function Login() {
  const form = useRef(null);

  const handleForm = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      username: formData.get('login__email'),
      password: formData.get('login__password'),
    };
    console.log(data);
  };
  return (
    <div className="login">
      <div className="form-container">
        <Image className="logo" src={logo} alt="Logo Yard Sale" />
        <form action="" className="form" ref={form}>
          <label htmlFor="login__email" className="label label--email">
            Email address
          </label>
          <input type="email" className="input input--email" placeholder="youremail@gmail.com" name="login__email" />
          <label htmlFor="login__password" className="label label--password">
            Password
          </label>
          <input type="password" className="input input--password" placeholder="********" name="login__password" />
          <button className="button login__button" onClick={handleForm}>
            Log in
          </button>
          <Link href="/">Forgot my password</Link>
        </form>
        <button className="button button--secondary">Sign up</button>
      </div>
    </div>
  );
}

export { Login };
