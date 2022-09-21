import React from 'react';
import '@styles/RecoveryPassword.scss';
import logo from '@logos/logo_yard_sale.svg';
import Image from 'next/image';

function RecoveryPassword() {
  return (
    <div className="recoveryPassword">
      <div className="form-container">
        <Image className="logo" src={logo} alt="Logo Yard Sale" />
        <h1 className="title">Password recovery</h1>
        <p className="subtitle">Inform the email address used to create your account</p>
        <form action className="form">
          <label htmlFor="recoveryPassword__email" className="label label--email">
            Email address
          </label>
          <input type="email" className="input input--email" placeholder="youremail@gmail.com" id="recoveryPassword__email" />
          <input type="submit" value="Confirm" className="button login__button" />
        </form>
      </div>
    </div>
  );
}

export { RecoveryPassword };
