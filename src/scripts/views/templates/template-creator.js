import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <div class="restaurant-detail__header">
        <img class="restaurant-detail__header__poster" alt="${restaurant.name}"
            src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
    </div>
    <div class="restaurant__info">
        <h3 style="text-align: center;">Restaurant Information</h3>
        <hr>
        <h4>Rating</h4>
        <p>⭐️${restaurant.rating}</p>
        <h4>Categories</h4>
        <p>
            ${restaurant.categories.map((category) => `
                ${category.name}
            `).join(', ')}
        </p>
        <h4>Address</h4>
        <p>${restaurant.city}, ${restaurant.address}</p>
   
        <div class="restaurant__menu">
            <div class="food__menu">
                <h4>Food Menus</h4>
                ${restaurant.menus.foods.map((food) => `
                <ul> 
                    <li>${food.name}</li>
                </ul>
                `).join('')}
            </div>
            <div class=drink__menu>
            <h4>Drink Menus</h4>
                ${restaurant.menus.drinks.map((drink) => `
                <ul> 
                    <li>${drink.name}</li>
                </ul>
                `).join('')}
            </div>
        </div>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
        <div class="restaurant-item__header">
            <img class="restaurant-item__header__poster" alt="${restaurant.name}"
                src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
            <div class="restaurant-item__header__rating">
                <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
            </div>
        </div>
        <div class="restaurant-item__content">
            <h3 class="restaurant-item__title"><a class="content__title" href=${`/#/detail/${restaurant.id}`}>${restaurant.name}</a></h3>
            <span style="font-weight: bold;" ><i class="fa fa-map-marker" aria-hidden="true"></i> ${restaurant.city}</span>
            <p>${restaurant.description}</p>
        </div>
    </div>
`;

const createCustomerReview = (restaurant) => `
    <h3 style="text-align: center; margin-bottom: 5px;">
    Customer Review</h3>
    ${restaurant.customerReviews.map((review) => `
    <div class="restaurant__review">
        <h5 tabindex="0">${review.name}</h5>
        <h6 tabindex="0" class="date-review">${review.date}</h6>
        <p tabindex="0">${review.review}</p>
    </div>
    `).join('')}
`;

const createFavoriteButtonTemplate = () => `
    <button aria-label="like this restaurant" id="favoriteButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createFavoritedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="favoriteButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createCustomerReview,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
