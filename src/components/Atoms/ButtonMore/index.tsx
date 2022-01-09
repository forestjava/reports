import React from "react";
import { Button } from "../../Atoms/Button";
import { Column } from "../../Layouts/Flex";
import { Popover } from "../Popover";

import styles from "./this.module.css"
import more from "./more.svg";

type Props = {
  onEdit: (args: any) => any;
  onDelete: (args: any) => any;
}

export const ButtonMore: React.FC<Props> = ({ onEdit, onDelete }) => {
  const [open, setOpen] = React.useState(false)
  return (
      <Button rc variant="ghost" onClick={() => setOpen(!open)}>
        <img src={more}/>
        { open && 
        <Popover className={styles.popover}>
          <Button variant="menu" onClick={onEdit}>Edit</Button> {/* TODO fix Warning: validateDOMNesting(...): <button> cannot appear as a descendant of <button>. PPBAE-192 */}
          <Button variant="menu" onClick={onDelete}>Delete</Button>  
        </Popover>}        
      </Button>
  )
}