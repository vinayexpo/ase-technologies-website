---
version: alpha
name: Nas.com
description: >-
  AI marketing agents and creative teams platform for SMBs. A bold, warm design system combining energetic yellow
  accents with clean minimalism to communicate efficiency, approachability, and growth.
logo:
  src: https://framerusercontent.com/images/Q4CtxPBpNF9TIaQvVjufGXolJto.png
colors:
  surface: '#f3f2ef'
  surface-dim: '#e8e7e3'
  surface-bright: '#fdfcfa'
  surface-container-lowest: '#fdfcfa'
  surface-container-low: '#f8f7f4'
  surface-container: '#f3f2ef'
  surface-container-high: '#ede8e0'
  surface-container-highest: '#e2dcd4'
  on-surface: '#1b1b18'
  on-surface-variant: '#62686e'
  inverse-surface: '#1b1b18'
  inverse-on-surface: '#f5f5f5'
  outline: '#8c8c88'
  outline-variant: '#c8c7c1'
  surface-tint: '#fbc91b'
  primary: '#fbc91b'
  on-primary: '#1b1b18'
  primary-container: '#fff4cc'
  on-primary-container: '#8c4a00'
  inverse-primary: '#f8d470'
  secondary: '#8c5f00'
  on-secondary: '#ffffff'
  secondary-container: '#ffeba8'
  on-secondary-container: '#2d1f00'
  tertiary: '#62686e'
  on-tertiary: '#ffffff'
  tertiary-container: '#dbdbd7'
  on-tertiary-container: '#1b1b18'
  error: '#b3261e'
  on-error: '#ffffff'
  error-container: '#f9dedc'
  on-error-container: '#410e0b'
  primary-fixed: '#fff4cc'
  primary-fixed-dim: '#f8d470'
  on-primary-fixed: '#2d1f00'
  on-primary-fixed-variant: '#8c4a00'
  secondary-fixed: '#ffeba8'
  secondary-fixed-dim: '#e6c364'
  on-secondary-fixed: '#2d1f00'
  on-secondary-fixed-variant: '#8c5f00'
  tertiary-fixed: '#dbdbd7'
  tertiary-fixed-dim: '#c8c7c1'
  on-tertiary-fixed: '#1b1b18'
  on-tertiary-fixed-variant: '#62686e'
  background: '#f3f2ef'
  on-background: '#1b1b18'
  surface-variant: '#e2e2df'
typography:
  display:
    fontFamily: Funnel Display, sans-serif
    fontSize: 60px
    fontWeight: '600'
    lineHeight: 68px
    letterSpacing: '-0.02em'
  headline-lg:
    fontFamily: Funnel Display, sans-serif
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: '-0.015em'
  headline-md:
    fontFamily: Funnel Display, sans-serif
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: '-0.01em'
  title-lg:
    fontFamily: Geist, sans-serif
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Geist, sans-serif
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.005em
  body-md:
    fontFamily: Geist, sans-serif
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Geist, sans-serif
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Geist, sans-serif
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 999px
spacing:
  unit: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  container-max: 1240px
elevation:
  sm: 0 1px 2px rgba(0, 0, 0, 0.06)
  md: 0 4px 12px rgba(0, 0, 0, 0.08)
  lg: 0 16px 40px rgba(0, 0, 0, 0.12)
