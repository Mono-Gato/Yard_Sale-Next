import React from 'react';
import '@styles/SendEmail.scss';
import logo from '@logos/logo_yard_sale.svg';
import iconEmail from '@icons/email.svg';
import Image from 'next/image';
import Link from 'next/link';

function SendEmail() {
  return (
    <div className="sendEmail">
      <div className="form-container">
        <Image className="logo" src={logo} alt="Logo Yard Sale" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
        <div className="sendEmail__image">
          <Image src={iconEmail} alt="iconEmail" />
        </div>
        <button className="button login__button"> login</button>
        <p className="resend">
          <span>Didn&apos;t receive the email?</span>
          <Link href="/">Resend</Link>
        </p>
      </div>
    </div>
  );
}

export { SendEmail };
