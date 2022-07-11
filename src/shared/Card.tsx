import React from 'react';
import { CardTypes } from '../@types/CardTypes';

const Card: React.FC<CardTypes> = ({ children, lightMode }) => {
  return <div className={`card ${lightMode && 'reverse'}`}>{children}</div>;
};

export default Card;
