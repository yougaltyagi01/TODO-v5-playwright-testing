const { test, expect } = require('@playwright/test');

test('user can add a Todo', async ({ page }) => {
  // Open the Todo application
  await page.goto('http://localhost:3000');

  // Enter a Todo
  await page.fill('#todo-input', 'Learn Playwright');

  // Click the Add button
  await page.click('button[type="submit"]');

  // Verify that the Todo appears in the list
  await expect(page.locator('#todo-list')).toContainText('Learn Playwright');
});

test('user can mark a Todo as completed', async ({ page }) => {
  // Open the Todo application
  await page.goto('http://localhost:3000');

  // Add a Todo
  await page.fill('#todo-input', 'Complete testing');
  await page.click('button[type="submit"]');

  // Find the Todo created by this test
  const todo = page.locator('.todo-text', { hasText: 'Complete testing' }).last();

  // Click the Todo to mark it completed
  await todo.click();

  // Verify that the Todo's parent <li> has the completed class
  await expect(todo.locator('..')).toHaveClass(/completed/);
});

test('user can delete a Todo', async ({ page }) => {
  // Open the Todo application
  await page.goto('http://localhost:3000');

  // Add a Todo
  await page.fill('#todo-input', 'Delete this Todo');
  await page.click('button[type="submit"]');

  // Find the Todo item
  const todo = page.locator('li', { hasText: 'Delete this Todo' });

  // Click the Delete button inside that Todo
  await todo.locator('.delete-btn').click();

  // Verify that the Todo is no longer visible
  await expect(todo).not.toBeVisible();
});