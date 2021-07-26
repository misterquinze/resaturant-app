/* eslint-disable no-undef */
Feature('Unliking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('checking that the list is empty', ({ I }) => {
  I.dontSeeElement('#restaurant .restaurant-item');
});

Scenario('unliking one resto', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-item__title a');
  I.wait(5);
  I.click(locate('.restaurant-item__title a').first());
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item__title a');
  I.wait(7);
  const firstResto = locate('.restaurant-item__title a').first();
  I.click(firstResto);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restaurant-item');
});
