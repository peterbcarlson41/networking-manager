import { useState, useEffect } from 'react'

function ContactsDisplay() {
  const [data, setData] = useState()

  useEffect(() => {
    fetch("/networking-contacts").then(
      res => res.json()
    ).then(
      data => {
        setData(data.contacts)
        console.log(data)
      }
    )
  }, [])

  return (
    <div></div>
  )
}

export default ContactsDisplay