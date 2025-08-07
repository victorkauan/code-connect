import Image from "next/image"
import Link from "next/link"
import { Heading } from "@/components/Heading"
import { ArrowBack } from "@/components/icons/ArrowBack"
import banner from "@/assets/error/404.png"
import styles from "@/styles/error.module.css"

export default function NotFound() {
  return (
    <div className={styles.error}>
      <Image src={banner} alt="Banner com um robô pensando" width={656} height={367} />
      <Heading>OPS! Página não encontrada.</Heading>
      <p>Você pode voltar ao feed e continuar buscando projetos incríveis!</p>
      <Link href="/">
        <span>Voltar ao feed</span> <ArrowBack color="#BFFFC3" />
      </Link>
    </div>
  )
}
