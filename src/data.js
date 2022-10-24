let ngStates = [
    {
        number: 1,
        state: "Abia State",
        capital: "Umuahia",
        slogan: "God's Own State",
        governor: "Okezie Ikpeazu"
    },
    {
        number: 2,
        state: "Adamawa State",
        capital: "Yola",
        slogan: "Land of Beauty",
        governor: "Ahmadu Umaru Fintiri"
    },
    {
        number: 3,
        state: "Akwa Ibom State",
        capital: "Uyo",
        slogan: "Land of Promise",
        governor: "Udom Gabriel Emmanuel"
    },
    {
        number: 4,
        state: "Anambra State",
        capital: "Awka",
        slogan: "Light of the Nation",
        governor: "Charles Soludo"
    },
    {
        number: 5,
        state: "Bauchi State",
        capital: "Bauchi",
        slogan: "Pearl of Tourism",
        governor: "Bala Abdulkadir Mohammed"
    },
    {
        number: 6,
        state: "Bayelsa State",
        capital: "Yenagoa",
        slogan: "Glory of all lands",
        governor: "Douye Diri"
    },
    {
        number: 7,
        state: "Benue State",
        capital: "Makurdi",
        slogan: "Food Basket of the Nation",
        governor: "Samuel Ortom"
    },
    {
        number: 8,
        state: "Borno State",
        capital: "Maiduguri",
        slogan: "Home of Peace",
        governor: "Babagana Umara Zulum"
    },
    {
        number: 9,
        state: "Cross River State",
        capital: "Calabar",
        slogan: "The People's Paradise",
        governor: "Benedict Ayade"
    },
    {
        number: 10,
        state: "Delta State",
        capital: "Asaba",
        slogan: "The Big Heart",
        governor: "Ifeanyi Okowa"
    },
    {
        number: 11,
        state: "Ebonyi State",
        capital: "Abakaliki",
        slogan: "Salt of the Nation",
        governor: "Dave Umahi"
    },
    {
        number: 12,
        state: "Edo State",
        capital: "Benin City",
        slogan: "Heart Beat of Nigeria",
        governor: "Godwin Obaseki"
    },
    {
        number: 13,
        state: "Ekiti State",
        capital: "Ado - Ekiti",
        slogan: "Land of Honour and Integrity",
        governor: "Abiodun Abayomi Oyebanji"
    },
    {
        number: 14,
        state: "Enugu State",
        capital: "Enugu",
        slogan: "Coal City State",
        governor: "Ifeanyi Ugwuanyi"
    },
    {
        number: 15,
        state: "Gombe State",
        capital: "Gombe",
        slogan: "Jewel in the Savannah",
        governor: "Muhammad Inuwa Yahaya"
    },
    {
        number: 16,
        state: "Imo State",
        capital: "Owerri",
        slogan: "Eastern Heartland",
        governor: "Hope Odidika Uzodinma"
    },
    {
        number: 17,
        state: "Jigawa State",
        capital: "Dutse",
        slogan: "The New World",
        governor: "Badaru Abubakar"
    },
    {
        number: 18,
        state: "Kaduna State",
        capital: "Kaduna",
        slogan: "Centre of Learning",
        governor: "Nasir Ahmad el-Rufai"
    },
    {
        number: 19,
        state: "Kano State",
        capital: "Kano",
        slogan: "Centre of Commerce",
        governor: "Abdullahi Umar Ganduje"
    },
    {
        number: 20,
        state: "Katsina State",
        capital: "Katsina",
        slogan: "Home of Hospitality",
        governor: "Aminu Bello Masari"
    },
    {
        number: 21,
        state: "Kebbi State",
        capital: "Birnin Kebbi",
        slogan: "Land of Equity",
        governor: "Abubakar Atiku Bagudu"
    },
    {
        number: 22,
        state: "Kogi State",
        capital: "Lokoja",
        slogan: "The Confluence State",
        governor: "Yahaya Adoza Bello"
    },
    {
        number: 23,
        state: "Kwara State",
        capital: "Ilorin",
        slogan: "State of Harmony",
        governor: "Abdul Rahman Abdul Razaq"
    },
    {
        number: 24,
        state: "Lagos State",
        capital: "Ikeja",
        slogan: "Centre of Excellence",
        governor: "Babajide Olusola Sanwo-Olu"
    },
    {
        number: 25,
        state: "Nasarawa State",
        capital: "Lafia",
        slogan: "Home of Solid Minerals",
        governor: "Abdullahi Sule"
    },
    {
        number: 26,
        state: "Niger State",
        capital: "Minna",
        slogan: "The Power State",
        governor: "Abubakar Sani Bello"
    },
    {
        number: 27,
        state: "Ogun State",
        capital: "Abeokuta",
        slogan: "Gateway State",
        governor: "Dapo Abiodun"
    },
    {
        number: 28,
        state: "Ondo State",
        capital: "Akure",
        slogan: "Sunshine State",
        governor: "Rotimi Akeredolu"
    },
    {
        number: 29,
        state: "Osun State",
        capital: "Oshogbo",
        slogan: "Land of Virtue",
        governor: "Isiaka Adegboyega Oyetola"
    },
    {
        number: 30,
        state: "Oyo State",
        capital: "Ibadan",
        slogan: "Pace Setter State",
        governor: "Oluseyi Abiodun Makinde"
    },
    {
        number: 31,
        state: "Plateau State",
        capital: "Jos",
        slogan: "Home of Peace and Tourism",
        governor: "Simon Lalong"
    },
    {
        number: 32,
        state: "Rivers State",
        capital: "Port Harcourt",
        slogan: "Treasure Base of the Nation",
        governor: "Ezenwo Nyesom Wike"
    },
    {
        number: 33,
        state: "Sokoto State",
        capital: "Sokoto",
        slogan: "Seat of the Caliphate",
        governor: "Aminu Waziri Tambuwal"
    },
    {
        number: 34,
        state: "Taraba State",
        capital: "Jalingo",
        slogan: "Nature's Gift to the Nation",
        governor: "Darius Ishaku"
    },
    {
        number: 35,
        state: "Yobe State",
        capital: "Damaturu",
        slogan: "Pride of the Sahel",
        governor: "Mai Mala Buni"
    },
    {
        number: 36,
        state: "Zamfara State",
        capital: "Gusau",
        slogan: "Farming is Our Pride",
        governor: "Bello Muhammad Mutawalle"
    }
  ];
  
  export function getStates() {
    return ngStates;
}
  
export function getState(num) {
    return ngStates.find(ngState => ngState.number === num )
}