import {browser, by, element } from 'protractor';

// Je maakt een PO ('Page Object'), omdat je dan - wanneer de structuur van de pagina wijzigt -
// je alleen het Page Object hoeft aan te passen, maar de tests zelf (in het *.spec.ts-bestand)
// kunnen ongewijzigd blijven (al zul je ook deze moeten uitbreiden om 100% coverage te bereiken)
export class e2eComponentPage{
	// navigate
	navigateTo(){
		return browser.get('/');
	}

	// Titel van de pagina ophalen - let op goede CSS-selector verwijzing (incl. selector van de component)
	getTitle(){
		return element(by.css('app-e2e-cmp h1')).getText();
	}

	// Diverse andere elementen in de pagina ophalen
	getPoints(){
		return element(by.cssContainingText('div', 'Points')).$('span').getText();
	}

	getPlus1Button(){
		return element(by.cssContainingText('button', 'Plus 1'));
	}
	getResetButton(){
		return element(by.cssContainingText('button', 'Reset'));
	}
}