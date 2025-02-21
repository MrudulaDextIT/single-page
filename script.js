function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
}
// Function to change the main product image
function changeImage(imageSrc) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imageSrc;
}
function showImg(imgElement) {
    document.getElementById("mainImage").src = imgElement.src;
    
    // Remove 'active' class from all thumbnails
    let thumbnails = document.querySelectorAll(".image-thumbnails img");
    thumbnails.forEach(img => img.classList.remove("active"));

    // Add 'active' class to the clicked thumbnail
    imgElement.classList.add("active");
}

document.getElementById("applyCoupon").addEventListener("click", function() {
    const couponInput = document.getElementById("couponCode").value.trim();
    const message = document.getElementById("couponMessage");
    let discount = 0;

    // Example coupon codes and discounts
    const coupons = {
        'SAVE10': 10, // 10% discount
        'SAVE20': 20  // 20% discount
    };
    if (couponInput === "DISCOUNT10") {
        message.textContent = "Coupon Applied! You saved 10%!";
    } else {
        message.textContent = "Invalid Coupon. Try again!";
    }
    
});      


