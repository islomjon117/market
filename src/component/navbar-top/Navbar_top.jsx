import React, { useState } from 'react';

import './navbar_top.css'

function Navbar_top() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Pусский', 'English', 'Uzbek'];

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="nav_top">
      <div className="container">
        <div className="nav_top_main">
          <p>USD</p>
          <p>Any case. Any band. Any style you want.</p>

          <div className={`custom-select ${isOpen ? 'open' : ''}`}>
            <div className="select-header" onClick={toggleSelect}>
        
              {selectedOption || 'lang'}

            </div>
            {isOpen && (
              <div className="options">
                {options.map((option, index) => (
                  <div key={index} className="option" onClick={() => handleOptionClick(option)}>
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar_top