layout:
  containerMaxWidth: 1240px
  gridColumns: 12
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    padding: 12px 24px
    height: 48px
    boxShadow: 0 2px 8px rgba(0, 0, 0, 0.08)
  button-primary-hover:
    backgroundColor: '#f8d470'
    textColor: '{colors.on-primary}'
    boxShadow: 0 4px 12px rgba(0, 0, 0, 0.12)
  button-primary-active:
    backgroundColor: '#e6c364'
    textColor: '{colors.on-primary}'
  button-secondary:
    backgroundColor: transparent
    textColor: '{colors.primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    padding: 12px 24px
    height: 48px
    border: 1px solid {colors.outline-variant}
  button-secondary-hover:
    backgroundColor: '{colors.surface-container-high}'
    textColor: '{colors.on-surface}'
  input-field:
    backgroundColor: '{colors.surface-bright}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.full}'
    padding: 12px 20px
    border: 1px solid {colors.outline-variant}
    height: 48px
  input-field-focus:
    borderColor: '{colors.primary}'
    boxShadow: 0 0 0 3px rgba(251, 201, 27, 0.1)
  card:
    backgroundColor: '{colors.surface-container}'
    rounded: '{rounded.lg}'
    padding: '{spacing.md}'
    boxShadow: '{elevation.sm}'
  card-hover:
    backgroundColor: '{colors.surface-container-high}'
    boxShadow: '{elevation.md}'
  badge-primary:
    backgroundColor: '{colors.primary-container}'
    textColor: '{colors.on-primary-container}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.full}'
    padding: 4px 12px
  badge-secondary:
    backgroundColor: '{colors.secondary-container}'
    textColor: '{colors.on-secondary-container}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.full}'
    padding: 4px 12px
  list-item:
    backgroundColor: transparent
    rounded: '{rounded.md}'
    padding: '{spacing.sm}'
    textColor: '{colors.on-surface}'
  list-item-hover:
    backgroundColor: '{colors.surface-container-high}'
    textColor: '{colors.primary}'
  navigation-link:
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    padding: 8px 0
  navigation-link-active:
    textColor: '{colors.primary}'
    fontWeight: '600'
---

## Overview

