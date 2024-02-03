import React from 'react'

const Test = ({articles}) => {
  return (
  <ul>
      {articles.map((article, index) => (
        <li key={index}>
          <h3>{article.title}</h3>
          <p>Upvotes: {article.upvotes}</p>
          <p>Date: {article.date}</p>
        </li>
      ))}
    </ul>
  )
}

export default Test;