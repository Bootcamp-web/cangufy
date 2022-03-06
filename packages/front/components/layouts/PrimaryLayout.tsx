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
          {/* {children} */}
        </main>
      </div>
    </>
  );
};

export default PrimaryLayout;
