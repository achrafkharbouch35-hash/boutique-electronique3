/* =========================================================
   CHIHAJA — TECH & MOBILE
   JavaScript principal
========================================================= */


/* =========================================================
   CONFIGURATION
========================================================= */

const WHATSAPP_NUMBER = "212600000000";


/* =========================================================
   PRODUCTS
========================================================= */

const products = [

    {
        id: 1,
        brand: "Apple",
        name: "iPhone 16 Pro",
        cat: "smartphones",
        price: 13990,
        old: 14990,
        badge: "BEST",
        type: "phone",
        newest: 16,
        glow: "#c6ff3820",
        desc: "Le smartphone pro nouvelle génération, pensé pour la performance, la photo et la création.",
        specs: {
            Écran: '6.3" OLED',
            Stockage: "256 Go",
            Réseau: "5G",
            Garantie: "12 mois"
        }
    },

    {
        id: 2,
        brand: "Samsung",
        name: "Galaxy S25 Ultra",
        cat: "smartphones",
        price: 12990,
        old: 13990,
        badge: "−7%",
        type: "phone",
        newest: 15,
        glow: "#68e5ff20",
        desc: "Un flagship ultra complet avec écran immersif et performances premium.",
        specs: {
            Écran: '6.9" AMOLED',
            Stockage: "256 Go",
            Réseau: "5G",
            Garantie: "12 mois"
        }
    },

    {
        id: 3,
        brand: "Xiaomi",
        name: "Redmi Note 14 Pro",
        cat: "smartphones",
        price: 3290,
        old: 3690,
        badge: "DEAL",
        type: "phone",
        newest: 12,
        glow: "#c6ff381a",
        desc: "Un excellent équilibre entre écran, autonomie, photo et performances.",
        specs: {
            Écran: '6.67" AMOLED',
            Stockage: "256 Go",
            Réseau: "5G",
            Garantie: "12 mois"
        }
    },

    {
        id: 4,
        brand: "Apple",
        name: "MacBook Air M4",
        cat: "pc",
        price: 11990,
        old: 12990,
        badge: "NEW",
        type: "laptop",
        newest: 18,
        glow: "#68e5ff1c",
        desc: "Ultra fin, silencieux et rapide, conçu pour travailler et créer partout.",
        specs: {
            Écran: '13.6" Retina',
            RAM: "16 Go",
            Stockage: "256 Go SSD",
            Garantie: "12 mois"
        }
    },

    {
        id: 5,
        brand: "ASUS",
        name: "ROG Zephyrus G14",
        cat: "pc",
        price: 15990,
        old: 17490,
        badge: "GAMING",
        type: "laptop",
        newest: 14,
        glow: "#c6ff381c",
        desc: "Puissance gaming dans un format compact et premium.",
        specs: {
            Écran: '14" 3K OLED',
            RAM: "32 Go",
            GPU: "RTX",
            Garantie: "12 mois"
        }
    },

    {
        id: 6,
        brand: "Lenovo",
        name: "IdeaPad Slim 5",
        cat: "pc",
        price: 6790,
        old: 7290,
        badge: "−7%",
        type: "laptop",
        newest: 9,
        glow: "#68e5ff17",
        desc: "Un portable polyvalent pour les études et la productivité.",
        specs: {
            Écran: '15.6" FHD',
            RAM: "16 Go",
            Stockage: "512 Go SSD",
            Garantie: "12 mois"
        }
    },

    {
        id: 7,
        brand: "Apple",
        name: "iPad Air M3",
        cat: "tablettes",
        price: 6990,
        old: 7490,
        badge: "NEW",
        type: "tablet",
        newest: 17,
        glow: "#68e5ff20",
        desc: "Une tablette puissante et légère pour travailler, étudier et créer.",
        specs: {
            Écran: '11" Liquid Retina',
            Stockage: "128 Go",
            Puce: "Apple M3",
            Garantie: "12 mois"
        }
    },

    {
        id: 8,
        brand: "Samsung",
        name: "Galaxy Tab S10",
        cat: "tablettes",
        price: 7490,
        old: 7990,
        badge: "DEAL",
        type: "tablet",
        newest: 11,
        glow: "#c6ff381a",
        desc: "Grand écran AMOLED et expérience premium pour le travail et le divertissement.",
        specs: {
            Écran: '12.4" AMOLED',
            Stockage: "256 Go",
            Stylet: "Inclus",
            Garantie: "12 mois"
        }
    },

    {
        id: 9,
        brand: "Xiaomi",
        name: "Pad 7",
        cat: "tablettes",
        price: 3790,
        old: 4190,
        badge: "−10%",
        type: "tablet",
        newest: 10,
        glow: "#68e5ff19",
        desc: "Une tablette moderne, fluide et polyvalente à prix compétitif.",
        specs: {
            Écran: '11.2" 3.2K',
            Stockage: "128 Go",
            Réseau: "Wi-Fi",
            Garantie: "12 mois"
        }
    },

    {
        id: 10,
        brand: "Apple",
        name: "AirPods Pro",
        cat: "audio",
        price: 2390,
        old: 2690,
        badge: "−11%",
        type: "headphone",
        newest: 8,
        glow: "#68e5ff1c",
        desc: "Réduction de bruit active et audio immersif.",
        specs: {
            ANC: "Active",
            Audio: "Spatial Audio",
            Autonomie: "Jusqu'à 6 h",
            Garantie: "12 mois"
        }
    },

    {
        id: 11,
        brand: "JBL",
        name: "Tune 770NC",
        cat: "audio",
        price: 990,
        old: 1190,
        badge: "DEAL",
        type: "headphone",
        newest: 7,
        glow: "#c6ff3818",
        desc: "Casque sans fil avec ANC et autonomie prolongée.",
        specs: {
            ANC: "Oui",
            Bluetooth: "5.3",
            Autonomie: "70 h",
            Garantie: "12 mois"
        }
    },

    {
        id: 12,
        brand: "Anker",
        name: "PowerCore 20K",
        cat: "accessoires",
        price: 490,
        old: 590,
        badge: "−17%",
        type: "accessory",
        newest: 6,
        glow: "#c6ff381b",
        desc: "Batterie externe haute capacité avec recharge rapide.",
        specs: {
            Capacité: "20 000 mAh",
            Port: "USB-C",
            Charge: "Power Delivery",
            Garantie: "12 mois"
        }
    },

    {
        id: 13,
        brand: "Logitech",
        name: "MX Keys Mini",
        cat: "accessoires",
        price: 890,
        old: null,
        badge: "NEW",
        type: "accessory",
        newest: 13,
        glow: "#68e5ff1b",
        desc: "Clavier compact premium pour une frappe confortable.",
        specs: {
            Connexion: "Bluetooth",
            Format: "Compact",
            Rétroéclairage: "Oui",
            Garantie: "12 mois"
        }
    },

    {
        id: 14,
        brand: "Samsung",
        name: "Chargeur 25W USB-C",
        cat: "accessoires",
        price: 190,
        old: 240,
        badge: "−21%",
        type: "accessory",
        newest: 4,
        glow: "#c6ff3818",
        desc: "Chargeur compact et rapide pour appareils compatibles.",
        specs: {
            Puissance: "25 W",
            Port: "USB-C",
            Charge: "Fast Charge",
            Garantie: "6 mois"
        }
    },

    {
        id: 15,
        brand: "Logitech",
        name: "G502 Gaming",
        cat: "gaming",
        price: 690,
        old: 790,
        badge: "GAMING",
        type: "accessory",
        newest: 5,
        glow: "#68e5ff18",
        desc: "Souris gaming précise avec capteur haute performance.",
        specs: {
            Capteur: "HERO",
            DPI: "25 600",
            Boutons: "11",
            Garantie: "12 mois"
        }
    },

    {
        id: 16,
        brand: "HP",
        name: "Pavilion 15",
        cat: "pc",
        price: 7590,
        old: null,
        badge: "NEW",
        type: "laptop",
        newest: 19,
        glow: "#68e5ff1c",
        desc: "Un PC portable élégant et performant pour le quotidien.",
        specs: {
            Écran: '15.6" FHD',
            RAM: "16 Go",
            Stockage: "512 Go SSD",
            Garantie: "12 mois"
        }
    }

];


