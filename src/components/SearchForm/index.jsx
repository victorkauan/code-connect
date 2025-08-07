import { Button } from "@/components/Button"
import styles from "@/components/SearchForm/searchForm.module.css"

export const SearchForm = () => {
  return (
    <form className={styles.form} action="/">
      <input
        name="q"
        placeholder="Digite o que você procura"
        className={styles.input}
      />
      <Button>Buscar</Button>
    </form>
  )
}
