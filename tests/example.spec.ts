import { test, expect } from '@playwright/test';

const MEU_RM   = '251169'
const BASE_URL = 'https://prova.carvalho.cc';

test('submissão completa da prova', async ({ browser }) => {
  const context = await browser.newContext({
    extraHTTPHeaders: { 'x-exam-student-id': MEU_RM },
  });
  const page = await context.newPage();

  await page.goto(BASE_URL);

  // Dry-run banner should NOT appear
  await expect(page.locator('#dry-run-banner')).not.toBeVisible();

  // escreva o teste a partir daqui
  await page.getByLabel("Número de Matrícula").click();
  await page.getByLabel("Número de Matrícula").fill("251169");

  await page.getByLabel("Nome Completo").click();
  await page.getByLabel("Nome Completo").fill("Hernan Rodrigo Ajacopa Calle");

  await page.getByLabel("URL do Repositório").click();
  await page.getByLabel("URL do Repositório").fill("https://github.com/HernanRoACalle/DSprova");

  await page.getByRole('button', { name: 'Iniciar Prova' }).click();

  //Questão 1

  await page.getByLabel("Porque são os mais caros de escrever, executar e manter").click();
  await page.getByRole('button', { name: 'Próxima' }).click();

  //Questão 2
  await page.getByLabel("Os serviços podem ser implantados, escalados e desenvolvidos de forma independente").click();
  await page.getByRole('button', { name: 'Próxima' }).click();

  //Questão 3
  await page.getByLabel("Executar um efeito colateral (ex: buscar dados, configurar uma inscrição) após a renderização").click();
  await page.getByRole('button', { name: 'Próxima' }).click();

  //Questão 4
  await page.getByLabel("Teste de integração").click();
  await page.getByRole('button', { name: 'Próxima' }).click();

  //Questão 5
  await page.getByLabel("Testes unitários").click();
  await page.getByRole('button', { name: 'Próxima' }).click();

  // Confirmar envio
  // Remover o comentário quando terminar de escrever o código
  // await expect(page.getByRole('heading', { name: 'Prova enviada!' })).toBeVisible();
});