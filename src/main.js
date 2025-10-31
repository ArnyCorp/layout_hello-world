'use strict';

// High-quality nutrition facts database
const nutritionFacts = [
  {
    title: 'Water is Essential for Brain Function',
    description: 'Your brain is about 75% water. Even mild dehydration can impair cognitive function, memory, and mood. Drinking adequate water helps maintain optimal brain performance and mental clarity.',
    details: 'Studies show that dehydration of just 2% can lead to decreased focus, memory issues, and increased fatigue. Aim for 8-10 glasses of water daily.'
  },
  {
    title: 'Fiber Supports Digestive Health',
    description: 'Dietary fiber is not digested by your body, but it plays a crucial role in maintaining healthy digestion. It helps regulate bowel movements, prevents constipation, and supports a healthy gut microbiome.',
    details: 'Adults should consume 25-30 grams of fiber daily. Excellent sources include whole grains, fruits, vegetables, legumes, and nuts. Fiber also helps lower cholesterol and control blood sugar levels.'
  },
  {
    title: 'Omega-3 Fatty Acids Protect Heart Health',
    description: 'Omega-3 fatty acids, found in fish, walnuts, and flaxseeds, are essential fats that your body cannot produce on its own. They play a vital role in reducing inflammation and supporting cardiovascular health.',
    details: 'Regular consumption of omega-3s can lower triglycerides, reduce blood pressure, and decrease the risk of heart disease. Aim for 2 servings of fatty fish per week or supplement as needed.'
  },
  {
    title: 'Vitamin D Strengthens Bones',
    description: 'Vitamin D helps your body absorb calcium, which is essential for building and maintaining strong bones. Without adequate vitamin D, your bones can become thin, brittle, or misshapen.',
    details: 'The sun is the best natural source of vitamin D, but many people need supplementation, especially in winter months. Vitamin D also supports immune function and mood regulation.'
  },
  {
    title: 'Antioxidants Fight Free Radicals',
    description: 'Antioxidants neutralize harmful free radicals in your body, which can damage cells and contribute to aging and disease. Foods rich in antioxidants include berries, dark chocolate, and leafy greens.',
    details: 'Colorful fruits and vegetables are packed with antioxidants like vitamin C, vitamin E, and beta-carotene. These compounds help protect against chronic diseases and support overall cellular health.'
  },
  {
    title: 'Protein Powers Muscle Repair',
    description: 'Protein is essential for building and repairing tissues, including muscles. After exercise, protein helps repair muscle fibers and promotes growth, making it crucial for recovery.',
    details: 'Aim for 0.8 grams of protein per kilogram of body weight daily. Excellent sources include lean meats, fish, eggs, dairy, legumes, and plant-based proteins like quinoa and tofu.'
  },
  {
    title: 'Magnesium Supports Hundreds of Functions',
    description: 'Magnesium is involved in over 300 biochemical reactions in your body, including energy production, muscle function, and DNA synthesis. Despite its importance, many people don\'t get enough.',
    details: 'Symptoms of magnesium deficiency include muscle cramps, fatigue, and irregular heartbeat. Good sources include nuts, seeds, whole grains, leafy greens, and dark chocolate.'
  },
  {
    title: 'Probiotics Enhance Gut Health',
    description: 'Probiotics are beneficial bacteria that live in your digestive system. They help maintain a healthy balance of gut flora, which is essential for digestion, immune function, and even mental health.',
    details: 'Fermented foods like yogurt, kefir, sauerkraut, and kimchi are excellent sources of probiotics. A healthy gut microbiome supports nutrient absorption and overall well-being.'
  },
  {
    title: 'Iron Prevents Anemia',
    description: 'Iron is crucial for producing hemoglobin, which carries oxygen in your blood. Without enough iron, your body can\'t produce enough healthy red blood cells, leading to fatigue and weakness.',
    details: 'There are two types of iron: heme (from animal sources) and non-heme (from plant sources). Vitamin C enhances iron absorption, so pair iron-rich foods with citrus fruits or bell peppers.'
  },
  {
    title: 'Calcium Builds Strong Bones',
    description: 'Calcium is the most abundant mineral in your body, and 99% of it is stored in your bones and teeth. It\'s essential for bone strength, muscle function, and nerve transmission.',
    details: 'Your body absorbs calcium best when consumed throughout the day. Dairy products, leafy greens, fortified foods, and sardines are excellent sources. Vitamin D helps optimize calcium absorption.'
  },
  {
    title: 'B Vitamins Support Energy Metabolism',
    description: 'B vitamins (B1, B2, B3, B5, B6, B7, B9, B12) play essential roles in converting food into energy. They work together to support brain function, red blood cell formation, and DNA synthesis.',
    details: 'Whole grains, legumes, eggs, dairy, leafy greens, and fortified cereals are rich in B vitamins. B12 is primarily found in animal products, so vegetarians may need supplementation.'
  },
  {
    title: 'Potassium Regulates Blood Pressure',
    description: 'Potassium helps balance sodium levels in your body and relaxes blood vessel walls, which helps lower blood pressure. It also supports proper muscle and nerve function.',
    details: 'Most adults need 3,500-4,700 mg of potassium daily. Excellent sources include bananas, sweet potatoes, spinach, beans, and avocados. Many people don\'t get enough potassium in their diet.'
  },
  {
    title: 'Vitamin C Boosts Immune System',
    description: 'Vitamin C is a powerful antioxidant that supports immune function, helps produce collagen for healthy skin, and enhances iron absorption. Your body doesn\'t store vitamin C, so regular intake is important.',
    details: 'Citrus fruits, berries, bell peppers, broccoli, and kiwi are excellent sources. While vitamin C doesn\'t prevent colds, it may reduce their duration and severity.'
  },
  {
    title: 'Zinc Supports Immune Function',
    description: 'Zinc is essential for immune system function, wound healing, and cell division. It also plays a role in taste and smell. Even mild zinc deficiency can impair immune response.',
    details: 'Meat, shellfish, legumes, seeds, and whole grains are good sources of zinc. Zinc absorption is better from animal sources than plant sources.'
  },
  {
    title: 'Folate is Critical for DNA',
    description: 'Folate (vitamin B9) is essential for DNA synthesis and cell division. It\'s particularly important during pregnancy for preventing neural tube defects in developing fetuses.',
    details: 'Leafy greens, legumes, citrus fruits, and fortified grains are excellent sources. Folic acid is the synthetic form found in supplements and fortified foods.'
  },
  {
    title: 'Selenium Protects Cells',
    description: 'Selenium is a powerful antioxidant that helps protect cells from damage. It supports thyroid function and immune health. However, both deficiency and excess can be harmful.',
    details: 'Brazil nuts are extremely rich in selenium—just one nut can provide your daily requirement. Other sources include seafood, poultry, and whole grains.'
  },
  {
    title: 'Phytonutrients Provide Extra Protection',
    description: 'Phytonutrients are natural compounds found in plants that provide health benefits beyond basic nutrition. They have antioxidant, anti-inflammatory, and disease-fighting properties.',
    details: 'Different colored fruits and vegetables contain different phytonutrients. Eating a rainbow of produce ensures you get a variety of these beneficial compounds.'
  },
  {
    title: 'Prebiotics Feed Good Bacteria',
    description: 'Prebiotics are types of fiber that feed the beneficial bacteria in your gut. They help probiotics thrive and support overall digestive health.',
    details: 'Garlic, onions, bananas, asparagus, oats, and apples are rich in prebiotics. Combining prebiotics with probiotics creates a synergistic effect for gut health.'
  },
  {
    title: 'Choline Supports Brain Development',
    description: 'Choline is essential for brain development, memory formation, and nerve function. It also helps maintain the structure of cellular membranes and supports liver function.',
    details: 'Eggs are one of the best sources of choline. Other sources include meat, fish, dairy, and cruciferous vegetables like broccoli and Brussels sprouts.'
  },
  {
    title: 'Copper Aids Iron Absorption',
    description: 'Copper works with iron to form red blood cells. It also helps maintain healthy bones, nerves, and immune function. Copper deficiency is rare but can cause anemia.',
    details: 'Shellfish, nuts, seeds, whole grains, and dark chocolate are good sources of copper. Most people get adequate copper from a balanced diet.'
  },
  {
    title: 'Manganese Supports Bone Health',
    description: 'Manganese plays a role in bone formation, metabolism, and antioxidant defense. It helps activate enzymes that are essential for various metabolic processes.',
    details: 'Whole grains, nuts, leafy vegetables, and tea are excellent sources of manganese. Most people get adequate amounts from their diet.'
  },
  {
    title: 'Chromium Helps Regulate Blood Sugar',
    description: 'Chromium enhances the action of insulin, which helps regulate blood sugar levels. It may improve insulin sensitivity and help manage diabetes.',
    details: 'Broccoli, whole grains, nuts, and some fruits are good sources of chromium. Supplements are available but should be used with caution.'
  },
  {
    title: 'Iodine is Essential for Thyroid',
    description: 'Iodine is crucial for thyroid hormone production, which regulates metabolism, growth, and development. Iodine deficiency can lead to goiter and hypothyroidism.',
    details: 'Seafood, seaweed, dairy products, and iodized salt are primary sources of iodine. Most people get enough from iodized salt, but some may need supplementation.'
  },
  {
    title: 'Vitamin K Promotes Blood Clotting',
    description: 'Vitamin K is essential for blood clotting and bone health. It helps activate proteins that are involved in coagulation and bone mineralization.',
    details: 'Leafy greens like kale and spinach are excellent sources of vitamin K1. Fermented foods provide vitamin K2, which may be more bioavailable.'
  },
  {
    title: 'Riboflavin Converts Food to Energy',
    description: 'Riboflavin (vitamin B2) helps convert carbohydrates, fats, and proteins into energy. It also acts as an antioxidant and supports healthy skin and eyes.',
    details: 'Dairy products, eggs, lean meats, and green vegetables are good sources of riboflavin. It\'s sensitive to light, so store foods properly to preserve content.'
  },
  {
    title: 'Niacin Supports Nervous System',
    description: 'Niacin (vitamin B3) helps convert food into energy and supports nervous system function. It also helps maintain healthy skin and may help lower cholesterol.',
    details: 'Meat, poultry, fish, whole grains, and legumes are excellent sources of niacin. Severe deficiency causes pellagra, though this is rare in developed countries.'
  },
  {
    title: 'Biotin Strengthens Hair and Nails',
    description: 'Biotin (vitamin B7) is often promoted for hair and nail health. It plays a role in energy metabolism and helps convert certain nutrients into energy.',
    details: 'Eggs, nuts, seeds, salmon, and sweet potatoes are good sources of biotin. While supplements are popular, most people get adequate amounts from their diet.'
  },
  {
    title: 'Pantothenic Acid is Everywhere',
    description: 'Pantothenic acid (vitamin B5) is found in almost all foods, which is why deficiency is extremely rare. It\'s essential for making coenzyme A, which helps metabolize fats.',
    details: 'Virtually all plant and animal foods contain pantothenic acid. Mushrooms, avocados, and whole grains are particularly good sources.'
  }
];

