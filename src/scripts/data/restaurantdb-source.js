import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantDbSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async restaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async postReview(review) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json',
        'X-Auth-Token': CONFIG.API_KEY,
      },
      body: JSON.stringify(review),
    });
    // console.log(response);
    return response;
  }
}

export default RestaurantDbSource;
