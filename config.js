/* ==============================
MYRA CONFIG FILE
Where Every Gift Tells A Story
============================== */

const CONFIG = {

/* Brand */

APP_NAME: "MYRA",

APP_TAGLINE: "Where Every Gift Tells A Story",

APP_DESCRIPTION:
"Discover thoughtfully curated gifts, handcrafted treasures, luxury candles, elegant jewellery, and timeless art.",

/* Shipping Banner */

SHIPPING_TEXT:
"Free Shipping on Orders ₹500 and Above",

/* Pages */

LOGIN_PAGE: "index.html",

HOME_PAGE: "home.html",

COLLECTION_PAGE: "collection.html",

FAVOURITES_PAGE: "favourites.html",

CART_PAGE: "cart.html",

PROFILE_PAGE: "profile.html",

ADMIN_PAGE: "admin.html",

/* Theme Colors */

COLORS: {

```
PRIMARY:"#2C1A0B",

TEXT:"#2C1A0B",

MUTED:"#777777",

BACKGROUND:"#F8F5F0",

CARD:"#FFFFFF",

WARM:"#FFFCF8",

GOLD:"#C6A55C",

GOLD_LIGHT:"#E6D2A0",

GOLD_DARK:"#A8841D",

SAGE:"#7A8B6F",

BORDER:"#E8E0D3",

SUCCESS:"#7FA07D",

DANGER:"#C98B8B",

WARNING:"#D8B46A"
```

},

/* Fonts */

FONTS: {

```
LOGO:"'Cormorant Garamond', serif",

HEADING:"'Cormorant Garamond', serif",

BODY:"'Cormorant Garamond', serif"
```

},

/* Supabase */

SUPABASE_URL:
"https://ijclbrwofsgrdnlyzkro.supabase.co",

SUPABASE_ANON_KEY:
"YOUR_SUPABASE_ANON_KEY",

/* Cloudinary */

CLOUDINARY_CLOUD_NAME:
"YOUR_CLOUDINARY_NAME",

CLOUDINARY_UPLOAD_PRESET:
"YOUR_UPLOAD_PRESET",

/* Razorpay */

RAZORPAY_KEY_ID:
"YOUR_RAZORPAY_KEY",

/* Seller WhatsApp */

SELLER_WHATSAPP:
"919836697502",

/* Shipping */

SHIPPING: {

```
FREE_SHIPPING_MIN_ORDER: 500,

STANDARD_CHARGE: 40,

ESTIMATED_DELIVERY_DAYS:
"3-7 Days",

FREE_SHIPPING_MESSAGE:
"Free shipping on orders ₹500 and above"
```

},

/* Product Rules */

PRODUCT_ID_PREFIX:"MY",

PRODUCT_ID_START:1,

PRODUCT_ID_END:99999,

PRODUCT_IMAGE_LIMIT:4,

PRODUCT_NAME_WORD_LIMIT:6,

PRODUCT_TYPES:[

```
"Aroma Candle",

"Handmade Jewellery",

"Painting",

"Gift Item"
```

],

/* Categories */

CATEGORIES:[

```
{
  name:"All",
  subcategories:[]
},

{
  name:"Aroma Candles",
  subcategories:[
    "Jar Candles",
    "Tin Candles",
    "Soy Candles",
    "Scented Candles",
    "Gift Candles",
    "Luxury Candles"
  ]
},

{
  name:"Handmade Jewellery",
  subcategories:[
    "Earrings",
    "Necklaces",
    "Bracelets",
    "Rings",
    "Jewellery Sets",
    "Gift Jewellery"
  ]
},

{
  name:"Real Paintings",
  subcategories:[
    "Abstract Paintings",
    "Landscape Paintings",
    "Modern Art",
    "Floral Paintings",
    "Portrait Paintings",
    "Mini Paintings"
  ]
},

{
  name:"Trending Gifts",
  subcategories:[
    "Birthday Gifts",
    "Anniversary Gifts",
    "Wedding Gifts",
    "Couple Gifts",
    "Home Decor Gifts",
    "Corporate Gifts"
  ]
}
```

],

/* Offer Types */

OFFER_TYPES:[

```
"New Arrival",

"Best Seller",

"Trending",

"Limited Edition",

"Premium Collection",

"Gift Special"
```

],

/* Customer Labels */

CUSTOMER_LABELS:[

```
"New Customer",

"Regular Customer",

"VIP Customer",

"High Buyer",

"Wishlist User",

"Coupon Sent"
```

],

/* Analytics */

ANALYTICS_TABS:[

```
"Last 3 Days",

"Last 7 Days",

"Last Month"
```

],

/* Storage Keys */

STORAGE_KEYS: {

```
USER_ID:"myra_user_id",

USER_NAME:"myra_user_name",

USER_PHONE:"myra_user_phone",

DEVICE_ID:"myra_device_id",

CART:"myra_cart",

CART_COUNT:"myra_cart_count",

FAVOURITES:"myra_favourites",

ORDERS:"myra_orders"
```

},

/* PWA */

PWA: {

```
MOBILE_ONLY:true,

INSTALL_INTERVAL:120000,

INSTALL_PAGES:[

  "home.html",

  "collection.html"
]
```

},

/* Messages */

MESSAGES: {

```
LOGIN_REQUIRED:
"Please sign in first",

NAME_REQUIRED:
"Please enter your name",

PHONE_REQUIRED:
"Please enter your phone number",

INVALID_PHONE:
"Please enter a valid phone number",

LOGIN_SUCCESS:
"Welcome to MYRA",

SIGNUP_SUCCESS:
"Welcome to MYRA",

LOGOUT_SUCCESS:
"Logged out successfully",

CART_ADDED:
"Gift added to cart",

FAVOURITE_ADDED:
"Added to favourites",

ADDRESS_REQUIRED:
"Please fill all address details",

PROFILE_UPDATED:
"Profile updated successfully",

ORDER_SUCCESS:
"Order placed successfully",

FREE_SHIPPING_UNLOCKED:
"Congratulations! You get free shipping",

ADD_MORE_FOR_FREE_SHIPPING:
"Add more items to get free shipping",

DELIVERY_INFO:
"Estimated delivery in 3–7 days"
```

}

};

window.CONFIG = CONFIG;
