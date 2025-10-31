'use strict';

// ============================================
// NutriVerse - Daily Nutrition Facts App
// ============================================

// High-Quality Nutrition Facts Database
const nutritionFacts = [
  {
    category: 'Vitamins',
    title: 'Vitamin D: The Sunshine Nutrient',
    description: 'Vitamin D is unique because your body can produce it when your skin is exposed to sunlight. Just 10-15 minutes of midday sun exposure can generate about 10,000-25,000 IU of vitamin D.',
    details: [
      'Supports bone health by enhancing calcium absorption in the gut',
      'Plays a crucial role in immune system function and inflammation reduction',
      'May help prevent seasonal depression and improve mood',
      'Found in fatty fish (salmon, mackerel), egg yolks, and fortified foods'
    ],
    source: 'National Institutes of Health (NIH)'
  },
  {
    category: 'Minerals',
    title: 'Magnesium: The Relaxation Mineral',
    description: 'Magnesium is involved in over 300 enzymatic reactions in the body. Despite its importance, studies suggest that nearly 50% of Americans don\'t get enough magnesium from their diet.',
    details: [
      'Essential for muscle relaxation and preventing cramps',
      'Supports healthy sleep patterns by regulating neurotransmitters',
      'Helps maintain normal blood pressure and heart rhythm',
      'Rich sources include dark leafy greens, nuts, seeds, and whole grains'
    ],
    source: 'American Journal of Clinical Nutrition'
  },
  {
    category: 'Proteins',
    title: 'Complete vs. Incomplete Proteins',
    description: 'Complete proteins contain all nine essential amino acids that your body cannot produce on its own. Understanding this distinction is crucial for optimal nutrition, especially for plant-based diets.',
    details: [
      'Animal sources (meat, fish, eggs, dairy) are complete proteins',
      'Most plant sources are incomplete but can be combined (rice + beans)',
      'Quinoa, soy, and buckwheat are rare plant-based complete proteins',
      'Adults need approximately 0.8g of protein per kg of body weight daily'
    ],
    source: 'Journal of Nutrition Science'
  },
  {
    category: 'Antioxidants',
    title: 'Blueberries: Antioxidant Powerhouses',
    description: 'Blueberries have one of the highest antioxidant capacities among all fruits and vegetables. They contain anthocyanins, which give them their blue color and provide remarkable health benefits.',
    details: [
      'May improve memory and cognitive function, especially in older adults',
      'Help reduce DNA damage, which may slow aging at the cellular level',
      'Support heart health by reducing LDL cholesterol oxidation',
      'One cup provides 24% of daily vitamin C and 36% of vitamin K needs'
    ],
    source: 'Nutrients Journal'
  },
  {
    category: 'Hydration',
    title: 'Water: More Than Just Thirst Quenching',
    description: 'Your body is approximately 60% water, and even mild dehydration (1-2% of body weight) can impair physical performance and cognitive function. Proper hydration is fundamental to every bodily function.',
    details: [
      'Regulates body temperature through perspiration and respiration',
      'Aids digestion and nutrient absorption in the gastrointestinal tract',
      'Lubricates joints and cushions organs and tissues',
      'Recommendation: Divide your weight (lbs) by 2 = ounces of water daily'
    ],
    source: 'Journal of Applied Physiology'
  },
  {
    category: 'Fiber',
    title: 'Fiber: The Gut Health Champion',
    description: 'Dietary fiber isn\'t digested by your body, but it\'s essential for gut health. The average American consumes only 15g daily, while the recommendation is 25-38g depending on age and gender.',
    details: [
      'Feeds beneficial gut bacteria, promoting a healthy microbiome',
      'Helps regulate blood sugar levels and reduces diabetes risk',
      'Increases satiety and aids in weight management',
      'Excellent sources: legumes, oats, berries, avocados, and chia seeds'
    ],
    source: 'Gastroenterology Research and Practice'
  },
  {
    category: 'Omega-3',
    title: 'Omega-3 Fatty Acids: Brain Food',
    description: 'Omega-3s are essential fatty acids that your body cannot produce. EPA and DHA, found primarily in fatty fish, are critical for brain health and reducing inflammation throughout the body.',
    details: [
      'DHA makes up 40% of polyunsaturated fatty acids in your brain',
      'May reduce risk of heart disease by 15-30% according to studies',
      'Supports eye health and may prevent age-related macular degeneration',
      'Best sources: wild salmon, sardines, mackerel, walnuts, flaxseeds'
    ],
    source: 'Circulation Journal - American Heart Association'
  },
  {
    category: 'Phytonutrients',
    title: 'Lycopene: The Tomato\'s Secret Weapon',
    description: 'Lycopene is a powerful carotenoid that gives tomatoes their red color. Interestingly, cooked tomatoes provide more bioavailable lycopene than raw ones due to heat breaking down cell walls.',
    details: [
      'One of the most potent antioxidants found in common foods',
      'May reduce prostate cancer risk by up to 35% in regular consumers',
      'Supports cardiovascular health by reducing LDL cholesterol oxidation',
      'Also found in watermelon, pink grapefruit, and guava'
    ],
    source: 'Cancer Epidemiology, Biomarkers & Prevention'
  },
  {
    category: 'Vitamins',
    title: 'Vitamin K2: The Forgotten Vitamin',
    description: 'While Vitamin K1 is well-known for blood clotting, Vitamin K2 plays a distinct role in calcium metabolism, directing calcium to bones and teeth while preventing arterial calcification.',
    details: [
      'Works synergistically with Vitamin D for optimal bone health',
      'May reduce risk of heart disease by preventing calcium buildup in arteries',
      'Supports dental health and may prevent cavities',
      'Found in fermented foods (natto, sauerkraut), grass-fed dairy, egg yolks'
    ],
    source: 'Advances in Nutrition'
  },
  {
    category: 'Minerals',
    title: 'Iron: Essential for Energy',
    description: 'Iron is crucial for creating hemoglobin, the protein in red blood cells that carries oxygen throughout your body. Iron deficiency is the most common nutritional deficiency worldwide.',
    details: [
      'Heme iron (from meat) is absorbed 2-3x better than non-heme iron (plants)',
      'Vitamin C significantly enhances iron absorption when consumed together',
      'Women of reproductive age need 18mg daily vs. 8mg for men',
      'Best sources: red meat, poultry, lentils, spinach, fortified cereals'
    ],
    source: 'World Health Organization'
  },
  {
    category: 'Probiotics',
    title: 'Fermented Foods: Natural Probiotics',
    description: 'Fermented foods contain live beneficial bacteria that can colonize your gut. Your gut microbiome contains trillions of bacteria that influence everything from digestion to mental health.',
    details: [
      'May improve digestive issues like IBS and inflammatory bowel disease',
      'Support immune function (70% of immune system is in the gut)',
      'Can enhance mood through the gut-brain axis connection',
      'Top choices: yogurt, kefir, kimchi, sauerkraut, kombucha, miso'
    ],
    source: 'Nature Reviews Microbiology'
  },
  {
    category: 'Carbohydrates',
    title: 'Resistant Starch: The Prebiotic Carb',
    description: 'Resistant starch is a type of carbohydrate that resists digestion in the small intestine and feeds beneficial gut bacteria in the colon, acting as a prebiotic fiber.',
    details: [
      'Improves insulin sensitivity and blood sugar control',
      'Increases production of beneficial short-chain fatty acids',
      'Promotes feelings of fullness and may aid weight management',
      'Found in cooked and cooled potatoes/rice, green bananas, legumes'
    ],
    source: 'Critical Reviews in Food Science and Nutrition'
  },
  {
    category: 'Antioxidants',
    title: 'Dark Chocolate: Guilt-Free Indulgence',
    description: 'High-quality dark chocolate (70%+ cocoa) is loaded with antioxidants called flavonoids. In fact, cocoa has more antioxidant activity than most berries in laboratory tests.',
    details: [
      'May improve blood flow and lower blood pressure by 2-3 mmHg',
      'Contains compounds that can improve brain function and mood',
      'Rich in minerals: iron, magnesium, copper, and manganese',
      'Stick to 1-2 ounces daily to get benefits without excess sugar/calories'
    ],
    source: 'Frontiers in Nutrition'
  },
  {
    category: 'Vitamins',
    title: 'B-Complex Vitamins: Energy Metabolism',
    description: 'The B-vitamin family (B1, B2, B3, B5, B6, B7, B9, B12) works together to convert food into energy. Each plays unique roles, but they function best when consumed together.',
    details: [
      'B12 is only found naturally in animal products (critical for vegans)',
      'Folate (B9) is essential during pregnancy for neural tube development',
      'B6 supports neurotransmitter synthesis affecting mood and sleep',
      'Whole grains, meat, eggs, and leafy greens provide various B vitamins'
    ],
    source: 'The American Journal of Clinical Nutrition'
  },
  {
    category: 'Minerals',
    title: 'Zinc: The Immune Booster',
    description: 'Zinc is required for the function of over 300 enzymes and is crucial for immune system function. Even mild zinc deficiency can impair immune response and wound healing.',
    details: [
      'Taking zinc within 24 hours of cold symptoms may reduce duration',
      'Essential for protein synthesis and DNA production',
      'Supports sense of taste and smell (deficiency causes loss)',
      'Best sources: oysters, beef, pumpkin seeds, chickpeas, cashews'
    ],
    source: 'Journal of Immunology Research'
  },
  {
    category: 'Proteins',
    title: 'Collagen: Beyond Skin Deep',
    description: 'Collagen is the most abundant protein in your body, making up about 30% of total protein. It provides structure to skin, bones, tendons, ligaments, and connective tissues.',
    details: [
      'Production naturally decreases about 1% per year after age 20',
      'Vitamin C is essential for collagen synthesis',
      'Bone broth, fish with skin, and collagen supplements are sources',
      'May improve skin elasticity, joint pain, and bone density'
    ],
    source: 'Journal of Cosmetic Dermatology'
  },
  {
    category: 'Phytonutrients',
    title: 'Sulforaphane in Cruciferous Vegetables',
    description: 'Sulforaphane is a powerful compound found in cruciferous vegetables like broccoli. It activates your body\'s detoxification systems and may have anti-cancer properties.',
    details: [
      'Broccoli sprouts contain 10-100x more sulforaphane than mature broccoli',
      'May reduce risk of several types of cancer through various mechanisms',
      'Supports brain health and may improve autism symptoms in studies',
      'Also found in: Brussels sprouts, cabbage, cauliflower, kale'
    ],
    source: 'Proceedings of the National Academy of Sciences'
  },
  {
    category: 'Fats',
    title: 'Monounsaturated Fats: Heart-Healthy Choice',
    description: 'Monounsaturated fatty acids (MUFAs) are the primary fats in olive oil and avocados. The Mediterranean diet, rich in MUFAs, is associated with longevity and reduced disease risk.',
    details: [
      'May reduce bad (LDL) cholesterol while maintaining good (HDL) cholesterol',
      'Help reduce inflammation markers in the bloodstream',
      'Support insulin sensitivity and blood sugar control',
      'Sources: extra virgin olive oil, avocados, almonds, pecans, hazelnuts'
    ],
    source: 'European Journal of Clinical Nutrition'
  },
  {
    category: 'Minerals',
    title: 'Potassium: The Blood Pressure Regulator',
    description: 'Potassium works in opposition to sodium to regulate blood pressure and fluid balance. Most Americans consume too much sodium and too little potassium, creating an unhealthy imbalance.',
    details: [
      'Helps counteract sodium\'s effect on blood pressure',
      'Reduces risk of kidney stones and bone loss',
      'Supports proper muscle contraction and nerve signaling',
      'Rich sources: bananas, sweet potatoes, spinach, avocados, white beans'
    ],
    source: 'American Heart Association'
  },
  {
    category: 'Antioxidants',
    title: 'Green Tea: Ancient Medicine, Modern Science',
    description: 'Green tea contains catechins, particularly EGCG (epigallocatechin gallate), which is one of the most powerful compounds in any food. It\'s been consumed for thousands of years for health.',
    details: [
      'May boost metabolism and increase fat burning by 10-17%',
      'Powerful neuroprotective effects may reduce Alzheimer\'s risk',
      'May lower risk of type 2 diabetes by 18-42% in regular consumers',
      'Contains L-theanine which promotes calm alertness with caffeine'
    ],
    source: 'Chinese Medicine Journal'
  },
  {
    category: 'Vitamins',
    title: 'Vitamin E: The Cellular Protector',
    description: 'Vitamin E is a fat-soluble antioxidant that protects cell membranes from oxidative damage. It exists in eight different forms, with alpha-tocopherol being most important for humans.',
    details: [
      'Protects polyunsaturated fatty acids in cell membranes',
      'Supports immune function, especially in older adults',
      'May slow progression of age-related macular degeneration',
      'Best obtained from whole foods: nuts, seeds, spinach, avocado'
    ],
    source: 'Free Radical Biology and Medicine'
  },
  {
    category: 'Minerals',
    title: 'Selenium: The Thyroid Mineral',
    description: 'Selenium is essential for thyroid hormone metabolism and has powerful antioxidant properties. The amount in food varies greatly depending on soil selenium content where it\'s grown.',
    details: [
      'Required for conversion of T4 to active T3 thyroid hormone',
      'May reduce risk of certain cancers, particularly prostate cancer',
      'Supports male fertility and sperm motility',
      'Just 1-2 Brazil nuts daily provide the entire recommended intake'
    ],
    source: 'Thyroid Research Journal'
  },
  {
    category: 'Proteins',
    title: 'Leucine: The Muscle Building Amino Acid',
    description: 'Leucine is a branched-chain amino acid (BCAA) that serves as a key trigger for muscle protein synthesis. It\'s particularly important for maintaining muscle mass as we age.',
    details: [
      'Directly stimulates the mTOR pathway for muscle growth',
      'May help prevent age-related muscle loss (sarcopenia)',
      'Approximately 2-3g per meal optimally stimulates protein synthesis',
      'Rich in: chicken, beef, fish, eggs, dairy, soybeans, lentils'
    ],
    source: 'Journal of Nutrition and Metabolism'
  },
  {
    category: 'Phytonutrients',
    title: 'Curcumin: Turmeric\'s Active Compound',
    description: 'Curcumin gives turmeric its yellow color and remarkable anti-inflammatory properties. However, it\'s poorly absorbed unless consumed with black pepper (piperine), which increases absorption by 2000%.',
    details: [
      'Powerful anti-inflammatory effects comparable to some medications',
      'May improve memory and attention in older adults',
      'Supports joint health and may reduce arthritis symptoms',
      'Combine with black pepper and fat for optimal absorption'
    ],
    source: 'Journal of Medicinal Food'
  },
  {
    category: 'Fiber',
    title: 'Beta-Glucan: The Cholesterol Fighter',
    description: 'Beta-glucan is a soluble fiber found primarily in oats and barley. It forms a gel in your digestive system that binds to cholesterol-containing bile acids, preventing their absorption.',
    details: [
      'Can lower LDL cholesterol by 5-10% when consuming 3g daily',
      'Slows digestion and promotes stable blood sugar levels',
      'Enhances immune system function through gut bacteria',
      '3/4 cup dry oats provides about 3g of beta-glucan'
    ],
    source: 'American Journal of Clinical Nutrition'
  },
  {
    category: 'Hydration',
    title: 'Electrolytes: Beyond Sports Drinks',
    description: 'Electrolytes (sodium, potassium, magnesium, calcium) are minerals that carry electrical charges and are crucial for hydration, nerve signaling, and muscle function.',
    details: [
      'You lose electrolytes through sweat, especially during exercise',
      'Plain water alone may not fully rehydrate after intense exercise',
      'Natural sources: coconut water, watermelon, bananas, celery',
      'Most people don\'t need sports drinks for workouts under 60 minutes'
    ],
    source: 'Sports Medicine Journal'
  },
  {
    category: 'Antioxidants',
    title: 'Quercetin: Nature\'s Antihistamine',
    description: 'Quercetin is a flavonoid found in many fruits and vegetables. It has natural antihistamine and anti-inflammatory properties, making it popular for allergy relief.',
    details: [
      'May reduce allergic response by stabilizing mast cells',
      'Supports cardiovascular health by reducing blood pressure',
      'May enhance exercise performance and reduce fatigue',
      'Rich sources: onions (especially red), apples, berries, green tea'
    ],
    source: 'Molecules - International Journal'
  },
  {
    category: 'Vitamins',
    title: 'Vitamin A: Vision and Immunity',
    description: 'Vitamin A exists in two forms: retinol (animal sources) and beta-carotene (plant sources). Your body converts beta-carotene to retinol as needed, making carrots a vision-supporting food.',
    details: [
      'Essential for rhodopsin production, which enables night vision',
      'Critical for immune system function and fighting infections',
      'Supports skin health and cell growth throughout the body',
      'Sources: liver, sweet potatoes, carrots, spinach, mangoes'
    ],
    source: 'Journal of Clinical Medicine'
  },
  {
    category: 'Fats',
    title: 'Medium-Chain Triglycerides (MCTs)',
    description: 'MCTs are fatty acids with 6-12 carbon atoms, found primarily in coconut oil. They\'re metabolized differently than other fats, going directly to the liver for quick energy.',
    details: [
      'Rapidly converted to ketones, providing quick brain fuel',
      'May enhance weight loss by increasing calorie burning',
      'Easier to digest than long-chain triglycerides',
      'Sources: coconut oil, palm kernel oil, dairy products'
    ],
    source: 'Journal of the Academy of Nutrition and Dietetics'
  },
  {
    category: 'Minerals',
    title: 'Calcium: Beyond Bone Health',
    description: 'While famous for bone health, calcium is also critical for muscle contraction, nerve transmission, and blood clotting. Your body carefully regulates blood calcium levels, pulling from bones if dietary intake is insufficient.',
    details: [
      'Peak bone mass is built by age 30, making early intake crucial',
      'Vitamin D and K2 are essential for proper calcium utilization',
      'Dairy provides calcium, but also found in sardines, kale, almonds',
      'Adults need 1000-1200mg daily depending on age and gender'
    ],
    source: 'Osteoporosis International'
  }
];

