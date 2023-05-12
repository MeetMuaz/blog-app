import React from 'react'

export default function BlogCard(props) {
  const { data } = props;
  return (
    <div>
        <p>{data.title}</p>
        <p>{data.content}</p>
        <p>{data.content}</p>
    </div>
  )
}
