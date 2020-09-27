import React from "react"
import { Ul, Links } from "./styles"

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Links to="/">Home</Links>
      <Links to="/">About</Links>
      <Links to="/">Blog</Links>
      <Links to="/">Contact</Links>
    </Ul>
  )
}

export default RightNav
