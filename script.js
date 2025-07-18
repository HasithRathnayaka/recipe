// Sample recipe data
const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        description: "A traditional Italian pasta dish with eggs, cheese, and pancetta",
        time: "20 mins",
        difficulty: "Easy",
        category: "dinner",
        tags: ["pasta", "italian", "quick"],
        image: "spaghetti-carbonara3.jpg.webp",
        ingredients: [
            "400g spaghetti",
            "200g pancetta or guanciale",
            "4 large eggs",
            "100g Pecorino Romano cheese, grated",
            "2 cloves garlic",
            "Black pepper",
            "Salt"
        ],
        instructions: [
            "Bring a large pot of salted water to boil and cook spaghetti according to package instructions.",
            "While pasta cooks, cut pancetta into small cubes and cook in a large pan until crispy.",
            "In a bowl, whisk together eggs, grated cheese, and black pepper.",
            "Drain pasta, reserving 1 cup of pasta water.",
            "Add hot pasta to the pan with pancetta and toss.",
            "Remove from heat and quickly mix in the egg mixture, adding pasta water as needed.",
            "Serve immediately with extra cheese and black pepper."
        ]
    },
    {
        id: 2,
        title: "Chocolate Chip Cookies",
        description: "Soft and chewy homemade chocolate chip cookies",
        time: "25 mins",
        difficulty: "Easy",
        category: "dessert",
        tags: ["cookies", "dessert", "baking"],
        image: "11ab26bc-5fc9-4efc-b89d-acc79e1feca3.webp",
        ingredients: [
            "2¼ cups all-purpose flour",
            "1 tsp baking soda",
            "1 tsp salt",
            "1 cup butter, softened",
            "¾ cup granulated sugar",
            "¾ cup brown sugar",
            "2 large eggs",
            "2 tsp vanilla extract",
            "2 cups chocolate chips"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Mix flour, baking soda, and salt in a bowl.",
            "Cream butter and both sugars until light and fluffy.",
            "Beat in eggs and vanilla extract.",
            "Gradually mix in flour mixture.",
            "Stir in chocolate chips.",
            "Drop rounded tablespoons of dough onto ungreased baking sheets.",
            "Bake for 9-11 minutes until golden brown.",
            "Cool on baking sheet for 2 minutes before transferring to wire rack."
        ]
    },
    {
        id: 3,
        title: "Avocado Toast",
        description: "Healthy and delicious avocado toast with a perfect seasoning",
        time: "10 mins",
        difficulty: "Easy",
        category: "breakfast",
        tags: ["healthy", "breakfast", "quick"],
        image: "Bacon-Avocado-Toast-with-toppings.webp",
        ingredients: [
            "2 slices whole grain bread",
            "1 ripe avocado",
            "1 tbsp lemon juice",
            "Salt and pepper to taste",
            "Red pepper flakes",
            "Cherry tomatoes (optional)",
            "Feta cheese (optional)"
        ],
        instructions: [
            "Toast bread slices until golden brown.",
            "Mash avocado in a bowl with lemon juice, salt, and pepper.",
            "Spread avocado mixture on toast.",
            "Top with cherry tomatoes and feta if desired.",
            "Sprinkle with red pepper flakes.",
            "Serve immediately."
        ]
    },
    {
        id: 4,
        title: "Greek Salad",
        description: "Fresh and vibrant Mediterranean salad with feta cheese",
        time: "15 mins",
        difficulty: "Easy",
        category: "lunch",
        tags: ["salad", "healthy", "mediterranean"],
        image: "greeksalad-4-scaled.jpg",
        ingredients: [
            "3 large tomatoes, cut into wedges",
            "1 cucumber, sliced",
            "1 red onion, thinly sliced",
            "200g feta cheese, cubed",
            "½ cup Kalamata olives",
            "¼ cup olive oil",
            "2 tbsp red wine vinegar",
            "1 tsp dried oregano",
            "Salt and pepper"
        ],
        instructions: [
            "Combine tomatoes, cucumber, and red onion in a large bowl.",
            "Add feta cheese and olives.",
            "Whisk together olive oil, vinegar, oregano, salt, and pepper.",
            "Pour dressing over salad and toss gently.",
            "Let sit for 10 minutes for flavors to meld.",
            "Serve chilled."
        ]
    },
    {
        id: 5,
        title: "Banana Smoothie",
        description: "Creamy and nutritious banana smoothie perfect for breakfast",
        time: "5 mins",
        difficulty: "Easy",
        category: "drinks",
        tags: ["smoothie", "healthy", "breakfast"],
        image: "221261-Peanut-Butter-Banana-Smoothie-DDMFS-4x3-79533eeb04c84b42aae440d643fc9a31.jpg",
        ingredients: [
            "2 ripe bananas",
            "1 cup milk of choice",
            "2 tbsp honey",
            "1 tsp vanilla extract",
            "½ cup ice cubes",
            "1 tbsp peanut butter (optional)",
            "Pinch of cinnamon"
        ],
        instructions: [
            "Add all ingredients to a blender.",
            "Blend until smooth and creamy.",
            "Taste and adjust sweetness if needed.",
            "Pour into glasses and serve immediately.",
            "Garnish with a slice of banana or cinnamon if desired."
        ]
    },
    {
        id: 6,
        title: "Energy Balls",
        description: "No-bake energy balls packed with nuts, dates, and chocolate",
        time: "15 mins",
        difficulty: "Easy",
        category: "snacks",
        tags: ["healthy", "no-bake", "energy"],
        image: "Dulce-de-Leche-Coconut-Energy-Balls-beauty-886-833d190da914428484fcf3a907dd2605.jpg",
        ingredients: [
            "1 cup pitted dates",
            "½ cup almonds",
            "½ cup rolled oats",
            "2 tbsp chia seeds",
            "2 tbsp cocoa powder",
            "1 tbsp coconut oil",
            "1 tsp vanilla extract",
            "Coconut flakes for rolling"
        ],
        instructions: [
            "Soak dates in warm water for 10 minutes if very dry.",
            "Process almonds and oats in food processor until coarsely ground.",
            "Add dates, chia seeds, cocoa powder, coconut oil, and vanilla.",
            "Process until mixture sticks together.",
            "Roll into small balls using your hands.",
            "Roll in coconut flakes if desired.",
            "Refrigerate for at least 30 minutes before serving.",
            "Store in refrigerator for up to 1 week."
        ]
    },
    {
        id: 8,
        title: "Indian Butter Chicken",
        description: "Creamy and rich North Indian curry with tender chicken in tomato sauce",
        time: "45 mins",
        difficulty: "Medium",
        category: "indian",
        tags: ["indian", "curry", "creamy"],
        image: "Easy-Butter-Chicken-TIMG.jpg",
        ingredients: [
            "500g chicken breast, cubed",
            "1 cup heavy cream",
            "400g canned tomatoes",
            "1 onion, chopped",
            "3 cloves garlic, minced",
            "1 tbsp ginger, minced",
            "2 tbsp butter",
            "1 tbsp garam masala",
            "1 tsp turmeric",
            "Salt and pepper"
        ],
        instructions: [
            "Marinate chicken with salt, pepper, and half the garam masala.",
            "Sauté onion, garlic, and ginger in butter until soft.",
            "Add tomatoes and remaining spices, cook for 10 minutes.",
            "Blend the sauce until smooth and return to pan.",
            "Add chicken and simmer for 15 minutes.",
            "Stir in cream and simmer for 5 more minutes.",
            "Serve with basmati rice or naan bread."
        ]
    },
    {
        id: 9,
        title: "Italian Risotto alla Milanese",
        description: "Classic Italian risotto with saffron and Parmesan cheese",
        time: "35 mins",
        difficulty: "Medium",
        category: "italian",
        tags: ["italian", "rice", "creamy"],
        image: "osso-bucco-alla-milanese-with-saffron-risotto-112941-2.jpg",
        ingredients: [
            "1½ cups Arborio rice",
            "4-5 cups warm chicken stock",
            "1 onion, finely chopped",
            "½ cup white wine",
            "Pinch of saffron threads",
            "3 tbsp butter",
            "½ cup Parmesan cheese, grated",
            "2 tbsp olive oil",
            "Salt and pepper"
        ],
        instructions: [
            "Soak saffron in 2 tbsp warm stock.",
            "Heat olive oil in a heavy-bottomed pan.",
            "Sauté onion until translucent.",
            "Add rice and stir for 2 minutes until coated.",
            "Add wine and stir until absorbed.",
            "Add stock one ladle at a time, stirring constantly.",
            "After 18-20 minutes, stir in saffron, butter, and Parmesan.",
            "Serve immediately."
        ]
    },
    {
        id: 10,
        title: "French Coq au Vin",
        description: "Traditional French chicken braised in red wine with vegetables",
        time: "1.5 hours",
        difficulty: "Hard",
        category: "french",
        tags: ["french", "wine", "braised"],
        image: "6a01156ed76240970c017ee8c62bc0970d-pi.jpg",
        ingredients: [
            "1 whole chicken, cut into pieces",
            "750ml red wine",
            "200g bacon, diced",
            "12 small onions",
            "250g mushrooms",
            "3 cloves garlic",
            "2 bay leaves",
            "Fresh thyme",
            "2 tbsp flour",
            "2 tbsp butter"
        ],
        instructions: [
            "Marinate chicken in wine for 2 hours.",
            "Remove chicken, strain and reserve wine.",
            "Cook bacon until crispy, remove and set aside.",
            "Brown chicken pieces in bacon fat.",
            "Add onions, mushrooms, and garlic.",
            "Sprinkle with flour and cook for 2 minutes.",
            "Add wine, herbs, and bacon back to pot.",
            "Simmer covered for 45 minutes until tender.",
            "Serve with crusty bread."
        ]
    },
    {
        id: 11,
        title: "Japanese Chicken Teriyaki",
        description: "Sweet and savory glazed chicken with authentic teriyaki sauce",
        time: "25 mins",
        difficulty: "Easy",
        category: "japanese",
        tags: ["japanese", "glazed", "sweet"],
        image: "chicken-teriyaki.webp",
        ingredients: [
            "4 chicken thighs",
            "3 tbsp soy sauce",
            "2 tbsp mirin",
            "2 tbsp sake",
            "1 tbsp sugar",
            "1 tsp ginger, grated",
            "1 clove garlic, minced",
            "1 tbsp oil",
            "Sesame seeds for garnish",
            "Green onions, sliced"
        ],
        instructions: [
            "Mix soy sauce, mirin, sake, sugar, ginger, and garlic for sauce.",
            "Heat oil in a pan and cook chicken skin-side down for 5 minutes.",
            "Flip chicken and cook for another 5 minutes.",
            "Pour sauce over chicken and simmer until glazed.",
            "Turn chicken to coat both sides with glaze.",
            "Garnish with sesame seeds and green onions.",
            "Serve with steamed rice."
        ]
    },
    {
        id: 12,
        title: "Thai Green Curry",
        description: "Aromatic and spicy Thai curry with coconut milk and fresh herbs",
        time: "30 mins",
        difficulty: "Medium",
        category: "thai",
        tags: ["thai", "curry", "coconut"],
        image: "vegan-green-curry-22-sq.jpg",
        ingredients: [
            "400ml coconut milk",
            "2 tbsp green curry paste",
            "300g chicken, sliced",
            "1 eggplant, cubed",
            "100g green beans",
            "2 tbsp fish sauce",
            "1 tbsp palm sugar",
            "Thai basil leaves",
            "2 kaffir lime leaves",
            "1 red chili, sliced"
        ],
        instructions: [
            "Heat thick coconut milk in a pan until oil separates.",
            "Add curry paste and fry until fragrant.",
            "Add chicken and cook until done.",
            "Add remaining coconut milk and bring to boil.",
            "Add vegetables and simmer until tender.",
            "Season with fish sauce and palm sugar.",
            "Add basil leaves and lime leaves.",
            "Serve with jasmine rice."
        ]
    },
    {
        id: 13,
        title: "Sri Lankan Fried Rice",
        description: "Aromatic Sri Lankan-style fried rice with spices and curry leaves",
        time: "25 mins",
        difficulty: "Easy",
        category: "sri-lankan",
        tags: ["sri-lankan", "rice", "spicy"],
        image: "Chilli-Garlic-Fried-Rice-6.webp",
        ingredients: [
            "3 cups cooked basmati rice (preferably day-old)",
            "300g chicken or prawns, diced",
            "2 eggs, beaten",
            "1 large onion, sliced",
            "3 cloves garlic, minced",
            "1 tbsp ginger, minced",
            "2 green chilies, sliced",
            "1 sprig curry leaves",
            "2 tbsp soy sauce",
            "1 tbsp fish sauce",
            "1 tsp turmeric powder",
            "1 tsp chili powder",
            "1/2 cup green beans, diced",
            "1/2 cup carrots, diced",
            "3 tbsp vegetable oil",
            "Salt to taste",
            "Spring onions for garnish"
        ],
        instructions: [
            "Heat oil in a large wok or pan over high heat.",
            "Add curry leaves and let them splutter.",
            "Add onions, garlic, ginger, and green chilies. Stir-fry until fragrant.",
            "Add chicken/prawns and cook until done.",
            "Push mixture to one side, scramble eggs on the other side.",
            "Add vegetables and stir-fry for 2-3 minutes.",
            "Add turmeric and chili powder, mix well.",
            "Add cooked rice and mix everything together.",
            "Add soy sauce and fish sauce, toss well.",
            "Cook for 3-4 minutes until rice is heated through.",
            "Garnish with spring onions and serve hot."
        ]
    },
    {
        id: 14,
        title: "Sri Lankan Kottu Roti",
        description: "Traditional Sri Lankan street food with chopped roti, vegetables, and spices",
        time: "30 mins",
        difficulty: "Medium",
        category: "sri-lankan",
        tags: ["sri-lankan", "street-food", "spicy"],
        image: "Sri-Lankan-Coconut-Kottu.webp",
        ingredients: [
            "4-6 roti (flatbread), chopped into strips",
            "300g chicken or beef, diced",
            "2 eggs, beaten",
            "1 large onion, sliced",
            "3 cloves garlic, minced",
            "1 tbsp ginger, minced",
            "2-3 green chilies, chopped",
            "1 sprig curry leaves",
            "1 large carrot, julienned",
            "1/2 cup cabbage, shredded",
            "2 tbsp tomato sauce",
            "1 tbsp soy sauce",
            "1 tsp chili powder",
            "1/2 tsp turmeric powder",
            "1/2 tsp garam masala",
            "3 tbsp vegetable oil",
            "Salt to taste",
            "Fresh coriander for garnish"
        ],
        instructions: [
            "Heat oil in a large wok or flat pan over high heat.",
            "Add curry leaves and let them splutter.",
            "Add onions, garlic, ginger, and green chilies. Stir-fry until golden.",
            "Add meat and cook until browned and cooked through.",
            "Push meat to one side, scramble eggs on the other side.",
            "Add vegetables and stir-fry for 2-3 minutes.",
            "Add spices (chili powder, turmeric, garam masala) and mix well.",
            "Add chopped roti pieces and mix everything together.",
            "Add tomato sauce and soy sauce, toss well.",
            "Using two spatulas, chop and mix continuously for 5-7 minutes.",
            "The roti should be well mixed with all ingredients and slightly crispy.",
            "Garnish with fresh coriander and serve hot."
        ]
    }
];

