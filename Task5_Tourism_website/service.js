const packages = [
    {
        id: 0,
        image: 'fas fa-home',
        title: 'Accommodation Booking',
        description:"Find the perfect place to stay, from luxurious hotels to cozy bed-and-breakfasts. Our selection caters to all budgets and preferences, ensuring a restful stay after your adventures."
    },
    {
        id: 1,
        image: 'pack2.jpg',
        title: 'Munnar, India',
        price: 1000
    },
    {
        id: 2,
        image: 'pack3.jfif',
        title: 'Taj Mahal, India',
        price: 1700
    },
    {
        id: 3,
        image: 'pack4.jpg',
        title: 'Mysore, India',
        price: 1700
    }
];

const categories = [...new Set(packages.map((item) => item))];

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredPackages = packages.filter(item => {
        return item.title.toLowerCase().includes(searchData);
    });
    displayItems(filteredPackages);
});

const displayItems = (items) => {
    document.getElementById('root').innerHTML = items.map(item => {
        const { image, title, price } = item;
        return `
            <div class='box'>
                <div class='img-box'>
                    <img src='${image}' alt='${title}' class='image-fluid w-100 h-50'>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$${price}.00</h2>
                    <button>Book Now</button>
                </div>
            </div>`;
    }).join('');
};

// Initial display of all items
displayItems(categories);
