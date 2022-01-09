import React from 'react';

import classNames from 'classnames';
import { useIsFetching } from 'react-query'
import styles from './this.module.css'

const usePostponed = (mark: boolean, delay: number) => {
  const [postponed, update] = React.useState(mark)

  let timer: number;
  React.useEffect(() => {
    timer = setTimeout(() => update(mark), delay)
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [mark])

  return postponed;
}

export const Loading = () => {
  const isFetching = useIsFetching() != 0;
  const isFetchingIn = usePostponed(isFetching, 400)
  const visible = isFetching && isFetchingIn;
  return (
    <div className={classNames([styles.spinner, visible && styles.visible])} />
  )
}
