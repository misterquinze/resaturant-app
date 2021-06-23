import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate, createCustomerReview } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="restaurant" class="restaurant"></div>
    <div class="restaurant__review__form">
      <h3 style="text-align: center; margin-bottom: 5px;">
      Write Your Review</h3>
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Your name"><br>
        <label for="message">Review</label>
        <textarea id="message" name="message" placeholder="Write your review here" style="height:150px"></textarea>
        <button id="submit">Submit</button>
      </div>
    </div>
    <div id="customerReview" class="restaurant__overview">
    </div>
    <div id="favoriteButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDbSource.restaurantDetail(url.id);
    // console.log(restaurant);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    const customerReviewContainer = document.querySelector('#customerReview');
    customerReviewContainer.innerHTML = createCustomerReview(restaurant);

    const reviewerName = document.querySelector('#name');
    const message = document.querySelector('#message');
    const submitButton = document.querySelector('#submit');
    submitButton.addEventListener('click', async (event) => {
      event.preventDefault();
      const review = {
        id: restaurant.id,
        name: reviewerName.value,
        message: message.value,
        date: `${Date.now}`,
      };
      console.log(review);
      await RestaurantDbSource.postReview(review);
    });

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
