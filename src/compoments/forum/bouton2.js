import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

const Buton = () => {
  const [elements, setElements] = useState([]);
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    if (message.trim() === '') return;

    const newElement = (
      <div className="post" style={{ display: 'flex' }} key={elements.length}>
        <span style={{ marginRight: 10 }}>{message}</span>
        <img className="pholder" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAB+ElEQVRoQ+2YQc4BQRCFa65AWDgACxt7ziC4gu2sOQNrlq6A2NqOvS0HsJDMXGH8r5Pq9AjT/k66M6Q6EcZUV1W/79VIRESU/72+fkVykIoxFCIVA0JCRIh4UkCs5UlY57RCxFk6TxuFiCdhndMKEWfpPG0UIp6EdU4rRJyl87Tx94jkefE/iPl8TtfrlRaLBXU6HWcdkyShw+FAy+WyNMeruMvlQuhjv99b62siaZpSvV7XG3A9nU6/+yCj0Yg2m03hICax9XpNcRwTVOz3+5RlmRIB+3a7nRLjdDrRYDBQMY1Gg9rttiIMuu/iQA4LLsBCPIhgvcuLe8ipiZRZy8Q7m81oOBwqu+Adza5WK2q1WtTtdrUV2CqIud/vNJlMiK2CRiEU7Ibv8JlzwgVcDz2Nx2N1MP7OzHs+n5WgWG+thZtQjmeE1We1kQTNo0FesGOtVtPXINfr9fSM8EHQONt4u93S7XbTcWiY75nxZXk/PsjxeNRNo3Cz2SwQYUqw0PODwRzi/xIpm9Pnh8NHRKCS6VFu2KQURVHB+1AJ+9gybKMyzz/PCGYPVjNn5FXeAhHr863iAb/3g1hxwa3tCRGrRIEDhEhgwa3lhIhVosABQiSw4NZyQsQqUeAAIRJYcGs5IWKVKHCAEAksuLWcELFKFDjgZ4g8AIMTiBDSw77UAAAAAElFTkSuQmCC" alt="Placeholder"/>
      </div>
    );

    setElements([...elements, newElement]);
    setMessage('');
  };

  return (
    <>
      <input type="text" placeholder="Écrivez un message..." value={message} onChange={(e) => setMessage(e.target.value)} style={{marginTop: 5, marginBottom:5, border: 1, borderColor: "#000000", width: "100%"}} />
      <Button style={{ backgroundColor: "#000000", color: "#FFFFFF", marginBottom: 5, marginTop: 5 }} onClick={handleButtonClick} variant="primary">
        Poster
      </Button>
      <div>
        {elements}
      </div>
    </>
  );
};

export default Buton;