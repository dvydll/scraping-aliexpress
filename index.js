#!/usr/bin/env node

import { argv } from 'node:process';
import { chromium } from 'playwright';

const [, , url] = argv;

(async () => {
	const browser = await chromium.launch({ headless: true });
	const page = await browser.newPage();

	// Navega a la URL de destino
	await page.goto(url);

	// Haz clic en el botón "Ver más" antes de extraer las especificaciones
	await page.click(
		'[class*="specification--wrap--"] button.comet-v2-btn-important'
	); // Seleccionamos el botón usando una clase única

	// Espera a que las nuevas especificaciones se carguen
	await page.waitForSelector('ul[class*="specification--list--"] li', {
		timeout: 5000,
	});

	// Selecciona y extrae los datos de la lista de especificaciones
	const specifications = await page.evaluate(() => {
		// Seleccionamos todos los items de especificaciones
		const specItems = document.querySelectorAll(
			'ul[class*="specification--list--"] > li'
		);

		return Array.from(specItems).map((spec) => {
			const properties = {};
			const titleElements = spec.querySelectorAll(
				'[class*="specification--title"]'
			);
			const descElements = spec.querySelectorAll(
				'[class*="specification--desc"]'
			);

			titleElements.forEach((titleElement, index) => {
				const title = titleElement.innerText.trim();
				const description = descElements[index]?.innerText.trim();
				properties[title] = description;
			});

			return properties;
		});
	});

	console.log(
		JSON.stringify(
			{
				[url]: specifications.reduce((acc, curr) => ({ ...acc, ...curr }), {}),
			},
			null,
			2
		)
	);

	await browser.close();
})();
