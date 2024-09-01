import { test, expect } from '@playwright/test';

test('create delete course list', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('название').click();
  await page.getByPlaceholder('название').fill('Название1');
  await page.getByPlaceholder('описание').click();
  await page.getByPlaceholder('описание').fill('Описание1');
  await page.getByRole('button', { name: 'Добавить' }).click();
  await expect(page.getByText('Название1Описание1Delete')).toBeVisible();
  await page.locator('div').filter({ hasText: /^Название1Описание1Delete$/ }).getByRole('button').click();
  await expect(page.getByText('Название1Описание1Delete')).not.toBeVisible();
});