/* =========================================================
   CATEGORIES
========================================================= */

const categories = [

    {
        id: "smartphones",
        symbol: "◈",
        name: "Smartphones",
        desc: "Flagships & essentiels"
    },

    {
        id: "pc",
        symbol: "▱",
        name: "PC & Laptops",
        desc: "Workstations & gaming"
    },

    {
        id: "tablettes",
        symbol: "▤",
        name: "Tablettes",
        desc: "Mobilité & créativité"
    },

    {
        id: "audio",
        symbol: "◉",
        name: "Audio",
        desc: "Immersive sound"
    },

    {
        id: "accessoires",
        symbol: "⌁",
        name: "Accessoires",
        desc: "Les indispensables"
    },

    {
        id: "gaming",
        symbol: "⌖",
        name: "Gaming",
        desc: "Gear & performance"
    }

];


/* =========================================================
   HELPERS
========================================================= */

const $ = selector =>
    document.querySelector(selector);

const $$ = selector =>
    [...document.querySelectorAll(selector)];


function money(number) {

    return Number(number)
        .toLocaleString("fr-FR") + " DH";

}


function wa(message) {

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

}


function safeJSON(key, fallback = []) {

    try {

        const value =
            localStorage.getItem(key);

        if (!value) {
            return fallback;
        }

        const parsed =
            JSON.parse(value);

        return Array.isArray(parsed)
            ? parsed
            : fallback;

    } catch (error) {

        console.warn(
            `Erreur localStorage : ${key}`,
            error
        );

        return fallback;
    }

}


