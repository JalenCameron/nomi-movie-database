import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <footer>
        <p>&copy; {date} || Developed by: Reilly, Danial, Jalen & Jed</p>
    </footer>
  )
}

export default Footer