"use client";
import Modal from '@/components/Modal';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Блокування скролу
    } else {
      document.body.style.overflow = ""; // Відновлення скролу
    }

    return () => {
      document.body.style.overflow = ""; // При розмонтуванні модалки
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen">
      <h2>Ласкаво просимо на головну сторінку!</h2>
      <p>Тут буде загальний контент головної сторінки.</p>

      <button onClick={openModal} aria-haspopup="dialog">
        Відкрити модалку
      </button>

      {isModalOpen && <Modal isOpen={isModalOpen} onClose={closeModal} />}
    </div>
  );
}
