import React from 'react';
import styles from './Card.module.css';

const ProfileCardModule = ({ header, title, content, footer }) => { 
  return (
    <div className={styles.card}>
      <header className={styles['card-header']}>{header}</header>
      <div className={styles['card-content']}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
      <footer className={styles['card-footer']}>{footer}</footer>
    </div>
  );
};

export default ProfileCardModule;  // ✅ fix this line
