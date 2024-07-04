// src/components/Generate/ComicCreator.js

import React from 'react';
import './generate.css'; // Assuming you already have this CSS file
import Right from '../../assets/right.png';

const Generate = () => {
  return (
    <div className="gen-container">
      <header className='gen-h'>
        <h1 className="gen-head">Transform Your Stories into Stunning Comics !!!</h1>
      </header>
      <div className="gen-content">
        <div className="gen-left">
          <form>
            <label htmlFor="gen-email">Email:</label>
            <input type="email" id="gen-email" name="gen-email" required />

            <label htmlFor="gen-storyline">Storyline:</label>
            <textarea id="gen-storyline" name="gen-storyline" rows="5" required></textarea>

            <label htmlFor="gen-style">Comic Style:</label>
            <input type="text" id="gen-style" name="gen-style" required />
            
            {/* <button type="submit">Submit</button> */}
          </form>
        </div>
      </div>
      <div className="gen-right">
        <div className="gen-ellipse-button">
          Click here to <br /> Craft your comic!!!
        </div>
        <img src={Right} alt="Comic" />
      </div>
    </div>
  );
};

export default Generate;