/* =========================================================
   STATE
========================================================= */

let cart =
    safeJSON("nx-cart");

let favs =
    safeJSON("nx-favs");

let filter = "all";

let query = "";

let favoritesOnly = false;


/* =========================================================
   STORAGE
========================================================= */

function save() {

    localStorage.setItem(
        "nx-cart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "nx-favs",
        JSON.stringify(favs)
    );

}


/* =========================================================
   PRODUCT ART
========================================================= */

function art(type) {

    return `
        <div
            class="art ${type}"
            aria-hidden="true"
        ></div>
    `;

}


/* =========================================================
   CATEGORIES
========================================================= */

function renderCats() {

    const grid =
        $("#catGrid");

    if (!grid) return;

    grid.innerHTML =
        categories.map(category => `

            <article
                class="cat reveal"
                data-cat="${category.id}"
                tabindex="0"
                role="button"
            >

                <div class="symbol">
                    ${category.symbol}
                </div>

                <div>

                    <h3>
                        ${category.name}
                    </h3>

                    <p>
                        ${category.desc}
                    </p>

                </div>

            </article>

        `).join("");


    $$(".cat").forEach(card => {

        const selectCategory = () => {

            filter =
                card.dataset.cat;

            favoritesOnly =
                false;

            setFilters();

            renderProducts();

            $("#shop")?.scrollIntoView({
                behavior: "smooth"
            });

        };


        card.addEventListener(
            "click",
            selectCategory
        );


        card.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    selectCategory();

                }

            }
        );

    });


    observe();

}


/* =========================================================
   FILTERS
========================================================= */

function setFilters() {

    const filters =
        $("#filters");

    if (!filters) return;


    const cats = [

        {
            id: "all",
            name: "Tous"
        },

        ...categories.map(
            category => ({
                id: category.id,
                name: category.name
            })
        )

    ];


    filters.innerHTML =
        cats.map(category => `

            <button
                type="button"
                class="filter ${
                    !favoritesOnly &&
                    filter === category.id
                        ? "active"
                        : ""
                }"
                data-f="${category.id}"
            >
                ${category.name}
            </button>

        `).join("");


    $$(".filter").forEach(button => {

        button.addEventListener(
            "click",
            () => {

                filter =
                    button.dataset.f;

                favoritesOnly =
                    false;

                setFilters();

                renderProducts();

            }
        );

    });

}


