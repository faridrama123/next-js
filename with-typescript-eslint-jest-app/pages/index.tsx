import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export const Home = (): JSX.Element => (
  <>
    <header>
      <ul>
        <li>
          <Link href="/blog">blog</Link>
        </li>
        <li>
          <Link href="/user">user</Link>
        </li>
        <li>
          <a href="/user/detail">user detail</a>
        </li>
      </ul>
    </header>

    <h1>farid ramadhan</h1>
  </>
)

export default Home