// Get fact of the day based on date
function getFactOfTheDay() {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1);
  const daysSinceStart = Math.floor((today - startOfYear) / (1000 * 60 * 60 * 24));
  const factIndex = daysSinceStart % nutritionFacts.length;
  return nutritionFacts[factIndex];
}

// Get a random fact
function getRandomFact() {
  const randomIndex = Math.floor(Math.random() * nutritionFacts.length);
  return nutritionFacts[randomIndex];
}

// Format date display
function formatDate(date) {
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  return date.toLocaleDateString('en-US', options).toUpperCase();
}

// Display fact
function displayFact(fact, isDaily = false) {
  const factCard = document.getElementById('factCard');
  const factNumber = document.getElementById('factNumber');
  const factTitle = document.getElementById('factTitle');
  const factDescription = document.getElementById('factDescription');
  const factDetails = document.getElementById('factDetails');
  const dateDisplay = document.getElementById('dateDisplay');

  // Update date display
  dateDisplay.textContent = formatDate(new Date());

  // Add fade out animation
  factCard.classList.add('fade-out');
  factCard.classList.add('loading');

  setTimeout(() => {
    // Update content
    const factIndex = nutritionFacts.indexOf(fact) + 1;
    factNumber.textContent = `#${String(factIndex).padStart(3, '0')}`;
    factTitle.textContent = fact.title;
    factDescription.textContent = fact.description;
    factDetails.innerHTML = `<strong>💡 Did you know:</strong> ${fact.details}`;

    // Remove fade out, add fade in
    factCard.classList.remove('fade-out');
    factCard.classList.remove('loading');
    factCard.classList.add('fade-in');

    setTimeout(() => {
      factCard.classList.remove('fade-in');
    }, 500);
  }, 500);
}