/* =========================================================
   PRODUCT LIST
========================================================= */

function listProducts() {

    const normalizedQuery =
        query.trim().toLowerCase();


    let result =
        products.filter(product => {

            const matchesCategory =
                filter === "all" ||
                product.cat === filter;


            const searchableText = `

                ${product.brand}
                ${product.name}
                ${product.cat}
                ${product.desc}

            `.toLowerCase();


            const matchesSearch =
                !normalizedQuery ||
                searchableText.includes(
                    normalizedQuery
                );


            const matchesFavorites =
                !favoritesOnly ||
                favs.includes(product.id);


            return (
                matchesCategory &&
                matchesSearch &&
                matchesFavorites
            );

        });


    const sort =
        $("#sort");


    if (sort) {

        const value =
            sort.value;


        if (value === "priceAsc") {

            result.sort(
                (a, b) =>
                    a.price - b.price
            );

        }


        if (value === "priceDesc") {

            result.sort(
                (a, b) =>
                    b.price - a.price
            );

        }


        if (value === "newest") {

            result.sort(
                (a, b) =>
                    b.newest - a.newest
            );

        }

    }


    return result;

}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts() {

    const container =
        $("#products");

    const empty =
        $("#empty");


    if (!container) return;


    const list =
        listProducts();


    container.innerHTML =
        list.map(product => {

            const discount =
                product.old
                    ? Math.round(
                        (
                            1 -
                            product.price /
                            product.old
                        ) * 100
                    )
                    : 0;


            const isFavorite =
                favs.includes(
                    product.id
                );


            return `

                <article
                    class="product reveal"
                    data-product="${product.id}"
                >

                    <div
                        class="visual"
                        style="--glow:${product.glow}"
                    >

                        ${
                            product.badge
                                ? `
                                    <span class="badge">
                                        ${product.badge}
                                    </span>
                                `
                                : ""
                        }


                        <button
                            type="button"
                            class="heart ${
                                isFavorite
                                    ? "active"
                                    : ""
                            }"
                            data-fav="${product.id}"
                            aria-label="${
                                isFavorite
                                    ? "Retirer des favoris"
                                    : "Ajouter aux favoris"
                            }"
                        >
                            ${
                                isFavorite
                                    ? "♥"
                                    : "♡"
                            }
                        </button>


                        ${art(product.type)}

                    </div>


                    <div class="info">

                        <div class="brand">
                            ${product.brand}
                        </div>


                        <h3>
                            ${product.name}
                        </h3>


                        <div class="prices">

                            <span class="now">
                                ${money(product.price)}
                            </span>

                            ${
                                product.old
                                    ? `
                                        <span class="old">
                                            ${money(product.old)}
                                        </span>
                                    `
                                    : ""
                            }


                            ${
                                discount
                                    ? `
                                        <span class="off">
                                            −${discount}%
                                        </span>
                                    `
                                    : ""
                            }

                        </div>


                        <div class="product-actions">

                            <button
                                type="button"
                                class="details"
                                data-detail="${product.id}"
                            >
                                Détails
                            </button>


                            <button
                                type="button"
                                class="add"
                                data-add="${product.id}"
                            >
                                Ajouter
                            </button>

                        </div>

                    </div>

                </article>

            `;

        }).join("");


    if (empty) {

        empty.hidden =
            list.length !== 0;

    }


    bindProducts();

    observe();

}


/* =========================================================
   PRODUCT EVENTS
========================================================= */

function bindProducts() {


    $$("[data-add]").forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    add(
                        Number(
                            button.dataset.add
                        )
                    );

                }
            );

        }
    );


    $$("[data-fav]").forEach(
        button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    favorite(
                        Number(
                            button.dataset.fav
                        )
                    );

                }
            );

        }
    );


    $$("[data-detail]").forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    openModal(
                        Number(
                            button.dataset.detail
                        )
                    );

                }
            );

        }
    );

}


