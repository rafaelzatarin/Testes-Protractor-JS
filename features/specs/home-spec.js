const assert = require('assert')
const { Given, When, Then } = require('cucumber');
const { element } = require('protractor');
//const helper = require('protractor-helper')
//const Home = require('pages/home')
let title = browser.driver.getTitle();
let consulta = element(by.id('h_search-input'));
let btnPesq = browser.isElementPresent(element(by.id('h_search-btn')));

Given('que realizado o acesso nas Lojas Americanas', function () {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.americanas.com.br');
    assert(title,'Americanas - Tudo. A toda hora. Em qualquer lugar.')
  });

When('realizado uma busca', function () {
    browser.waitForAngularEnabled(false);
    consulta.sendKeys('smartphone');
    element(by.id('h_search-btn')).click();    
  });

Then('retornam os produtos consultados', function() {
    return console.log('consulta OK');
  });
//   beforeAll(() => {
//     homepage = new Home()
//     homepage.visit()
//   })

//   describe('E são apresentos cinco espaços', () => {
//     it('Todos eles são apresentados como cartões', () => {
//       // mostrar se o elemento está visivel na homepage
//       helper.waitForElementVisibility(homepage.tags.cards.last())

//       // valida se a contagem de cards é igual a quantidade esperada = 5
//       expect(homepage.tags.cards.count()).toBe(5)
//     })
//   })
// })
