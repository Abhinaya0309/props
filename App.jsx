import React from 'react';
import './App.css';
import MemberCard from './MemberCard';
import { bheemCharacters } from './Data/Data';

function App() {
  return (
    <div>
      <h1>Chhota Bheem Characters</h1>
      {
        bheemCharacters.map((member, index) => (
          <MemberCard 
            key={index}
            name={member.name} 
            role={member.role} 
            image={member.image} 
          />
        ))
      }
    </div>
  );
}

export default App;
