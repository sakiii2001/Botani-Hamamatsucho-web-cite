export type Language = 'ja' | 'en' | 'zh'

export interface Translations {
  // Header
  storeName: string
  storeLocation: string
  menu: string
  reservation: string
  storeInfo: string
  reserveNow: string
  
  // Hero Section
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  viewMenu: string
  
  // Features
  featuresTitle: string
  wifiTitle: string
  wifiDescription: string
  flavorsTitle: string
  flavorsDescription: string
  beginnerTitle: string
  beginnerDescription: string
  
  // Menu
  menuTitle: string
  drinkMenu: string
  drinkMenuDescription: string
  shishaFlavors: string
  shishaFlavorsDescription: string
  viewDrinkMenu: string
  viewFlavorMenu: string
  
  // Reservation
  reservationTitle: string
  reservationDescription: string
  phoneReservation: string
  phoneDescription: string
  callNow: string
  instagramDM: string
  instagramDescription: string
  sendDM: string
  
  // Store Info
  storeInfoTitle: string
  aboutShisha: string
  aboutShishaDescription: string
  address: string
  openGoogleMaps: string
  phoneReservations: string
  businessHours: string
  businessHoursValue: string
  businessHoursNote: string
  paymentMethods: string
  cash: string
  payPay: string
  creditCard: string
  
  // Footer
  footerDescription: string
  footerMenuTitle: string
  footerSNSTitle: string
  footerCopyright: string
  
  // Menu Modal
  loading: string
  error: string
  systemTitle: string
  chargeTitle: string
  allTime: string
  barUse: string
  shishaTitle: string
  shishaOne: string
  share: string
  shishaOptions: string
  iceHose: string
  juiceBottle: string
  alcoholBottle: string
  topChange: string
  flavorNote: string
  
  // Store Atmosphere
  storeAtmosphereTitle: string
  storeAtmosphereDescription: string
  
  // Drink Menu Items
  alcoholVariety: string
  softDrinks: string
  champagne: string
  
  // Footer Menu Items
  footerDrinkMenu: string
  footerShishaFlavors: string
  footerPricingSystem: string
  
  // Flavor Names (Fruit)
  doubleApple: string
  peach: string
  lime: string
  lemon: string
  orange: string
  grapefruit: string
  mango: string
  pineapple: string
  cherry: string
  raspberry: string
  strawberry: string
  blueberry: string
  pomegranate: string
  grape: string
  watermelon: string
  melon: string
  lychee: string
  kiwi: string
  banana: string
  guava: string
  passionfruit: string
  
  // Additional Fruit Flavors
  elderflower: string
  pear: string
  apricot: string
  
  // Tea Flavors
  earlGrey: string
  bergamotTea: string
  lindenTea: string
  
  // Sweet Flavors  
  vanilla: string
  milk: string
  honey: string
  caramel: string
  cappuccino: string
  yogurt: string
  coconut: string
  
  // Spice & Others
  mint: string
  ice: string
  cardamom: string
  cinnamon: string
  panlazna: string
  whiteMusk: string
  hinoki: string
  springWater: string
  rose: string
  jasmine: string
  cola: string
  
  // Drink Menu Items - Beer
  corona: string
  heineken: string
  
  // Drink Menu Items - Whiskey  
  yamazaki: string
  hakushu: string
  chita: string
  chivasRegal: string
  ballantine: string
  suntory: string
  
  // Drink Menu Items - Sour
  lemonSour: string
  grapefruitSour: string
  chuHiLemon: string
  
  // Drink Menu Items - Cocktail
  mojito: string
  caipirinha: string
  ginTonic: string
  moscowMule: string
  longIslandIcedTea: string
  
  // Drink Menu Items - Wine
  redWine: string
  whiteWine: string
  sparkling: string
  
  // Drink Menu Items - Champagne
  domPerignon: string
  louisRoederer: string
  krug: string
  
  // Drink Menu Items - Soft Drinks
  cocaCola: string
  sprite: string
  orangeJuice: string
  appleJuice: string
  grapefruitJuice: string
  oolongTea: string
  coffee: string
  
