'use client';

import { useState } from 'react';
import { drawOneCard, drawThreeCards } from '../api/fortune';

export default function Fortune() {
  const [cards, setCards] = useState([]);

  const handleDrawOne = () => {
    const card = drawOneCard();
    setCards([card]);
  };

  const handleDrawThree = () => {
    const drawnCards = drawThreeCards();
    setCards(drawnCards);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>타로 카드 뽑기</h1>
      <button onClick={handleDrawOne} style={{ margin: '5px', padding: '10px' }}>
        한 장 뽑기
      </button>
      <button onClick={handleDrawThree} style={{ margin: '5px', padding: '10px' }}>
        세 장 뽑기
      </button>

      <div style={{ marginTop: '20px' }}>
        {cards.length > 0 && (
          <div>
            <h2>뽑은 카드:</h2>
            {cards.map((card, index) => (
              <div key={index} style={{ margin: '10px' }}>
                <p>
                  {card.type} - {card.card} ({card.orientation})
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