Nas.com is an AI-powered marketing platform designed to democratize enterprise-grade marketing capabilities for small and medium-sized businesses. The design system embodies 'Warm Minimalism'—a philosophy that combines the efficiency of clean, geometric forms with the approachability of warm, energetic color. The brand personality is confident yet accessible: it speaks to busy founders and marketing teams with clarity and optimism, never condescension. The visual language prioritizes whitespace and typography over decoration, allowing the bold yellow accent (#fbc91b) to command attention on CTAs and key interactions. Voice example: 'Your marketing works harder. You work smarter.'

## Colors

The color palette centers on a luminous, high-saturation yellow (#fbc91b) as the primary accent—the signature brand color appearing on all call-to-action buttons, active states, and key interactive elements. This yellow is paired with a warm, near-black surface (#1b1b18) for text and a soft, off-white background (#f3f2ef) that reduces eye strain while maintaining contrast. Secondary colors include a rich brown (#8c5f00) for supporting accents and status indicators, and a neutral gray (#62686e) for tertiary information and disabled states. The surface stack progresses from #fdfcfa (brightest) through #f3f2ef (primary container) to #e2dcd4 (highest elevation), creating subtle depth without relying on shadows. All interactive elements use the primary yellow (#fbc91b) with rgba(251, 201, 27, 0

## Typography

The type system pairs Funnel Display (a geometric, confident display font) for headlines and Geist (a humanist sans-serif) for body text, creating visual hierarchy through scale and weight rather than font switching. Display sizes (60px, 48px, 32px) use Funnel Display at 600 weight for maximum impact on hero sections and section headers. Body text (18px, 16px) uses Geist at 400 weight with 28px and 24px line heights respectively, ensuring readability at all sizes. Labels and buttons use 14px Geist at 600 weight with 0.01em letter-spacing for crisp, scannable UI text. Negative letter-spacing (-0.02em to -0.015em) is applied to large headlines to tighten their appearance and reinforce confidence. All text on colored backgrounds (e.g., buttons) uses {colors.on-primary} (#1b1b18) to maintain W

## Layout

The layout follows a 12-column grid with a maximum container width of 1240px, maintaining consistent horizontal rhythm across all breakpoints. The gutter spacing is 24px, with section separation using the lg spacing token (40px) to create breathing room between content blocks. The hero section spans full width with centered content, using 64px (xl spacing) for vertical separation between the headline, subheading, and input field. Cards and containers use md spacing (24px) for internal padding, with sm spacing (12px) for tighter groupings within cards. The design favors generous whitespace: the background (#f3f2ef) is left unadorned to emphasize content, and container backgrounds (#f3f2ef or #fdfcfa) provide subtle visual separation without borders. Responsive behavior collapses to single-c

## Elevation & Depth

Depth is achieved through a restrained shadow system rather than color darkening, preserving the light, optimistic aesthetic. Level 1 (base surface) has no shadow; Level 2 (cards, input fields) uses 0 2px 8px rgba(0, 0, 0, 0.08) for subtle lift; Level 3 (modals, popovers) uses 0 4px 12px rgba(0, 0, 0, 0.12) for pronounced separation. Hover states on interactive elements elevate from Level 2 to Level 3 shadows with a 200ms transition, signaling interactivity. Focus states use a 3px ring of rgba(251, 201, 27, 0.1) (10% opacity yellow) around the element, creating a soft halo that reinforces the

## Shapes

The shape language is 'Geometric Warmth'—combining sharp, functional corners with generous rounding on interactive elements. Buttons and input fields use full rounding (border-radius: 999px) to signal approachability and reduce visual friction; this pill-shaped treatment makes CTAs feel inviting rather than corporate. Cards and containers use lg rounding (1rem / 16px) for a balanced, modern appearance. Small UI elements (badges, tags) use full rounding (999px) to maintain visual consistency. The header navigation uses 999px rounding on the container itself, creating a cohesive, unified top bar

## Components

### Action Elements
Buttons are the primary interaction pattern. The button-primary component uses {colors.primary} (#fbc91b) background with {colors.on-primary} (#1b1b18) text, full rounding (999px), and 12px 24px padding for a 48px total height. On hover, the background shifts to #f8d470 with an elevated shadow (0 4px 12px rgba(0, 0, 0, 0.12)), and the transition duration is 200ms. Active state uses #e6c364. The button-secondary variant uses a transparent background with a 1px outline in {colors.outline-variant} (#c8c7c1) and {colors.primary} text, maintaining the same dimensions and rounding. Focus states on both variants apply a 3px ring of rgba(251, 201, 27, 0.1).

### Inputs & Forms
Input fields use {colors.surface-bright} (#fdfcfa) background with 1px border in {colors.outline-varia

## Do's and Don'ts

**Do**
- Do use {colors.primary} (#fbc91b) exclusively for primary CTAs, focus rings, and active states—never dilute its impact by using it for secondary elements.
- Do maintain minimum 24px padding inside buttons and input fields to ensure touch targets are at least 48px in height and width.
- Do apply the 200ms transition duration to all hover and active state changes to create a cohesive, responsive feel.
- Do use Funnel Display for headlines 32px and larger to establish clear visual hierarchy; reserve Geist for body text and labels.
- Do preserve the light background (#f3f2ef) as the default canvas; avoid adding patterns, gradients, or textures that would compete with content.
- Do use the full rounding (999px) consistently on all buttons and input fields to reinforce the approachable, modern brand personality.

**Don't**
- Don't use the primary yellow (#fbc91b) for body text, backgrounds, or decorative elements—reserve it exclusively for interactive, actionable UI.
- Don't apply shadows deeper than {elevation.lg} (0 16px 40px rgba(0, 0, 0, 0.12)) as this breaks the light, modern aesthetic.
- Don't mix Funnel Display and Geist within the same text block; use Funnel Display for headlines and Geist for supporting copy.
- Don't reduce button or input field padding below 12px or height below 48px, as this compromises accessibility and touch usability.
- Don't add borders to cards or containers unless explicitly required for visual separation; rely on shadows and background color shifts instead.
- Don't use the secondary brown (#8c5f00) or tertiary gray (#62686e) for primary CTAs or focus states—these are supporting colors only.