// ============================================
// Application State
// ============================================

let currentFactIndex = 0;
let viewedFacts = new Set();
let favorites = new Set();

// ============================================
// DOM Elements
// ============================================

const elements = {
  dayNumber: document.getElementById('dayNumber'),
  category: document.getElementById('category'),
  categoryText: document.getElementById('categoryText'),
  factTitle: document.getElementById('factTitle'),
  factDescription: document.getElementById('factDescription'),
  factDetails: document.getElementById('factDetails'),
  sourceInfo: document.getElementById('sourceInfo'),
  prevBtn: document.getElementById('prevBtn'),
  nextBtn: document.getElementById('nextBtn'),
  randomBtn: document.getElementById('randomBtn'),
  totalFacts: document.getElementById('totalFacts'),
  factsViewed: document.getElementById('factsViewed'),
  favoritesCount: document.getElementById('favoritesCount'),
  factCard: document.querySelector('.fact-card')
};

// ============================================
// Core Functions
// ============================================

/**
 * Display a nutrition fact
 */
function displayFact(index) {
  const fact = nutritionFacts[index];
  
  // Add transition effect
  elements.factCard.classList.add('transitioning');
  
  setTimeout(() => {
    // Update content
    elements.dayNumber.textContent = String(index + 1).padStart(3, '0');
    elements.categoryText.textContent = fact.category;
    elements.factTitle.textContent = fact.title;
    elements.factDescription.textContent = fact.description;
    
    // Update details
    elements.factDetails.innerHTML = fact.details
      .map(detail => `
        <div class="detail-item">
          <span class="detail-icon">▸</span>
          <span class="detail-text">${detail}</span>
        </div>
      `)
      .join('');
    
    // Update source
    elements.sourceInfo.innerHTML = `
      <span class="source-label">Data Source:</span>
      <span class="source-text">${fact.source}</span>
    `;
    
    // Update category badge color based on category
    updateCategoryStyle(fact.category);
    
    // Track viewed facts
    viewedFacts.add(index);
    updateStats();
    
    // Save state to localStorage
    saveState();
    
    // Remove transition class
    setTimeout(() => {
      elements.factCard.classList.remove('transitioning');
    }, 300);
  }, 300);
}