// DOM elements
const recipeGrid = document.getElementById('recipeGrid');
const recipeSlideshow = document.getElementById('recipeSlideshow');
const slideIndicators = document.getElementById('slideIndicators');
const prevSlideBtn = document.getElementById('prevSlide');
const nextSlideBtn = document.getElementById('nextSlide');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const modal = document.getElementById('recipeModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const categoryCards = document.querySelectorAll('.category-card');

// Slideshow variables
let currentSlide = 0;
let slideInterval;
let isAutoPlaying = true;
let autoAdvanceSpeed = 3000; // 3 seconds for optimal auto-advance
const featuredRecipes = recipes.slice(0, 6); // Show more recipes in slideshow

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeSlideshow();
    displayRecipes(recipes);
    setupEventListeners();
    setupSmoothScrolling();
    
    // Start slideshow automatically after a short delay
    setTimeout(() => {
        startSlideshow();
        addAutoplayIndicator();
    }, 1000);
});

// Display recipes
function displayRecipes(recipesToShow) {
    recipeGrid.innerHTML = '';
    
    if (recipesToShow.length === 0) {
        recipeGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #666; font-size: 1.2rem;">No recipes found. Try a different search term.</p>';
        return;
    }
    
    recipesToShow.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipeGrid.appendChild(recipeCard);
    });
}

