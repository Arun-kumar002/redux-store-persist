import React from 'react';
import ReactDOM from 'react-dom';
import {useDispatch, useSelector } from 'react-redux';
import { login } from './redux/slice/userSlice';
import './App.css';

function App() {
  return (
    <Test />
  );
}

export default App;



export function Test() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state)
  return (
    <div>
      <button onClick={() => {
        dispatch(login({ name: "arun", password: "123", token: "ezy" }))
      }}>login</button>
    </div>
  )
}
