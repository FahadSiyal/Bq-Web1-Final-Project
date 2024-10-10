
let reviewForm = document.querySelector(".review-form-section")
let addReview = document.querySelector(".add-btn").addEventListener('click', () => {
      reviewForm.style.display = "block"
})


let formBtn = document.querySelector(".form-btn").addEventListener('click', (e) => {
      e.preventDefault()
      let userName = document.querySelector(".user-name").value;
      let userId = document.querySelector(".user-id").value;
      let userText = document.querySelector(".user-text").value;
      console.log(userName, userId, userText)
      
      if(userName==""||userId==""||userText==""){
                  return
      }
      
            
else{

      const reviewCard = document.createElement('div');
      reviewCard.classList.add('card');

      const reviewText = document.createElement('p');
      reviewText.classList.add('user-review');
      reviewText.innerHTML=userText;
      console.log(reviewText)

      const reviewName = document.createElement('p')
      reviewName.classList.add('user-name');
      reviewName.textContent =userName;

      const reviewId = document.createElement('p')
      reviewId.classList.add('user-gmail');
      reviewId.textContent =userId;

      reviewCard.appendChild(reviewText);
      reviewCard.appendChild(reviewName);
      reviewCard.appendChild(reviewId);

      document.querySelector('.review-cards').appendChild(reviewCard)
      
       reviewForm.style.display = "none"
      }

});