// Create recipe card
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.setAttribute('data-recipe-id', recipe.id);
    
    const imageContent = recipe.image 
        ? `<img src="${recipe.image}" alt="${recipe.title}" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-utensils\\'></i>'">`
        : `<i class="fas fa-utensils"></i>`;
    
    card.innerHTML = `
        <div class="recipe-image">
            ${imageContent}
        </div>
        <div class="recipe-content">
            <h3 class="recipe-title">${recipe.title}</h3>
            <p class="recipe-description">${recipe.description}</p>
            <div class="recipe-meta">
                <div class="recipe-time">
                    <i class="fas fa-clock"></i>
                    <span>${recipe.time}</span>
                </div>
                <div class="recipe-difficulty">
                    <i class="fas fa-chart-bar"></i>
                    <span>${recipe.difficulty}</span>
                </div>
            </div>
            <div class="recipe-tags">
                ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => showRecipeDetail(recipe));
    
    return card;
}

// Show recipe detail in modal
function showRecipeDetail(recipe) {
    const detailHTML = `
        <div class="recipe-detail">
            <div class="recipe-detail-header">
                <h2 class="recipe-detail-title">${recipe.title}</h2>
                <p style="color: #666; font-size: 1.1rem; margin-bottom: 2rem;">${recipe.description}</p>
                <div class="recipe-detail-meta">
                    <div class="recipe-detail-info">
                        <i class="fas fa-clock"></i>
                        <span>${recipe.time}</span>
                    </div>
                    <div class="recipe-detail-info">
                        <i class="fas fa-chart-bar"></i>
                        <span>${recipe.difficulty}</span>
                    </div>
                    <div class="recipe-detail-info">
                        <i class="fas fa-tags"></i>
                        <span>${recipe.category}</span>
                    </div>
                </div>
            </div>
            
            <div class="ingredients-instructions">
                <div class="ingredients">
                    <h3><i class="fas fa-list"></i> Ingredients</h3>
                    <ul>
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="instructions">
                    <h3><i class="fas fa-clipboard-list"></i> Instructions</h3>
                    <ol>
                        ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                    </ol>
                </div>
            </div>
        </div>
    `;
    
    modalContent.innerHTML = detailHTML;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Search functionality
function searchRecipes(query) {
    const filteredRecipes = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase()) ||
        recipe.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
        recipe.category.toLowerCase().includes(query.toLowerCase())
    );
    
    displayRecipes(filteredRecipes);
    
    // Update subtitle to show search results
    const subtitle = document.querySelector('.section-subtitle');
    if (subtitle) {
        if (query) {
            subtitle.textContent = `Search Results for "${query}" (${filteredRecipes.length} found)`;
        } else {
            subtitle.textContent = 'All Recipes';
        }
    }
    
    // Scroll to recipes section with offset for navbar
    setTimeout(() => scrollToSection('recipes'), 100);
}

// Filter by category
function filterByCategory(category) {
    const filteredRecipes = recipes.filter(recipe => 
        recipe.category === category
    );
    
    displayRecipes(filteredRecipes);
    
    // Update subtitle to show category filter
    const subtitle = document.querySelector('.section-subtitle');
    if (subtitle) {
        const categoryName = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
        subtitle.textContent = `${categoryName} Recipes (${filteredRecipes.length} found)`;
    }
    
    // Scroll to recipes section with offset for navbar
    setTimeout(() => scrollToSection('recipes'), 100);
}

// Custom scroll function to handle fixed navbar
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navbar = document.querySelector('.navbar');
    
    if (section && navbar) {
        const navbarHeight = navbar.offsetHeight;
        const sectionTop = section.offsetTop - navbarHeight - 30; // Extra 30px padding for better visibility
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Slideshow functionality
function initializeSlideshow() {
    if (!recipeSlideshow || !slideIndicators) return;
    
    // Create slides
    featuredRecipes.forEach((recipe, index) => {
        const slide = createSlide(recipe, index);
        recipeSlideshow.appendChild(slide);
    });
    
    // Create indicators
    featuredRecipes.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.className = `slide-indicator ${index === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => goToSlide(index));
        slideIndicators.appendChild(indicator);
    });
    
    // Show first slide
    if (featuredRecipes.length > 0) {
        document.querySelector('.recipe-slide').classList.add('active');
    }
}

