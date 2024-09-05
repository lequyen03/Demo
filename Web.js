// Khởi tạo giỏ hàng rỗng
    var cart = {};

      // Hàm thêm sản phẩm vào giỏ hàng
    function addToCart(itemId, price) {
        if (cart[itemId]) {
          cart[itemId].quantity += 1;
        } else {
          cart[itemId] = {
            price: price,
            quantity: 1,
          };
        }

        updateCartUI();
        increase();
      }


      // Hàm cập nhật giao diện giỏ hàng
    function updateCartUI() {
        var cartItems = document.getElementById("cart-items");
        var totalPriceElement = document.getElementById("total-price");
        var totalPrice = 0;

        // Xóa danh sách hiện tại trong giỏ hàng
        cartItems.innerHTML = "";

        // Duyệt qua danh sách sản phẩm trong giỏ hàng và cập nhật giao diện
        for (var itemId in cart) {
          var product = cart[itemId];
          var row = document.createElement("tr");
          row.innerHTML = `
                    <td>${itemId}</td>
                    <td>${product.quantity}</td>
                    <td>${product.price * product.quantity}VNĐ</td>
                    <td><button onclick="removeFromCart('${itemId}')">Xóa</button></td>
                `;
          cartItems.appendChild(row);

          // Tính tổng tiền
          totalPrice += product.price * product.quantity;
        }

        // Cập nhật tổng tiền
        totalPriceElement.textContent = totalPrice;
      }

    const toggleImage = document.getElementById("toggleImage");
    const content = document.getElementById("content");

    // Thêm sự kiện click
    toggleImage.addEventListener("click", function() {
      // Kiểm tra trạng thái hiển thị của nội dung
      if (content.style.display === "none" || content.style.display === "") {
        // Nếu đang ẩn, thì hiển thị
        content.style.display = "block";
      } else {
        // Nếu đang hiển thị, thì ẩn đi
        content.style.display = "none";
      }
    });

    const countParagraph = document.getElementById("count");

    // Thêm sự kiện click vào nút tăng số lượng
    function increase(count){
      // Lấy giá trị hiện tại của phần tử <p>
      let currentCount = parseInt(countParagraph.textContent);

      // Tăng giá trị và cập nhật vào phần tử <p>
      currentCount++;
      countParagraph.decrease = currentCount;
      // countParagraph.textContent = currentCount;
}    
    

    function decrease(count){
    // Lấy giá trị hiện tại của phần tử <p>
        let currentCount = parseInt(countParagraph.textContent);
        // Tăng giá trị và cập nhật vào phần tử <p>
        currentCount--;
        countParagraph.textContent = currentCount;
}
const ten = document.getElementById("ten");
const img = document.querySelector(".logo img");
    function rotateImage() {
    img.style.transform = `rotate(${rotateImage.angle}deg)`;
    rotateImage.angle += 1;
    requestAnimationFrame(rotateImage);
}
rotateImage.angle = 0;
rotateImage();



