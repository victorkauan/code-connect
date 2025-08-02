import Image from 'next/image'
import styles from '@/components/Aside/aside.module.css'
import logo from '@/assets/logo.png'

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Image src={logo} alt="Logo da Code Connect" />
    </aside>
  )
}
