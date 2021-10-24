import { ReactNode } from 'react'
import Header from '../Header/header'
import Footer from '../Footer/footer'
import styles from './layout.module.css'

interface LayoutsProps {
  children: ReactNode
}
export default function Layout(props: LayoutsProps) {
  const { children } = props
  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.content}> {children}</div>
      <Footer></Footer>
    </div>
  )
}
