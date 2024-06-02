function tampilkanAlert() {
    var nama = document.getElementById('nama').value;
    alert('Selamat datang, ' + nama + '!');
    alert('Silahkan pesan mobil yang anda inginkan');
}

document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.nav-link');
    var currentPath = window.location.pathname.split('/').pop();

    navLinks.forEach(function(link) {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

function showOrderInfo() {
    // Get form values
    var fullName = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var model = document.getElementById("model").value;
    var quantity = document.getElementById("quantity").value;
    var order_date = document.getElementById("order_date").value;
    var color = document.querySelector('input[name="color"]:checked').value;
    var features = [];
    var featureCheckboxes = document.querySelectorAll('input[name="features[]"]:checked');
    featureCheckboxes
    .forEach(function(checkbox) {
        features.push(checkbox.value);
    });

    // Construct alert message

    var message = "SELAMAT ORDER MOBIL RANGE ROVER BERHASIL"+"\n";
    message += "Nama Lengkap: " + fullName + "\n";
    message += "Email: " + email + "\n";
    message += "No Handphone: " + phone + "\n";
    message += "Model Mobil: " + model + "\n";
    message += "Jumlah: " + quantity + "\n";
    message += "Tanggal Pesan: " + order_date + "\n";
    message += "Warna: " + color + "\n";
    message += "Pesanan Tambahan: " + (features.length > 0 ? features.join(", ") : "None");

    // Show alert with the message
    alert(message);
}