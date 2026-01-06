export interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SectionProps {
  openPopup: () => void;
  className?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
