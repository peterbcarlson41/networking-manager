import { useState, useEffect } from 'react'

function ContactsDisplay() {
  const [data, setData] = useState({})

  useEffect(() => {

    // TODO: figure out how to proxy this request
    fetch("http://localhost:8000/networking-contacts").then(
      res => res.json()
    ).then(
      data => {
        setData({ contacts: data.contacts })
      }
    )
  }, [])

  return (
    <div>
      {(data.contacts) ? (
        data.contacts.map((contact, i) => (
          <p key={i}>{contact}</p>
        ))
      ):(
        <p>Loading...</p>
      )}
    </div>
  )
}

export default ContactsDisplay