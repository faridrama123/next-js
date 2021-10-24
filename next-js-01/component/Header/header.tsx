import Link from 'next/link'
import styles from './header.module.css'
export default function Header() {
  return (
    <>
      <header className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/blog">blog</Link>
          </li>
          <li className={styles.item}>
            <Link href="/user">user</Link>
          </li>
          <li className={styles.item}>
            <a href="/user/detail">user detail</a>
          </li>
             <li className={styles.item}>
            <Link href="/autoredirection">Auto Redirect</Link>
          </li>
        </ul>
      </header>
    </>
  )
}
