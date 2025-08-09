import { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  // variável que armazena os cards (categorias)
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || []
  );

  function createCard(title, description) {
    const newCard = { title, description };

    setCards([...cards, newCard]);
  }

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  return (
    <CardContext.Provider value={{ cards, createCard }}>
      {children}
    </CardContext.Provider>
  );
};
