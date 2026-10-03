export interface ProductItem {
  id: string;
  name: string;
  scientificName: string;
  category: "vegetables" | "fruit" | "exotic" | "leafy";
  description: string;
  image: string;
  grade: string;
  packaging: string;
  hsCode: string;
  temp: string;
  shelfLife: string;
  season: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  // Vegetables
  {
    id: "organic-onion",
    name: "Organic Red Onion",
    scientificName: "Allium cepa",
    category: "vegetables",
    description: "Export-grade red onions grown in the volcanic alluvial soil of Otur and Nashik. High pungency, tight outer skins, and superior dry matter content for prolonged oceanic transit.",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80",
    grade: "Grade A (45mm - 65mm+)",
    packaging: "5kg / 10kg / 25kg Lenomesh or Jute Bags",
    hsCode: "070310",
    temp: "0°C - 2°C, 65-70% RH",
    shelfLife: "60 - 90 Days",
    season: "Year-Round (Rabi & Kharif)"
  },
  {
    id: "organic-potato",
    name: "Organic Table Potato",
    scientificName: "Solanum tuberosum",
    category: "vegetables",
    description: "Certified organically grown table potatoes. Firm skin, low reducing sugars, and shallow eyes ideal for culinary and commercial foodservice.",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    grade: "Grade 1 (45mm - 70mm)",
    packaging: "10kg / 25kg Mesh Bags",
    hsCode: "070190",
    temp: "8°C - 10°C, 90-95% RH",
    shelfLife: "90 Days",
    season: "Oct - May"
  },
  {
    id: "organic-carrot",
    name: "Organic Crisp Carrot",
    scientificName: "Daucus carota",
    category: "vegetables",
    description: "Sweet, crunchy Nantes carrots hydro-cooled immediately upon harvest to lock in moisture, bright beta-carotene colour, and natural crispness.",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80",
    grade: "Class Extra (18cm - 24cm)",
    packaging: "10kg Corrugated Boxes",
    hsCode: "070610",
    temp: "0°C - 1°C, 95% RH",
    shelfLife: "30 - 45 Days",
    season: "Year-Round"
  },
  {
    id: "organic-tomato",
    name: "Vine-Ripened Tomato",
    scientificName: "Solanum lycopersicum",
    category: "vegetables",
    description: "Thick-pericarp tomatoes harvested at turning stage. Excellent transport resistance, deep red pigmentation, and balanced acidity.",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80",
    grade: "Firm Export Grade (55mm - 75mm)",
    packaging: "5kg Telescopic Cartons",
    hsCode: "070200",
    temp: "10°C - 12°C",
    shelfLife: "21 - 28 Days",
    season: "Year-Round"
  },
  {
    id: "bharta-brinjal",
    name: "Bharata Brinjal (Eggplant)",
    scientificName: "Solanum melongena",
    category: "vegetables",
    description: "Traditional large round purple eggplants with lustrous skins and tender, seed-sparse pulp. High demand across diaspora culinary markets.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    grade: "Export Jumbo (350g - 500g)",
    packaging: "5kg CFB Cartons",
    hsCode: "070930",
    temp: "10°C - 12°C",
    shelfLife: "14 - 18 Days",
    season: "Oct - Jun"
  },
  {
    id: "bitter-gourd",
    name: "Organic Bitter Gourd",
    scientificName: "Momordica charantia",
    category: "vegetables",
    description: "Slender dark-green Karela featuring pronounced ridges and crunchy texture. Packed under food-grade air-freight standards.",
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=800&q=80",
    grade: "Slender Green (15cm - 20cm)",
    packaging: "4kg / 5kg Cartons",
    hsCode: "070999",
    temp: "10°C - 12°C",
    shelfLife: "16 - 21 Days",
    season: "Year-Round"
  },
  {
    id: "bottle-gourd",
    name: "Organic Bottle Gourd",
    scientificName: "Lagenaria siceraria",
    category: "vegetables",
    description: "Straight cylindrical Lauki grown with biological crop care. Light-green blemish-free skin and tender, juicy white flesh.",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80",
    grade: "Straight (30cm - 40cm)",
    packaging: "10kg Corrugated Boxes",
    hsCode: "070999",
    temp: "10°C - 12°C",
    shelfLife: "18 Days",
    season: "Year-Round"
  },
  {
    id: "green-cucumber",
    name: "Organic Green Cucumber",
    scientificName: "Cucumis sativus",
    category: "vegetables",
    description: "Crisp field cucumbers with dark green skin and refreshing, seedless centers. Hand-selected for straightness and uniform caliber.",
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=800&q=80",
    grade: "Grade A Straight",
    packaging: "5kg / 10kg Export Boxes",
    hsCode: "070700",
    temp: "10°C - 12°C",
    shelfLife: "20 Days",
    season: "Year-Round"
  },
  {
    id: "capsicum",
    name: "Organic Green Capsicum",
    scientificName: "Capsicum annuum",
    category: "vegetables",
    description: "Blocky 3-4 lobed bell peppers with thick crunchy walls and vibrant emerald luster. Resistant to transit dehydration.",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80",
    grade: "Export Grade (150g - 250g)",
    packaging: "5kg Telescopic Cartons",
    hsCode: "070960",
    temp: "7°C - 9°C",
    shelfLife: "24 Days",
    season: "Year-Round"
  },
  {
    id: "tindli",
    name: "Organic Tindli (Ivy Gourd)",
    scientificName: "Coccinia grandis",
    category: "vegetables",
    description: "Firm, freshly harvested ivy gourds. Small, tender green pods with zero fibrous bitterness, air-freighted weekly.",
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=800&q=80",
    grade: "Export Tender Green",
    packaging: "5kg Ventilated Boxes",
    hsCode: "070999",
    temp: "10°C - 12°C",
    shelfLife: "14 Days",
    season: "Year-Round"
  },
  {
    id: "cabbage",
    name: "Organic Green Cabbage",
    scientificName: "Brassica oleracea var. capitata",
    category: "vegetables",
    description: "Dense, compact spherical cabbage heads with sweet, tightly folded leaves. High shelf stability for sea container shipments.",
    image: "https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?auto=format&fit=crop&w=800&q=80",
    grade: "Class 1 (1.0kg - 1.8kg)",
    packaging: "10kg / 15kg Mesh Bags",
    hsCode: "070490",
    temp: "0°C - 1°C",
    shelfLife: "60 Days",
    season: "Oct - Apr"
  },

  // Fruits
  {
    id: "organic-banana",
    name: "Organic Banana",
    scientificName: "Musa acuminata",
    category: "fruit",
    description: "Export-grade bananas calibrated for uniform finger length and girth. Shipped green in Banavac vacuum liners for controlled overseas ripening.",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80",
    grade: "Cluster Extra (18cm - 22cm)",
    packaging: "13.5kg / 18.14kg Telescopic Boxes",
    hsCode: "080390",
    temp: "13.2°C - 13.5°C",
    shelfLife: "35 - 45 Days (Green)",
    season: "Year-Round"
  },
  {
    id: "organic-papaya",
    name: "Organic Papaya",
    scientificName: "Carica papaya 'Taiwan 786'",
    category: "fruit",
    description: "Red-fleshed Taiwan 786 papayas with high natural sweetness (Brix 12+) and thick pulp. Sleeved in protective foam netting.",
    image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&w=800&q=80",
    grade: "Grade 1 (1.0kg - 1.8kg)",
    packaging: "10kg Cartons with Foam Sleeves",
    hsCode: "080720",
    temp: "10°C - 12°C",
    shelfLife: "21 Days",
    season: "Year-Round"
  },
  {
    id: "organic-fig",
    name: "Organic Fig (Poona Fig)",
    scientificName: "Ficus carica",
    category: "fruit",
    description: "Rich purple-skinned Poona figs renowned for their aromatic honey-sweet red interior. Hand-harvested and air-shipped to luxury gourmet buyers.",
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=800&q=80",
    grade: "Select (45g - 65g)",
    packaging: "1kg Display Trays / Clamshells",
    hsCode: "080420",
    temp: "0°C - 1°C",
    shelfLife: "12 Days",
    season: "Jan - May, Oct - Dec"
  },
  {
    id: "organic-mulberry",
    name: "Organic Mulberry",
    scientificName: "Morus nigra",
    category: "fruit",
    description: "Fragile, antioxidant-loaded dark purple mulberries. Hand-harvested with extreme care in Otur orchards and packed into protective punnets.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    grade: "Gourmet Berries",
    packaging: "125g / 250g Punnets",
    hsCode: "081090",
    temp: "0°C - 2°C",
    shelfLife: "7 - 10 Days",
    season: "Jan - Apr"
  },
  {
    id: "custard-apple",
    name: "Organic Custard Apple (Sitaphal)",
    scientificName: "Annona squamosa",
    category: "fruit",
    description: "Western Ghats Balanagar custard apples with large round segments and fragrant creamy pulp. Extremely high natural sugar profile.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    grade: "Super (250g - 400g)",
    packaging: "4kg Corrugated Boxes with Soft Trays",
    hsCode: "081090",
    temp: "12°C - 15°C",
    shelfLife: "12 Days",
    season: "Sep - Dec"
  },
  {
    id: "muskmelon",
    name: "Organic Muskmelon",
    scientificName: "Cucumis melo",
    category: "fruit",
    description: "High-aroma cantaloupe muskmelons with dense netting and juicy orange flesh (Brix 13+). Grown in the sun-drenched Otur riverbeds.",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80",
    grade: "Export Grade A (1.2kg - 2.0kg)",
    packaging: "10kg Master Cartons",
    hsCode: "080719",
    temp: "7°C - 10°C",
    shelfLife: "24 Days",
    season: "Jan - Jun"
  },
  {
    id: "watermelon",
    name: "Organic Watermelon",
    scientificName: "Citrullus lanatus",
    category: "fruit",
    description: "Crisp red seedless watermelon with firm rind and honey-sweet juice. Ultrasonic-checked for internal solidity before export packing.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    grade: "Grade 1 (3.5kg - 6.0kg)",
    packaging: "20kg Heavy Bins / Cartons",
    hsCode: "080711",
    temp: "10°C - 12°C",
    shelfLife: "28 Days",
    season: "Dec - Jun"
  },
  {
    id: "sapota",
    name: "Organic Sapota (Chiku)",
    scientificName: "Manilkara zapota",
    category: "fruit",
    description: "Round Kalipatti chikus with smooth brown skin and luscious caramel sweetness. Harvested mature-green for sea reefer shipping.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
    grade: "Export Caliber (80g - 120g)",
    packaging: "5kg CFB Boxes",
    hsCode: "081090",
    temp: "12°C - 14°C",
    shelfLife: "18 Days",
    season: "Oct - May"
  },
  {
    id: "mango",
    name: "Organic Mango (Alphonso & Kesar)",
    scientificName: "Mangifera indica",
    category: "fruit",
    description: "The crown jewel of Indian fruit exports. Authentic GI-tagged Alphonso and Kesar mangoes treated under hot water quarantine protocols.",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
    grade: "Class Extra (240g - 320g)",
    packaging: "3.2kg (12 count) Master Gift Boxes",
    hsCode: "080450",
    temp: "12°C - 13°C",
    shelfLife: "21 Days",
    season: "Mar - Jun"
  },
  {
    id: "pomegranate",
    name: "Bhagwa Ruby Pomegranate",
    scientificName: "Punica granatum 'Bhagwa'",
    category: "fruit",
    description: "Famous Indian Bhagwa pomegranates with deep scarlet skin, soft arils, and sweet-tart juice. Shipped in high volumes to Europe and Gulf.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    grade: "Super Grade (250g - 400g+)",
    packaging: "3.5kg / 4.5kg Telescopic Cartons",
    hsCode: "081090",
    temp: "5°C - 6°C, 95% RH",
    shelfLife: "60 Days",
    season: "Jan - Mar, Jul - Dec"
  },

  // Exotic & Leafy
  {
    id: "yellow-red-capsicum",
    name: "Polyhouse Bell Peppers (Yellow & Red)",
    scientificName: "Capsicum annuum",
    category: "exotic",
    description: "Dutch-grade polyhouse bell peppers with thick juicy flesh and deep coloration. Produced under strict biological IPM without chemical residues.",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80",
    grade: "AAA Export (180g - 260g)",
    packaging: "5kg Boxes with Dividers",
    hsCode: "070960",
    temp: "7°C - 8°C",
    shelfLife: "28 Days",
    season: "Year-Round"
  },
  {
    id: "english-cucumber",
    name: "Seedless English Cucumber",
    scientificName: "Cucumis sativus",
    category: "exotic",
    description: "Greenhouse trellis-grown cucumbers, individual shrink-wrapped for maximum moisture retention and pristine crispness during export.",
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=800&q=80",
    grade: "Class Extra (30cm - 36cm)",
    packaging: "Shrink-wrapped, 12 pcs / carton",
    hsCode: "070700",
    temp: "10°C - 12°C",
    shelfLife: "30 Days",
    season: "Year-Round"
  },
  {
    id: "coriander",
    name: "Organic Coriander (Cilantro)",
    scientificName: "Coriandrum sativum",
    category: "leafy",
    description: "Pungent aromatic coriander with roots washed and packed with ice pads. Harvested at dawn and air-shipped within hours.",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
    grade: "Export Bunched",
    packaging: "5kg Insulated Cartons with Ice Packs",
    hsCode: "070999",
    temp: "1°C - 2°C",
    shelfLife: "12 Days",
    season: "Year-Round"
  }
];

