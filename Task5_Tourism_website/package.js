window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-dark-bg');
        navbar.classList.remove('navbar-transparent');
    } else {
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('navbar-dark-bg');
    }
});

const packages = [
    {
        id: 0,
        image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack1.jpg',
        title: 'kashmir,India',
        price: 12000,
        Detail:"3 nights and 4 days. Including Stay,travel and food.",
        Description:"Enjoy the breathtaking beauty of Kashmir with this 4-day, 3-night package. The package includes a stay in luxury hotels, guided tours of Srinagar, Gulmarg, and Pahalgam, and all meals. Experience the serene Dal Lake, stunning Mughal gardens, and snow-capped mountains. The package also covers transportation, including a houseboat stay and shikara rides on Dal Lake."
       },
       {
        id: 1,
        image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack2.jpg',
        title: 'Munnar, India',
        price: 10000,
        Detail:"2 nights and 3 days. Including Stay,travel and food.",
        Description:"Explore the lush green tea gardens and rolling hills of Munnar with this 3-day, 2-night package. The package includes accommodation in a hill resort, guided tours of the tea plantations, and visits to the Eravikulam National Park and Mattupetty Dam. All meals are included, along with transportation from Cochin to Munnar and back."
    },
    {
        id: 2,
        image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack3.jfif',
        title: 'Taj Mahal, India',
        price: 27000,
        Detail:"2 nights and 3 days - Including Stay,travel and food.",
        Description:"Discover the wonder of the Taj Mahal with this 3-day, 2-night package. Stay in a 5-star hotel in Agra and enjoy guided tours of the Taj Mahal, Agra Fort, and Fatehpur Sikri. The package includes all meals, entrance fees, and transportation from Delhi to Agra and back."
    },
    {
        id: 3,
        image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack4.jpg',
        title: 'Mysore, India',
        price: 20000,
        Detail: '2 nights, 3 days - Includes stay and travel.',
        Description: 'Dive into the cultural heritage of Mysore with this 3-day, 2-night package. Stay in a heritage hotel and enjoy guided tours of Mysore Palace, Chamundi Hill, and Brindavan Gardens. The package includes breakfast and dinner, as well as transportation from Bangalore to Mysore and back.'
    }, 
    {
        id: 4,
        image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack5.jfif',
        title: 'Ooty&Kodaikonal, India',
        price: 15000,
        Detail: '3 nights, 4 days - Includes stay and travel.',
        Description: 'Experience the charm of Ooty and Kodaikanal with this 4-day, 3-night package. Stay in colonial-style hill resorts, enjoy scenic drives through tea plantations, and visit the famous Botanical Gardens and Kodaikanal Lake. The package includes all meals, transportation, and sightseeing tours.'
    },
    {
        id: 5,
        image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack6.jfif',
        title: 'Manali, India',
        price: 37000,
        Detail: '4 nights, 5 days - Includes stay, travel, and meals.',
        Description: 'Escape to the mountains with this 5-day, 4-night package in Manali. Stay in a cozy mountain resort, explore the Rohtang Pass, Solang Valley, and Hadimba Temple. Enjoy adventure activities like paragliding and river rafting. The package includes all meals, transportation, and guided tours.'
    },
    {
        id: 6,
        image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack7.jfif',
        title: 'Ladakh, India',
        price: 17000,
        Detail: '3 nights, 4 days - Includes stay, travel, and meals.',
        Description: 'Embark on an adventurous journey to Ladakh with this 4-day, 3-night package. Stay in Leh and explore the stunning landscapes of Nubra Valley, Pangong Lake, and monasteries like Hemis and Thiksey. The package includes all meals, transportation, and permits for restricted areas.'
    },
    {
        id: 7,
        image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack8.jfif',
        title: 'Megalaya, India',
        price: 24000,
        Detail: '4 nights, 5 days - Includes stay, travel, and meals.',
        Description: 'Discover the natural wonders of Meghalaya with this 5-day, 4-night package. Stay in Shillong and Cherrapunjee, explore the living root bridges, visit the Seven Sisters Falls, and enjoy a boat ride on the crystal-clear waters of Dawki. The package includes all meals, transportation, and guided tours.'
    },  
   {
        id: 8,
        image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack9.jpg',
        title: 'Sicily, Italy',
        price: 50000,
        Detail: '5 nights, 6 days - Includes stay, travel, and meals.',
        Description: 'Immerse yourself in the rich culture and history of Sicily with this 6-day, 5-night package. Explore the ancient ruins of Agrigento, the stunning beaches of Taormina, and the lively markets of Palermo. Stay in boutique hotels, enjoy authentic Sicilian cuisine, and experience guided tours and wine tastings. The package includes all meals, transportation, and entrance fees.'
    }, 
    {
       id: 9,
       image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack10.jpg',
       title: 'Rome, Italy',
       price: 65000,
       Detail: '4 nights, 5 days - Includes stay, travel, and meals.',
        Description: "Explore the eternal city of Rome with this 5-day, 4-night package. Stay in a central hotel and enjoy guided tours of the Colosseum, Vatican City, and the Roman Forum. Experience the city's vibrant culinary scene with included meals at traditional Roman trattorias. The package also includes transportation and skip-the-line tickets to major attractions."
   }, 
   {
       id: 10,
       image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack11.jpg',
       title: 'Amalfi Coast, Italy',
       price: 75000,
       Detail: '5 nights, 6 days - Includes stay, travel, and meals.',
       Description: 'Experience the breathtaking beauty of the Amalfi Coast with this 6-day, 5-night package. Stay in a luxury hotel overlooking the Mediterranean, visit picturesque towns like Positano and Ravello, and enjoy a boat trip to Capri. The package includes all meals, transportation, and guided tours.'
    },
   {
    id: 11,
    image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack12.jpg',
    title: 'Tuscany, Italy',
    price: 25000,
    Detail: '3 nights, 4 days - Includes stay and travel.',
    Description: 'Explore the rolling hills and vineyards of Tuscany with this 4-day, 3-night package. Stay in a charming countryside villa, visit the historic towns of Florence and Siena, and enjoy wine tastings in the Chianti region. The package includes all meals, transportation, and guided tours.'
   },
   {
    id: 12,
    image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack13.jpg',
    title: 'Effile Tower, Paris',
    price: 45000,
    Detail: '4 nights, 5 days - Includes stay, travel, and meals.',
    Description: 'Discover the romantic city of Paris with this 5-day, 4-night package. Stay in a boutique hotel near the Eiffel Tower, enjoy guided tours of the Louvre, Notre-Dame, and Montmartre, and dine in charming French bistros. The package includes all meals, transportation, and skip-the-line access to major attractions.'
   },
   {
    id: 13,
    image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack14.jpg',
    title: 'Louvre Museum, paris',
    price: 50000,
    Detail: '4 nights, 5 days - Includes stay, travel, and meals.',
    Description: 'Delve into the art and history of Paris with this 5-day, 4-night package. Stay in a stylish hotel in the heart of the city, enjoy guided tours of the Louvre, Orsay Museum, and Versailles Palace, and savor gourmet French cuisine. The package includes all meals, transportation, and entrance fees.'
   },
   {
    id: 14,
    image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack15.jpeg',
    title: 'Chichen itza,Mexico',
    price: 35000,
    Detail: '3 nights, 4 days - Includes stay, travel, and meals.',
    Description: 'Explore the ancient Mayan ruins of Chichén Itzá with this 4-day, 3-night package. Stay in a luxury resort near the site, enjoy guided tours of the pyramids and temples, and relax in the nearby cenotes. The package includes all meals, transportation, and entrance fees.'
   },
   {
    id: 15,
    image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack16.jpg',
    title: 'Rio secreto, Mexico',
    price: 30000,
    Detail: '3 nights, 4 days - Includes stay, travel, and meals.',
    Description: 'Discover the underground river and caves of Rio Secreto with this 4-day, 3-night package. Stay in a beachfront resort, enjoy guided tours of the caves, and relax on the pristine beaches of Playa del Carmen. The package includes all meals, transportation, and guided tours.'
   },
   {
    id: 16,
    image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack17.jpg',
    title: 'Bankok city, Tailand',
    price: 38000,
    Detail: '4 nights, 5 days - Includes stay, travel, and meals.',
    Description: 'Immerse yourself in the vibrant city of Bangkok with this 5-day, 4-night package. Stay in a luxury hotel, explore the Grand Palace, Wat Arun, and floating markets, and enjoy Thai culinary delights. The package includes all meals, transportation, and guided tours.'
   },
   {
    id: 17,
    image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack18.jpg',
    title: 'Phuket, Tailand',
    price: 37000,
    Detail: '4 nights, 5 days - Includes stay, travel, and meals.',
    Description: 'Experience the tropical paradise of Phuket with this 5-day, 4-night package. Stay in a beachfront resort, explore the Phi Phi Islands, and enjoy water activities like snorkeling and kayaking. The package includes all meals, transportation, and guided tours.'
   },
   {
    id: 18,
    image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack19.jpg',
    title: 'Kyoto, Japan',
    price: 34000,
    Detail: '3 nights, 4 days - Includes stay, travel, and meals.',
    Description: 'Discover the cultural heritage of Kyoto with this 4-day, 3-night package. Stay in a traditional ryokan, explore ancient temples and gardens, and experience a traditional tea ceremony. The package includes all meals, transportation, and guided tours.'
   },
   {
    id: 19,
    image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack20.jfif',
    title: 'Mount Fuji,Japan',
    price: 42000,
    Detail: '4 nights, 5 days - Includes stay, travel, and meals.',
    Description: 'Experience the iconic Mount Fuji with this 5-day, 4-night package. Stay in a lakeside resort, enjoy guided hikes around the mountain, and visit the nearby Hakone hot springs. The package includes all meals, transportation, and guided tours.'
   },
   {
    id: 20,
    image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack21.jpg',
    title: 'Gardens by the bay, Singapore',
    price: 28000,
    Detail: '3 nights, 4 days - Includes stay and travel.',
    Description: 'Explore the futuristic landscapes of Gardens by the Bay with this 4-day, 3-night package. Stay in a luxury hotel in Marina Bay, enjoy guided tours of the Supertree Grove and Cloud Forest, and experience the vibrant city life of Singapore. The package includes all meals, transportation, and entrance fees.'
   },
   {
    id: 21,
    image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack22.jpg',
    title: 'Singapore Flyer, Singapore',
    price: 17000,
    Detail: '2 nights, 3 days - Includes stay and travel.',
    Description: 'Take in the stunning cityscape of Singapore with this 3-day, 2-night package. Stay in a boutique hotel, enjoy a ride on the Singapore Flyer, and explore the nearby attractions of Marina Bay Sands and Merlion Park. The package includes all meals, transportation, and entrance fees.'
   },
   {
    id: 22,
    image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack23.jpg',
    title: 'Gyeongbokgung Palace, Korea',
    price: 44000,
    Detail: '3 nights, 4 days - Includes stay, travel, and meals.',
    Description: 'Discover the history and culture of Seoul with this 4-day, 3-night package. Stay in a luxury hotel, explore the Gyeongbokgung Palace and Bukchon Hanok Village, and enjoy traditional Korean cuisine. The package includes all meals, transportation, and guided tours.'
   },
   {
    id: 23,
    image: 'D:\\Desktop\\entrans\\Task5_Tourism_website\\assets\\packages\\pack24.jpg',
    title: 'Busan, Korea',
    price: 22000,
    Detail: '3 nights, 4 days - Includes stay, travel, and meals.',
    Description: 'Experience the coastal city of Busan with this 4-day, 3-night package. Stay in a beachfront hotel, explore Haeundae Beach, Jagalchi Fish Market, and Gamcheon Culture Village. The package includes all meals, transportation, and guided tours.'
   }

];
localStorage.setItem('packages', JSON.stringify(packages));

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredPackages = packages.filter(item => {
        return item.title.toLowerCase().includes(searchData);
    });
    displayItems(filteredPackages);
});

