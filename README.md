# task-20
# Day 20 - Popup Modal with Email Signup

## Project Overview

This project is a responsive website featuring an email signup popup modal. The popup appears automatically after three seconds and allows users to subscribe using an email address.

## Objectives

- Practice creating modal popups.
- Understand JavaScript timers using setTimeout().
- Validate email input using HTML form validation.
- Handle click events and keyboard interactions.
- Show and hide elements using CSS classes.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Features

- Popup appears after a three-second delay.
- Email input with built-in validation.
- Close button to dismiss the modal.
- Clicking the overlay dismisses the modal.
- Escape key closes the modal.
- Manual button to open the popup.
- Responsive design for mobile and desktop.
- Success message after form submission.
- Popup does not reappear after being dismissed during the current page session.

## Project Structure

```text
day-20-popup-modal/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Create a folder named `day-20-popup-modal`.
2. Create the three files: `index.html`, `style.css`, and `script.js`.
3. Paste the corresponding code into each file.
4. Open `index.html` in your browser.
5. Wait three seconds to see the popup, or click the newsletter button.

## How It Works

1. JavaScript uses `setTimeout()` to display the popup after three seconds.
2. CSS classes control the popup's visibility and animation.
3. The email field uses the HTML `email` input type and `required` attribute.
4. The close button, overlay, and Escape key dismiss the modal.
5. Submitting a valid email displays a confirmation message.

## Important JavaScript Concepts

- `setTimeout()`
- `clearTimeout()`
- `addEventListener()`
- `classList.add()` and `classList.remove()`
- Form validation
- DOM manipulation
- Keyboard events

## Future Improvements

- Save subscriber emails to a database.
- Connect the form to a newsletter service.
- Prevent repeat popups across page reloads using sessionStorage.
- Add a privacy policy and consent checkbox.
- Improve keyboard focus management for accessibility.

## Limitations

This project is a front-end demonstration. Email addresses are not sent to a server or saved in a database.

## Conclusion

The project demonstrates how to build a delayed popup modal with an email signup form using HTML, CSS, and JavaScript. It provides practical experience with timers, form validation, event handling, and responsive UI design.
