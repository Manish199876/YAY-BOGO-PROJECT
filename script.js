document.addEventListener("DOMContentLoaded", function() {
    const unit1 = document.getElementById("unit1");
    const unit2 = document.getElementById("unit2");
    const unit3 = document.getElementById("unit3");
    const totalPrice = document.getElementById("total-price");

    function updatePrice() {
        if (unit1.checked) {
            totalPrice.textContent = "$10.00 USD";
        } else if (unit2.checked) {
            totalPrice.textContent = "$18.00 USD";
        } else if (unit3.checked) {
            totalPrice.textContent = "$24.00 USD";
        }
    }

    unit1.addEventListener("change", updatePrice);
    unit2.addEventListener("change", updatePrice);
    unit3.addEventListener("change", updatePrice);

    updatePrice();
});