/**
 * Update category badge styling based on category
 */
function updateCategoryStyle(category) {
  const categoryColors = {
    'Vitamins': { color: '#a8c7fa', glow: 'rgba(168, 199, 250, 0.4)' },
    'Minerals': { color: '#86efac', glow: 'rgba(134, 239, 172, 0.4)' },
    'Proteins': { color: '#fca5a5', glow: 'rgba(252, 165, 165, 0.4)' },
    'Antioxidants': { color: '#c4b5fd', glow: 'rgba(196, 181, 253, 0.4)' },
    'Hydration': { color: '#7dd3fc', glow: 'rgba(125, 211, 252, 0.4)' },
    'Fiber': { color: '#fdba74', glow: 'rgba(253, 186, 116, 0.4)' },
    'Omega-3': { color: '#5eead4', glow: 'rgba(94, 234, 212, 0.4)' },
    'Phytonutrients': { color: '#d8b4fe', glow: 'rgba(216, 180, 254, 0.4)' },
    'Probiotics': { color: '#fda4af', glow: 'rgba(253, 164, 175, 0.4)' },
    'Carbohydrates': { color: '#fed7aa', glow: 'rgba(254, 215, 170, 0.4)' },
    'Fats': { color: '#fef08a', glow: 'rgba(254, 240, 138, 0.4)' }
  };
  
  const colors = categoryColors[category] || categoryColors['Vitamins'];
  elements.category.style.borderColor = colors.color;
  elements.category.style.boxShadow = `0 0 20px ${colors.glow}`;
  elements.category.style.background = `${colors.color}15`;
}

