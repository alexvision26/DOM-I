const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelectorAll('nav a');
navItems.forEach((item) => {
  item.style.color = '#b0b0b0';
})

//figure out how to loop this...?
navItems[0].textContent = siteContent.nav["nav-item-1"];
navItems[1].textContent = siteContent.nav["nav-item-2"];
navItems[2].textContent = siteContent.nav["nav-item-3"];
navItems[3].textContent = siteContent.nav["nav-item-4"];
navItems[4].textContent = siteContent.nav["nav-item-5"];
navItems[5].textContent = siteContent.nav["nav-item-6"];


//Call to Action Banner Section
let bannerImg = document.querySelector('#cta-img')
bannerImg.setAttribute('src', siteContent['cta']['img-src'])

let ctaText = document.querySelector('h1')
ctaText.textContent = siteContent['cta']['h1']
ctaText.style.fontFamily = 'Bangers, cursive'
ctaText.style.letterSpacing = '1px'
ctaText.style.marginBottom = '15px'

let ctaButton = document.querySelector('.cta-text :last-child')
ctaButton.textContent = siteContent['cta']['button']


//Top Content
const topContent = document.querySelector('.top-content')
topContent.style.display = 'flex';

let featuresTitle = document.querySelector('.top-content .text-content h4')
featuresTitle.textContent = siteContent['main-content']['features-h4']

let featuresText = document.querySelector('.top-content .text-content p')
featuresText.textContent = siteContent['main-content']['features-content']

let aboutTitle = document.querySelector('.top-content .text-content ~ .text-content h4')
aboutTitle.textContent = siteContent['main-content']['about-h4']

let aboutText = document.querySelector('.top-content .text-content ~ .text-content p')
aboutText.textContent = siteContent['main-content']['about-content']

//Divider Image
let dividerImg = document.querySelector('#middle-img')
dividerImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

//Bottom Content
const bottomContent = document.querySelector('.bottom-content')
bottomContent.style.display = 'flex';

let servicesTitle = document.querySelector('.bottom-content .text-content h4')
servicesTitle.textContent = siteContent['main-content']['services-h4']

let servicesText = document.querySelector('.bottom-content .text-content p')
servicesText.textContent = siteContent['main-content']['services-content']

let productTitle = document.querySelector('.bottom-content .text-content ~ .text-content h4')
productTitle.textContent = siteContent['main-content']['about-h4']

let productText = document.querySelector('.bottom-content .text-content ~ .text-content p')
productText.textContent = siteContent['main-content']['about-content']

let visionTitle = document.querySelector('.bottom-content .text-content ~ :last-child h4')
visionTitle.textContent = siteContent['main-content']['about-h4']

let visionText = document.querySelector('.bottom-content :last-child p')
visionText.textContent = siteContent['main-content']['about-content']

//Contact Section
let contactTitle = document.querySelector('.contact h4')
contactTitle.textContent = siteContent['contact']['contact-h4']

let cAddress = document.querySelector('.contact p')
cAddress.textContent = siteContent['contact']['address']

let cPhone = document.querySelector('.contact p ~ p')
cPhone.textContent = siteContent['contact']['phone']

let cEmail = document.querySelector('.contact :last-child')
cEmail.textContent = siteContent['contact']['email']

//Footer
let copyright = document.querySelector('footer p')
copyright.textContent = siteContent['footer']['copyright']