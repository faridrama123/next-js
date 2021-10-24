import { ReactNode } from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import styles from './layout.module.css'
import Head from 'next/head'
interface LayoutsProps {
  children: ReactNode
  pageTitle : string
}
export default function Layout(props: LayoutsProps) {
  const { children, pageTitle } = props;
  return (
    <>
    <Head> 
      <title>
        NextJS Basic | {pageTitle}
        <meta name="description" content="Website nextJS Basic"></meta>
      </title>

    </Head>
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.content}> {children}</div>
      <Footer></Footer>
    </div>
    </>
  )
}