/* =========================================================
   CART
========================================================= */

function add(id) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) return;


    const item =
        cart.find(
            cartItem =>
                cartItem.id === id
        );


    if (item) {

        item.qty += 1;

    } else {

        cart.push({
            id,
            qty: 1
        });

    }


    save();

    renderCart();

    counts();

    toast(
        "Ajouté au panier ✓"
    );

    openDrawer();

}


/* =========================================================
   FAVORITES
========================================================= */

function favorite(id) {

    if (
        !products.some(
            product =>
                product.id === id
        )
    ) {
        return;
    }


    if (favs.includes(id)) {

        favs =
            favs.filter(
                favoriteId =>
                    favoriteId !== id
            );

        toast(
            "Retiré des favoris"
        );

    } else {

        favs = [
            ...favs,
            id
        ];

        toast(
            "Ajouté aux favoris ♥"
        );

    }


    save();

    counts();

    renderProducts();

}


/* =========================================================
   COUNTERS
========================================================= */

function counts() {

    const cartCount =
        $("#cartCount");

    const favCount =
        $("#favCount");


    if (cartCount) {

        cartCount.textContent =
            cart.reduce(
                (total, item) =>
                    total + item.qty,
                0
            );

    }


    if (favCount) {

        favCount.textContent =
            favs.length;

    }

}


/* =========================================================
   RENDER CART
========================================================= */

function renderCart() {

    const cartList =
        $("#cartList");

    const cartEmpty =
        $("#cartEmpty");

    const cartBottom =
        $("#cartBottom");

    const totalElement =
        $("#total");


    if (!cartList) return;


    cart =
        cart.filter(
            item =>
                products.some(
                    product =>
                        product.id === item.id
                )
        );


    const hasCart =
        cart.length > 0;


    if (cartEmpty) {

        cartEmpty.style.display =
            hasCart
                ? "none"
                : "block";

    }


    if (cartBottom) {

        cartBottom.style.display =
            hasCart
                ? "block"
                : "none";

    }


    cartList.innerHTML =
        cart.map(item => {

            const product =
                products.find(
                    product =>
                        product.id === item.id
                );


            if (!product) return "";


            return `

                <div class="cart-item">

                    <div class="cart-thumb">
                        ${art(product.type)}
                    </div>


                    <div>

                        <h4>
                            ${product.name}
                        </h4>

                        <p>
                            ${money(product.price)}
                        </p>


                        <div class="qty">

                            <button
                                type="button"
                                data-q="-1"
                                data-id="${product.id}"
                                aria-label="Diminuer"
                            >
                                −
                            </button>


                            <span>
                                ${item.qty}
                            </span>


                            <button
                                type="button"
                                data-q="1"
                                data-id="${product.id}"
                                aria-label="Augmenter"
                            >
                                +
                            </button>

                        </div>

                    </div>


                    <button
                        type="button"
                        class="remove"
                        data-remove="${product.id}"
                        aria-label="Supprimer"
                    >
                        ×
                    </button>

                </div>

            `;

        }).join("");


    $$("[data-q]").forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    qty(
                        Number(
                            button.dataset.id
                        ),
                        Number(
                            button.dataset.q
                        )
                    );

                }
            );

        }
    );


    $$("[data-remove]").forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    remove(
                        Number(
                            button.dataset.remove
                        )
                    );

                }
            );

        }
    );


    const total =
        cart.reduce(
            (sum, item) => {

                const product =
                    products.find(
                        product =>
                            product.id === item.id
                    );

                return product
                    ? sum +
                        product.price *
                        item.qty
                    : sum;

            },
            0
        );


    if (totalElement) {

        totalElement.textContent =
            money(total);

    }


    const orderWa =
        $("#orderWa");


    if (orderWa) {

        const lines =
            cart.map(item => {

                const product =
                    products.find(
                        product =>
                            product.id === item.id
                    );

                return product
                    ? `• ${product.name} × ${item.qty} — ${money(product.price * item.qty)}`
                    : "";

            }).filter(Boolean);


        const message = `

Bonjour,

Je souhaite commander les produits suivants :

${lines.join("\n")}

Total estimé : ${money(total)}

Merci de confirmer :

• la disponibilité
• les frais de livraison
• le délai de livraison
• les modalités de paiement

Merci.

        `.trim();


        orderWa.href =
            wa(message);

    }


    save();

}


