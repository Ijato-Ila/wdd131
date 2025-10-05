let reviewCount = localStorage.getItem('reviewCount') || 0;
reviewCount = parseInt(reviewCount) + 1;
localStorage.setItem('reviewCount', reviewCount);

document.getElementById('review-counter').textContent = reviewCount;
