import React from 'react';
import styles from './CTAButton.module.css';
import polyBirdDefault from './PolyBirdIcon.svg';

export interface CTAButtonProps {
  text?: string;
  href?: string;
  variant: 'outline' | 'filled' | 'glass';
  icon?: string;
}

const variantClass: Record<CTAButtonProps['variant'], string> = {
  outline: styles.outline,
  filled: styles.filled,
  glass: styles.glass,
};

export function CTAButton({
  text = 'KONTAKTOVAŤ MA',
  href = '#',
  variant,
  icon,
}: CTAButtonProps) {
  const iconSrc = icon ?? polyBirdDefault;

  return (
    <a href={href} className={`${styles.btn} ${variantClass[variant]}`}>
      <span className={styles.iconWrap}>
        <img
          src={iconSrc}
          alt=""
          aria-hidden="true"
          className={styles.icon}
        />
      </span>

      <span className={styles.divider} aria-hidden="true" />

      <span className={styles.text}>{text}</span>

      <span className={styles.arrow} aria-hidden="true">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          aria-hidden="true"
        >
          <line
            x1="5"
            y1="14"
            x2="22"
            y2="14"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <polyline
            points="17,9 22,14 17,19"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}
