// 메이저 아르카나 카드 목록
const majorArcana = [
    "The Fool", "The Magician", "The High Priestess", "The Empress",
    "The Emperor", "The Hierophant", "The Lovers", "The Chariot",
    "Strength", "The Hermit", "Wheel of Fortune", "Justice",
    "The Hanged Man", "Death", "Temperance", "The Devil",
    "The Tower", "The Star", "The Moon", "The Sun",
    "Judgement", "The World"
  ];
  
  // 마이너 아르카나 슈트와 번호
  const suits = ["Wands", "Cups", "Swords", "Pentacles"];
  const ranks = [
    "Ace", "Two", "Three", "Four", "Five",
    "Six", "Seven", "Eight", "Nine", "Ten",
    "Page", "Knight", "Queen", "King"
  ];
  
  // 정방향 혹은 역방향
  function getOrientation() {
    return Math.random() < 0.5 ? "Upright" : "Reversed";
  }
  
  // 메이저 아르카나 카드 객체 생성
  function getAllMajorArcana() {
    return majorArcana.map(card => ({
      type: "Major Arcana",
      card,
    }));
  }
  
  // 마이너 아르카나 카드 객체 생성
  function getAllMinorArcana() {
    const cards = [];
    for (let suit of suits) {
      for (let rank of ranks) {
        cards.push({
          type: "Minor Arcana",
          card: `${rank} of ${suit}`
        });
      }
    }
    return cards;
  }
  
  // 전체 덱 생성
  function getFullDeck() {
    return [...getAllMajorArcana(), ...getAllMinorArcana()];
  }
  
  // 덱에서 카드 N장 무작위로 뽑기 (중복 없음)
  function drawCards(n) {
    const deck = getFullDeck();
    const selected = [];
    for (let i = 0; i < n && deck.length > 0; i++) {
      const index = Math.floor(Math.random() * deck.length);
      const drawn = deck.splice(index, 1)[0];
      drawn.orientation = getOrientation();
      selected.push(drawn);
    }
    return selected;
  }
  
  // 한 장 뽑기
  export function drawOneCard() {
    return drawCards(1)[0];
  }
  
  // 세 장 뽑기
  export function drawThreeCards() {
    return drawCards(3);
  }
  