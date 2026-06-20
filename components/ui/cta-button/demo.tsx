import React from 'react';
import { CTAButton } from './index';

export function CTAButtonDemo() {
  return (
    <div
      style={{
        display: 'flex',
        gap: '32px',
        padding: '80px 60px',
        background: '#002535',
        minHeight: '100vh',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <CTAButton variant="outline" text="KONTAKTOVAŤ MA" href="#" />
      <CTAButton variant="filled" text="KONTAKTOVAŤ MA" href="#" />
      <CTAButton variant="glass" text="KONTAKTOVAŤ MA" href="#" />
    </div>
  );
}

export default CTAButtonDemo;
