module.exports = {
  customProperties: {
    //
    // Color Palette.
    //
    '--color-absolutezero': '#004adc',
    '--color-white': '#fff',
    '--color-text': '#222330',
    '--color-whitesmoke': '#f3f4f9',
    // Secondary.
    '--color-lightgray': '#d4d4d8',
    '--color-grayblue': '#8e929c',
    '--color-oldsilver': '#82828c',
    '--color-davysgrey': '#545560',
    '--color-maximumred': '#d72222',
    '--color-sunglow': '#ffd23f',
    '--color-celadongreen': '#228572',
    // Variations.
    '--color-absolutezero-hover': '#003ebb',
    '--color-absolutezero-active': '#00339a',
    //
    // Base.
    //
    '--color-fg': 'var(--color-text)',
    '--color-bg': 'var(--color-white)',
    '--color-link': 'var(--color-absolutezero)',
    '--color-divider': 'rgba(142, 146, 156, 0.4)',
    //
    // Typography.
    //
    '--font-family': 'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    '--size-font': '16px',
    '--size-lineheight': '1.5',
    '--size-font-label': '14px',
    '--size-font-description': '12px',
    //
    // Common.
    //
    '--speed-transition': '0.2s',
    //
    // Inputs.
    //
    '--color-input-fg': 'var(--color-fg)',
    '--color-input-bg': 'var(--color-bg)',
    '--color-description-fg': 'var(--color-davysgrey)',
    '--color-placeholder-fg': 'var(--color-grayblue)',
    '--color-input-border': 'var(--color-grayblue)',
    '--color-input-border-hover': 'var(--color-text)',
    '--color-input-border-focus': 'var(--color-absolutezero)',
    '--color-input-error': 'var(--color-maximumred)',
    '--color-input-border-error': 'var(--color-maximumred)',
    '--color-input-label-disabled': 'rgba(84, 85, 96, 0.6)', // Davy's grey with opacity.
    '--color-input-fg-disabled': 'var(--color-oldsilver)',
    '--color-input-bg-disabled': 'rgba(212, 212, 216, 0.3)', // Light gray with opacity.
    '--color-input-border-disabled': 'rgba(130, 130, 140, 0.5)', // Old silver with opacity.
    '--opacity-input-border-disabled': '0.5',
    '--size-input-border-radius': '0.125em', // (1/8)em ~ 2px
    '--size-input-border': '0.0625em', // (1/16)em ~ 1px
    '--size-required-mark': '0.5em' // 7px inside the form element label.
  }
}
