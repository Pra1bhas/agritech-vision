export type Lang = "en" | "te";

export type Dict = typeof translationsRaw.en;

const translationsRaw = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      products: "Products",
      contact: "Contact",
    },
    common: {
      callUs: "Call Us",
      learnMore: "Learn More",
      growWithUs: "Grow with us",
    },
    hero: {
      badge: "Trusted Indian Agri-Tech Brand",
      titleA: "Modern Crop Solutions",
      titleB: "for Indian Farmers.",
      subtitle:
        "Premium crop protection, plant nutrition and growth solutions — engineered for real fields, trusted by farmers, dealers and distributors across India.",
      cta: "Explore Products",
      whatsapp: "WhatsApp Us",
      statCategoriesV: "8+",
      statCategoriesL: "Categories",
      statNetworkV: "Pan-India",
      statNetworkL: "Network",
      statQualityV: "100%",
      statQualityL: "Quality Tested",
      featured: "Featured",
      featuredTitle: "Plant Nutrition · Crop Protection",
      featuredSub: "Engineered for the Indian climate.",
    },
    about: {
      eyebrow: "About Indian Agritech",
      titleA: "Built on trust.",
      titleB: "Grown with farmers.",
      body:
        "We craft scientifically engineered crop solutions that protect plants and improve yields — combining modern agri-science with deep respect for the Indian farmer.",
      stat1V: "8+",
      stat1L: "Product Categories",
      stat2V: "100%",
      stat2L: "Quality Tested",
      stat3V: "Pan-India",
      stat3L: "Distribution",
      learnStory: "Learn our story",
    },
    services: {
      eyebrow: "What we do",
      title: "End-to-end agriculture solutions",
      description:
        "From the seed in the soil to the produce in the market — we support farmers across the journey.",
      items: [
        { title: "Crop Protection", desc: "Insecticides, fungicides and pest management for healthy fields." },
        { title: "Plant Nutrition", desc: "Water solubles, micronutrients and granules for stronger crops." },
        { title: "Farmer Advisory", desc: "Direct support and guidance from our agri-experts." },
        { title: "Distribution Network", desc: "Reliable supply through our pan-India dealer ecosystem." },
      ],
    },
    cats: {
      eyebrow: "Our Solutions",
      title: "Featured Product Categories",
      description:
        "A complete portfolio for crop protection, plant nutrition and growth — built for every season.",
      categoryLabel: "Category",
      names: {
        "sucking-pest": "Sucking Pest",
        "chewing-pest": "Chewing Pest",
        "sucking-and-chewing-pest": "Sucking & Chewing Pest",
        "water-solubles": "Water Solubles",
        "micro-nutrients": "Micro Nutrients",
        granules: "Granules",
        "plant-growth-regulators": "Plant Growth Regulators",
        fungicides: "Fungicides",
      } as Record<string, string>,
      blurbs: {
        "sucking-pest": "Targeted control for aphids, thrips, whiteflies and jassids.",
        "chewing-pest": "Strong defence against caterpillars, borers and leaf-eaters.",
        "sucking-and-chewing-pest": "Dual-action formulations for combined pest pressure.",
        "water-solubles": "Fully soluble nutrient blends for fertigation and foliar spray.",
        "micro-nutrients": "Chelated micronutrients for healthy, vigorous crops.",
        granules: "Soil-applied granules for sustained nutrition and pest control.",
        "plant-growth-regulators": "Hormonal solutions for flowering, fruiting and stress recovery.",
        fungicides: "Protect crops from blight, mildew, rust and root rot.",
      } as Record<string, string>,
    },
    why: {
      eyebrow: "Why choose us",
      title: "Trusted where it matters most — the field",
      items: [
        { title: "Quality Assured", desc: "Every batch tested for purity and performance." },
        { title: "Farmer First", desc: "Built around real on-field needs, not lab theory." },
        { title: "Pan-India Reach", desc: "A reliable dealer and distribution network." },
        { title: "Expert Backed", desc: "Formulated and reviewed by agri-scientists." },
      ],
    },
    chairman: {
      eyebrow: "Chairman's Message",
      title: "\"Our purpose is the prosperity of every Indian farmer.\"",
      body1:
        "At Indian Agritech we don't just deliver products — we deliver trust. Every formulation we create is designed to make farming simpler, safer and more rewarding.",
      body2:
        "We will continue to invest in modern science, honest partnerships and on-ground support — so that our farmers and dealers always have a brand they can rely on.",
      role: "Chairman,",
    },
    cta: {
      eyebrow: "Grow with us",
      title: "Better crops start with the right partner.",
      body:
        "Talk to our team about products, dealership and on-field support — we're a message away.",
    },
    contactPrev: {
      eyebrow: "Reach out",
      title: "Let's talk crop solutions.",
      visitContact: "Visit Contact Page",
      call: "Call",
      email: "Email",
      visit: "Visit",
    },
    footer: {
      tagline:
        "Premium crop protection and plant nutrition built for Indian farmers and agriculture businesses.",
      explore: "Explore",
      categories: "Categories",
      contact: "Contact",
      rights: "All rights reserved.",
      smallTag: "Crop Protection · Plant Nutrition · Growth Solutions",
    },
  },
  te: {
    nav: {
      home: "హోమ్",
      about: "మా గురించి",
      services: "సేవలు",
      products: "ఉత్పత్తులు",
      contact: "సంప్రదించండి",
    },
    common: {
      callUs: "కాల్ చేయండి",
      learnMore: "మరింత తెలుసుకోండి",
      growWithUs: "మాతో ఎదగండి",
    },
    hero: {
      badge: "నమ్మదగిన భారతీయ అగ్రి-టెక్ బ్రాండ్",
      titleA: "ఆధునిక పంట పరిష్కారాలు",
      titleB: "భారతీయ రైతుల కోసం.",
      subtitle:
        "ప్రీమియం పంట రక్షణ, మొక్కల పోషణ మరియు పెరుగుదల పరిష్కారాలు — నిజమైన పొలాల కోసం రూపొందించబడ్డాయి, దేశవ్యాప్తంగా రైతులు, డీలర్లు మరియు పంపిణీదారులచే విశ్వసించబడ్డాయి.",
      cta: "ఉత్పత్తులను చూడండి",
      whatsapp: "వాట్సాప్ చేయండి",
      statCategoriesV: "8+",
      statCategoriesL: "విభాగాలు",
      statNetworkV: "దేశవ్యాప్తం",
      statNetworkL: "నెట్‌వర్క్",
      statQualityV: "100%",
      statQualityL: "నాణ్యత పరీక్షించబడింది",
      featured: "ప్రత్యేకం",
      featuredTitle: "మొక్కల పోషణ · పంట రక్షణ",
      featuredSub: "భారతీయ వాతావరణం కోసం రూపొందించబడింది.",
    },
    about: {
      eyebrow: "ఇండియన్ అగ్రిటెక్ గురించి",
      titleA: "నమ్మకంపై నిర్మించబడింది.",
      titleB: "రైతులతో కలిసి పెరిగింది.",
      body:
        "మేము శాస్త్రీయంగా రూపొందించిన పంట పరిష్కారాలను తయారు చేస్తాము — ఇవి మొక్కలను రక్షించి దిగుబడిని పెంచుతాయి, ఆధునిక వ్యవసాయ శాస్త్రాన్ని భారతీయ రైతుపై గౌరవంతో మిళితం చేస్తాయి.",
      stat1V: "8+",
      stat1L: "ఉత్పత్తి విభాగాలు",
      stat2V: "100%",
      stat2L: "నాణ్యత పరీక్షించబడింది",
      stat3V: "దేశవ్యాప్తం",
      stat3L: "పంపిణీ",
      learnStory: "మా కథను తెలుసుకోండి",
    },
    services: {
      eyebrow: "మేము ఏమి చేస్తాము",
      title: "సమగ్ర వ్యవసాయ పరిష్కారాలు",
      description:
        "మట్టిలో విత్తనం నుండి మార్కెట్‌లో ఉత్పత్తి వరకు — ప్రయాణం మొత్తం మేము రైతులకు తోడుగా ఉంటాము.",
      items: [
        { title: "పంట రక్షణ", desc: "ఆరోగ్యకరమైన పొలాల కోసం పురుగుమందులు, ఫంగిసైడ్‌లు మరియు పెస్ట్ నియంత్రణ." },
        { title: "మొక్కల పోషణ", desc: "బలమైన పంటల కోసం వాటర్ సోల్యుబుల్స్, మైక్రోన్యూట్రియెంట్స్ మరియు గ్రాన్యూల్స్." },
        { title: "రైతు సలహా", desc: "మా వ్యవసాయ నిపుణుల నుండి ప్రత్యక్ష మద్దతు మరియు మార్గదర్శనం." },
        { title: "పంపిణీ నెట్‌వర్క్", desc: "మా దేశవ్యాప్త డీలర్ నెట్‌వర్క్ ద్వారా నమ్మకమైన సరఫరా." },
      ],
    },
    cats: {
      eyebrow: "మా పరిష్కారాలు",
      title: "ప్రత్యేక ఉత్పత్తి విభాగాలు",
      description:
        "పంట రక్షణ, మొక్కల పోషణ మరియు పెరుగుదల కోసం పూర్తి పోర్ట్‌ఫోలియో — ప్రతి సీజన్ కోసం రూపొందించబడింది.",
      categoryLabel: "విభాగం",
      names: {
        "sucking-pest": "రసం పీల్చే పురుగులు",
        "chewing-pest": "కొరికే పురుగులు",
        "sucking-and-chewing-pest": "పీల్చే & కొరికే పురుగులు",
        "water-solubles": "నీటిలో కరిగే ఎరువులు",
        "micro-nutrients": "సూక్ష్మ పోషకాలు",
        granules: "గ్రాన్యూల్స్",
        "plant-growth-regulators": "మొక్కల పెరుగుదల నియంత్రకాలు",
        fungicides: "ఫంగిసైడ్‌లు",
      } as Record<string, string>,
      blurbs: {
        "sucking-pest": "ఏఫిడ్స్, త్రిప్స్, తెల్లదోమ మరియు జాస్సిడ్‌లపై లక్ష్యిత నియంత్రణ.",
        "chewing-pest": "గొంగళి పురుగులు, బోరర్లు మరియు ఆకు తినే పురుగులపై బలమైన రక్షణ.",
        "sucking-and-chewing-pest": "మిశ్రమ పురుగుల ఒత్తిడికి ద్వంద్వ-చర్య ఫార్ములేషన్‌లు.",
        "water-solubles": "ఫెర్టిగేషన్ మరియు ఆకు స్ప్రేల కోసం పూర్తిగా కరిగే పోషక మిశ్రమాలు.",
        "micro-nutrients": "ఆరోగ్యకరమైన, శక్తివంతమైన పంటల కోసం చీలేటెడ్ సూక్ష్మ పోషకాలు.",
        granules: "నిరంతర పోషణ మరియు పురుగు నియంత్రణ కోసం మట్టిలో వేసే గ్రాన్యూల్స్.",
        "plant-growth-regulators": "పుష్పించడం, ఫలాలు మరియు ఒత్తిడి కోలుకోవడం కోసం హార్మోనల్ పరిష్కారాలు.",
        fungicides: "బ్లైట్, మిల్‌డ్యూ, రస్ట్ మరియు రూట్ రాట్ నుండి పంటలను రక్షించండి.",
      } as Record<string, string>,
    },
    why: {
      eyebrow: "మమ్మల్ని ఎందుకు ఎంచుకోవాలి",
      title: "ఎక్కడ ముఖ్యమో అక్కడ నమ్మదగినవి — పొలంలో",
      items: [
        { title: "నాణ్యత హామీ", desc: "ప్రతి బ్యాచ్ స్వచ్ఛత మరియు పనితీరు కోసం పరీక్షించబడుతుంది." },
        { title: "రైతు ముఖ్యం", desc: "ల్యాబ్ సిద్ధాంతం కాదు, నిజమైన క్షేత్ర అవసరాలపై నిర్మించబడింది." },
        { title: "దేశవ్యాప్త పరిధి", desc: "నమ్మదగిన డీలర్ మరియు పంపిణీ నెట్‌వర్క్." },
        { title: "నిపుణుల మద్దతు", desc: "వ్యవసాయ శాస్త్రవేత్తలచే రూపొందించబడింది మరియు సమీక్షించబడింది." },
      ],
    },
    chairman: {
      eyebrow: "ఛైర్మన్ సందేశం",
      title: "\"ప్రతి భారతీయ రైతు సంపన్నతే మా ఉద్దేశ్యం.\"",
      body1:
        "ఇండియన్ అగ్రిటెక్‌లో మేము కేవలం ఉత్పత్తులను అందించడం లేదు — మేము నమ్మకాన్ని అందిస్తాము. మేము సృష్టించే ప్రతి ఫార్ములేషన్ వ్యవసాయాన్ని సులభంగా, సురక్షితంగా మరియు మరింత ప్రయోజనకరంగా చేయడానికి రూపొందించబడింది.",
      body2:
        "మేము ఆధునిక సైన్స్, నిజాయితీ భాగస్వామ్యాలు మరియు క్షేత్ర మద్దతులో పెట్టుబడి పెడుతూనే ఉంటాము — తద్వారా మా రైతులు మరియు డీలర్లు ఎల్లప్పుడూ నమ్మదగిన బ్రాండ్‌ను కలిగి ఉంటారు.",
      role: "ఛైర్మన్,",
    },
    cta: {
      eyebrow: "మాతో ఎదగండి",
      title: "మంచి పంటలు సరైన భాగస్వామితో మొదలవుతాయి.",
      body:
        "ఉత్పత్తులు, డీలర్‌షిప్ మరియు క్షేత్ర మద్దతు గురించి మా బృందంతో మాట్లాడండి — ఒక్క సందేశం దూరంలో ఉన్నాము.",
    },
    contactPrev: {
      eyebrow: "మమ్మల్ని సంప్రదించండి",
      title: "పంట పరిష్కారాల గురించి మాట్లాడుదాం.",
      visitContact: "సంప్రదింపు పేజీని చూడండి",
      call: "కాల్",
      email: "ఇమెయిల్",
      visit: "చిరునామా",
    },
    footer: {
      tagline:
        "భారతీయ రైతులు మరియు వ్యవసాయ వ్యాపారాల కోసం రూపొందించబడిన ప్రీమియం పంట రక్షణ మరియు మొక్కల పోషణ.",
      explore: "అన్వేషించండి",
      categories: "విభాగాలు",
      contact: "సంప్రదించండి",
      rights: "అన్ని హక్కులూ ప్రత్యేకించబడ్డాయి.",
      smallTag: "పంట రక్షణ · మొక్కల పోషణ · పెరుగుదల పరిష్కారాలు",
    },
  },
} as const;

export const translations: Record<Lang, Dict> = translationsRaw;