export const CLIENTS = [
  { name: "Swiggy", logo: "/assets/clients/swiggy.jpg" },
  { name: "Zomato", logo: "/assets/clients/zomato.jpg" },
  { name: "Zepto", logo: "/assets/clients/zepto.png" },
  { name: "Amazon Fresh", logo: "/assets/clients/amazon-fresh.png" },
  { name: "Zama Organics", logo: "/assets/clients/zama.avif" },
  { name: "White Organic", logo: "/assets/clients/white-organic.png" },
  { name: "Otipy", logo: "/assets/clients/otipy.jpg" },
  { name: "Organik Truck", logo: "/assets/clients/organik-truck.jpg" },
  { name: "Sharan Organic Store", logo: "/assets/clients/sharan.png" },
];

export const CERTIFICATIONS = [
  { id: 1, title: "Certificate of Organic Production (NPOP)", image: "/assets/certificates/cert1.webp" },
  { id: 2, title: "Food Safety & Quality Assurance License", image: "/assets/certificates/cert2.webp" },
  { id: 3, title: "Good Agricultural Practices Compliance", image: "/assets/certificates/cert3.webp" },
  { id: 4, title: "Packhouse & Cold Storage Accreditation", image: "/assets/certificates/cert4.webp" },
  { id: 5, title: "Export Registration & Standards", image: "/assets/certificates/cert5.png" },
];