const displayItems = (items) => {
    document.getElementById('root').innerHTML = items.map(item => {
        const { id, image, title, price } = item;
        return `
            <div class='box'>
                <div class='img-box w-80 h-50' style="object-fit: cover;">
                    <img src='${image}' alt='${title}' class='image-fluid rounded w-100 h-100'>
                </div>
                <div class='bottom'>
                    <p>${title}</p>
                    <h2>$${price}.00</h2>
                    <button class="btn btn-outline-primary" style="margin-left:25%;" onclick='showDetails(${id})'><a  class="text-decoration-none text-dark" href="#packageDetails">Book Now</a></button>
                </div>
            </div>`;
    }).join('');
};
function showDetails(id) {
    const packages = JSON.parse(localStorage.getItem('packages'));
    const selectedPackage = packages.find(pkg => pkg.id === id);

    if (selectedPackage) {
        document.getElementById('packageDetails').innerHTML = `
        <div class="container p-3" style="border: 1px solid rgb(230, 221, 221); border-radius: 15px;">
            <h2 class="text-danger">${selectedPackage.title}</h2>
            <img src='${selectedPackage.image}' alt='${selectedPackage.title}' class=' img-fluid rounded w-30 h-50'>
            <h5>Price: $${selectedPackage.price}.00</p>
            <h6>${selectedPackage.Detail ? selectedPackage.Detail : 'No additional details available.'}</h5>
            <p> ${selectedPackage.Description ? selectedPackage.Description : 'No additional details available.'}</p>
            <button class="btn btn-primary btn-larger" onclick="display(${id})"><a class="text-decoration-none text-white" href="#BookForm">Book Now</button></div>
        `;
    } else {
        document.getElementById('packageDetails').innerHTML = 'Package not found.';
    }
}

