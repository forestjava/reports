import React from "react"

import styles from "./this.module.css"

import searchIcon from "./search.svg"
import clearIcon from "./clear.svg"

import classNames from "classnames"

import { observer } from "mobx-react-lite"

type Props = {
  className?: string
  placeholder?: string
  handler: {
    search: string
    setFilter: (search: string) => any
    clearFilter: () => any
  }
}

export const SearchInput: React.FC<Props> = observer(({ className, placeholder, handler }) => {
  // TODO realize as form with .SearchInputButton submit PPBAE-193
  const inputRef = React.useRef<HTMLInputElement>(null)

  const clear = () => {
    if (inputRef.current) inputRef.current.value = ''
    handler.clearFilter()
  }

  return (
    <div className={classNames([styles.SearchInput, className])}>
      <button className={styles.SearchInputButton}>
        <img src={searchIcon} />
      </button>
      <input 
        ref={inputRef}
        className={styles.SearchInputField} 
        placeholder={placeholder} 
        defaultValue={handler.search}
        onChange={evt => handler.setFilter(evt.target.value)}
        maxLength={255}
      />
      <button className={styles.ClearInputButton} onClick={clear}>
        <img src={clearIcon} />
      </button>
    </div>  
  )
})
