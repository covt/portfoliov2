import React from 'react'
import Link from 'next/link'
import Page from '../layouts/main'
export default () => (
  <Page>
    <main>
      <section>
        <article>
          <h1>Chris O'Connell</h1>
        </article>
      </section>
      <section>
        <aside>
          <h2>Experience</h2>
        </aside>
        <article>
          <div>
            <h2>CoMediaDesign</h2>
            <h3 className='resume'>Product Designer</h3>
            <h3 className='resume'>2016 – Current</h3>
            <ul>
              <li>
                UX Designer on Successful Major Tech Company Project Proposal
              </li>
              <li>
                Assisted Full Stack Devs with Front End Engineering (AngularJS and LESS)
              </li>
              <li>
                Product Designer on Project for Major Tech Company with over 50,000 Employees
              </li>
              <li>
                Implemented Asset/Spec Sharing via Zeplin & Worked closely with Devs for Implementation
              </li>
            </ul>
          </div>
          <div>
            <h2>WithMe</h2>
            <h3>UX Designer / Product Innovation</h3>
            <h3>2014 – 2016 </h3>
          </div>
        </article>
      </section>
    </main>
  </Page>
)
