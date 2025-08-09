import React from 'react';
import styles from './ChatHistoryModal.module.css';
import { ChatWindow } from '@/components/chat/ChatWindow';
import { Message } from '@/types/Message';

export type ChatHistoryModalProps = {
  isOpen: boolean;
  title: string | null;
  messages: Message[];
  onClose: () => void;
};

const ChatHistoryModal: React.FC<ChatHistoryModalProps> = ({ isOpen, title, messages, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick: React.MouseEventHandler<HTMLDivElement> = () => {
    onClose();
  };

  const stopPropagation: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={title ?? 'Chat history'}
      data-testid="chat-history-modal"
    >
      <div className={styles.content} onClick={stopPropagation}>
        <div className={styles.header} data-testid="modal-header">
          <h3 className={styles.title} data-testid="modal-title">{title}</h3>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
            ✖️
          </button>
        </div>
        <ChatWindow messages={messages} />
      </div>
    </div>
  );
};

export default ChatHistoryModal;


