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
          max-width: 1060px;
          margin: 0 auto;
        }
        body {
          font-family: Helvetica, sans-serif;
          font-weight: 300;
          font-size: 1.05em;
        }
        section {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin-bottom: 1em;
        }
        article {
          flex-basis: 100%;
        }
        article p {
          line-height: 1.5em;
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
        .left {
          margin-right: .5em;
        }
        .right {
          margin-left: .5em; 
        }
        .fill {
          overflow: hidden;
          background-size: cover;
          background-position: center;
          background-image: url(http://placehold.it/1260x400);
          min-height: 220px;
        }
        .projectTile {
          border: 4px solid #fff;
          border-radius: 3px;
          box-shadow: 0px 0px 1px #000000;
          margin-bottom: 1em;
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