function createSlide(recipe, index) {
    const slide = document.createElement('div');
    slide.className = `recipe-slide ${index === 0 ? 'active' : ''}`;
    
    const imageContent = recipe.image 
        ? `<img src="${recipe.image}" alt="${recipe.title}" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-utensils\\'></i>'">`
        : `<i class="fas fa-utensils"></i>`;
    
    slide.innerHTML = `
        <div class="slide-content">
            <div class="slide-image">
                ${imageContent}
            </div>
            <div class="slide-info">
                <h3 class="slide-title">${recipe.title}</h3>
                <p class="slide-description">${recipe.description}</p>
                <div class="slide-meta">
                    <div class="slide-meta-item">
                        <i class="fas fa-clock"></i>
                        <span>${recipe.time}</span>
                    </div>
                    <div class="slide-meta-item">
                        <i class="fas fa-chart-bar"></i>
                        <span>${recipe.difficulty}</span>
                    </div>
                    <div class="slide-meta-item">
                        <i class="fas fa-tags"></i>
                        <span>${recipe.category}</span>
                    </div>
                </div>
                <div class="slide-tags">
                    ${recipe.tags.map(tag => `<span class="slide-tag">${tag}</span>`).join('')}
                </div>
                <button class="slide-button" onclick="showRecipeDetail(recipes[${recipe.id - 1}])">
                    View Recipe
                </button>
            </div>
        </div>
    `;
    
    return slide;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % featuredRecipes.length;
    updateSlideshow();
    if (isAutoPlaying) {
        startProgressBar();
    }
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + featuredRecipes.length) % featuredRecipes.length;
    updateSlideshow();
    if (isAutoPlaying) {
        startProgressBar();
    }
}