/**
 * Navigate to next fact
 */
function nextFact() {
  currentFactIndex = (currentFactIndex + 1) % nutritionFacts.length;
  displayFact(currentFactIndex);
}

/**
 * Navigate to previous fact
 */
function previousFact() {
  currentFactIndex = (currentFactIndex - 1 + nutritionFacts.length) % nutritionFacts.length;
  displayFact(currentFactIndex);
}

/**
 * Show random fact
 */
function randomFact() {
  const randomIndex = Math.floor(Math.random() * nutritionFacts.length);
  currentFactIndex = randomIndex;
  displayFact(currentFactIndex);
}

/**
 * Update statistics display
 */
function updateStats() {
  elements.totalFacts.textContent = nutritionFacts.length;
  elements.factsViewed.textContent = viewedFacts.size;
  elements.favoritesCount.textContent = favorites.size;
}

/**
 * Save state to localStorage
 */
function saveState() {
  const state = {
    currentFactIndex,
    viewedFacts: Array.from(viewedFacts),
    favorites: Array.from(favorites)
  };
  localStorage.setItem('nutriverse_state', JSON.stringify(state));
}

/**
 * Load state from localStorage
 */
function loadState() {
  const saved = localStorage.getItem('nutriverse_state');
  if (saved) {
    try {
      const state = JSON.parse(saved);
      currentFactIndex = state.currentFactIndex || 0;
      viewedFacts = new Set(state.viewedFacts || []);
      favorites = new Set(state.favorites || []);
    } catch (error) {
      console.error('Error loading saved state:', error);
    }
  }
}