/* =========================================================
   CHANGE QUANTITY
========================================================= */

function qty(id, difference) {

    const item =
        cart.find(
            cartItem =>
                cartItem.id === id
        );


    if (!item) return;


    item.qty += difference;


    if (item.qty <= 0) {

        cart =
            cart.filter(
                cartItem =>
                    cartItem.id !== id
            );

    }


    save();

    renderCart();

    counts();

}


/* =========================================================
   REMOVE
========================================================= */

function remove(id) {

    cart =
        cart.filter(
            item =>
                item.id !== id
        );


    save();

    renderCart();

    counts();

    toast(
        "Produit supprimé"
    );

}


/* =========================================================
   CART DRAWER
========================================================= */

function openDrawer() {

    const drawer =
        $("#drawer");

    const backdrop =
        $("#backdrop");


    if (drawer) {

        drawer.classList.add(
            "open"
        );

        drawer.setAttribute(
            "aria-hidden",
            "false"
        );

    }


    if (backdrop) {

        backdrop.classList.add(
            "open"
        );

    }


    document.body.classList.add(
        "lock"
    );

}


function closeDrawer() {

    const drawer =
        $("#drawer");

    const backdrop =
        $("#backdrop");


    if (drawer) {

        drawer.classList.remove(
            "open"
        );

        drawer.setAttribute(
            "aria-hidden",
            "true"
        );

    }


    if (backdrop) {

        backdrop.classList.remove(
            "open"
        );

    }


    document.body.classList.remove(
        "lock"
    );

}


/* =========================================================
   MODAL
========================================================= */

function openModal(id) {

    const product =
        products.find(
            item =>
                item.id === id
        );


    const modal =
        $("#modal");

    const body =
        $("#modalBody");


    if (
        !product ||
        !modal ||
        !body
    ) {
        return;
    }


    body.innerHTML = `

        <div class="modal-content">

            <div class="modal-visual">

                ${art(product.type)}

            </div>


            <div class="modal-info">

                <div class="brand">
                    ${product.brand}
                </div>


                <h2>
                    ${product.name}
                </h2>


                <div class="prices">

                    <span class="now">
                        ${money(product.price)}
                    </span>

                    ${
                        product.old
                            ? `
                                <span class="old">
                                    ${money(product.old)}
                                </span>
                            `
                            : ""
                    }

                </div>


                <p>
                    ${product.desc}
                </p>


                <div class="specs">

                    ${
                        Object.entries(
                            product.specs
                        ).map(
                            ([key, value]) => `

                                <div>

                                    <span>
                                        ${key}
                                    </span>

                                    <b>
                                        ${value}
                                    </b>

                                </div>

                            `
                        ).join("")
                    }

                </div>


                <button
                    type="button"
                    class="btn primary"
                    id="modalAdd"
                    style="margin-top:22px;width:100%;"
                >
                    Ajouter au panier ↗
                </button>


                <a
                    class="btn secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="${wa(
                        `Bonjour, je souhaite avoir des informations sur ${product.name} (${money(product.price)}).`
                    )}"
                    style="margin-top:8px;width:100%;"
                >
                    Demander sur WhatsApp ↗
                </a>

            </div>

        </div>

    `;


    modal.classList.add(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "lock"
    );


    const modalAdd =
        $("#modalAdd");


    modalAdd?.addEventListener(
        "click",
        () => {

            add(product.id);

            closeModal();

        }
    );

}


