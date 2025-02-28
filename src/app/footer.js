// app/footer.js
"use client"
import { useSelectedLayoutSegment } from 'next/navigation';

export default function Footer() {
  const segment = useSelectedLayoutSegment();

  // Визначаємо, який футер рендерити, залежно від поточної сторінки
  let footerContent;

  if (segment === 'news') {
    footerContent = <p>Футер для сторінки новин</p>;
  } else if (segment === 'products') {
    footerContent = <p>Футер для сторінки продуктів</p>;
  } else {
    footerContent = <p>Загальний футер для головної сторінки</p>;
  }

  return (
    <footer>
      {footerContent}
    </footer>
  );
}
