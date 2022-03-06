// import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';
import Head from 'next/head';
import Menu from '../Menu';

const PrimaryLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
//   const { user } = useUser();
//   console.log(user);
  return (
    <>
      <div>
        <Head>
          <title>Cangufy</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossOrigin="anonymous" />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossOrigin="anonymous" />
        </Head>
      </div>
      <div className="container">
        <Menu />
        <main>
          <div style={{ padding: '20px 0', textAlign: 'center' }}>
              <p>aqui va lo del loguin</p>
            {/* {!user && (
            <a
              style={{ margin: '5px' }}
              href="/api/auth/login"
              className="btn btn-primary"
            >
              Login
            </a>
            )}
            {user && (
            <>
              <img alt="" src={user.picture} width="38" className="rounded" />
              <a
                style={{ margin: '5px' }}
                href="/api/auth/logout"
                className="btn btn-primary"
              >
                Logout
                {' '}
                {user.email}
              </a>
            </>
            )} */}
          </div>
          {children}
        </main>
      </div>
    </>
  );
};

export default PrimaryLayout;
