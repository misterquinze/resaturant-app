/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('checking that the list is empty', ({ I }) => {
  I.dontSeeElement('#restaurant .restaurant-item');
});

Scenario('liking one resto', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-item__title a');
  I.wait(5);
  const firstResto = locate('.restaurant-item__title a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(5);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestoName = await I.grabTextFrom('.restaurant-item__title a');
  assert.strictEqual(firstRestoName, likedRestoName);
});

Scenario('unliking one resto', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-item__title a');
  I.wait(5);
  I.click(locate('.restaurant-item__title a').first());
  I.wait(5);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item__title a');
  I.wait(7);
  const firstResto = locate('.restaurant-item__title a').first();
  I.click(firstResto);
  I.wait(5);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restaurant-item');
});
