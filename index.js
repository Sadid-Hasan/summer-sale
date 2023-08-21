let totalPrice = 0;
let discount = 0;
let selectedItems = [];

// Function for card clicks
function handleClikBtn(target) {
    const cardTitle = target.querySelector('.card-title');
    const cardPrice = target.querySelector('.text-sm.card-title');

    if (cardTitle && cardPrice) {
        const titleText = cardTitle.innerText;
        const priceText = cardPrice.innerText;
        const priceValue = parseFloat(priceText.replace(/[^\d.]/g, ''));

        // total price and selected items
        totalPrice += priceValue;
        selectedItems.push(titleText);

        // display and button status
        updateDisplay();
    }
}

// Function for display and button status
function updateDisplay() {
    const selectedItemContainer = document.getElementById("selected-items");
    selectedItemContainer.innerHTML = ""; 
    selectedItems.forEach((item, index) => {
        const itemElement = document.createElement("p");
        itemElement.textContent = `${index + 1}. ${item}`;
        selectedItemContainer.appendChild(itemElement);
    });

    const totalPriceElement = document.getElementById("Total_price");
    totalPriceElement.textContent = `Total price: ${totalPrice.toFixed(2)}`;

    const discountElement = document.getElementById("Discount");
    discountElement.textContent = `Discount: ${discount.toFixed(2)}`;

    const totalAfterDiscount = totalPrice - discount;
    const totalElement = document.getElementById("Total");
    totalElement.textContent = `Total: ${totalAfterDiscount.toFixed(2)}`;

    // disable the Make Purchase button based on total price
    const makePurchaseButton = document.getElementById("make-purchase-button");
    makePurchaseButton.disabled = totalPrice === 0;

    //disable the Apply button and input based on total price
    const applyButton = document.getElementById("btn-apply");
    const couponInput = document.getElementById("input-coupon");
    
    if (totalPrice < 200) {
        applyButton.disabled = true;
        couponInput.disabled = true;
    } else {
        applyButton.disabled = false;
        couponInput.disabled = false;
    }
}

// Function for coupon
const applyButton = document.getElementById("btn-apply");
applyButton.addEventListener("click", function () {
    const couponInput = document.getElementById("input-coupon");
    const couponCode = couponInput.value;

    if (couponCode === "SELL200" && totalPrice >= 200) {
        discount = totalPrice * 0.2;
        updateDisplay();
    }
});


updateDisplay();

// Function for modal opening
const makePurchaseButton = document.getElementById("make-purchase-button");
makePurchaseButton.addEventListener("click", function () {
    // Show the modal
    const modal = document.getElementById("modal");
    modal.style.display = "block";
});



// Function for modal closing
const goHomeButton = document.getElementById("go-home-button");
goHomeButton.addEventListener("click", function () {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    
});
