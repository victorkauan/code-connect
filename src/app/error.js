"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Heading } from "@/components/Heading"
import { ArrowBack } from "@/components/icons/ArrowBack"
import banner from "@/assets/error/500.png"
import styles from "@/app/error.module.css"

export default function Error({ error }) {
  useEffect(() => {
    console.log(error)
  }, [])

  return (
    <div className={styles.error}>
      <Image src={banner} alt="Banner com um robô pensando" width={650} height={367} />
      <Heading>Opa! Um erro ocorreu.</Heading>
      <p>Não conseguimos carregar a página, volte para seguir navegando.</p>
      <Link href="/">
        <span>Voltar ao feed</span> <ArrowBack color="#BFFFC3" />
      </Link>
    </div>
  )
}
