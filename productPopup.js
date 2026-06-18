/* ===================================
   MYRA PRODUCT POPUP - FINAL PART 1
   =================================== */

(function(){

if(document.getElementById("myraPopupStyle")) return;

const style = document.createElement("style");
style.id = "myraPopupStyle";

style.innerHTML = `

.myra-popup-overlay{
position:fixed;
inset:0;
background:#F8F8F8;
z-index:99999;
overflow-y:auto;
display:none;
font-family:'Poppins',sans-serif;
}

.myra-popup-overlay.show{
display:block;
}

.myra-popup-wrap{
min-height:100vh;
background:#F8F8F8;
padding-bottom:120px;
}

/* =======================
   IMAGE SECTION
======================= */

.myra-gallery{
position:relative;
width:100%;
height:72vh;
overflow:hidden;
background:#F3EEE6;
}

.myra-main-img{
display:flex;
width:100%;
height:100%;
transition:.35s ease;
}

.myra-main-img img{
min-width:100%;
height:100%;
object-fit:cover;
object-position:center;
}

/* WORK NO 2 */

.myra-close{
position:absolute;
top:18px;
left:18px;
z-index:10;
background:transparent;
border:none;
font-size:42px;
font-weight:700;
color:#fff;
cursor:pointer;
text-shadow:0 2px 10px rgba(0,0,0,.5);
}

.myra-arrow{
position:absolute;
top:50%;
transform:translateY(-50%);
width:54px;
height:54px;
border-radius:50%;
border:none;
background:rgba(255,255,255,.92);
font-size:34px;
font-weight:700;
cursor:pointer;
z-index:10;
}

.myra-arrow.left{
left:4px;
}

.myra-arrow.right{
right:4px;
}

.myra-dots{
position:absolute;
bottom:18px;
left:0;
right:0;
display:flex;
justify-content:center;
gap:12px;
z-index:10;
}

.myra-dot{
width:14px;
height:14px;
border-radius:50%;
background:rgba(255,255,255,.75);
}

.myra-dot.active{
background:#D4AF37;
}

/* =======================
   CONTENT CARD
======================= */

.myra-info-card{
margin-top:-6px;
background:#fff;
border-radius:34px 34px 0 0;
padding:34px 26px 120px;
}

.myra-product-id{
font-size:15px;
font-weight:700;
color:#6B7280;
margin-bottom:14px;
letter-spacing:.8px;
}

.myra-title{
font-size:34px;
line-height:1.15;
font-weight:900;
color:#111827;
margin-bottom:24px;
}

/* WORK NO 12 */

.myra-price-box{
width:100%;
background:#FFFCF7;
border:1px solid #EEE7D7;
border-radius:26px;
padding:18px;
display:flex;
align-items:center;
justify-content:space-between;
gap:12px;
margin-bottom:24px;
}

.myra-mrp{
font-size:22px;
text-decoration:line-through;
color:#9CA3AF;
}

.myra-price{
font-size:40px;
font-weight:900;
color:#111827;
}

.myra-discount{
background:#E7FAF3;
color:#059669;
padding:10px 14px;
border-radius:999px;
font-size:14px;
font-weight:800;
}

/* WORK NO 13 */

.myra-live{
display:inline-flex;
align-items:center;
gap:8px;
padding:12px 18px;
border-radius:999px;
background:#EEF6FF;
color:#2563EB;
font-weight:800;
font-size:14px;
margin-bottom:24px;
}

/* WORK NO 5 */

.myra-short{
display:none;
}

.myra-description{
font-size:18px;
line-height:1.9;
color:#4B5563;
margin-bottom:28px;
}

.myra-section-title{
font-size:18px;
font-weight:800;
margin-bottom:16px;
color:#111827;
}

.option-grid{
display:flex;
flex-wrap:wrap;
gap:12px;
margin-bottom:28px;
}

.option-btn{
padding:14px 18px;
border-radius:20px;
border:1px solid #E5E7EB;
background:#fff;
font-weight:700;
font-size:15px;
cursor:pointer;
}

.option-btn.active{
background:#FFF8E6;
border:1px solid #D4AF37;
color:#8B6914;
}

`;
document.head.appendChild(style);

})();
