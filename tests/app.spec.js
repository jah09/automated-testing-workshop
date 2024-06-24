// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('http://localhost:5173/');
//   await page.getByPlaceholder('Username').click();
//   await page.getByPlaceholder('Username').click();
//   await page.getByPlaceholder('Username').fill('user');
//   await page.getByPlaceholder('Username').press('Tab');
//   await page.getByPlaceholder('Password').fill('pass');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByPlaceholder('Write a message').click();
//   await page.getByPlaceholder('Write a message').fill('Hello World');
//   await page.getByRole('button', { name: 'Post' }).click();
// });
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Eat');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Study');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByTestId('footer-navigation').click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.locator('div').filter({ hasText: 'Eat' }).getByTestId('todo-item-toggle').check();
  await page.locator('div').filter({ hasText: 'Study' }).getByTestId('todo-item-toggle').check();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('Sleep');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByTestId('footer').click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('button', { name: '×' }).click();
  await page.getByTestId('todo-item-button').click();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByTestId('todo-item-toggle').check();
});