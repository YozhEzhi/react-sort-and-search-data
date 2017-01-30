import React, { Component } from 'react';

const Button = ({ count, update }) => {
  return (
    <button className="btn btn-primary" onClick={update}>
      Кнопка была нажата {count} раз
    </button>
  );
};

export default Button;
