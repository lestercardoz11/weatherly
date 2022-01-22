import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Weather from '../components/weather';

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

it('renders weather data', async () => {
  const fakeData = {
    city: 'Satara',
    temperature: 26.77,
    min_temp: 26.77,
    max_temp: 26.77,
    humidity: 39,
    visibility: 10,
    weather: 'Clear',
    wind: 5.9,
    icon: '01d',
  };

  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  let today = new Date().toLocaleDateString('en-US', options);

  act(() => {
    render(<Weather data={fakeData} />, container);
  });

  expect(container.querySelector('#city').textContent).toBe(fakeData.city);
  expect(container.querySelector('#date').textContent).toBe(today);
});
