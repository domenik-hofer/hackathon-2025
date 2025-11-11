import React from 'react';
import styles from './Modal.module.css';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true">
      <div className={styles.content}>
        <button className={styles.closeBtn} aria-label="Close" onClick={onClose}>
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
