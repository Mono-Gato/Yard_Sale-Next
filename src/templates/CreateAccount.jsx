import React from 'react';
import '@styles/CreateAccount.scss';

function CreateAccount() {
  return (
    <div className="createAccount">
      <div className="form-container">
        <h1 className="title">My account</h1>
        <form action className="form">
          <div>
            <label htmlFor="createAccount__name" className="label label--name">
              Name
            </label>
            <input type="text" className="input input--name" placeholder="Your name" id="createAccount__name" />
            <label htmlFor="createAccount__email" className="label label--email">
              Email address
            </label>
            <input type="email" className="input input--email" placeholder="youremail@gmail.com" id="createAccount__email" />
            <label htmlFor="createAccount__password" className="label label--password">
              Password
            </label>
            <input type="password" className="input input--password" placeholder="********" id="createAccount__password" />
          </div>
          <input type="submit" defaultValue="Create" className="button login__button" />
        </form>
      </div>
    </div>
  );
}

export { CreateAccount };
