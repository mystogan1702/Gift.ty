document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".input-box input"); // Select search input
    const products = document.querySelectorAll(".product");
    const sections = document.querySelectorAll(".content-container"); // Select all product sections
    let noResultsMessage = document.createElement("p");

    noResultsMessage.textContent = "No Products Found.";
    noResultsMessage.style.textAlign = "center";
    noResultsMessage.style.fontSize = "1.5rem";
    noResultsMessage.style.color = "red";
    noResultsMessage.style.display = "none"; // Hidden by default

    // Insert message after all product sections
    document.querySelector(".contents").appendChild(noResultsMessage);

    searchBar.addEventListener("keyup", function () {
        let filter = searchBar.value.toLowerCase();
        let anyVisible = false;

        products.forEach(product => {
            let title = product.querySelector(".product-title").textContent.toLowerCase();
            if (title.includes(filter)) {
                product.style.display = "block"; // Show matched products
                anyVisible = true;
            } else {
                product.style.display = "none"; // Hide unmatched products
            }
        });

        // Hide or show sections based on visible products
        sections.forEach(section => {
            let visibleProducts = section.querySelectorAll(".product[style='display: block;']").length;
            section.style.display = visibleProducts > 0 ? "grid" : "none";
        });

        // Show "No Products Found" if no matches
        noResultsMessage.style.display = anyVisible ? "none" : "block";

        // If search is empty, restore everything
        if (filter === "") {
            products.forEach(product => product.style.display = "block");
            sections.forEach(section => section.style.display = "grid");
            noResultsMessage.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    let addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            let productCard = this.closest(".product"); // Use ".product" instead

            console.log("Product Found:", productCard); // Debugging log

            if (!productCard) {
                console.error("❌ Error: No product container found.");
                return;
            }

            let productName = productCard.querySelector(".product-title")?.innerText || "Unknown Product";
            let productPrice = productCard.querySelector(".price")?.innerText.replace("₱", "") || "0";
            let productImage = productCard.querySelector(".product-img")?.src || "";

            console.log("Adding Product:", { productName, productPrice, productImage });

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let existingProduct = cart.find(item => item.name === productName);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({
                    name: productName,
                    price: parseFloat(productPrice),
                    image: productImage,
                    quantity: 1
                });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
        });
    });
});




