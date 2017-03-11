import React from 'react'
import Head from 'next/head'
import Link from 'next/Link'
export default () => (
  <header>
    <Head>
      <style>{`
        main {
          padding-left: 1em;
          padding-right: 1em;
          max-width: 1060px;
          margin: 0 auto;
        }
        body {
          font-family: Helvetica, sans-serif;
          font-weight: 300;
          font-size: 1.0em;
        }
        h1 {
          font-size: 2em;
        }
        h2 {
          font-size: 1.414em;
        }
        h3 {
          font-size: 1.155;
          font-weight: 300;
          margin: 0;
        }
        h4 {
          font-size: 1;
        }
        h5 {
          font-size: 0.894;
        }
        h6 {
          font-size: 0.816;
        }
        section {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          margin-bottom: 1em;
        }
        .resume {
          flex: 0 0 100%;
        }
        .resume li {
          margin-bottom: 1em;
        }
        article,
        aside {
          flex-basis: 100%;
        }
        article p,
        li {
          line-height: 1.5em;
        }
        @media screen and (min-width: 540px) {
          aside {
            flex: 2.5;
          }
          article {
            flex: 7.5;
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
    <main>
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
    </main>
  </header>
)