displayItems(packages);

function display(id) {
    const packages = JSON.parse(localStorage.getItem('packages'));
    const package = packages.find(pkg => pkg.id === id);

    if (package) {
        document.getElementById('title').value = package.title;
        document.getElementById('image').src = package.image;
        document.getElementById('price').value = package.price;
    } else {
        console.error('Package not found!');
    }
}
 
    document.getElementById("Book_Form").addEventListener("submit", function(event){
        event.preventDefault();
        storeData();
      }); 
function storeData(){
    const titleInput = document.getElementById('title');
    const priceInput = document.getElementById('price');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const mobileInput = document.getElementById('mobile');
    const departInput = document.getElementById('depart');
    const dateInput = document.getElementById('date');
    if (titleInput && priceInput && nameInput && emailInput && mobileInput && departInput && dateInput) { 
        const Booking_Data={
            title: titleInput.value,
            price: priceInput.value,
            Name:nameInput.value,
            email:emailInput.value,
            mobile: mobileInput.value,
            boarding:departInput.value,
            date:dateInput.value
        };
    localStorage.setItem('Booking_Data', JSON.stringify(Booking_Data));
    console.log(Booking_Data);
    const storedData = localStorage.getItem('Booking_Data');
        if (storedData) {
            window.location.href = "table1.html"; 
            console.log(Booking_Data);
        } else {
            alert('Oops! Sorry, couldn\'t store the data');
        }
    } else {
        alert('Please fill in all fields');
    }
}

function email_validation() {
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailerror').innerHTML = 'Invalid email format';
    } else {
        document.getElementById('emailerror').innerHTML = '';
    }
}

function mobile_validation(){
    const mobile=document.getElementById('mobile').value;
    if(mobile.length!=10){
        document.getElementById('mobileerror').innerHTML = 'Mobile Number should be 10 digits!';
    }
    else{
        document.getElementById('mobileerror').innerHTML = '';
    }
}
