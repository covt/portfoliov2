import React from 'react'
import Link from 'next/link'
import Page from '../layouts/main'
export default () => (
  <Page>
    <div className='container'>
      <div className='hero'>
        <h1>Chris O'Connell</h1>
        <p>Product Design & Front End Development</p>
      </div>
      <section>
        <article>
          <h1>About</h1>
          <p>
            Aenean sapien diam, consectetur ac tristique vel, hendrerit nec augue. Duis erat enim, vestibulum non leo id, laoreet aliquam leo. Cras bibendum diam sit amet quam interdum, ut aliquam ex aliquet. Maecenas vel eros quis elit sagittis facilisis ac a ante. Praesent eleifend ante volutpat consectetur posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc euismod condimentum ipsum, sit amet tempus felis ultrices vitae. Proin sem tellus, gravida id mattis vel, ornare nec diam. Donec gravida turpis at blandit efficitur. Aenean rutrum vestibulum nunc id fringilla. Aliquam justo tortor, sagittis nec viverra consectetur, dapibus sit amet metus. Vivamus tincidunt, massa ut tempus pellentesque, risus est tincidunt dui, a tristique elit ante eget dui. Aenean lobortis lacinia tincidunt. Nulla egestas arcu faucibus congue tempor. In id laoreet quam, id vestibulum justo. Fusce vel cursus libero.
          </p>  
        </article>
      </section>
      <section>
        <article>
          <h1>Content Header</h1>
        </article>
        <article>
        </article>
        <article className='left _66'>
          Content
        </article>
        <article className='right _33 fill'></article>
      </section>
    </div>
  </Page>
)
