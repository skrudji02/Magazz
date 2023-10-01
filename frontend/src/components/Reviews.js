import React from 'react';


const Reviews = ({ rating, ratingStore, guitar, renderStars }) => {
  return (
    <div class="tab-pane fade show active">
      <div class="row ">
        <div class="col-lg-6 d-flex justify-content-center">
          <div class="row total_rate">
            <div class="col-6">
              <div class="box_total">
                <h5>Рейтинг</h5>
                <h4>4.0</h4>
                <h6>(03 Отзыва)</h6>
              </div>
            </div>
            <div class="col-6">
              <div class="rating_list">
                <h3>Все оценки</h3>

                <ul class="list">
                  <li>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </li>
                  <li>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </li>
                  <li>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </li>
                  <li>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                  </li>
                  <li>
                    <div class="rating-area">
                      <span class="fa fa-star checked"></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div class="col-lg-6 ">
          <div class="review_box">
            {!rating ? <>
              <h4 className='text-center'>Оцените товар</h4>

              <div class="container d-flex justify-content-center">
                <div class="row">
                  <div class="col">
                    <p>Ваша оценка:</p>
                  </div>
                  <div class="col">
                    <div class="rating-area">
                      <input type="radio" id="star-5" name="rating" value="5" onClick={(e) => ratingStore.setRating(e.target.value, guitar.id)} />
                      <label className='star-rating' for="star-5" title="Оценка «5»"></label>
                      <input type="radio" id="star-4" name="rating" value="4" onClick={(e) => ratingStore.setRating(e.target.value, guitar.id)} />
                      <label className='star-rating' for="star-4" title="Оценка «4»"></label>
                      <input type="radio" id="star-3" name="rating" value="3" onClick={(e) => ratingStore.setRating(e.target.value, guitar.id)} />
                      <label className='star-rating' for="star-3" title="Оценка «3»"></label>
                      <input type="radio" id="star-2" name="rating" value="2" onClick={(e) => ratingStore.setRating(e.target.value, guitar.id)} />
                      <label className='star-rating' for="star-2" title="Оценка «2»"></label>
                      <input type="radio" id="star-1" name="rating" value="1" onClick={(e) => ratingStore.setRating(e.target.value, guitar.id)} />
                      <label  className='star-rating' for="star-1" title="Оценка «1»"></label>
                    </div>
                  </div>
                </div>
              </div>
            </>
              :
              <div class="container d-flex justify-content-center">
                <div class="row">
                  <div class="col">
                    <p>Вы оценили товар на:</p>
                  </div>
                  <div class="col">
                    <div class="user-rating">
                      {renderStars}
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;