  // Additional Cocktail Items
  ginBuck: string
  ginRickey: string
  screwdriver: string
  bulldog: string
  redBullVodka: string
  rumCoke: string
  rumBuck: string
  cassis: string
  cassisOrange: string
  cassisSoda: string
  cassisGinger: string
  fuzzyNavel: string
  reggaePunch: string
  peachFizz: string
  
  // Additional Champagne Items
  veuvClicquot: string
  domPerignonWhite: string
  
  // Additional Soft Drink Items
  gingerAle: string
  redBull: string
  oolongTea2: string
  jasmineTeaDrink: string
  greenTea: string
  
  // Missing drink items  
  oolongHigh: string
  jasmineHigh: string
  greenTeaHigh: string
  
  // LINE Section
  lineTitle: string
  lineDescription: string
  lineIdLabel: string
  lineAddButton: string
  
  // Menu Categories
  beerCategory: string
  whiskeyCategory: string
  sourCategory: string
  cocktailCategory: string
  wineCategory: string
  champagneCategory: string
  softDrinkCategory: string
  fruitCategory: string
  teaCategory: string
  sweetCategory: string
  spiceCategory: string
}

export const translations: Record<Language, Translations> = {
  ja: {
    // Header
    storeName: "BOTANI",
    storeLocation: "浜松町店",
    menu: "メニュー",
    reservation: "予約",
    storeInfo: "店舗情報",
    reserveNow: "今すぐ予約",
    
    // Hero Section
    heroTitle: "浜松町・大門エリアの",
    heroSubtitle: "シーシャ＆カフェバー",
    heroDescription: "飲み会やデート、友達との雑談、カフェ利用、お一人様でのコワーキング、様々なシーンにご利用可能です。",
    viewMenu: "メニューを見る",
    
    // Features
    featuresTitle: "BOTANIの特徴",
    wifiTitle: "Wi-Fi & 電源完備",
    wifiDescription: "コワーキングスペースとしても利用可能。高速Wi-Fiと電源をご用意しています。",
    flavorsTitle: "多彩なフレーバー",
    flavorsDescription: "メニューに載ってないフレーバーも多数あります。ノンニコチン、ダークリーフフレーバーの取り扱いもございます。",
    beginnerTitle: "初心者歓迎",
    beginnerDescription: "シーシャが初めての方も安心。スタッフが丁寧にご説明いたします。",
    
    // Menu
    menuTitle: "メニュー",
    drinkMenu: "ドリンクメニュー",
    drinkMenuDescription: "豊富なドリンクメニューをご用意しております",
    shishaFlavors: "シーシャ システム・フレーバー",
    shishaFlavorsDescription: "多彩なフレーバーからお選びください",
    viewDrinkMenu: "ドリンクメニューを見る",
    viewFlavorMenu: "フレーバーメニューを見る",
    
    // Reservation
    reservationTitle: "ご予約",
    reservationDescription: "お電話やInstagram DMでご予約を承っております。",
    phoneReservation: "電話予約",
    phoneDescription: "お急ぎの場合はお電話で",
    callNow: "電話をかける",
    instagramDM: "Instagram DM",
    instagramDescription: "DMでもご予約可能",
    sendDM: "DMを送る",
    
    // Store Info
    storeInfoTitle: "店舗情報",
    aboutShisha: "シーシャ（水タバコ）とは",
    aboutShishaDescription: "別名\"水タバコ\"とも呼ばれる「シーシャ」。水タバコは中近東で発明され、その後インド北部や中国、東南アジアの一部に伝わりました。シーシャは皿の上で燃やしたタバコの煙を「水パイプ」という専用の器具でろ過し、香りを楽しむものです。",
    address: "住所",
    openGoogleMaps: "Googleマップで開く",
    phoneReservations: "お電話でのご予約承ります 070ー1465ー0041",
    businessHours: "営業時間",
    businessHoursValue: "13:00 - 24:00",
    businessHoursNote: "※最終入店は23:00まで",
    paymentMethods: "決済方法",
    cash: "現金",
    payPay: "PayPay",
    creditCard: "クレジットカード",
    
    // Footer
    footerDescription: "浜松町・大門エリアのシーシャ＆カフェバー",
    footerMenuTitle: "メニュー",
    footerSNSTitle: "SNS・予約",
    footerCopyright: "&copy; 2025 BOTANI 浜松町店. All rights reserved.",
    
    // Menu Modal
    loading: "メニューを読み込み中...",
    error: "エラー",
    systemTitle: "システム",
    chargeTitle: "チャージ",
    allTime: "ALL TIME",
    barUse: "BAR USE",
    shishaTitle: "シーシャ",
    shishaOne: "シーシャ一台",
    share: "シェア",
    shishaOptions: "シーシャオプション",
    iceHose: "アイスホース",
    juiceBottle: "ジュースボトル",
    alcoholBottle: "アルコールボトル",
    topChange: "トップ替え",
    flavorNote: "※ メニューに記載のないフレーバーもございますのでご不明な点はスタッフまでお気軽にお尋ねください。",
    
    // Store Atmosphere
    storeAtmosphereTitle: "店内の雰囲気",
    storeAtmosphereDescription: "工業的なデザインと温かみのある照明が織りなす、洗練された空間。コンクリート壁と黒革のソファが作り出すモダンな雰囲気の中で、ゆったりとしたひとときをお過ごしください。",
    
    // Drink Menu Items
    alcoholVariety: "アルコール各種",
    softDrinks: "ソフトドリンク",
    champagne: "シャンパン",
    
    // Footer Menu Items
    footerDrinkMenu: "ドリンクメニュー",
    footerShishaFlavors: "シーシャフレーバー",
    footerPricingSystem: "料金システム",
    
    // Flavor Names (Fruit)
    doubleApple: "ダブルアップル",
    peach: "ピーチ",
    lime: "ライム",
    lemon: "レモン",
    orange: "オレンジ",
    grapefruit: "グレープフルーツ",
    mango: "マンゴー",
    pineapple: "パイン",
    cherry: "チェリー",
    raspberry: "ラズベリー",
    strawberry: "ストロベリー",
    blueberry: "ブルーベリー",
    pomegranate: "ザクロ",
    grape: "グレープ",
    watermelon: "スイカ",
    melon: "メロン",
    lychee: "ライチ",
    kiwi: "キウイ",
    banana: "バナナ",
    guava: "グアバ",
    passionfruit: "パッションフルーツ",
    
    // Additional Fruit Flavors
    elderflower: "接骨木",
    pear: "洋梨",
    apricot: "杏",
    
    // Tea Flavors
    earlGrey: "アールグレイ",
    bergamotTea: "ベルガモットティー",
    lindenTea: "リンデンティー",
    
    // Sweet Flavors
    vanilla: "バニラ",
    milk: "ミルク",
    honey: "ハチミツ",
    caramel: "キャラメル",
    cappuccino: "カプチーノ",
    yogurt: "ヨーグルト",
    coconut: "ココナッツ",
    
    // Spice & Others
    mint: "ミント",
    ice: "アイス",
    cardamom: "カルダモン",
    cinnamon: "シナモン",
    panlazna: "パンラズナ",
    whiteMusk: "ホワイトムスク",
    hinoki: "ヒノキ",
    springWater: "スプリングウォーター",
    rose: "ローズ",
    jasmine: "ジャスミン",
    cola: "コーラ",
    
    // Drink Menu Items - Beer
    corona: "コロナ",
    heineken: "ハイネケン",
    
    // Drink Menu Items - Whiskey
    yamazaki: "山崎",
    hakushu: "白州",
    chita: "知多",
    chivasRegal: "シーバスリーガル",
    ballantine: "バランタイン",
    suntory: "サントリー角",
    
    // Drink Menu Items - Sour
    lemonSour: "レモンサワー",
    grapefruitSour: "グレープフルーツサワー",
    chuHiLemon: "チューハイレモン",
    
    // Drink Menu Items - Cocktail
    mojito: "モヒート",
    caipirinha: "カイピリーニャ",
    ginTonic: "ジントニック",
    moscowMule: "モスコミュール",
    longIslandIcedTea: "ロングアイランドアイスティー",
    
    // Drink Menu Items - Wine
    redWine: "赤ワイン",
    whiteWine: "白ワイン",
    sparkling: "スパークリング",
    
    // Drink Menu Items - Champagne
    domPerignon: "ドンペリニヨン",
    louisRoederer: "ルイロデレール",
    krug: "クリュッグ",
    
    // Drink Menu Items - Soft Drinks
    cocaCola: "コカコーラ",
    sprite: "スプライト",
    orangeJuice: "オレンジジュース",
    appleJuice: "アップルジュース",
    grapefruitJuice: "グレープフルーツジュース",
    oolongTea: "ウーロン茶",
    coffee: "コーヒー",
    
    // Additional Cocktail Items
    ginBuck: "ジンバック",
    ginRickey: "ジンリッキー",
    screwdriver: "スクリュードライバー",
    bulldog: "ブルドッグ",
    redBullVodka: "レッドブルウォッカ",
    rumCoke: "ラムコーク",
    rumBuck: "ラムバック",
    cassis: "カシス",
    cassisOrange: "カシスオレンジ",
    cassisSoda: "カシスソーダ",
    cassisGinger: "カシスジンジャー",
    fuzzyNavel: "ファジーネーブル",
    reggaePunch: "レゲエパンチ",
    peachFizz: "ピーチフィズ",
    
    // Additional Champagne Items
    veuvClicquot: "ヴーヴ・クリコ",
    domPerignonWhite: "ドンペリニヨン（白）",
    
    // Additional Soft Drink Items
    gingerAle: "ジンジャエール",
    redBull: "レッドブル",
    oolongTea2: "烏龍茶",
    jasmineTeaDrink: "ジャスミン茶",
    greenTea: "緑茶",
    
    // Missing drink items
    oolongHigh: "ウーロンハイ",
    jasmineHigh: "ジャスミンハイ",
    greenTeaHigh: "緑茶ハイ",
    
    // LINE Section
    lineTitle: "LINE公式アカウント",
    lineDescription: "最新情報を定期的に配信していきます。",
    lineIdLabel: "または下のボタンから追加してください",
    lineAddButton: "LINE友達追加",
    
    // Menu Categories
    beerCategory: "ビール",
    whiskeyCategory: "ウイスキー",
    sourCategory: "サワー",
    cocktailCategory: "カクテル", 
    wineCategory: "ワイン",
    champagneCategory: "シャンパン",
    softDrinkCategory: "ソフトドリンク",
    fruitCategory: "フルーツ",
    teaCategory: "ティー",
    sweetCategory: "スイート",
    spiceCategory: "スパイス・その他"
  },
  
  en: {
    // Header
    storeName: "BOTANI",
    storeLocation: "Hamamatsucho",
    menu: "Menu",
    reservation: "Reservation",
    storeInfo: "Store Info",
    reserveNow: "Reserve Now",
    
    // Hero Section
    heroTitle: "Shisha & Cafe Bar in",
    heroSubtitle: "Hamamatsucho・Daimon Area",
    heroDescription: "Perfect for parties, dates, casual chats with friends, cafe use, and solo coworking - suitable for various occasions.",
    viewMenu: "View Menu",
    
    // Features
    featuresTitle: "BOTANI Features",
    wifiTitle: "Wi-Fi & Power Available",
    wifiDescription: "Can be used as a coworking space. High-speed Wi-Fi and power outlets are available.",
    flavorsTitle: "Diverse Flavors",
    flavorsDescription: "We have many flavors not listed on the menu. Non-nicotine and dark leaf flavors are also available.",
    beginnerTitle: "Beginners Welcome",
    beginnerDescription: "First-time shisha users can feel at ease. Our staff will explain everything carefully.",
    
    // Menu
    menuTitle: "Menu",
    drinkMenu: "Drink Menu",
    drinkMenuDescription: "We offer a wide variety of drinks",
    shishaFlavors: "Shisha System・Flavors",
    shishaFlavorsDescription: "Choose from our diverse flavors",
    viewDrinkMenu: "View Drink Menu",
    viewFlavorMenu: "View Flavor Menu",
    
    // Reservation
    reservationTitle: "Reservation",
    reservationDescription: "We accept reservations by phone or Instagram DM.",
    phoneReservation: "Phone Reservation",
    phoneDescription: "For urgent reservations",
    callNow: "Call Now",
    instagramDM: "Instagram DM",
    instagramDescription: "Reservations via DM available",
    sendDM: "Send DM",
    
    // Store Info
    storeInfoTitle: "Store Information",
    aboutShisha: "What is Shisha (Water Pipe)?",
    aboutShishaDescription: "Also known as 'water pipe', shisha was invented in the Middle East and later spread to northern India, China, and parts of Southeast Asia. Shisha involves filtering tobacco smoke through a water pipe device to enjoy its aroma.",
    address: "Address",
    openGoogleMaps: "Open in Google Maps",
    phoneReservations: "Phone reservations accepted",
    businessHours: "Business Hours",
    businessHoursValue: "13:00 - 24:00",
    businessHoursNote: "※Last entry until 23:00",
    paymentMethods: "Payment Methods",
    cash: "Cash",
    payPay: "PayPay",
    creditCard: "Credit Card",
    
    // Footer
    footerDescription: "Shisha & Cafe Bar in Hamamatsucho・Daimon Area",
    footerMenuTitle: "Menu",
    footerSNSTitle: "SNS・Reservations",
    footerCopyright: "&copy; 2025 BOTANI Hamamatsucho. All rights reserved.",
    
    // Menu Modal
    loading: "Loading menu...",
    error: "Error",
    systemTitle: "System",
    chargeTitle: "Charge",
    allTime: "ALL TIME",
    barUse: "BAR USE",
    shishaTitle: "Shisha",
    shishaOne: "One Shisha",
    share: "Share",
    shishaOptions: "Shisha Options",
    iceHose: "Ice Hose",
    juiceBottle: "Juice Bottle",
    alcoholBottle: "Alcohol Bottle",
    topChange: "Top Change",
    flavorNote: "※ We have many flavors not listed on the menu. Please feel free to ask our staff if you have any questions.",
    
    // Store Atmosphere
    storeAtmosphereTitle: "Store Atmosphere",
    storeAtmosphereDescription: "A sophisticated space where industrial design meets warm lighting. Enjoy a relaxing time in the modern atmosphere created by concrete walls and black leather sofas.",
    
    // Drink Menu Items
    alcoholVariety: "Variety of Alcohol",
    softDrinks: "Soft Drinks",
    champagne: "Champagne",
    
    // Footer Menu Items
    footerDrinkMenu: "Drink Menu",
    footerShishaFlavors: "Shisha Flavors",
    footerPricingSystem: "Pricing System",
    
    // Flavor Names (Fruit)
    doubleApple: "Double Apple",
    peach: "Peach",
    lime: "Lime",
    lemon: "Lemon",
    orange: "Orange",
    grapefruit: "Grapefruit",
    mango: "Mango",
    pineapple: "Pineapple",
    cherry: "Cherry",
    raspberry: "Raspberry",
    strawberry: "Strawberry",
    blueberry: "Blueberry",
    pomegranate: "Pomegranate",
    grape: "Grape",
    watermelon: "Watermelon",
    melon: "Melon",
    lychee: "Lychee",
    kiwi: "Kiwi",
    banana: "Banana",
    guava: "Guava",
    passionfruit: "Passion Fruit",
    
    // Additional Fruit Flavors
    elderflower: "Elderflower",
    pear: "Pear",
    apricot: "Apricot",
    
    // Tea Flavors
    earlGrey: "Earl Grey",
    bergamotTea: "Bergamot Tea",
    lindenTea: "Linden Tea",
    
    // Sweet Flavors
    vanilla: "Vanilla",
    milk: "Milk",
    honey: "Honey",
    caramel: "Caramel",
    cappuccino: "Cappuccino",
    yogurt: "Yogurt",
    coconut: "Coconut",
    
    // Spice & Others
    mint: "Mint",
    ice: "Ice",
    cardamom: "Cardamom",
    cinnamon: "Cinnamon",
    panlazna: "Pan Lazna",
    whiteMusk: "White Musk",
    hinoki: "Hinoki",
    springWater: "Spring Water",
    rose: "Rose",
    jasmine: "Jasmine",
    cola: "Cola",
    
    // Drink Menu Items - Beer
    corona: "Corona",
    heineken: "Heineken",
    
    // Drink Menu Items - Whiskey
    yamazaki: "Yamazaki",
    hakushu: "Hakushu",
    chita: "Chita",
    chivasRegal: "Chivas Regal",
    ballantine: "Ballantine",
    suntory: "Suntory Kaku",
    
    // Drink Menu Items - Sour
    lemonSour: "Lemon Sour",
    grapefruitSour: "Grapefruit Sour",
    chuHiLemon: "Chu-Hi Lemon",
    
    // Drink Menu Items - Cocktail
    mojito: "Mojito",
    caipirinha: "Caipirinha",
    ginTonic: "Gin & Tonic",
    moscowMule: "Moscow Mule",
    longIslandIcedTea: "Long Island Iced Tea",
    
    // Drink Menu Items - Wine
    redWine: "Red Wine",
    whiteWine: "White Wine",
    sparkling: "Sparkling Wine",
    
    // Drink Menu Items - Champagne
    domPerignon: "Dom Pérignon",
    louisRoederer: "Louis Roederer",
    krug: "Krug",
    
    // Drink Menu Items - Soft Drinks
    cocaCola: "Coca-Cola",
    sprite: "Sprite",
    orangeJuice: "Orange Juice",
    appleJuice: "Apple Juice",
    grapefruitJuice: "Grapefruit Juice",
    oolongTea: "Oolong Tea",
    coffee: "Coffee",
    
    // Additional Cocktail Items
    ginBuck: "Gin Buck",
    ginRickey: "Gin Rickey",
    screwdriver: "Screwdriver",
    bulldog: "Bulldog",
    redBullVodka: "Red Bull Vodka",
    rumCoke: "Rum & Coke",
    rumBuck: "Rum Buck",
    cassis: "Cassis",
    cassisOrange: "Cassis Orange",
    cassisSoda: "Cassis Soda",
    cassisGinger: "Cassis Ginger",
    fuzzyNavel: "Fuzzy Navel",
    reggaePunch: "Reggae Punch",
    peachFizz: "Peach Fizz",
    
    // Additional Champagne Items
    veuvClicquot: "Veuve Clicquot",
    domPerignonWhite: "Dom Pérignon (White)",
    
    // Additional Soft Drink Items
    gingerAle: "Ginger Ale",
    redBull: "Red Bull",
    oolongTea2: "Oolong Tea",
    jasmineTeaDrink: "Jasmine Tea",
    greenTea: "Green Tea",
    
    // Missing drink items
    oolongHigh: "Oolong Highball",
    jasmineHigh: "Jasmine Highball",
    greenTeaHigh: "Green Tea Highball",
    
    // LINE Section
    lineTitle: "Official LINE Account",
    lineDescription: "We regularly share the latest information and updates.",
    lineIdLabel: "Or add us using the button below",
    lineAddButton: "Add LINE Friend",
    
    // Menu Categories
    beerCategory: "Beer",
    whiskeyCategory: "Whiskey",
    sourCategory: "Sour",
    cocktailCategory: "Cocktail",
    wineCategory: "Wine", 
    champagneCategory: "Champagne",
    softDrinkCategory: "Soft Drink",
    fruitCategory: "Fruit",
    teaCategory: "Tea",
    sweetCategory: "Sweet",
    spiceCategory: "Spice & Others"
  },
  
  zh: {
    // Header
    storeName: "BOTANI",
    storeLocation: "浜松町店",
    menu: "菜单",
    reservation: "预约",
    storeInfo: "店铺信息",
    reserveNow: "立即预约",
    
    // Hero Section
    heroTitle: "浜松町・大门地区的",
    heroSubtitle: "水烟&咖啡酒吧",
    heroDescription: "适合聚会、约会、朋友聊天、咖啡时光、一人办公等各种场景。",
    viewMenu: "查看菜单",
    
    // Features
    featuresTitle: "BOTANI的特色",
    wifiTitle: "Wi-Fi & 电源齐全",
    wifiDescription: "也可作为共享办公空间使用。提供高速Wi-Fi和电源。",
    flavorsTitle: "多样口味",
    flavorsDescription: "除菜单外还有很多口味。也提供无尼古丁、深色叶片口味。",
    beginnerTitle: "欢迎新手",
    beginnerDescription: "初次体验水烟的客人也可以放心。工作人员会详细说明。",
    
    // Menu
    menuTitle: "菜单",
    drinkMenu: "饮品菜单",
    drinkMenuDescription: "为您准备了丰富的饮品菜单",
    shishaFlavors: "水烟 系统・口味",
    shishaFlavorsDescription: "从多样的口味中选择",
    viewDrinkMenu: "查看饮品菜单",
    viewFlavorMenu: "查看口味菜单",
    
    // Reservation
    reservationTitle: "预约",
    reservationDescription: "可通过电话或Instagram私信预约。",
    phoneReservation: "电话预约",
    phoneDescription: "紧急情况请电话预约",
    callNow: "拨打电话",
    instagramDM: "Instagram私信",
    instagramDescription: "也可通过私信预约",
    sendDM: "发送私信",
    
    // Store Info
    storeInfoTitle: "店铺信息",
    aboutShisha: "什么是水烟？",
    aboutShishaDescription: "水烟也被称为\"水烟管\"，发明于中东，后来传播到印度北部、中国和东南亚部分地区。水烟是通过专用的\"水烟管\"设备过滤烟草烟雾，享受香味的。",
    address: "地址",
    openGoogleMaps: "在Google地图中打开",
    phoneReservations: "接受电话预约",
    businessHours: "营业时间",
    businessHoursValue: "13:00 - 24:00",
    businessHoursNote: "※最后入店时间为23:00",
    paymentMethods: "支付方式",
    cash: "现金",
    payPay: "PayPay",
    creditCard: "信用卡",
    
    // Footer
    footerDescription: "浜松町・大门地区的水烟&咖啡酒吧",
    footerMenuTitle: "菜单",
    footerSNSTitle: "SNS・预约",
    footerCopyright: "&copy; 2025 BOTANI 浜松町店. All rights reserved.",
    
    // Menu Modal
    loading: "正在加载菜单...",
    error: "错误",
    systemTitle: "系统",
    chargeTitle: "费用",
    allTime: "全天",
    barUse: "酒吧使用",
    shishaTitle: "水烟",
    shishaOne: "一台水烟",
    share: "分享",
    shishaOptions: "水烟选项",
    iceHose: "冰管",
    juiceBottle: "果汁瓶",
    alcoholBottle: "酒精瓶",
    topChange: "更换顶部",
    flavorNote: "※ 菜单上未列出的口味也有很多，有不明之处请随时询问工作人员。",
    
    // Store Atmosphere
    storeAtmosphereTitle: "店内氛围",
    storeAtmosphereDescription: "工业设计与温馨照明交织的精致空间。在混凝土墙壁和黑色皮沙发营造的现代氛围中，享受悠闲时光。",
    
    // Drink Menu Items
    alcoholVariety: "各种酒类",
    softDrinks: "软饮料",
    champagne: "香槟",
    
    // Footer Menu Items
    footerDrinkMenu: "饮品菜单",
    footerShishaFlavors: "水烟口味",
    footerPricingSystem: "价格系统",
    
    // Flavor Names (Fruit)
    doubleApple: "双苹果",
    peach: "桃子",
    lime: "青柠",
    lemon: "柠檬",
    orange: "橙子",
    grapefruit: "葡萄柚",
    mango: "芒果",
    pineapple: "菠萝",
    cherry: "樱桃",
    raspberry: "覆盆子",
    strawberry: "草莓",
    blueberry: "蓝莓",
    pomegranate: "石榴",
    grape: "葡萄",
    watermelon: "西瓜",
    melon: "哈密瓜",
    lychee: "荔枝",
    kiwi: "猕猴桃",
    banana: "香蕉",
    guava: "番石榴",
    passionfruit: "百香果",
    
    // Additional Fruit Flavors
    elderflower: "接骨木花",
    pear: "梨",
    apricot: "杏",
    
    // Tea Flavors
    earlGrey: "伯爵茶",
    bergamotTea: "佛手柑茶",
    lindenTea: "菩提茶",
    
    // Sweet Flavors
    vanilla: "香草",
    milk: "牛奶",
    honey: "蜂蜜",
    caramel: "焦糖",
    cappuccino: "卡布奇诺",
    yogurt: "酸奶",
    coconut: "椰子",
    
    // Spice & Others
    mint: "薄荷",
    ice: "冰",
    cardamom: "豆蔻",
    cinnamon: "肉桂",
    panlazna: "潘拉兹纳",
    whiteMusk: "白麝香",
    hinoki: "扁柏",
    springWater: "泉水",
    rose: "玫瑰",
    jasmine: "茉莉",
    cola: "可乐",
    
    // Drink Menu Items - Beer
    corona: "科罗娜",
    heineken: "喜力",
    
    // Drink Menu Items - Whiskey
    yamazaki: "山崎",
    hakushu: "白州",
    chita: "知多",
    chivasRegal: "芝华士皇家",
    ballantine: "百龄坛",
    suntory: "三得利角瓶",
    
    // Drink Menu Items - Sour
    lemonSour: "柠檬沙瓦",
    grapefruitSour: "西柚沙瓦",
    chuHiLemon: "柠檬沙瓦",
    
    // Drink Menu Items - Cocktail
    mojito: "莫吉托",
    caipirinha: "卡皮林娜",
    ginTonic: "金汤尼",
    moscowMule: "莫斯科马驿",
    longIslandIcedTea: "长岛冰茶",
    
    // Drink Menu Items - Wine
    redWine: "红酒",
    whiteWine: "白酒",
    sparkling: "起泡酒",
    
    // Drink Menu Items - Champagne
    domPerignon: "香槟王",
    louisRoederer: "路易世家",
    krug: "库克",
    
    // Drink Menu Items - Soft Drinks
    cocaCola: "可口可乐",
    sprite: "雪碧",
    orangeJuice: "橙汁",
    appleJuice: "苹果汁",
    grapefruitJuice: "西柚汁",
    oolongTea: "乌龙茶",
    coffee: "咖啡",
    
    // Additional Cocktail Items
    ginBuck: "金巴克",
    ginRickey: "金瑞基",
    screwdriver: "螺丝起子",
    bulldog: "牛头犬",
    redBullVodka: "红牛伏特加",
    rumCoke: "朗姆可乐",
    rumBuck: "朗姆巴克",
    cassis: "黑加伦",
    cassisOrange: "黑加伦橙子",
    cassisSoda: "黑加伦汽水",
    cassisGinger: "黑加伦生姜",
    fuzzyNavel: "毛茸茸肚脚眼",
    reggaePunch: "雷鬼寻字",
    peachFizz: "桃子气泡",
    
    // Additional Champagne Items
    veuvClicquot: "凯歌香槟",
    domPerignonWhite: "香槟王（白）",
    
    // Additional Soft Drink Items
    gingerAle: "姜汁汽水",
    redBull: "红牛",
    oolongTea2: "乌龙茶",
    jasmineTeaDrink: "茉莉花茶",
    greenTea: "绿茶",
    
    // Missing drink items
    oolongHigh: "乌龙茶高球",
    jasmineHigh: "茉莉花茶高球",
    greenTeaHigh: "绿茶高球",
    
    // LINE Section
    lineTitle: "官方LINE账号",
    lineDescription: "我们会定期分享最新信息和动态。",
    lineIdLabel: "或使用下方按钮添加我们",
    lineAddButton: "添加LINE好友",
    
    // Menu Categories
    beerCategory: "啤酒",
    whiskeyCategory: "威士忌",
    sourCategory: "酸味酒",
    cocktailCategory: "鸡尾酒",
    wineCategory: "葡萄酒",
    champagneCategory: "香槟",
    softDrinkCategory: "软饮料",
    fruitCategory: "水果",
    teaCategory: "茶",
    sweetCategory: "甜味",
    spiceCategory: "香料及其他"
  }
}
