import React, { useState, useEffect, useCallback } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import MyButton from '../utils/MyButton'

const Discount = () => {
  const end = 100
  const [start, setStart] = useState(0)

  const porcentage = useCallback(() => {
    if (start < end) {
      setStart((prevCount) => prevCount + 1)
    }
  }, [start])

  useEffect(() => {
    if (start > 0 && start < 100) {
      setTimeout(() => porcentage(), 30)
    }
  })

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={(inView) => {
            if (inView) {
              porcentage()
            }
          }}
        >
          <div className="discount_porcentage">
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className="discount_description">
            <h3>Purchase ticket before 20th June</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <MyButton
              text="Purchase tickets"
              link="http://google.com"
              size="small"
              style={{
                background: '#ffa800',
                color: '#ffffff'
              }}
              iconTicket={true}
            />
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default Discount
