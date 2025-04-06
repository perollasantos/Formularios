declare module '@maskito/core' {
  export type MaskitoOptions = {
    mask: (string | RegExp)[];
  };

  export type MaskitoElementPredicate = (el: HTMLElement) => Promise<HTMLElement>;

  export const maskitoTransform: (value: string, options: MaskitoOptions) => string;

  export const MaskitoDirective: any;
}