function goToSlide(index) {
    currentSlide = index;
    updateSlideshow();
    resetSlideshow();
    if (isAutoPlaying) {
        startProgressBar();
    }
}

function updateSlideshow() {
    const slides = document.querySelectorAll('.recipe-slide');
    const indicators = document.querySelectorAll('.slide-indicator');
    
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
    
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function startSlideshow() {
    if (!isAutoPlaying) return;
    slideInterval = setInterval(nextSlide, autoAdvanceSpeed);
}

function stopSlideshow() {
    clearInterval(slideInterval);
}

function resetSlideshow() {
    stopSlideshow();
    if (isAutoPlaying) {
        setTimeout(startSlideshow, 500); // Short delay before restarting
    }
}

function toggleAutoplay() {
    isAutoPlaying = !isAutoPlaying;
    if (isAutoPlaying) {
        startSlideshow();
        updateAutoplayButton();
    } else {
        stopSlideshow();
        updateAutoplayButton();
    }
}

function addAutoplayIndicator() {
    const slideshowContainer = document.querySelector('.recipe-slideshow-container');
    if (!slideshowContainer) return;
    
    // Add progress bar for auto-advance
    const progressBar = document.createElement('div');
    progressBar.className = 'slide-progress';
    progressBar.innerHTML = '<div class="slide-progress-bar" id="slideProgressBar"></div>';
    
    slideshowContainer.appendChild(progressBar);
    
    startProgressBar();
}

function updateAutoplayButton() {
    const autoplayBtn = document.getElementById('autoplayToggle');
    if (!autoplayBtn) return;
    
    const icon = autoplayBtn.querySelector('i');
    if (isAutoPlaying) {
        icon.className = 'fas fa-pause';
        autoplayBtn.title = 'Pause Autoplay';
    } else {
        icon.className = 'fas fa-play';
        autoplayBtn.title = 'Resume Autoplay';
    }
}

function startProgressBar() {
    const progressBar = document.getElementById('slideProgressBar');
    if (!progressBar || !isAutoPlaying) return;
    
    progressBar.style.width = '0%';
    progressBar.style.transition = `width ${autoAdvanceSpeed}ms linear`;
    
    // Start progress animation
    setTimeout(() => {
        progressBar.style.width = '100%';
    }, 50);
    
    // Reset progress bar when slide changes
    setTimeout(() => {
        if (isAutoPlaying) {
            startProgressBar();
        }
    }, autoAdvanceSpeed);
}

// Setup event listeners
function setupEventListeners() {
    // Slideshow controls
    if (nextSlideBtn) {
        nextSlideBtn.addEventListener('click', () => {
            nextSlide();
            resetSlideshow();
        });
    }
    
    if (prevSlideBtn) {
        prevSlideBtn.addEventListener('click', () => {
            prevSlide();
            resetSlideshow();
        });
    }
    
    // Pause slideshow on hover
    if (recipeSlideshow) {
        recipeSlideshow.addEventListener('mouseenter', () => {
            stopSlideshow();
            const progressBar = document.getElementById('slideProgressBar');
            if (progressBar) {
                progressBar.style.animationPlayState = 'paused';
            }
        });
        
        recipeSlideshow.addEventListener('mouseleave', () => {
            if (isAutoPlaying) {
                startSlideshow();
                startProgressBar();
            }
        });
    }
    
    // Search functionality
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            searchRecipes(query);
        } else {
            displayRecipes(recipes);
        }
    });
    
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                searchRecipes(query);
            } else {
                displayRecipes(recipes);
            }
        }
    });
    
    // Clear search when input is empty
    searchInput.addEventListener('input', (e) => {
        if (e.target.value === '') {
            displayRecipes(recipes);
            // Reset subtitle
            const subtitle = document.querySelector('.section-subtitle');
            if (subtitle) {
                subtitle.textContent = 'All Recipes';
            }
        }
    });
    
    // Modal functionality
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Mobile navigation
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Category filtering
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            filterByCategory(category);
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#fff';
            navbar.style.backdropFilter = 'none';
        }
    });
    
    // Active navigation highlight
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            if (targetId) {
                scrollToSection(targetId);
            }
        });
    });
}

// Add loading animation
function showLoading() {
    recipeGrid.innerHTML = `
        <div class="loading" style="grid-column: 1/-1;">
            <div class="spinner"></div>
        </div>
    `;
}

// Add animation on scroll
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    document.querySelectorAll('.recipe-card, .category-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(animateOnScroll, 100);
});

// Add recipe functionality (for future enhancement)
function addRecipe(newRecipe) {
    recipes.push({
        ...newRecipe,
        id: recipes.length + 1
    });
    displayRecipes(recipes);
}

// Export functions for potential future use
window.recipeApp = {
    recipes,
    displayRecipes,
    searchRecipes,
    filterByCategory,
    scrollToSection,
    addRecipe
};
