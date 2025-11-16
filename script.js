// ------------------ LOGIN PAGE ------------------
if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "" || password === "") {
            alert("Email dan Password tidak boleh kosong!");
            return;
        }

        if (email !== "febryanvalentyo234@gmail.com" || password !== "24090124") {
            alert("Email atau NIM salah!");
            return;
        }

        alert("Login berhasil!");
        window.location.href = "dashboard.html";
    });
}



// ------------------ SUMMARY DATA ------------------
const summary = {
    totalProducts: 120,
    totalSales: 85,
    totalRevenue: 12500000
};

if (document.getElementById("totalProducts")) {
    document.getElementById("totalProducts").textContent = summary.totalProducts;
    document.getElementById("totalSales").textContent = summary.totalSales;
    document.getElementById("totalRevenue").textContent = "Rp " + summary.totalRevenue.toLocaleString();
}



// ------------------ PRODUCTS DATA ------------------
let products = [
    { id: 1, name: "Kopi Gayo", price: 25000, stock: 50 },
    { id: 2, name: "Teh Hitam", price: 18000, stock: 30 },
    { id: 3, name: "Coklat Aceh", price: 30000, stock: 20 }
];

function renderTable() {
    const table = document.getElementById("productTable");
    if (!table) return;

    table.innerHTML = "";

    products.forEach((p, index) => {
        const row = `
        <tr>
            <td>${index + 1}</td>
            <td>${p.name}</td>
            <td>Rp ${p.price.toLocaleString()}</td>
            <td>${p.stock}</td>
            <td>
                <span class="action-btn" onclick="editProduct(${p.id})" title="Edit">
                    <i class="fa-solid fa-pen"></i>
                </span>
                <span class="action-btn delete" onclick="deleteProduct(${p.id})" title="Delete">
                    <i class="fa-solid fa-trash"></i>
                </span>
            </td>
        </tr>
        `;
        table.innerHTML += row;
    });
}

renderTable();

function editProduct(id) {
    const p = products.find(x => x.id === id);
    alert("Edit Produk: " + p.name);
}

function deleteProduct(id) {
    if (confirm("Yakin hapus produk ini?")) {
        products = products.filter(p => p.id !== id);
        renderTable();
    }
}
