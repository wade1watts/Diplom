import React from 'react';
import './SourceButton.css'; // Файл со стилями кнопок

const Button = () => {
    const handleButtonClick = (url) => {
        window.open(url, '_blank');
      };
  return (
    <div>
      <button className="big-button" onClick={() => handleButtonClick('https://lenta.ru/')}>lenta.ru</button>
      <button className="big-button" onClick={() => handleButtonClick('https://www.example1.com')}>Button 2</button>
      <button className="big-button" onClick={() => handleButtonClick('https://www.example1.com')}>Button 3</button>
    </div>
  );
};

export default Button;
