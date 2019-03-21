import React from 'react'

export function JsonLd({ title, keywords, name, url, date }) {
  const data = `{"@context":"http://schema.org/","@type":"BlogPosting","headline":"${title}","keywords":"${keywords}","url":"${url}","datePublished":"${date}","dateCreated":"${date}","image":{"@type":"ImageObject","url":"https://amberwilson.co.uk/img/workspace.jpg","height":"686","width":"1150",},"editor":{"@type":"Person","name":"${name}","url":"${url}",},"publisher":{"@type":"Person","name":"${name}","url":"${url}",},"author":{"@type":"Person","name:"${name}",
  "url":"${url}",},}`

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default JsonLd

// dateModified: '',
