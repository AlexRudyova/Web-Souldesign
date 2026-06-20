// SVG module declaration (required for TypeScript SVG imports)
declare module '*.svg' {
  const src: string;
  export default src;
}

export { CTAButton } from './CTAButton';
export type { CTAButtonProps } from './CTAButton';
