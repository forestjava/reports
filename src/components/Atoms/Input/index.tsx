import classNames from "classnames"
import styles from "./this.module.css"

type Props = {
  className?: string
  placeholder?: string
  defaultValue?: any
  onChange?: (value: any) => any
}

export const Input: React.FC<Props> = ({ className, placeholder, defaultValue, onChange }) => (
  <input 
    className={classNames([styles.input, className])} 
    placeholder={placeholder} 
    defaultValue={defaultValue}
    onChange={evt => onChange && onChange(evt.target.value)}
    maxLength={255}
  />
)
