import { test, expect } from '@playwright/test';
import { login, password } from '../user';

const { chromium } = require("playwright");

test('test1', async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 1000,
    devtools: false
  });
  const page = await browser.newPage();
  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(login);
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill(password);
  await page.getByTestId('login-submit-btn').click();
  await expect(page.getByTestId('menu-userface')).toBeVisible();
});

test('test2', async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 1000,
    devtools: false
  });
  const page = await browser.newPage();
  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(login);
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill("gfhf");
  await page.getByTestId('login-submit-btn').click();
  await expect(page.getByTestId('login-error-hint')).toBeVisible();
});