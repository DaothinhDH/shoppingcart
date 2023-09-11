import React from 'react'
import "./button.css"
export default function Button({ title,size,type}) {
    const style = {
        width: size,
    };
  return (
    <>
      <button style={style} className={`q-button q-button-${type}`}>
        {title}
      </button>
    </>
  );
}
