import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Main from '../components/main';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Main component', () => {
  it('renders with app name', () => {
    act(() => {
      render(<Main />, container);
    });

    const title = container.querySelector('#header');
    expect(title.textContent).toBe('WEATHERLY');
  });
});
