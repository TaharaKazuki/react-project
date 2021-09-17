import React from 'react'
import Button from '@material-ui/core/Button'

import TicketIcon from '../../resources/images/icons/ticket.png'

const MyButton = (props) => {
  return (
    <Button>
      { props.iconTiket ? <img src={TicketIcon} className="iconImage" alt="icon_button" /> : null }
      {props.text}
    </Button>
  )
}

export default MyButton