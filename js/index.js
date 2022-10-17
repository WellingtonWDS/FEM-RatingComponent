let ratingCard = document.getElementById('rating-card');
let endCard = document.getElementById('end-card');

let selectedRate = 0;

// Get the rating
function changeRate(rate){
    selectedRate = rate;

    let rateId = document.getElementById(rate);
}

// Submit the rating
function submitRate(){
    if(selectedRate == 0){
        alert('Please select a rating');
    }
    else{
        ratingCard.style.display = 'none';
        endCard.style.display = 'flex';
    
        rate.innerHTML = selectedRate;
    }
}

// Turn to ACTIVE the selected rate
const room  = document.querySelector('.ratings');
const btns = document.querySelectorAll('.rating'); 

room.addEventListener('click', e => {

 btns.forEach(btn => {

    if(btn.getAttribute('id') === e.target.getAttribute('id'))
      btn.classList.add('active');
    else
      btn.classList.remove('active');
    });
});