function closeModal() {

    const modal =
        $("#modal");


    if (!modal) return;


    modal.classList.remove(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "lock"
    );

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function toast(message) {

    const element =
        $("#toast");


    if (!element) return;


    clearTimeout(
        toastTimer
    );


    element.textContent =
        message;


    element.classList.add(
        "show"
    );


    toastTimer =
        setTimeout(
            () => {

                element.classList.remove(
                    "show"
                );

            },
            1800
        );

}


/* =========================================================
   SEARCH
========================================================= */

function createSearchUI() {

    if (
        $("#chiSearchOverlay")
    ) {
        return;
    }


    const overlay =
        document.createElement(
            "div"
        );


    overlay.id =
        "chiSearchOverlay";


    overlay.innerHTML = `

        <div class="chi-search-box">

            <button
                type="button"
                id="chiSearchClose"
                aria-label="Fermer la recherche"
            >
                ×
            </button>


            <div class="kicker">

                <span></span>

                SEARCH CHIHAJA

            </div>


            <h2>
                Find your
                <em>tech.</em>
            </h2>


            <input
                id="chiSearchInput"
                type="search"
                placeholder="iPhone, Samsung, MacBook..."
                autocomplete="off"
            >


            <p>
                Recherchez par produit,
                marque ou catégorie.
            </p>

        </div>

    `;


    document.body.appendChild(
        overlay
    );


    const input =
        $("#chiSearchInput");

    const close =
        $("#chiSearchClose");


    input?.addEventListener(
        "input",
        event => {

            query =
                event.target.value;

            favoritesOnly =
                false;

            renderProducts();

        }
    );


    close?.addEventListener(
        "click",
        closeSearch
    );


    overlay.addEventListener(
        "click",
        event => {

            if (
                event.target === overlay
            ) {

                closeSearch();

            }

        }
    );

}


function openSearch() {

    createSearchUI();


    const overlay =
        $("#chiSearchOverlay");

    const input =
        $("#chiSearchInput");


    if (!overlay) return;


    overlay.classList.add(
        "open"
    );


    document.body.classList.add(
        "lock"
    );


    setTimeout(
        () => input?.focus(),
        50
    );

}


function closeSearch() {

    const overlay =
        $("#chiSearchOverlay");

    const input =
        $("#chiSearchInput");


    if (overlay) {

        overlay.classList.remove(
            "open"
        );

    }


    if (input) {

        input.value = "";

    }


    query = "";

    document.body.classList.remove(
        "lock"
    );


    renderProducts();

}


/* =========================================================
   COUNTDOWN
========================================================= */

function countdown() {

    const day =
        $("#dd");

    const hour =
        $("#hh");

    const minute =
        $("#mm");

    const second =
        $("#ss");


    if (
        !day ||
        !hour ||
        !minute ||
        !second
    ) {
        return;
    }


    let end =
        Number(
            localStorage.getItem(
                "nx-end"
            )
        );


    if (
        !end ||
        end <= Date.now()
    ) {

        end =
            Date.now() +
            78 *
            60 *
            60 *
            1000;


        localStorage.setItem(
            "nx-end",
            String(end)
        );

    }


    function update() {

        let remaining =
            Math.max(
                0,
                end - Date.now()
            );


        const days =
            Math.floor(
                remaining /
                86400000
            );


        remaining %= 86400000;


        const hours =
            Math.floor(
                remaining /
                3600000
            );


        remaining %= 3600000;


        const minutes =
            Math.floor(
                remaining /
                60000
            );


        const seconds =
            Math.floor(
                (remaining %
                    60000) /
                1000
            );


        day.textContent =
            String(days)
                .padStart(2, "0");


        hour.textContent =
            String(hours)
                .padStart(2, "0");


        minute.textContent =
            String(minutes)
                .padStart(2, "0");


        second.textContent =
            String(seconds)
                .padStart(2, "0");

    }


    update();

    setInterval(
        update,
        1000
    );

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

let observer;


function observe() {

    const elements =
        $$(".reveal:not(.visible)");


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            element =>
                element.classList.add(
                    "visible"
                )
        );

        return;

    }


    if (!observer) {

        observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: .08
                }
            );

    }


    elements.forEach(
        element =>
            observer.observe(
                element
            )
    );

}