// Share functionality
function shareFact() {
  const factTitle = document.getElementById('factTitle').textContent;
  const factDescription = document.getElementById('factDescription').textContent;
  const shareText = `${factTitle}\n\n${factDescription}\n\n— Nutrition Fact of the Day`;

  if (navigator.share) {
    navigator.share({
      title: 'Nutrition Fact of the Day',
      text: shareText,
      url: window.location.href
    }).catch(() => {
      // Fallback to clipboard
      copyToClipboard(shareText);
    });
  } else {
    // Fallback to clipboard
    copyToClipboard(shareText);
  }
}

// Copy to clipboard fallback
function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  
  try {
    document.execCommand('copy');
    showNotification('Fact copied to clipboard!');
  } catch (err) {
    showNotification('Failed to copy. Please try again.');
  }
  
  document.body.removeChild(textarea);
}

// Show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, rgba(168, 213, 226, 0.95), rgba(212, 165, 192, 0.95));
    color: var(--color-bg-dark);
    padding: 1rem 2rem;
    border-radius: 50px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
    font-weight: 500;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 2000);
}

// Initialize app
function init() {
  const dateDisplay = document.getElementById('dateDisplay');
  const newFactBtn = document.getElementById('newFactBtn');
  const shareBtn = document.getElementById('shareBtn');

  // Display today's fact
  const todaysFact = getFactOfTheDay();
  displayFact(todaysFact, true);

  // Event listeners
  newFactBtn.addEventListener('click', () => {
    const randomFact = getRandomFact();
    displayFact(randomFact);
  });

  shareBtn.addEventListener('click', shareFact);

  // Add CSS animations for notifications
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideIn {
      from {
        transform: translateX(400px);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    @keyframes slideOut {
      from {
        transform: translateX(0);
        opacity: 1;
      }
      to {
        transform: translateX(400px);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}