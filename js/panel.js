class Panel {
  constructor(panel) {
    this.panel = panel;
    this.panelButtons = this.panel.querySelector('.panel__buttons');
    this.panelBtnOpen = this.panel.querySelector('.panel__open-btn');
    this.panelBtnClose = this.panel.querySelector('.panel__close-btn');
    this.panelContent = this.panel.querySelector('.panel__content');

    this.panelButtons.addEventListener('click', () => this.togglePanel());
  }

  togglePanel() {
    this.panelBtnOpen.classList.toggle('hide-btn');
    this.panelBtnClose.classList.toggle('hide-btn');
    this.panelContent.classList.toggle('panel__content--hidden');
    this.panel.classList.toggle('panel--collapsed');
    this.panel.classList.toggle('panel--open');
  }
}

const panels = document.querySelectorAll('.panel');

// Prolly should just use forEach on the NodeList but that Rubric though
Array.from(panels).map(panel => new Panel(panel));