/* =========================================================
   MOBILE MENU
========================================================= */

function initMobileMenu() {

    const hamburger =
        $("#hamb");

    const mobileNav =
        $("#mobileNav");


    if (
        !hamburger ||
        !mobileNav
    ) {
        return;
    }


    hamburger.addEventListener(
        "click",
        () => {

            const isOpen =
                mobileNav.classList.toggle(
                    "open"
                );


            hamburger.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );


    $$(".mobile-nav a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    mobileNav.classList.remove(
                        "open"
                    );

                    hamburger.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

}


/* =========================================================
   HEADER SCROLL
========================================================= */

function initHeader() {

    const header =
        $("#header");


    if (!header) return;


    function updateHeader() {

        header.classList.toggle(
            "scrolled",
            window.scrollY > 10
        );

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    updateHeader();

}


/* =========================================================
   EVENTS
========================================================= */

function initEvents() {

    /* SEARCH */

    const searchButton =
        $("#searchBtn");

    searchButton?.addEventListener(
        "click",
        openSearch
    );


    /* CART */

    const cartButton =
        $("#cartBtn");

    const closeCartButton =
        $("#closeCart");

    const backdrop =
        $("#backdrop");


    cartButton?.addEventListener(
        "click",
        openDrawer
    );


    closeCartButton?.addEventListener(
        "click",
        closeDrawer
    );


    backdrop?.addEventListener(
        "click",
        closeDrawer
    );


    /* CLEAR CART */

    const clearCart =
        $("#clearCart");


    clearCart?.addEventListener(
        "click",
        () => {

            if (!cart.length) {
                return;
            }


            cart = [];


            save();

            renderCart();

            counts();

            toast(
                "Panier vidé"
            );

        }
    );


    /* MODAL */

    const modalClose =
        $("#modalClose");

    const modal =
        $("#modal");


    modalClose?.addEventListener(
        "click",
        closeModal
    );


    modal?.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                closeModal();

            }

        }
    );


    /* SORT */

    const sort =
        $("#sort");


    sort?.addEventListener(
        "change",
        renderProducts
    );


    /* ALL PRODUCTS */

    const allProducts =
        $("#allProducts");


    allProducts?.addEventListener(
        "click",
        event => {

            event.preventDefault();

            filter = "all";

            query = "";

            favoritesOnly = false;

            setFilters();

            renderProducts();

            $("#shop")?.scrollIntoView({
                behavior: "smooth"
            });

        }
    );


    /* FAVORITES */

    const favButton =
        $("#favBtn");


    favButton?.addEventListener(
        "click",
        () => {

            if (!favs.length) {

                toast(
                    "Aucun favori pour le moment"
                );

                return;

            }


            favoritesOnly = true;

            filter = "all";

            query = "";

            setFilters();

            renderProducts();

            $("#shop")?.scrollIntoView({
                behavior: "smooth"
            });

        }
    );


    /* WHATSAPP */

    const message =
        "Bonjour, je souhaite avoir des informations sur vos produits high-tech.";


    const contactWa =
        $("#contactWa");

    const footerWa =
        $("#footerWa");


    if (contactWa) {

        contactWa.href =
            wa(message);

    }


    if (footerWa) {

        footerWa.href =
            wa(message);

    }


    /* ESCAPE */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key !== "Escape"
            ) {
                return;
            }


            closeDrawer();

            closeModal();

            closeSearch();


            const mobileNav =
                $("#mobileNav");

            const hamburger =
                $("#hamb");


            mobileNav?.classList.remove(
                "open"
            );


            hamburger?.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );

}


/* =========================================================
   INITIALIZATION
========================================================= */

function init() {

    renderCats();

    setFilters();

    renderProducts();

    renderCart();

    counts();

    countdown();

    observe();

    initMobileMenu();

    initHeader();

    initEvents();

}


/* =========================================================
   START
========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        init
    );

} else {

    init();

}