/**
 * Get fact of the day based on current date
 */
function getFactOfTheDay() {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff = today - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  
  return dayOfYear % nutritionFacts.length;
}

/**
 * Initialize keyboard navigation
 */
function initKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      previousFact();
    } else if (e.key === 'ArrowRight') {
      nextFact();
    } else if (e.key === 'r' || e.key === 'R') {
      randomFact();
    }
  });
}

/**
 * Add smooth scroll reveal animations
 */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.1 }
  );
  
  document.querySelectorAll('.detail-item').forEach(item => {
    observer.observe(item);
  });
}

// ============================================
// Event Listeners
// ============================================

elements.nextBtn.addEventListener('click', nextFact);
elements.prevBtn.addEventListener('click', previousFact);
elements.randomBtn.addEventListener('click', randomFact);

// ============================================
// Initialization
// ============================================

function init() {
  // Load saved state or show fact of the day
  loadState();
  
  // If first visit, show today's fact
  if (viewedFacts.size === 0) {
    currentFactIndex = getFactOfTheDay();
  }
  
  // Display initial fact
  displayFact(currentFactIndex);
  
  // Initialize features
  initKeyboardNavigation();
  initScrollAnimations();
  
  // Update stats
  updateStats();
  
  console.log('🌟 NutriVerse initialized successfully!');
  console.log(`📊 Database contains ${nutritionFacts.length} high-quality nutrition facts`);
  console.log('⌨️  Keyboard shortcuts: ← Previous | → Next | R Random');
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ============================================
// Export for potential future use
// ============================================

window.NutriVerse = {
  facts: nutritionFacts,
  currentFact: () => nutritionFacts[currentFactIndex],
  nextFact,
  previousFact,
  randomFact
};
