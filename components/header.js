import React from 'react'
import Head from 'next/head'
import Link from 'next/Link'
export default () => (
  <header>
    <Head>
      <style>{`
        .container {
          max-width: 960px;
          margin: 0 auto;
        }
        body {
          font-family: Helvetica, sans-serif;
        }
        .headerLink {
          text-decoration: none;
          color: blue;
        }
        .headerLinks {
        }
        .headerLinks ul li {
          display: inline;
          list-style-type: none;
        }
        .headerLinks ul {
          padding: 0;
          margin: 2em 0 2em 0;
        }
        .headerLinks li {
          text-transform: uppercase;
          font-weight: 300;
          margin: 1em 1em 1em 0;
        }
      `}</style>
    </Head>
    <div className='container'>
      <div className='headerLinks'>     
        <ul>
          <li>
            Chris O'Connell
          </li>
          <li>
            <Link href='/'>
              <a className='headerLink'>Home</a>
            </Link>
          </li>
          <li>
            <Link href='./resume'>
              <a className='headerLink'>Resume</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
)
