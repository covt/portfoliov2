import React from 'react'
import Head from 'next/head'
import Link from 'next/Link'
export default () => (
  <header>
    <Head>
      <style>{`
        .container {
          padding-left: 1em;
          padding-right: 1em;
          max-width: 1260px;
          margin: 0 auto;
        }
        body {
          font-family: Helvetica, sans-serif;
        }
        section {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .article {
          flex-basis: 100%;
        }
        @media screen and (min-width: 540px) {
          ._25 {
            flex: 2.5;
          }
          ._33 {
            flex: 3.3;
          }
          ._66 {
            flex: 6.6;
          }
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
        .hero {
          font-weight: 300;
          height: 400px;
          align-items: center;
          flex-direction: column;
          display: flex;
          justify-content: center;
        }
        .madeIn {
          text-align: center;
          font-weight: 300;
          color: #333333;
        }
        .heart {
          color: #ff3250;
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
