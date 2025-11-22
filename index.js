// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
// карта team
document.addEventListener("DOMContentLoaded", function () {
    const products = [
        {
            name: "Андріан Іванюк",
            img: "/img/team/team_1.jpg",
            position: "Ідейний рушій і натхненник міських змін",
            social: [
          
            ],
        },
        {
            name: "Роман Пушкар",
            img: "/img/team/team_2.jpg",
            position: "Організатор подій, які об’єднують людей",
            social: [
                // { icon: "bi bi-instagram", link: "https://www.instagram.com/pushkar_roma/" },
                // { icon: "bi bi-youtube", link: "https://www.youtube.com/" },
                // { icon: "bi bi-tiktok", link: "https://www.tiktok.com/" }
            ],
        },

        {
            name: "Ілона Бондар",
            img: "/img/team/team_3.jpg",
            position: "Голос спільноти та творець атмосфери",
            social: [],
        },
        {
            name: "Богдан Коваленко",
            img: "/img/team/team_4.jpg",
            position: "Архітектор міських ідей та рішень",
            social: [],
        },
        {
            name: "Анастасія Дяченко",
            img: "/img/team/team_5.jpg",
            position: "Кураторка натхнення й міських історій",
            social: [],
        },
        {
            name: "Діана Романюк",
            img: "/img/team/team_6.jpg",
            position: "Мисливиця за новими форматами і подіями",
            social: [],
        },
        {
            name: "Назар Поліщук",
            img: "/img/team/team_11.jpg",
            position: "Той, хто бачить місто у деталях",
            social: [],
        },
        {
            name: "Ілля Шевчук",
            img: "/img/team/team_10.jpg",
            position: "Інженер добрих змін",
            social: [],
        },
        {
            name: "Вікторія Петренко",
            img: "/img/team/team_7.jpg",
            position: "Координаторка краси та гармонії простору",
            social: [],
        },
        {
            name: "Євген Ткаченко",
            img: "/img/team/team_9.jpg",
            position: "Технічний маг і цифровий ентузіаст",
            social: [],
        },
        {
            name: "Софія Савчук",
            img: "/img/team/team_8.jpg",
            position: "Хранителька балансу та командного настрою",
            social: [],
        },
        
    ];

    const productsContainer = document.getElementById("products_1");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    if (!productsContainer || !loadMoreBtn) {
        console.error("❌ Не знайдено контейнер або кнопку!");
        return;
    }

    let visibleCount = 4; // скільки показуємо спочатку

    // 🔹 Функція для створення картки
    function createCard(product, i) {
        const card = document.createElement("div");
        card.className = "col-lg-3 col-md-6 team-member0";
        card.setAttribute("data-aos", "zoom-in");
        card.setAttribute("data-aos-delay", 200 + i * 100);

        // Генеруємо посилання на соцмережі
        const socialLinks = product.social
            .map(
                (s) =>
                    `<a href="${s.link}" target="_blank" rel="noopener noreferrer"><i class="${s.icon}"></i></a>`
            )
            .join("");

        card.innerHTML = `
            <div class="team-member">
              <div class="member-img rounded-3">
                <img src="${product.img}" class="img-fluid rounded-3 img_team" alt="${product.name}">
              </div>
              <div class="member-info text-center">
                <h4 class="m-0 pt-3 pb-2">${product.name}</h4>
                <span class="m-0 p-0 fst-italic small">${product.position}</span>
                <div class="team_social pt-3">
                  ${socialLinks}
                </div>
              </div>
            </div>
        `;
        return card;
    }

    // 🔹 Початкове відображення
    function renderInitial() {
        for (let i = 0; i < visibleCount && i < products.length; i++) {
            productsContainer.appendChild(createCard(products[i], i));
        }

        loadMoreBtn.style.display =
            products.length > visibleCount ? "inline-block" : "none";
    }

    // 🔹 Завантажити ще
    function loadMore() {
        const nextVisible = visibleCount + 4;
        for (
            let i = visibleCount;
            i < nextVisible && i < products.length;
            i++
        ) {
            productsContainer.appendChild(createCard(products[i], i));
        }
        visibleCount = Math.min(nextVisible, products.length);

        if (visibleCount >= products.length) loadMoreBtn.style.display = "none";

        if (typeof AOS !== "undefined") AOS.refresh();
    }

    loadMoreBtn.addEventListener("click", loadMore);
    renderInitial();
});

// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
// карта proect
document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products_2");
    const loadMoreBtn = document.getElementById("loadMoreProjects");
    if (!productsContainer || !loadMoreBtn) return;

    let visibleCount = 3;
    let iso;
    let currentFilter = "*";
    const products = [
        {
            name: "Корольовський районний суд",
            img: "/img/project/project_2.png",
            category: "Фото",
            tags: ["Житомир", "Україна"],
            year: "2025",
            linkDetails: "#",
        },
        {
            name: "Площа Перемоги вдень — місто, що живе ритмом людей",
            img: "/img/project/project_1.jpg",
            category: "Фото",
            tags: ["Житомир", "Україна"],
            year: "2025",
            linkDetails: "#",
        },
        {
            name: "Площа Перемоги вночі — коли місто засинає, але світло триває",
            img: "/img/project/project_3.png",
            category: "Фото",
            tags: ["Житомир", "Україна"],
            year: "2025",
            linkDetails: "#",
        },
        {
            name: "Свято-Михайлівський кафедральний собор",
            img: "/img/project/project_4.jpg",
            category: "Фото",
            tags: ["Житомир", "Україна"],
            year: "2025",
            linkDetails: "#",
        },
        {
            name: "Кафедральний костел Святої Софії ",
            img: "https://vandrivka.com.ua/wp-content/uploads/2019/07/Kafedralnij-kostel-Svyatoyi-Sofiyi-m.-ZHitomir-2.jpg",
            category: "Фото",
            tags: ["Житомир", "Україна"],
            year: "2025",
            linkDetails: "#",
        },
        {
            name: "Вулиця Михайлівська – серце Житомира, яке пульсує історією та життям міста! ",
            img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80_%D0%B2_%D0%B8%D1%8E%D0%BD%D0%B5_2020_%D0%B3%D0%BE%D0%B4%D0%B0%2C_34.jpg",
            category: "Фото",
            tags: ["Житомир", "Україна"],
            year: "2025",
            linkDetails: "#",
        },

    ];

    function createCard(product) {
        const card = document.createElement("div");
        card.className = `col-lg-4 col-md-6 portfolio-item isotope-item filter-${product.year}`;
        card.innerHTML = `
            <div class="portfolio-card">
                <div class="portfolio-image-container ">
                    <img src="${product.img}" alt="${
            product.name
        }" class="img-fluid" loading="lazy">
                    <div class="portfolio-overlay">
                        <div class="portfolio-info">
                            <span class="project-category">${
                                product.category
                            }</span>
                            <h4>${product.name}</h4>
                        </div>
                        <div class="portfolio-actions">
                            <a href="${
                                product.linkDetails
                            }" class="portfolio-details "><i class="bi bi-arrow-right
                            "></i></a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-meta">
                    <div class="project-tags">${product.tags
                        .map((t) => `<span class="tag">${t}</span>`)
                        .join("")}</div>
                    <div class="project-year">${product.year}</div>
                </div>
            </div>
        `;
        return card;
    }

    function updateLoadMoreButton() {
        const filteredProducts = products.filter(
            (p) =>
                currentFilter === "*" || `.filter-${p.year}` === currentFilter
        );
        loadMoreBtn.style.display =
            filteredProducts.length > visibleCount &&
            filteredProducts.length > 3
                ? "inline-block"
                : "none";
    }

    function initIsotope() {
        imagesLoaded(productsContainer, function () {
            iso = new Isotope(productsContainer, {
                itemSelector: ".portfolio-item",
                layoutMode: "masonry",
                transitionDuration: "0.0s",
            });

            const filters = document.querySelectorAll(".portfolio-filters li");
            filters.forEach((filter) => {
                filter.addEventListener("click", function () {
                    filters.forEach((f) => f.classList.remove("filter-active"));
                    this.classList.add("filter-active");

                    currentFilter = this.getAttribute("data-filter");
                    visibleCount = 3;

                    // --- Очищаємо контейнер ---
                    const allItems =
                        productsContainer.querySelectorAll(".portfolio-item");
                    allItems.forEach((item) => item.remove());

                    // --- Додаємо перші 3 елементи фільтру ---
                    const filteredProducts = products.filter(
                        (p) =>
                            currentFilter === "*" ||
                            `.filter-${p.year}` === currentFilter
                    );
                    const initialProducts = filteredProducts.slice(
                        0,
                        visibleCount
                    );
                    initialProducts.forEach((p) =>
                        productsContainer.appendChild(createCard(p))
                    );

                    // --- Оновлюємо Isotope ---
                    iso.reloadItems();
                    iso.arrange({ filter: currentFilter });

                    updateLoadMoreButton();
                });
            });

            updateLoadMoreButton();
        });
    }

    function renderInitial() {
        const initialProducts = products.slice(0, visibleCount);
        initialProducts.forEach((p) =>
            productsContainer.appendChild(createCard(p))
        );
        visibleCount = initialProducts.length;
        initIsotope();
    }

    function loadMore() {
        const filteredProducts = products.filter(
            (p) =>
                currentFilter === "*" || `.filter-${p.year}` === currentFilter
        );
        const nextVisible = visibleCount + 3;
        const newCards = [];
        for (
            let i = visibleCount;
            i < nextVisible && i < filteredProducts.length;
            i++
        ) {
            const card = createCard(filteredProducts[i]);
            productsContainer.appendChild(card);
            newCards.push(card);
        }
        visibleCount = Math.min(nextVisible, filteredProducts.length);

        if (iso) {
            iso.appended(newCards);
            iso.layout();
        }

        updateLoadMoreButton();
    }

    loadMoreBtn.addEventListener("click", loadMore);
    renderInitial();
});

// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО
// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО

// КНОПКА БУРГЕР НА МАЛЕНЬКИХ ЕКРАНАХ ШРЬ ПРАЦБВАЛО

document.addEventListener("DOMContentLoaded", function () {
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    const header = document.querySelector("#header");
    const body = document.querySelector("body");
    const navMenu = document.querySelector("#navmenu ul");

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener("click", function (e) {
            e.preventDefault();
            body.classList.toggle("mobile-nav-active");

            // Змінюємо іконку (бургер <-> хрестик)
            this.classList.toggle("bi-list");
            this.classList.toggle("bi-x");
        });
    }

    // Закривання меню після кліку по пункту
    document.querySelectorAll("#navmenu a").forEach((link) => {
        link.addEventListener("click", function () {
            if (body.classList.contains("mobile-nav-active")) {
                body.classList.remove("mobile-nav-active");
                mobileNavToggle.classList.add("bi-list");
                mobileNavToggle.classList.remove("bi-x");
            }
        });
    });
});
















// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення
// форма надсилання повідомлення

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // зупиняємо стандартну відправку (щоб не було переходу)
  
    const form = event.target;
    const status = document.getElementById("form-status");
    const data = new FormData(form);
  
    // Показуємо індикатор завантаження
    status.style.display = "block";
    status.style.color = "#00ccff";
    status.textContent = "⏳ Відправляється...";
  
    fetch(form.action, {
      method: form.method,
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        form.reset();
        status.style.display = "block";
        status.style.color = "#00ff99";
        status.textContent = "✅ Повідомлення надіслано!";
      } else {
        status.style.display = "block";
        status.style.color = "red";
        status.textContent = "❌ Помилка при надсиланні. Спробуйте ще раз.";
      }
    }).catch(() => {
      status.style.display = "block";
      status.style.color = "red";
      status.textContent = "❌ Виникла помилка при відправленні.";
    });
  });












  
