const plants = {

  "rose": {
    name: "Rose",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Rose_Flower_Pink.jpg",
    details: "Roses are flowering shrubs known for their beauty and fragrance.",
    precautions: [
      "Avoid overwatering.",
      "Provide 6 hours sunlight.",
      "Use well-drained soil.",
      "Prune dead branches."
    ]
  },

  "mango": {
    name: "Mango",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Mangifera_indica_fruits.jpg",
    details: "Mango is a tropical fruit tree that grows in warm climates.",
    precautions: [
      "Do not water near trunk.",
      "Protect from strong winds.",
      "Use potash fertilizer.",
      "Avoid overwatering in winter."
    ]
  },

  "aloevera": {
    name: "Aloe Vera",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Aloe_vera_flower.jpg",
    details: "Aloe vera is a succulent used for skincare and medicinal purposes.",
    precautions: [
      "Avoid excess watering.",
      "Use sandy soil.",
      "Keep in sunlight.",
      "Protect from frost."
    ]
  },

  "banana": {
    name: "Banana Plant",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Banana_plants.jpg",
    details: "Banana plants grow fast and require organic soil.",
    precautions: [
      "Avoid waterlogging.",
      "Provide full sunlight.",
      "Protect from strong winds.",
      "Remove suckers."
    ]
  },

  "tulsi": {
    name: "Tulsi (Holy Basil)",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Ocimum_tenuiflorum2.JPG",
    details: "Tulsi is a medicinal plant used in Ayurveda.",
    precautions: [
      "Avoid overwatering.",
      "Give 4–6 hrs sunlight.",
      "Trim weekly.",
      "Use well-drained soil."
    ]
  },

  // 🌼 SUNFLOWER
  "sunflower": {
    name: "Sunflower",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg",
    details: "Sunflowers are tall annuals loved for their bright yellow blooms and edible seeds.",
    precautions: [
      "Needs full sunlight (6–8 hours).",
      "Avoid waterlogging.",
      "Provide support to prevent wind damage.",
      "Keep spacing to avoid fungal infections."
    ]
  },

  // 🌱 BASIL
  "basil": {
    name: "Basil",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Ocimum_basilicum_Basilico_genovese.JPG",
    details: "Basil is an aromatic herb used in cooking and medicinal applications.",
    precautions: [
      "Avoid overwatering.",
      "Provide 4–6 hours sunlight.",
      "Pinch off flowers for better leaf growth.",
      "Avoid cold temperatures."
    ]
  },

  // 🌶️ CHILLI
  "chilli": {
    name: "Chilli",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Red_chilli_pepper.jpg",
    details: "Chilli plants produce spicy fruits and grow well in warm climates.",
    precautions: [
      "Needs 5–6 hrs of sunlight.",
      "Spray neem oil weekly.",
      "Do not overwater.",
      "Use potash for better fruiting."
    ]
  },

  // 🍓 STRAWBERRY
  "strawberry": {
    name: "Strawberry",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/PerfectStrawberry.jpg",
    details: "Strawberries are sweet fruits grown in cool climates.",
    precautions: [
      "Protect from birds using nets.",
      "Keep soil moist.",
      "Avoid water on leaves to prevent fungus.",
      "Provide partial sunlight."
    ]
  },

  // 🍇 GRAPES
  "grapes": {
    name: "Grapes",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Grapes_on_vine.jpg",
    details: "Grapevines are climbing plants producing bunches of grapes.",
    precautions: [
      "Provide strong support.",
      "Ensure full sun.",
      "Avoid overwatering.",
      "Prune old shoots to improve fruiting."
    ]
  },

  // 🍎 APPLE
  "apple": {
    name: "Apple",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg",
    details: "Apple trees grow well in cool, high-altitude regions.",
    precautions: [
      "Requires cold climate.",
      "Regular pruning needed.",
      "Protect from fungal diseases.",
      "Use nitrogen fertilizer carefully."
    ]
  },

  // 🥭 PAPAYA
  "papaya": {
    name: "Papaya",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Papaya_tree.jpg",
    details: "Papaya is a fast-growing tropical fruit plant.",
    precautions: [
      "Avoid waterlogging.",
      "Protect from frost.",
      "Use organic manure every month.",
      "Remove infected leaves quickly."
    ]
  },

  // 🍌 PLANTAIN
  "plantain": {
    name: "Plantain",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Plantain.jpg",
    details: "Plantains are similar to bananas but used for cooking.",
    precautions: [
      "Needs heavy but controlled watering.",
      "Protect from winds.",
      "Use organic-rich soil.",
      "Maintain spacing."
    ]
  },

  // 🌿 MINT
  "mint": {
    name: "Mint",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Mint_plant.jpg",
    details: "Mint is a strongly aromatic herb with fast growth.",
    precautions: [
      "Grows aggressively—plant in pots.",
      "Needs moist soil.",
      "Provide partial shade.",
      "Trim every week."
    ]
  },

  // 🍆 BRINJAL
  "brinjal": {
    name: "Brinjal (Eggplant)",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Aubergine.jpg",
    details: "Brinjal is a tropical vegetable crop.",
    precautions: [
      "Protect from whiteflies.",
      "Give 4–6 hours sunlight.",
      "Use organic manure.",
      "Water frequently but avoid flooding."
    ]
  },

  // 🌽 MAIZE
  "maize": {
    name: "Maize",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Corncobs.jpg",
    details: "Maize is a cereal crop widely grown for food and fodder.",
    precautions: [
      "Provide full sun.",
      "Keep soil moderately moist.",
      "Fertilize during tasseling.",
      "Protect from borers."
    ]
  },

  // 🫛 PEAS
  "peas": {
    name: "Peas",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Pea_plant.jpg",
    details: "Peas are cool-season legumes rich in protein.",
    precautions: [
      "Require cool climate.",
      "Avoid excess watering.",
      "Provide support for vines.",
      "Protect from powdery mildew."
    ]
  },

  // 🧄 GARLIC
  "garlic": {
    name: "Garlic",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Garlic_bulbs.jpg",
    details: "Garlic is a medicinal and culinary bulb crop.",
    precautions: [
      "Needs well-drained soil.",
      "Avoid overwatering.",
      "Give 4–5 hours of sunlight.",
      "Harvest when leaves dry."
    ]
  },

  // 🥕 CARROT
  "carrot": {
    name: "Carrot",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Carrot_field.jpg",
    details: "Carrots are root vegetables rich in beta-carotene.",
    precautions: [
      "Needs loose sandy soil.",
      "Avoid waterlogging.",
      "Ensure sunlight.",
      "Thin seedlings for proper root growth."
    ]
  },

  // 🍊 ORANGE
  "orange": {
    name: "Orange",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg",
    details: "Oranges need warm sunny climates and fertile soil.",
    precautions: [
      "Avoid overwatering.",
      "Use potash fertilizer.",
      "Protect from fruit fly.",
      "Give good sunlight."
    ]
  },

  // 🌴 COCONUT
  "coconut": {
    name: "Coconut",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Coconut_Palm.jpg",
    details: "Coconut palms thrive in warm tropical climates.",
    precautions: [
      "Needs full sun.",
      "Avoid waterlogging.",
      "Protect from pests like rhinoceros beetle.",
      "Use sandy well-drained soil."
    ]
  },

  // 🌳 NEEM TREE
  "neem": {
    name: "Neem Tree",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Azadirachta_indica.jpg",
    details: "Neem is a medicinal tree widely used in Ayurveda.",
    precautions: [
      "Needs full sunlight.",
      "Avoid waterlogging.",
      "Protect young plants from frost.",
      "Do not plant near buildings—roots spread widely."
    ]
  },

  // 🌷 LAVENDER
  "lavender": {
    name: "Lavender",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Lavender_field.jpg",
    details: "Lavender is a fragrant herb grown for essential oils.",
    precautions: [
      "Needs full sun.",
      "Grow in sandy soil.",
      "Avoid overwatering.",
      "Ensure good airflow."
    ]
  },

  // 🌲 PINE TREE
  "pine": {
    name: "Pine Tree",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/11/Pine_tree.jpg",
    details: "Pine is an evergreen tree found in cool climates.",
    precautions: [
      "Needs well-drained soil.",
      "Protect from root rot.",
      "Avoid overwatering.",
      "Plant in full sun."
    ]
  },

  // 🌵 CACTUS
  "cactus": {
    name: "Cactus",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/42/Cactus_in_desert.jpg",
    details: "Cactus is a desert plant that stores water in its stem.",
    precautions: [
      "Avoid overwatering.",
      "Place in bright sunlight.",
      "Use sandy soil.",
      "Ensure pot holes for drainage."
    ]
  }

};

// SMART SEARCH FUNCTION
function searchPlant() {
  const input = document.getElementById("plantInput").value.toLowerCase().trim();
  const result = document.getElementById("result-card");

  let name = input;

  // Remove unnecessary words
  name = name.replace("tree", "")
             .replace("plant", "")
             .replace("flower", "")
             .replace("fruit", "")
             .trim();

  // Try to match simplified name
  const plant = plants[name];

  if (!plant) {
    result.innerHTML = "<p>❌ Plant not found in database.</p>";
    return;
  }

  result.innerHTML = `
    <h2>${plant.name}</h2>
   <img src="${plant.image}" style="width:250px; border-radius:10px;">
    <p><b>Details:</b> ${plant.details}</p>
    <h3>⚠️ Precautions:</h3>
    <ul>${plant.precautions.map(p => `<li>${p}</li>`).join("")}</ul>
  `;
}
