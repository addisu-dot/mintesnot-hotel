export type Locale = "EN" | "AM";

export const LOCALES: Record<
  Locale,
  { code: Locale; label: string; selectLabel: string }
> = {
  EN: { code: "EN", label: "English", selectLabel: "English" },
  AM: { code: "AM", label: "አማርኛ", selectLabel: "አማርኛ" },
};

export const LOCALE_STORAGE_KEY = "mintesnot-locale";

export const translations = {
  EN: {
    brand: "Mintesnot Hotel",
    nav: {
      home: "Home",
      rooms: "Rooms",
      dining: "Dining",
      about: "About Us",
      contact: "Contact",
    },
    bookNow: "Book Now",
    submit: "Submit",
    theme: {
      light: "Light mode",
      dark: "Dark mode",
    },
    language: "Language",
    menu: {
      open: "Open menu",
      close: "Close menu",
    },
    hero: {
      imageAlt: "Mintesnot Hotel main building in Durame",
      greeting: "Welcome",
      intro:
        "When you come to Durame, Mintesnot Hotel has everything prepared so you feel right at home.",
      bullet1: "Enjoy our delicious, mouth-watering cuisine",
      bullet2:
        "Find a clean place to rest in a fresh, breezy, green environment",
      address:
        "Address: On the right side of Abune Teklehaimanot Church, Durame",
      phone1: "0978392777",
      phone2: "0934814220",
    },
    press: {
      eyebrow: "In the News",
      title: "Press & Recognition",
      subtitle:
        "Celebrating our official inauguration and the growing hospitality story of Durame.",
      featured: "Featured coverage",
      asFeatured: "As featured by Visit Kambata",
      viewPost: "View Original Facebook Post",
      headlineHotel: '"Mintesnot Hotel"',
      headlineRest:
        "Officially Inaugurated in Durame with Over 50 Million Birr Investment.",
      bodyLead: '"Mintesnot Hotel,"',
      bodyRest:
        "constructed in Durame City by Ato Tilahun Welde with an investment exceeding 50 million birr, has been officially inaugurated and opened for service. The hotel adds value to the City's hospitality sector, creates job opportunities, and highlights the growing investment potential of Durame.",
    },
    pages: {
      rooms: {
        eyebrow: "Stay with us",
        title: "Rooms & Suites",
        description:
          "Six thoughtfully kept spaces — minimalist, restful, and dressed in the calm greens and warm neutrals of the highlands.",
      },
      dining: {
        eyebrow: "Taste Durame",
        title: "Restaurant & Bar",
        description:
          "From sunrise breakfasts to unhurried dinners and quiet evening drinks — food and hospitality that feels like home.",
      },
      contact: {
        eyebrow: "Contact",
        title: "We Would Love to Hear From You",
        description:
          "Find us in Durame, send a quick message, or reserve your room below.",
        reservationsEyebrow: "Reservations",
        reservationsTitle: "Book Your Stay",
        reservationsDescription:
          "Select your dates and room type — we will confirm availability shortly.",
      },
      about: {
        eyebrow: "Our story",
        title: "About Mintesnot Hotel",
        description:
          "An editorial portrait of vision, investment, and hospitality — crafted in the heart of Durame by Ato Tilahun Welde.",
        vision: {
          label: "The Vision",
          title: "A standard of care for Durame",
          paragraph1:
            "Ato Tilahun Welde envisioned Mintesnot Hotel as more than accommodation — a place where travelers feel genuinely at home amid the calm and green character of the highlands.",
          paragraph2:
            "Every corridor, room, and plate of food was considered with intention: clean lines, breathable spaces, and service that is warm without pretense — the quiet confidence of a luxury hotel that belongs to its city.",
        },
        investment: {
          label: "The Investment",
          title: "Raising Durame's hospitality",
          paragraph1:
            "With an investment exceeding 50 million birr, Mintesnot Hotel stands as a deliberate commitment to Durame's future — creating jobs, welcoming visitors, and signaling that world-class comfort can flourish here.",
          paragraph2:
            "The property adds lasting value to the city's hospitality sector, strengthens local opportunity, and invites guests to experience Durame not as a stopover, but as a destination worth lingering in.",
        },
        pullQuote:
          "We built Mintesnot so Durame would have a hotel worthy of its people — and every guest would leave feeling they had been truly cared for.",
        pullQuoteAttribution: "Ato Tilahun Welde, Founder",
        statValue: "50+",
        statUnit: "Million Birr",
        statCaption: "Invested to elevate hospitality in Durame",
        closing: {
          title: "A welcome that endures",
          paragraph:
            "Today, Mintesnot Hotel opens its doors to families, professionals, and travelers from near and far — a breezy, green refuge shaped by one man's vision and a city's rising promise.",
        },
        images: {
          suit: "Ato Tilahun Welde at Mintesnot Hotel",
          couple: "Hospitality and warmth at Mintesnot Hotel",
        },
        cta: "Plan your visit",
      },
    },
    rooms: {
      types: {
        gardenStandard: "Garden Standard",
        highlandDeluxe: "Highland Deluxe",
        twinComfort: "Twin Comfort",
        familySuite: "Family Suite",
        executiveRoom: "Executive Room",
        premiumSuite: "Premium Suite",
      },
      descriptions: {
        gardenStandard:
          "A calm, airy room with crisp linens and soft natural light.",
        highlandDeluxe:
          "Extra space to unwind after a day exploring Durame.",
        twinComfort:
          "Ideal for friends or colleagues traveling together.",
        familySuite:
          "Room to spread out with thoughtful touches for every guest.",
        executiveRoom:
          "Quiet, refined comfort for restful nights and early starts.",
        premiumSuite:
          "Our most spacious stay — breezy, green, and beautifully simple.",
      },
    },
    dining: {
      label: "Restaurant & Bar",
      sections: {
        mainHall: {
          title: "Main Dining Hall",
          description:
            "Gather over generous plates in a bright, welcoming space designed for unhurried meals and easy conversation.",
        },
        breakfast: {
          title: "Morning Coffee & Breakfast",
          description:
            "Start the day with fresh coffee, warm bread, and hearty breakfast favorites before you head out into Durame.",
        },
        localFlavors: {
          title: "Local Flavors",
          description:
            "Seasonal ingredients and familiar Ethiopian dishes, prepared with care and served in a relaxed, home-style setting.",
        },
        eveningBar: {
          title: "Evening Bar",
          description:
            "Unwind at day's end with a quiet drink, soft lighting, and the easy rhythm of the hotel after sunset.",
        },
        private: {
          title: "Private Gatherings",
          description:
            "A flexible corner for small celebrations, family meals, or intimate dinners — simple, warm, and yours for the evening.",
        },
      },
    },
    booking: {
      checkIn: "Check-in Date",
      checkOut: "Check-out Date",
      guests: "Number of Guests",
      roomType: "Room Type",
      fullName: "Full Name",
      phone: "Phone Number",
      selectRoom: "Select a room",
      fullNamePlaceholder: "Your full name",
      phonePlaceholder: "+251 ...",
      submitBooking: "Submit booking",
      sending: "Opening Telegram…",
      successTitle: "Opening Telegram",
      successDescription:
        "Complete your booking in Telegram — your details are pre-filled in the message.",
      errorTitle: "Could not open Telegram",
      errorDescription:
        "Please allow pop-ups for this site, or message us on Telegram @axiomaticad.",
      validation: {
        checkInRequired: "Check-in date is required",
        checkOutRequired: "Check-out date is required",
        guestsRequired: "Number of guests is required",
        guestsInt: "Guests must be a whole number",
        guestsMin: "At least 1 guest",
        guestsMax: "Maximum 20 guests",
        fullNameMin: "Please enter your full name",
        fullNameMax: "Name is too long",
        phoneMin: "Please enter a valid phone number",
        phoneMax: "Phone number is too long",
        phoneInvalid: "Phone number format is invalid",
        roomTypeRequired: "Please select a room type",
        checkOutAfterCheckIn: "Check-out must be after check-in",
      },
    },
    contact: {
      findUs: "Find us",
      visitTitle: "Visit Mintesnot Hotel",
      visitDescription:
        "We are easy to find in the heart of Durame — steps from Abune Teklehaimanot Church. Call ahead or send a message anytime.",
      addressLabel: "Address",
      address:
        "On the right side of Abune Teklehaimanot Church, Durame",
      phoneLabel: "Phone",
      mapNote:
        "Map centered near Abune Teklehaimanot Church — hotel on the right side facing the church.",
      form: {
        fullName: "Full Name",
        email: "Email",
        phone: "Phone",
        phoneOptional: "(optional)",
        message: "Message",
        fullNamePlaceholder: "Your name",
        emailPlaceholder: "you@email.com",
        phonePlaceholder: "09...",
        messagePlaceholder: "How can we help?",
        sendMessage: "Send message",
        sending: "Sending…",
        successTitle: "Message sent!",
        successDescription: "We will get back to you as soon as we can.",
        errorTitle: "Could not send your message",
        errorDescription: "Please try again or call us directly.",
        validation: {
          fullNameMin: "Please enter your full name",
          fullNameMax: "Name is too long",
          emailInvalid: "Please enter a valid email address",
          phoneMax: "Phone number is too long",
          phoneInvalid: "Phone number format is invalid",
          messageMin: "Please write at least a few words",
          messageMax: "Message is too long",
        },
      },
    },
    footer: {
      tagline:
        "Your clean, breezy home in Durame — comfort, green calm, and warm hospitality.",
      explore: "Explore",
      visit: "Visit",
      contact: "Contact",
      bookOrMessage: "Book or message us →",
      rights: "All rights reserved.",
      location: "Durame, Ethiopia",
    },
    lightbox: {
      viewLarger: "View larger image",
      close: "Close",
    },
  },
  AM: {
    brand: "ምንተስኖት ሆቴል",
    nav: {
      home: "መነሻ",
      rooms: "የክፍል አማራጮች",
      dining: "ምግብ ቤት",
      about: "ስለ እኛ",
      contact: "እውቂያ",
    },
    bookNow: "አሁኑኑ ቦታ ያስይዙ",
    submit: "አስገባ",
    theme: {
      light: "ብርሃን ሁነታ",
      dark: "ጨለማ ሁነታ",
    },
    language: "ቋንቋ",
    menu: {
      open: "ምናሌ ክፈት",
      close: "ምናሌ ዝጋ",
    },
    hero: {
      imageAlt: "በዱራሜ የሚገኘው የምንተስኖት ሆቴል ዋና ሕንፃ",
      greeting: "እንኳን በደህና መጡ",
      intro:
        "ወደ ዱራሜ ሲመጡ፣ እንደ ቤትዎ የሚሰማዎት ምንተስኖት ሆቴል ሁሉንም ነገር አዘጋጅቶ ይጠብቃል።",
      bullet1: "እጅ የሚያስቆረጥም ምግባችን ይቅመሱት",
      bullet2:
        "ንፁህ ፣ ነፋሻማና አረንጓዴ ቀለም በተሞላችው አካባቢ ንፁህ ማረፍያ ያገኛሉ",
      address:
        "አድራሻ፡ በዱራሜ አቡነ ተክለሀይማኖት ቤተክርስቲያን በቀኝ በኩል",
      phone1: "0978392777",
      phone2: "0934814220",
    },
    press: {
      eyebrow: "በዜና",
      title: "ፕሬስ እና እውቅና",
      subtitle:
        "ይፋዊ መክፈቻያችንን እና የዱራሜ እንግዳ ተቀባይነት ታሪክን እናከብራለን።",
      featured: "ዋና ሽፋን",
      asFeatured: "ቪዚት ካምባታ ባስፋራ",
      viewPost: "ዋናውን የፌስቡክ ልጥፍ ይመልከቱ",
      headlineHotel: "«ምንተስኖት ሆቴል»",
      headlineRest:
        "በዱራሜ ከ50 ሚሊዮን ብር በላይ ኢንቨስትመንት በተደረገ በይፋ ተመረቀ።",
      bodyLead: "«ምንተስኖት ሆቴል»",
      bodyRest:
        "በዱራሜ ከተማ በአቶ ትላሁን ወልዴ ከ50 ሚሊዮን ብር በላይ ኢንቨስትመንት በማድረግ የተገነባ ሲሆን፣ በይፋ ተመርቆ ለአገልግሎት ቀርቧል። ሆቴሉ ለከተማዋ የእንግዳ ተቀባይነት ዘርፍ እሴት ይጨምራል፣ የስራ እድል ይፈጥራል፣ የዱራሜን እየጨመረ ያለ የኢንቨስትመንት አቅምም ያብራራል።",
    },
    pages: {
      rooms: {
        eyebrow: "ከእኛ ጋር ይቆዩ",
        title: "የክፍል አማራጮች",
        description:
          "ስድስት በጥንቃቄ የተዘጋጁ ክፍሎች — አስገምጋሚ፣ አረፋ የሚሰጥ እና በሰላምታ የተሞላ አካባቢ።",
      },
      dining: {
        eyebrow: "የዱራሜ ጣዕም",
        title: "ሬስቶራንት እና ባር",
        description:
          "ከጥዋት ቁርስሰት እስከ ዘና ያለ እራት እና ለማታ ምንጭ — እንደ ቤት የሚሰማ አገልግሎት።",
      },
      contact: {
        eyebrow: "እውቂያ",
        title: "ከእርስዎ መስማት ደስ ብሎናል",
        description:
          "በዱራሜ ያግኙን፣ መልዕክት ይላኩልን ወይም ክፍልዎን ከዚህ በታች ያስይዙ።",
        reservationsEyebrow: "ቦታ ማስያዝ",
        reservationsTitle: "ክፍልዎን ያስይዙ",
        reservationsDescription:
          "ቀኖችዎንና የክፍል አይነትዎን ይምረጡ — ተገኝነቱን በቅርቡ እናረጋግጣለን።",
      },
      about: {
        eyebrow: "ታሪካችን",
        title: "ስለ ምንተስኖት ሆቴል",
        description:
          "የራዕይ፣ ኢንቨስትመንት እና አጋንጋንት ታሪክ — በዱራሜ ልብ ውስጥ በአቶ ትላሁን ወልዴ የተሰራ።",
        vision: {
          label: "ራዕይ",
          title: "ለዱራሜ የእንክብካቤ ደረጃ",
          paragraph1:
            "አቶ ትላሁን ወልዴ ምንተስኖት ሆቴልን ከመኖሪያ ቤት በላይ — በሰላምታና በአረንጓዴ አካባቢ ውስጥ እንግዶች እውነተኛ ቤት የሚሰማበት ቦታ ሆኖ ያዩት።",
          paragraph2:
            "እያንዳንዱ ክፍል፣ የእግር ማስኞ እና የምግብ ልምድ በጥንቃቄ ተሰራ፡ ንፁህ፣ አየር የሚያስተላልፍ ቦታዎች እና ሞቅ ያለ አገልግሎት — ያለ ትዋራ የሚከብር የከፍተኛ ደረጃ ሆቴል።",
        },
        investment: {
          label: "ኢንቨስትመንት",
          title: "የዱራሜን እንግዳ ተቀባይነት ማሳደግ",
          paragraph1:
            "ከ50 ሚሊዮን ብር በላይ ኢንቨስትመንት በማድረግ ምንተስኖት ሆቴል ለዱራሜ የወደፊት ቁርጠኝነት ነው — የስራ እድል መፍጠር፣ እንግዶችን መቀበል እና የአለም አቀፍ ምቹነት እዚህ እንደሚታጸጽ ማሳየት።",
          paragraph2:
            "ሆቴሉ ለከተማዋ የእንግዳ ተቀባይነት ዘርፍ ዘላቂ እሴት ይጨምራል፣ የአካባቢውን እድል ያጠናክራል እና ዱራሜን ለማረፍ የሚገባ ቦታ እንደሆነ ያስተማማል።",
        },
        pullQuote:
          "ምንተስኖትን እንደሰራነው ዱራሜ ለሕዝቡ የሚጠባበቅ ሆቴል እንዲኖረው ነው — እያንዳንዱ እንግዳ እውነተኛ እንክብካቤ እንደተደረገለት ሲሄድ።",
        pullQuoteAttribution: "አቶ ትላሁን ወልዴ፣ መስራች",
        statValue: "50+",
        statUnit: "ሚሊዮን ብር",
        statCaption: "በዱራሜ የእንግዳ ተቀባይነት ለማሳደግ የተደረገ ኢንቨስትመንት",
        closing: {
          title: "የሚቆይ አቀባበል",
          paragraph:
            "ዛሬ ምንተስኖት ሆቴል ለቤተሰቦች፣ ለባለሙያዎች እና ለከባድና ከርቀት የመጡ ተጓዦች ደጉን ይከፍታል — በአንድ ሰው ራዕይና በከተማዋ ተስፋ የታከለ ነፋሻማ አረንጓዴ መጠጊያ።",
        },
        images: {
          suit: "አቶ ትላሁን ወልዴ በምንተስኖት ሆቴል",
          couple: "በምንተስኖት ሆቴል ሞቅ ያለ አጋንጋንት",
        },
        cta: "ጉዞዎን ያቀዱ",
      },
    },
    rooms: {
      types: {
        gardenStandard: "የአትክልት ግቢ መደበኛ",
        highlandDeluxe: "የሰፋላ ዴሉክስ",
        twinComfort: "የሁለት አልጋ አሰባሽ",
        familySuite: "የቤተሰብ ስዊት",
        executiveRoom: "የኤክዚኪዩቲቭ ክፍል",
        premiumSuite: "ፕሪሚየም ስዊት",
      },
      descriptions: {
        gardenStandard:
          "አፈፃፀም ያለው ንፁህ ክፍል — በተራቀቀ አንጠሊጋ እና በተፈጥሮ ብርሃን።",
        highlandDeluxe:
          "ዱራሜን ከማስሳት በኋላ ለማረፍ ተጨማሪ ቦታ።",
        twinComfort:
          "አብረው ለሚጓዙ ጓደኞች ወይም ባልደረቦች ተስማሚ።",
        familySuite:
          "ለቤተሰብዎ ሁሉ ለአንድ ምሽት ሰላም የሚሰጥ ሰፊ ክፍል።",
        executiveRoom:
          "ለጥልቅ እረፍት እና ለነጋ አገልግሎት — ዘና የሚባል ምቹነት።",
        premiumSuite:
          "በጣም ሰፊው የእኛ ክፍል — ነፋሻማ፣ አረንጓዴ እና በቀላሉ ውብ።",
      },
    },
    dining: {
      label: "ሬስቶራንት እና ባር",
      sections: {
        mainHall: {
          title: "ዋና የምግብ አዳራሽ",
          description:
            "በብሩህ እና በሚከተል አካባቢ ውስጥ ለዘና ያለ ምሳ እና ለማህበራዊ ውዮድ የተዘጋጀ ቦታ።",
        },
        breakfast: {
          title: "የጥዋት ቡና እና ቁርስሰት",
          description:
            "ቀኑን በትኩስ ቡና፣ በሙሉ እንጀራ እና በጠኔኳማ ቁርስሰት ይጀምሩ።",
        },
        localFlavors: {
          title: "የአካባቢ ጣዕሞች",
          description:
            "የወቅቱ እቃዎች እና የሚያውቁዋቸው የኢትዮጵያ ምግቦች — በእንክብካቤ የተዘጋጁ እና በቤት ውስጥ የሚሰሙ።",
        },
        eveningBar: {
          title: "የማታ ባር",
          description:
            "ቀኑን በዘና የሚያደርግ መጠጥ፣ በስፋት ብርሃን እና በሆቴሉ ለማታ ምቹ አየር።",
        },
        private: {
          title: "የግል ስብሰባ",
          description:
            "ለቤተሰብ ምሳ፣ ለትናንሽ በዓላት ወይም ለግል ድራሽ — ቀላል፣ ሞቅ ያለ እና ልዩ።",
        },
      },
    },
    booking: {
      checkIn: "የመግቢያ ቀን",
      checkOut: "የመውጫ ቀን",
      guests: "የእንግዶች ብዛት",
      roomType: "የክፍል አይነት",
      fullName: "ሙሉ ስም",
      phone: "ስልክ ቁጥር",
      selectRoom: "ክፍል ይምረጡ",
      fullNamePlaceholder: "ሙሉ ስምዎ",
      phonePlaceholder: "+251 ...",
      submitBooking: "ቦታ ያስይዙ",
      sending: "ቴሌግራም በመክፈት ላይ…",
      successTitle: "ቴሌግራም እየተከፈተ ነው",
      successDescription:
        "ቦታዎን በቴሌግራም ያጠናቅቁ — ዝርዝሮችዎ በመልዕክቱ ውስጥ ቀድመው ተሞልተዋል።",
      errorTitle: "ቴሌግራም ማግኘት አልተቻለም",
      errorDescription:
        "እባክዎ ለዚህ ጣቢያ ብቅ-ባዮችን ይፍቀዱ፣ ወይም በቴሌግራም @axiomaticad ይጻፉ።",
      validation: {
        checkInRequired: "የመግቢያ ቀን ያስፈልጋል",
        checkOutRequired: "የመውጫ ቀን ያስፈልጋል",
        guestsRequired: "የእንግዶች ብዛት ያስፈልጋል",
        guestsInt: "እንግዶች ሙሉ ቁጥር መሆን አለበት",
        guestsMin: "ቢያንስ 1 እንግዳ",
        guestsMax: "ከፍተኛው 20 እንግዶች",
        fullNameMin: "እባክዎ ሙሉ ስምዎን ያስገቡ",
        fullNameMax: "ስም በጣም ረጅም ነው",
        phoneMin: "እባክዎ ትክክለኛ ስልክ ቁጥር ያስገቡ",
        phoneMax: "ስልክ ቁጥር በጣም ረጅም ነው",
        phoneInvalid: "የስልክ ቁጥር ቅርጽ ትክክል አይደለም",
        roomTypeRequired: "እባክዎ የክፍል አይነት ይምረጡ",
        checkOutAfterCheckIn: "የመውጫ ቀን ከመግቢያ ቀን በኋላ መሆን አለበት",
      },
    },
    contact: {
      findUs: "አድራሻና ስልክ",
      visitTitle: "ምንተስኖት ሆቴል ይጎብኙ",
      visitDescription:
        "በዱራሜ ልብ ውስጥ ቀላል ነው — ከአቡነ ተክለሀይማኖት ቤተክርስቲያን ብቸኛ ነው። በማንኛውም ጊዜ ይደውሉ ወይም መልዕክት ይላኩልን።",
      addressLabel: "አድራሻ",
      address: "በዱራሜ አቡነ ተክለሀይማኖት ቤተክርስቲያን በቀኝ በኩል",
      phoneLabel: "ስልክ",
      mapNote:
        "ካርታው አቢሲኖት አቡነ ተክለሀይማኖት ቤተክርስቲያን አቅራቢያ ነው — ሆቴሉ ቤተክርስቲያኑን በመመልከት በቀኝ በኩል ይገኛል።",
      form: {
        fullName: "ሙሉ ስም",
        email: "ኢሜይል",
        phone: "ስልክ",
        phoneOptional: "(አማራጭ)",
        message: "መልዕክት",
        fullNamePlaceholder: "ስምዎ",
        emailPlaceholder: "you@email.com",
        phonePlaceholder: "09...",
        messagePlaceholder: "እንዴት ልንረዳዎ እንችላለን?",
        sendMessage: "መልዕክት ይላኩ",
        sending: "በመላክ ላይ…",
        successTitle: "መልዕክትዎ ተልኳል!",
        successDescription: "በተቻለ ፍጥነት እንመለስልዎታለን።",
        errorTitle: "መልዕክትዎን ማስተላለፍ አልተቻለም",
        errorDescription: "እባክዎ እንደገና ይሞክሩ ወይም በቀጥታ ይደውሉን።",
        validation: {
          fullNameMin: "እባክዎ ሙሉ ስምዎን ያስገቡ",
          fullNameMax: "ስም በጣም ረጅም ነው",
          emailInvalid: "እባክዎ ትክክለኛ ኢሜይል ያስገቡ",
          phoneMax: "ስልክ ቁጥር በጣም ረጅም ነው",
          phoneInvalid: "የስልክ ቁጥር ቅርጽ ትክክል አይደለም",
          messageMin: "እባክዎ ትንሽ መልዕክት ይጻፉ",
          messageMax: "መልዕክት በጣም ረጅም ነው",
        },
      },
    },
    footer: {
      tagline:
        "በዱራሜ የእርስዎ ንፁህ እና ነፋሻማ ቤት — ምቹነት፣ አረንጓዴ ሰላምታ እና ሞቅ ያለ አጋንጋንት።",
      explore: "ያስሱ",
      visit: "ይጎብኙ",
      contact: "አድራሻና ስልክ",
      bookOrMessage: "አሁኑኑ ቦታ ያስይዙ ወይም መልዕክት ይላኩ →",
      rights: "ሁሉም መብቶች የተጠበቁ ናቸው።",
      location: "ዱራሜ፣ ኢትዮጵያ",
    },
    lightbox: {
      viewLarger: "ትልቅ ምስል ይመልከቱ",
      close: "ዝጋ",
    },
  },
} as const satisfies Record<Locale, Record<string, unknown>>;

export type TranslationTree = (typeof translations)["EN"];

function getByPath(tree: Record<string, unknown>, path: string): string {
  const value = path.split(".").reduce<unknown>((node, key) => {
    if (node && typeof node === "object" && key in node) {
      return (node as Record<string, unknown>)[key];
    }
    return undefined;
  }, tree);

  return typeof value === "string" ? value : path;
}

export function translate(locale: Locale, key: string): string {
  return getByPath(translations[locale] as Record<string, unknown>, key);
}
