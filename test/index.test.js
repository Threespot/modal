import Modal from '../index.js';

// Creates modal markup and return it
function modalMarkup() {
  document.body.innerHTML = `
  <a href="#modal" id="modal-toggle" class="btn" data-modal="modal" data-testid="toggle">Click me</a>
  <div class="Modal" aria-labelledby="ModalTitle" role="dialog" id="modal" data-testid="container">
    <div class="Modal-content" data-testid="content">
      <h1 id="ModalTitle" data-testid="title">THE BEIRUT BANK JOB</h1>
      <a class="Modal-close" href="#nav-modal-toggle" data-modal-close data-testid="close">
        Close
      </a>
      <p>
        When you go into a bank you see all kinds of physical security checks. There are thick panes of glass between
        the tellers and customers, vaults with a large heavy door, cameras everywhere, a security guard is walking
        around. But do you think about ways you could bypass all of that? You might notice a back door to the bank and
        wonder if it’s unlocked, or the door between the tellers and customers is so short that you could jump over
        it. Or maybe you see a blind spot in the way the cameras are pointing. In this episode we’re going to test the
        physical security of a bank but our goal isn’t to steal cash. It’s to get access to the teller’s computer.
      </p>
    </div>
  </div>
  `;

  return document.body;
}

describe('Modal', () => {
  // Creates a modal window component for each test
  beforeEach(() => {
    modalMarkup();
  });

  test('When a person clicks the open button, it should display the modal window', () => {
    // Arrange
    let toggle = document.querySelector('[data-testid="toggle"]');
    let container = document.querySelector('[data-testid="container"]');
    let modal = new Modal(container);

    // Act
    toggle.click();

    // Assert
    expect(container.getAttribute('aria-hidden')).toBe('false');
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
  });

  test('When a person clicks the open button, it should have the appropriate styles', () => {
    // Arrange
    let toggle = document.querySelector('[data-testid="toggle"]');
    let container = document.querySelector('[data-testid="container"]');
    let modal = new Modal(container, { activeClasses: 'is-active dialog' });

    // Act
    toggle.click();

    // Assert
    expect(container.classList.contains('is-active')).toBeTruthy();
    expect(container.classList.contains('dialog')).toBeTruthy();
  });

  test('When a person clicks the close button, it should hide the modal window', () => {
    // Arrange
    let toggle = document.querySelector('[data-testid="toggle"]');
    let closeBtn = document.querySelector('[data-testid="close"]');
    let container = document.querySelector('[data-testid="container"]');
    let modal = new Modal(container);
    toggle.click();
    // Capture the opened version of the modal for testing
    let openedContainer = document.querySelector('[data-testid="container"]').outerHTML;

    // Act
    closeBtn.click();

    // Assert
    expect(container.getAttribute('aria-hidden')).toBe('true');
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });

  test('When a person clicks outside the modal window, it should hide the modal window', () => {
    // Arrange
    let toggle = document.querySelector('[data-testid="toggle"]');
    let closeBtn = document.querySelector('[data-testid="close"]');
    let container = document.querySelector('[data-testid="container"]');
    let modal = new Modal(container);
    // let escapeKey = new KeyboardEvent('keydown', { keyCode: 27 });

    toggle.click();

    // Capture the opened version of the modal for testing
    let openedContainer = document.querySelector('[data-testid="container"]').outerHTML;

    // Act
    container.click();

    // Assert
    expect(container.getAttribute('aria-hidden')).toBe('true');
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });

  test('When a person presses the ESC key, it should hide the modal window', () => {
    // Arrange
    let toggle = document.querySelector('[data-testid="toggle"]');
    let container = document.querySelector('[data-testid="container"]');
    let modal = new Modal(container);
    let escapeKey = new KeyboardEvent('keydown', {
      keyCode: 27,
      which: 27,
      code: 'Escape',
      key: 'Escape',
      bubbles: true,
    });
    toggle.click();
    let openedContainer = document.querySelector('[data-testid="container"]').outerHTML;

    // Act;
    document.dispatchEvent(escapeKey);

    // Assert
    expect(container.getAttribute('aria-hidden')).toBe('true');
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });

  test('When a person presses the ESC key on a closed modal window, it should do nothing', () => {
    // Arrange
    let toggle = document.querySelector('[data-testid="toggle"]');
    let container = document.querySelector('[data-testid="container"]');
    let modal = new Modal(container);
    let escapeKey = new KeyboardEvent('keydown', {
      keyCode: 27,
      which: 27,
      code: 'Escape',
      key: 'Escape',
      bubbles: true,
    });

    // Act;
    document.dispatchEvent(escapeKey);

    // Assert
    expect(container.getAttribute('aria-hidden')).toBe('true');
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });
});