export const HARVEST_STEPS = [
  {
    step: "01",
    title: "Hygiene & Cleanliness",
    desc: "Training workers on personal hygiene and cleanliness before entering the fields and packing stations."
  },
  {
    step: "02",
    title: "Reducing Damage",
    desc: "Training farmers on post-harvest handling and storage of crops is key to reducing food losses."
  },
  {
    step: "03",
    title: "Pre-Cooling",
    desc: "Removing heat from crops immediately after harvest to stop dehydration and preserve cell integrity."
  },
  {
    step: "04",
    title: "Grading",
    desc: "Sorting vegetables and fruits by size, shape, colour and volume using optical and manual benchmarks."
  },
  {
    step: "05",
    title: "Cleaning",
    desc: "Removing germs and unwanted residues from the surface of vegetables and fruits safely."
  },
  {
    step: "06",
    title: "Packing",
    desc: "Safe transportation during storage and handling, and packaging produce in convenient units for marketing and distribution."
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Sunny Ashok Dumbre",
    role: "CEO",
    image: "/assets/team/sunny-dumbre.jpg",
    instagram: "https://www.instagram.com/sunnydumbre?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    whatsapp: "https://api.whatsapp.com/send?phone=919730008116"
  },
  {
    name: "Akash Dilip Dumbre",
    role: "Director",
    image: "/assets/team/akash-dumbre.png",
    instagram: null,
    whatsapp: null
  },
  {
    name: "Anita Ashok Dumbre",
    role: "Director",
    image: "/assets/team/anita-dumbre.png",
    instagram: null,
    whatsapp: null
  }
];

export const IMPACT_STATS = [
  { label: "Registered Farmers", value: 599, suffix: "+" },
  { label: "Acres of Land", value: 1796, suffix: "+" },
  { label: "Years of Experience In the Industry", value: 10, suffix: "+" },
  { label: "Countries Exporting Vegetable & Fruit", value: 2, suffix: "+" }
];
