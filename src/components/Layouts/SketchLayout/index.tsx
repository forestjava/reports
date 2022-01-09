import { Row, Column } from '../Flex'
import styles from './this.module.css'

export const SketchLayout: React.FunctionComponent = ({ children }) => (
  <Row className={styles.full} align="center" justify="center">
    <Column>
      { children }
    </Column>
  </Row>
)
