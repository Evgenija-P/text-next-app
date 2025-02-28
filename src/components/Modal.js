// app/components/Modal.js
export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null; // Якщо модалка не відкрита, не рендеримо її

  return (
    <div style={overlayStyles}>
      <div style={modalStyles}>
        <h2>Модальне вікно</h2>
        <p>Це вміст вашої модалки!</p>
        <button onClick={onClose}>Закрити</button>
      </div>
    </div>
  );
}

const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalStyles = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  maxWidth: '500px',
  width: '100%',
};
