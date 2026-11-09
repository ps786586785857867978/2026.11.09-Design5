# Log

- Built the clean version of screen 01, “Choose a service”, from the Figma Foundations, component set, and screen frame (excluding the sloppy comparison example). Added shared design tokens, reusable `TopBar`, `ServiceCard`, and `ActionBar` components, and interactive Default/Selected service-card states.
- Added clean screens 02, “Pick a drop-off time”, and 03, “Check and confirm”, using the same Foundation tokens. Added reusable `Button`, `TimeSlot`, `Input`, and `Summary` components and connected all three screens into an interactive back/continue flow.
- Audited accessibility structure and added the reusable Input error state, including associated error text, `aria-invalid`, and `aria-describedby` support. Form validation exposes the new state when confirming without a name or phone number.
- Accessibility check: semantic headings, grouped selections, labels, and keyboard-focusable controls are present. The Figma-specified white-on-brand action treatment has a 3.84:1 contrast ratio, which preserves the source design but does not meet WCAG AA for normal-sized text.
- Added a Service card Hover variant in Figma with an 8px / 16px / 14% drop shadow and 180ms smart-animate hover transitions. Mirrored it in code with a tokenized lift-and-float animation, visible keyboard focus, and a reduced-motion fallback.
- Added a fourth “You’re booked” confirmation screen. It appears only after valid contact details are submitted, repeats the appointment summary, and offers a reset path to book another repair.
