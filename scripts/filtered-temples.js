// filtered-temples.js

document.addEventListener('DOMContentLoaded', () => {
  // FOOTER YEAR
  document.getElementById('currentyear').textContent = new Date().getFullYear();

  // LAST MODIFIED
  document.getElementById('lastModified').textContent =
    'Last Modified: ' + document.lastModified;

  // HAMBURGER MENU
  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('main-nav');

  menuBtn.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    menuBtn.textContent = opened ? '✕' : '☰';
    menuBtn.setAttribute('aria-expanded', opened);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 800) {
      nav.classList.remove('open');
      menuBtn.textContent = '☰';
      menuBtn.setAttribute('aria-expanded', false);
    }
  });

  // TEMPLE DATA
  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // 5 extra temples
    {
      templeName: "Salt Lake",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 382207,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/92c33bcbf9cf85483e008d6871f8ced5f6d7b661/full/400%2C250/0/default"
    },
    {
      templeName: "Rome Italy",
      location: "Rome, Italy",
      dedicated: "2019, March, 10",
      area: 41010,
      imageUrl: "https://churchofjesuschrist.org/imgs/60ecad34b8ccba920297633d3f3b4763a7785667/full/400%2C250/0/default"
    },
    {
      templeName: "Freiberg Germany",
      location: "Freiberg, Germany",
      dedicated: "1985, June, 29",
      area: 10700,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/7f19f5c444af3ddcbda946c6977a460baeaea1d2/full/400%2C250/0/default"
    },
    {
      templeName: "Atlanta Georgia",
      location: "Atlanta, Georgia, United States",
      dedicated: "1983, June, 1",
      area: 34500,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/03131d9f986dcf2e484805ab861fd6b86d6c849c/full/400%2C250/0/default"
    },
    {
      templeName: "Bangkok Thailand",
      location: "Bangkok, Thailand",
      dedicated: "2023, October, 22",
      area: 48089,
      imageUrl: "https://www.churchofjesuschrist.org/imgs/3eee67fcff0e11ed95c2eeeeac1ec709d59302b7/full/400%2C250/0/default"
    }

  ];

  // RENDER FUNCTION
  function renderTemples(list) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';

    list.forEach(t => {
      const card = document.createElement('figure');

      const img = document.createElement('img');
      img.src = t.imageUrl;
      img.alt = t.templeName;
      img.loading = 'lazy';
      card.appendChild(img);

      const caption = document.createElement('figcaption');
      caption.innerHTML = `
        <strong>${t.templeName}</strong><br>
        ${t.location}<br>
        Dedicated: ${t.dedicated}<br>
        Area: ${t.area.toLocaleString()} sq ft
      `;
      card.appendChild(caption);

      gallery.appendChild(card);
    });
  }

  // INITIAL RENDER
  renderTemples(temples);

  // FILTERING
  document.querySelectorAll('#main-nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const choice = link.dataset.filter;

      let filtered = temples;
      if (choice === 'old') {
        filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      } else if (choice === 'new') {
        filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      } else if (choice === 'large') {
        filtered = temples.filter(t => t.area > 90000);
      } else if (choice === 'small') {
        filtered = temples.filter(t => t.area < 10000);
      }
      renderTemples(filtered);
    });
  });
});
