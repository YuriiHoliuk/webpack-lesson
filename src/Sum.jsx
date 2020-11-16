import React from 'react';
import { sum } from './sumFn';
import './sum.css';

export const Sum = () => (
  <div className="sum">
    {sum(1, Math.random() * 5)}
  </div>
);
