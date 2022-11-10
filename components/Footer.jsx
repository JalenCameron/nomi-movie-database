import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();
  return (
    <footer>
        <p>&copy; {date} || Developed by: Jalen, Reilly, Danial & Jed</p>
    </footer>
  )
}

export default Footer