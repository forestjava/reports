import { Row } from "../../Layouts/Flex";

import styles from "./this.module.css"
import classNames from "classnames";

import iconLeft from "./left.svg"
import iconRight from "./right.svg"
import { observer } from "mobx-react-lite";

type Props = {
  source: {
    pagesCount: number
    currentPage: number
    setCurrentPage: (index: number) => any
    hasPreviousPage: boolean
    goPreviousPage: () => any
    hasNextPage: boolean
    goNextPage: () => any
  }  
}

export const Pagination: React.FC<Props> = observer(({ source }) => {


  return (
    <Row className={styles.row}>
      <button 
        className={classNames([styles.button, styles.prev])}
        disabled={!source.hasPreviousPage}
        onClick={() => source.goPreviousPage()}>

        <img src={iconLeft} />
      </button>    
      { [...Array(source.pagesCount).keys()].map(index =>
        <button 
          key={index}
          className={classNames([styles.button, styles.page, (index == source.currentPage) && styles.current])}
          onClick={() => source.setCurrentPage(index)}>
          { index + 1 }
        </button> 
      ) }
  
      <button 
        className={classNames([styles.button, styles.next])}
        disabled={!source.hasNextPage}
        onClick={() => source.goNextPage()}>
        <img src={iconRight} />
      </button>  
        
      {/* TODO ellipsis shorthand <button className={classNames([styles.button, styles.page])}>...</button> */} 
    </Row>
  )
})
