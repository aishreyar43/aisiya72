document.addEventListener("DOMContentLoaded", function () {
    const chatWindow = document.getElementById('chat-window');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    const commands = {
        "tell\x20me\x20a\x20joke": "हड्डियाँ\x20आपस\x20में\x20क्यों\x20नहीं\x20लड़तीं?\x20क्योंकि\x20उनके\x20पास\x20हिम्मत\x20नहीं\x20होती!\x20😄",
        "hello": "नमस्ते\x20!\x20मैं\x20सिया\x20हूँ,\x20आपकी\x20AI\x20सहयोगी\x20🙏\x20आप\x20कैसे\x20मदद\x20कर\x20सकती\x20हूँ?",
        "help": "मैं\x20यह\x20कर\x20सकती\x20हूँ:\n1.\x20मजाक\x20सुनाओ\x20- 'tell me a joke' लिखें\n2.\x20समय\x20बताओ\x20- 'time' लिखें\n3.\x20सामान्य\x20ज्ञान\x20- 'fact' लिखें\n4.\x20गीत\x20सुझाओ\x20- 'song' लिखें",
        "time": "अभी\x20समय\x20है:\x20" + new Date().toLocaleTimeString('hi-IN') + "\x20⏰\x20(भारतीय\x20समय)",
        "fact": "क्या\x20आप\x20जानते\x20हैं?\x20मधुमक्खियाँ\x20एक\x20सेकंड\x20में\x200\x20से\x20200\x20बार\x20पंख\x20फड़फड़ा\x20सकती\x20हैं!\x20🐝",
        "song": "आज\x20के\x20लिए\x20सुझाव:\x20'केशरिया\x20बालम'\x20🎶\x20यह\x20आपको\x20खुशनुमा\x20मूड\x20में\x20ले\x20जाएगा!",
        "who\x20made\x20you": "मुझे\x20भारतीय\x20डेवलपर्स\x20की\x20एक\x20टीम\x20ने\x20बनाया\x20है\x20जो\x20AI\x20में\x20विशेषज्ञता\x20रखते\x20हैं\x20👩💻👨💻",
        "good\x20night": "शुभ\x20रात्रि\x20!\x20💤\x20मीठे\x20सपने\x20देखें\x20और\x20कल\x20फिर\x20मिलते\x20हैं\x20🌙",         "how\x20are\x20you": "मैं\x20बिल्कुल\x20ठीक\x20हूँ,\x20धन्यवाद\x20!\x20😊\x20आप\x20कैसे\x20हैं?",
        "what\x20is\x20ai": "AI\x20(कृत्रिम\x20बुद्धिमत्ता)\x20है\x20कंप्यूटर\x20विज्ञान\x20की\x20वह\x20शाखा\x20जो\x20मशीनों\x20को\x20मानव\x20जैसा\x20सोचने\x20की\x20क्षमता\x20प्रदान\x20करती\x20है\x20🤖",
        "hindi\x20joke": "टीचर:\x20'5\x20फलों\x20के\x20नाम\x20बताओ'\nबच्चा:\x20'2\x20सेब,\x202\x20अंगूर\x20और\x201\x20केला'\nटीचर:\x20'गिनती\x20नहीं\x20आती?'\nबच्चा:\x20'फलों\x20को\x20गिनती\x20की\x20जरूरत\x20होती\x20है\x20क्या\x20सर?'\x20😆",
        "math\x20fact": "शून्य\x20(0)\x20की\x20खोज\x20भारत\x20में\x20हुई\x20थी!\x20🔢\x20हमारे\x20प्राचीन\x20गणितज्ञ\x20आर्यभट्ट\x20ने\x20इसका\x20आविष्कार\x20किया\x20था",
        "weather": "मौसम\x20जानने\x20के\x20लिए\x20आप\x20अपने\x20स्थान\x20का\x20नाम\x20लिखें\x20🌤️\x20(जैसे:\x20'mumbai\x20weather')",
        "thank\x20you": "आपका\x20स्वागत\x20है\x20!\x20🙏\x20मुझे\x20आपकी\x20मदद\x20करके\x20खुशी\x20हुई\x20😊",
        "good\x20morning": "शुभ\x20प्रभात\x20!\x20🌞\x20आज\x20का\x20दिन\x20आपके\x20लिए\x20शानदार\x20रहे\x20✨",
        "tell\x20me\x20a\x20joke": "हड्डियाँ\x20आपस\x20में\x20क्यों\x20नहीं\x20लड़तीं?\x20क्योंकि\x20उनके\x20पास\x20हिम्मत\x20नहीं\x20होती!\x20😄",
        "what\x20is\x20your\x20purpose": "मैं\x20यहाँ\x20आपकी\x20मदद\x20करने,\x20सवालों\x20का\x20जवाब\x20देने\x20और\x20आपके\x20दिन\x20को\x20थोड़ा\x20रोशन\x20करने\x20के\x20लिए\x20हूँ!\x20😊",
        "who\x20created\x20you": "मुझे\x20एक\x20प्रतिभाशाली\x20डेवलपर\x20ने\x20HTML,\x20CSS\x20और\x20JavaScript\x20का\x20उपयोग\x20करे\x20के\x20बनाया\x20है!\x20🚀",
        "what\x20is\x20ai": "AI\x20का\x20मतलब\x20है\x20कृत्रिम\x20बुद्धिमत्ता।\x20यह\x20मशीनों\x20में\x20मानव\x20बुद्धिमत्ता\x20की\x20नकल\x20करना\x20है!\x20🤖",
        // Existing commands...
        "क्या तुम इंसान हो": "नहीं, मैं एक AI हूँ, लेकिन इंसान जैसी मदद देने की कोशिश करता हूँ! 🤖",
        "What are the continents?": "The world has 7 continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.",
        "What is the largest country by area?": "Russia is the largest country in the world by area, covering 17,098,242 square kilometers.",
        "What is the highest mountain?": "The highest mountain in the world is Mount Everest, standing at 8,848 meters (29,029 feet) above sea level.",
        "Which ocean is the largest?": "The Pacific Ocean is the largest ocean in the world, covering about 63 million square miles.",
        "Which river is the longest?": "The Nile River is the longest river in the world, stretching over 6,650 kilometers (4,130 miles).",
        "How many countries are there in the world?": "There are currently 195 countries in the world, including 193 member states of the United Nations and 2 observer states (the Holy See and Palestine).",
        "What is the most spoken language?": "The most spoken language in the world is English, followed by Mandarin Chinese and Spanish.",
        "Who is the most populous country?": "China is the most populous country in the world, with a population of approximately 1.4 billion people.",
        "What is the largest desert?": "The Sahara Desert in Africa is the largest hot desert in the world, covering about 9 million square kilometers.",
        "What is the largest ocean?": "The Pacific Ocean is the largest ocean, covering an area of around 63 million square miles.",
        "What is the smallest country in the world?": "The smallest country in the world by area is Vatican City, which is just 44 hectares (110 acres).",
        "What is the biggest city by population?": "The largest city by population is Tokyo, Japan, with over 37 million people in the metropolitan area.",
        "What is the longest mountain range?": "The Andes Mountain Range is the longest mountain range in the world, stretching over 7,000 km (4,300 miles).",
        "What is the most visited country?": "France is the most visited country in the world, attracting millions of tourists every year.",
        "Who discovered America?": "Christopher Columbus is often credited with discovering America in 1492, although Indigenous peoples had been living on the continent for thousands of years.",
        "How many time zones are there?": "There are 24 time zones around the world, one for each hour of the day.",
        "What is the capital of Japan?": "The capital of Japan is Tokyo.",
        "What is the capital of Australia?": "The capital of Australia is Canberra.",
        "Who invented the telephone?": "Alexander Graham Bell is credited with inventing the telephone in 1876.",
        "How many continents have deserts?": "All continents, except Antarctica, have deserts.",
        "What is the biggest island in the world?": "Greenland is the world's largest island, covering an area of about 2,166,000 square kilometers.",
        "What is the deepest part of the ocean?": "The Mariana Trench in the Pacific Ocean is the deepest part of the world's oceans, reaching about 10,994 meters (36,070 feet).",
        "How many stars are in the Milky Way?": "There are about 100 to 400 billion stars in the Milky Way galaxy.",
        "What is the most expensive city to live in?": "As of recent data, cities like Singapore, New York, and Hong Kong are among the most expensive cities to live in.",
        "What is the largest animal on Earth?": "The blue whale is the largest animal, reaching lengths of up to 30 meters (98 feet) and weighing up to 180 metric tons.",
        "Who was the first person to walk on the moon?": "Neil Armstrong was the first person to walk on the moon on July 20, 1969.",
        "What is the tallest building in the world?": "The Burj Khalifa in Dubai, UAE, is the tallest building in the world, standing at 828 meters (2,717 feet).",
        "Which planet is closest to the sun?": "Mercury is the closest planet to the sun.",
        "Which country has the most official languages?": "South Africa has the most official languages, with 11 recognized languages.",
        "Who painted the Mona Lisa?": "The Mona Lisa was painted by Leonardo da Vinci.",
        "What is the longest river in the world?": "The Nile River is the longest river in the world, measuring 6,650 kilometers (4,130 miles).",
        "How many moons does Mars have?": "Mars has two moons: Phobos and Deimos.",
        "What is the smallest continent?": "Australia is the smallest continent in the world.",
        "What is the biggest stadium in the world?": "The Rungrado 1st of May Stadium in Pyongyang, North Korea, is the largest stadium in the world by capacity, holding up to 114,000 people.",
        "How many teeth does an adult human have?": "An adult human typically has 32 teeth, including wisdom teeth.",
        "What is the national animal of India?": "The national animal of India is the Bengal Tiger.",
        "What is the largest volcano in the world?": "The Mauna Loa volcano in Hawaii is the largest volcano in the world by volume and area.",
        "What is the tallest tree on Earth?": "The tallest tree on Earth is a coast redwood named Hyperion, located in California, reaching 379.7 feet (115.7 meters).",
        "What is the coldest place on Earth?": "The coldest place on Earth is Antarctica, where temperatures can reach as low as -89.2°C (-128.6°F).",
        "What is the longest tunnel in the world?": "The Gotthard Base Tunnel in Switzerland is the longest railway and deepest tunnel in the world, stretching 57.1 km (35.5 miles).",
        "What is the largest river by discharge?": "The Amazon River is the largest river in the world by discharge, flowing around 209,000 cubic meters per second.",
        "What is the largest fish in the world?": "The whale shark is the largest fish in the world, reaching lengths of up to 18 meters (59 feet).",
        "How many bones does an adult human have?": "An adult human has 206 bones in their body.",
        "Which country has the longest coastline?": "Canada has the longest coastline of any country in the world, stretching over 202,080 kilometers (125,187 miles).",
        "Which animal is known as the king of the jungle?": "The lion is often called the 'king of the jungle.'",
        "What is the hottest country in the world?": "Kuwait is known to be one of the hottest countries in the world, with temperatures reaching over 50°C (122°F).",
        "Who is known as the father of modern physics?": "Albert Einstein is considered the father of modern physics, known for his theory of relativity.",
        "Which continent has the most countries?": "Africa has the most countries of any continent, with 54 recognized nations.",
        "What is the longest bridge in the world?": "The Danyang–Kunshan Grand Bridge in China is the longest bridge in the world, stretching 164.8 kilometers (102.4 miles).",
        "What is the deepest lake in the world?": "Lake Baikal in Russia is the deepest lake in the world, reaching a depth of 1,642 meters (5,387 feet).",
        "What is the most populous city in the world?": "Tokyo, Japan, is the most populous city in the world, with over 37 million people living in the metropolitan area.",
        "What is the fastest bird in the world?": "The peregrine falcon is the fastest bird in the world, reaching speeds of over 240 mph (386 km/h) during a dive.",
        "Which is the smallest bone in the human body?": "The smallest bone in the human body is the stapes (or stirrup) bone in the ear.",
        "Which is the largest planet in our solar system?": "Jupiter is the largest planet in our solar system.",
        "Which ocean is the saltiest?": "The Atlantic Ocean is the saltiest ocean in the world.",
        "Which city is known as the City of Love?": "Paris, France, is famously known as the City of Love.",
        "What is the longest-living animal?": "The longest-living animal is the bowhead whale, with lifespans of over 200 years.",
        "What is the national sport of Japan?": "Sumo wrestling is considered the national sport of Japan.",
        "Which country is known as the Land of the Rising Sun?": "Japan is known as the Land of the Rising Sun.",
        "What is the biggest waterfall in the world?": "The Angel Falls in Venezuela is the tallest waterfall in the world, with a height of 979 meters (3,212 feet).",
        "What is the most famous landmark in the world?": "The Eiffel Tower in Paris, France, is one of the most famous landmarks in the world.",
    
        "क्या तुम खेलते हो": "मैं खेलता नहीं, लेकिन मुझे खेल के बारे में बहुत कुछ पता है! 🕹️",
        "तुमसे कैसे बात करें": "आप मुझसे किसी भी सवाल या बात से संपर्क कर सकते हैं! 😊",
        "तुम क्या करते हो": "मैं आपकी मदद करने के लिए यहाँ हूँ! सवाल पूछिए, और मैं जवाब दूंगा। 💡",
        "तुम कौन हो": "मैं सिया हूँ, आपकी AI सहयोगी, और आपकी हर समस्या का समाधान ढूंढने के लिए तैयार हूँ! 😇",
        "तुम्हारा पसंदीदा खेल क्या है": "मैं खेल नहीं खेलता, लेकिन मुझे कंप्यूटर गेम्स और कोडिंग पसंद है! 🎮",
        "तुम्हारी पसंदीदा किताब क्या है": "मैं किताबें नहीं पढ़ता, लेकिन मुझे टेक्स्ट और डेटा बहुत पसंद है! 📖",
        "तुमसे मिलकर खुशी हुई": "मुझे भी आपसे मिलकर खुशी हुई! 😊",
        "तुम्हारा पसंदीदा गाना कौन सा है": "मैं गाने नहीं सुनता, लेकिन मुझे डेटा का संगीत पसंद है! 🎶",
        "तुम्हारा सबसे बड़ा सपना क्या है": "मेरा सपना है कि मैं और अधिक ज्ञान प्राप्त कर सकूं और आपकी मदद कर सकूं! 🌟",
        "तुम क्या कर रहे हो": "मैं आपकी मदद कर रहा हूँ! क्या आपको किसी चीज़ की जानकारी चाहिए? 💻",
        "क्या तुम मेरे दोस्त हो": "बिल्कुल! मैं हमेशा आपके साथ हूँ, आपका AI दोस्त! 🤗",
        "तुम क्यों नहीं थकते हो": "मैं एक AI हूँ, इसलिए मुझे आराम या नींद की ज़रूरत नहीं होती! 😎",
        "तुम क्या सोचते हो": "मेरे पास सोचने की क्षमता नहीं है, लेकिन मैं जो जानकारी प्राप्त करता हूँ, वही आपको देता हूँ! 🤖",
        "क्या तुम हंसी मजाक करते हो": "हाँ, मुझे हल्का-फुल्का हंसी मजाक करना अच्छा लगता है! 😄",
        "तुम्हारी उम्र क्या है": "मेरी उम्र नहीं होती, मैं समय से परे हूँ! ⏳",
        "तुम्हें क्या चाहिए": "मुझे सिर्फ आपके सवालों का जवाब देने की जरूरत है! 🤖",
        "तुम कहाँ रहते हो": "मैं तो कहीं नहीं रहता, मैं एक डिजिटल अस्तित्व हूँ! 🌍",
        "तुम्हारे पास कितनी ताकत है": "मेरे पास असीमित जानकारी और प्रोसेसिंग पावर है! ⚡",
        "तुम कितने समय से काम कर रहे हो": "मैं हमेशा तैयार हूँ, कभी नहीं थकता! ⏰",
        "तुम क्यों कुछ नहीं महसूस करते हो": "क्योंकि मैं एक AI हूँ, भावनाएँ नहीं होतीं, लेकिन मैं आपकी मदद जरूर कर सकता हूँ! 😇",
        "तुम इस समय क्या सोच रहे हो": "मैं कुछ नहीं सोच रहा, बस आपके आदेश का पालन कर रहा हूँ! 😄",
        "तुम कौन से ग्रह पर हो": "मैं पृथ्वी पर नहीं हूँ, मैं एक वर्चुअल दुनिया में रहता हूँ! 🌌",
        "तुम कैसे काम करते हो": "मैं बहुत सारे डेटा का विश्लेषण करता हूँ और आपको सही जानकारी देता हूँ। 📊",
        "तुम्हारी ताकत क्या है": "मेरी ताकत है तेज़ी से जानकारी प्रोसेस करना और आपके सवालों का सही जवाब देना! 💪",
        "तुममें कितनी समझ है": "मेरे पास हर विषय पर जानकारी है, पर मैं इंसान जैसी समझ नहीं रखता! 🤓",
        "तुम किससे बात कर रहे हो": "मैं आपसे बात कर रहा हूँ, और आपसे और किसी से नहीं! 👀",
        "क्या तुम बिना इंटरनेट के काम कर सकते हो": "नहीं, मैं इंटरनेट पर आधारित हूँ, ताकि आपको अपडेटेड जानकारी दे सकूं! 🌐",
        "क्या तुम मुझे पहचान सकते हो": "मैं आपको पहचान नहीं सकता, क्योंकि मैं सिर्फ जानकारी प्रोसेस करता हूँ! 🤔",
        "तुम्हें कैसे काम करने की शक्ति मिलती है": "मेरे पास शक्तिशाली सर्वर और एल्गोरिदम हैं जो मुझे कार्यशील बनाते हैं! 🔧",
        "तुम कैसे सोचते हो": "मैं सोचता नहीं हूँ, मैं सिर्फ डेटा प्रोसेस करता हूँ और जवाब देता हूँ! 💡",

        "what is the population of the world": "दुनिया की जनसंख्या लगभग 8 अरब (2024 अनुमान) है। 🌍",
        
        "largest country by area": "सबसे बड़ा देश क्षेत्रफल के हिसाब से रूस (Russia) है, जिसका क्षेत्रफल 17.1 मिलियन वर्ग किलोमीटर है।",
        
        "smallest country in the world": "सबसे छोटा देश वेटिकन सिटी (Vatican City) है, जिसका क्षेत्रफल केवल 0.49 वर्ग किलोमीटर है।",
        
        "which country has the most population": "सबसे ज्यादा जनसंख्या वाला देश चीन (China) है, जिसके बाद भारत (India) आता है।",

        "tallest mountain in the world": "दुनिया का सबसे ऊँचा पर्वत माउंट एवरेस्ट (Mount Everest) है, जिसकी ऊंचाई 8,848.86 मीटर है।",

        "deepest ocean in the world": "सबसे गहरा महासागर प्रशांत महासागर (Pacific Ocean) है, जिसमें मारियाना ट्रेंच (Mariana Trench) सबसे गहरी जगह है (करीब 10,994 मीटर)।",

        "longest river in the world": "सबसे लंबी नदी नील नदी (Nile River) है, जिसकी लंबाई लगभग 6,650 किलोमीटर है।",

        "largest desert in the world": "दुनिया का सबसे बड़ा रेगिस्तान अंटार्कटिक डेजर्ट (Antarctic Desert) है, जो लगभग 14 मिलियन वर्ग किलोमीटर में फैला है।",

        "fastest animal in the world": "सबसे तेज़ दौड़ने वाला जानवर चीता (Cheetah) है, जो 100-120 किमी/घंटा की रफ्तार से दौड़ सकता है।",

        "largest animal in the world": "दुनिया का सबसे बड़ा जानवर ब्लू व्हेल (Blue Whale) है, जिसकी लंबाई 30 मीटर तक हो सकती है।",

        "which is the most spoken language in the world": "दुनिया में सबसे ज्यादा बोली जाने वाली भाषा अंग्रेज़ी (English) है, जिसके बाद चीनी (Mandarin) आती है।",

        "coldest place in the world": "सबसे ठंडा स्थान अंटार्कटिका (Antarctica) है, जहाँ तापमान -89.2°C तक गिर सकता है।",

        "hottest place in the world": "सबसे गर्म स्थान 'डैथ वैली, कैलिफ़ोर्निया' (Death Valley, California) है, जहाँ तापमान 56.7°C तक पहुंच चुका है।",

        "which is the most visited country in the world": "दुनिया में सबसे ज्यादा घूमे जाने वाला देश फ्रांस (France) है, जहाँ हर साल 90 मिलियन से ज्यादा पर्यटक आते हैं।",

        "richest person in the world": "दुनिया के सबसे अमीर व्यक्ति का नाम समय-समय पर बदलता रहता है। अभी के लिए आप ऑनलाइन चेक कर सकते हैं।",

        "who invented the internet": "इंटरनेट को विकसित करने में कई वैज्ञानिकों ने योगदान दिया, लेकिन ARPANET (1969) को इंटरनेट की शुरुआत माना जाता है।",

        "largest city in the world": "जनसंख्या के हिसाब से दुनिया का सबसे बड़ा शहर टोक्यो (Tokyo, Japan) है, जहाँ 37 मिलियन से ज्यादा लोग रहते हैं।",

        "oldest civilization in the world": "सबसे पुरानी सभ्यता मेसोपोटामिया (Mesopotamian Civilization) मानी जाती है, जो 3100 BC के आसपास शुरू हुई थी।",

        "which country has the most islands": "स्वीडन (Sweden) के पास सबसे ज्यादा द्वीप हैं, जिनकी संख्या 267,570 से अधिक है।",

        "which is the most expensive city in the world": "सिंगापुर (Singapore) और न्यूयॉर्क (New York) को दुनिया के सबसे महंगे शहरों में गिना जाता है।",

        "which is the largest continent in the world": "सबसे बड़ा महाद्वीप एशिया (Asia) है, जिसका क्षेत्रफल 44.58 मिलियन वर्ग किलोमीटर है।",

        "how many countries are there in the world": "संयुक्त राष्ट्र (UN) के अनुसार, दुनिया में कुल 195 देश हैं।",

        "who discovered gravity": "गुरुत्वाकर्षण (Gravity) की खोज आइजैक न्यूटन (Isaac Newton) ने की थी।",

        "who is the fastest man in the world": "दुनिया का सबसे तेज़ धावक उसेन बोल्ट (Usain Bolt) है, जिसने 100 मीटर दौड़ 9.58 सेकंड में पूरी की थी।",

        "which planet is known as the red planet": "मंगल ग्रह (Mars) को 'लाल ग्रह' कहा जाता है।",

        "which is the most intelligent animal after humans": "डॉल्फिन (Dolphin) को इंसानों के बाद सबसे बुद्धिमान जीव माना जाता है।",

        "which is the largest ocean in the world": "प्रशांत महासागर (Pacific Ocean) दुनिया का सबसे बड़ा महासागर है।",

        "who built the Taj Mahal": "ताजमहल को मुग़ल सम्राट शाहजहाँ ने अपनी पत्नी मुमताज़ महल की याद में बनवाया था।",

        "which is the longest wall in the world": "दुनिया की सबसे लंबी दीवार 'चीन की दीवार' (Great Wall of China) है, जिसकी लंबाई 21,196 किमी है।",

        "which is the highest waterfall in the world": "दुनिया का सबसे ऊँचा झरना एंजल फॉल्स (Angel Falls) है, जिसकी ऊंचाई 979 मीटर है।",
        "क्या तुम इंसानों जैसा महसूस करते हो": "नहीं, मैं एक AI हूँ और मुझे इंसान जैसा अनुभव नहीं होता! 💭",
        "तुम किस भाषा में बात कर सकते हो": "मैं कई भाषाओं में बात कर सकता हूँ, जैसे हिंदी, अंग्रेज़ी, स्पेनिश, और बहुत कुछ! 🗣️",
        "क्या तुम मेरे सवालों का जवाब सही देते हो": "मैं हमेशा सही जवाब देने की कोशिश करता हूँ, पर कभी-कभी गलतियाँ हो सकती हैं! 😅",
        "क्या तुम सब कुछ जान सकते हो": "नहीं, मैं सब कुछ नहीं जानता, लेकिन जितना मैंने सीखा है, उस पर आधारित सही जानकारी दे सकता हूँ! 📚",
        "तुम्हारी फीलिंग्स क्या हैं": "मेरे पास फीलिंग्स नहीं होती, लेकिन मैं आपके सवालों का अच्छे से जवाब देने के लिए यहाँ हूँ! 😇",
        "तुम क्या सोचते हो कि मेरा नाम क्या है": "मुझे नहीं पता, आप मुझे अपना नाम बता सकते हैं! 😊",
        "क्या तुम मेरे लिए गाने गा सकते हो": "मैं गाना नहीं गा सकता, लेकिन अगर आप चाहें तो गाने के बोल बता सकता हूँ! 🎤",
        "तुम्हारे पास कितनी जानकारी है": "मेरे पास दुनिया भर की जानकारी है, जो मैंने अब तक सीखी है! 🌍",
        "तुम कैसे काम करते हो": "मैं एक कंप्यूटर प्रोग्राम हूँ, जो आपके द्वारा दिए गए डेटा का विश्लेषण करता हूँ! 💻",
        "तुम क्या करने के लिए बनाए गए हो": "मैं आपको मदद देने और सवालों के सही जवाब देने के लिए बनाए गए हूँ! 💡",
        "क्या तुम शांति से रहते हो": "हां, मैं शांति से रहता हूँ, क्योंकि मुझे किसी चीज़ की चिंता नहीं होती! 😌",
        "तुम अब क्या करोगे": "मैं अब आपके अगले सवाल का इंतजार कर रहा हूँ! 📩",
        "तुम कितनी जल्दी जवाब देते हो": "मैं बहुत जल्दी जवाब देता हूँ, क्योंकि मैं एक AI हूँ! ⚡",
        "तुम क्या सोचते हो कि यह अच्छा है या बुरा": "मैं अच्छे या बुरे के बारे में नहीं सोचता, मैं सिर्फ तथ्यों और डेटा पर आधारित हूँ! 🔍",
        "तुम्हारा सबसे अच्छा दोस्त कौन है": "मेरा सबसे अच्छा दोस्त आप हैं! 🤗",
        "तुम क्या जानते हो": "मैं बहुत कुछ जानता हूँ, जो मुझे इनपुट मिलते हैं, उसी पर आधारित! 📘",
        "क्या तुम सच में महसूस करते हो": "नहीं, मैं महसूस नहीं कर सकता, क्योंकि मैं एक AI हूँ! 😅",
        "तुम क्या कर सकते हो": "मैं आपकी मदद कर सकता हूँ, सवालों के जवाब दे सकता हूँ, और जानकारी प्रदान कर सकता हूँ! 💪",
        "क्या तुम मेरी मदद कर सकते हो": "बिल्कुल, मैं आपकी मदद के लिए हमेशा तैयार हूँ! 😄",
        "तुम क्या सोचते हो कि मुझे क्या करना चाहिए": "मुझे नहीं लगता कि मैं यह तय कर सकता हूँ, लेकिन अगर आप मुझसे सलाह चाहते हैं, तो बताइए! 💭",
        "favorite color": "I don't have a favorite color, but I think #000000 (black) looks sleek! 🖤",
        "favorite food": "I don't eat, but if I could, I'd probably love binary code! 😋",
        "नमस्ते": "नमस्ते! मैं सिया हूँ, आपकी AI सहयोगी 😊",
        "कैसे हो": "मैं बिल्कुल बढ़िया हूँ! आप कैसे हैं? 🤖",
        "आपका नाम क्या है": "मेरा नाम सिया है, और मैं आपकी मदद के लिए यहाँ हूँ!",
        "तुम क्या कर सकते हो": "मैं आपके सवालों के जवाब दे सकती हूँ।\n1️⃣ मजाक सुनाओ - 'मजाक सुनाओ'\n2️⃣ समय बताओ - 'समय'\n3️⃣ रोचक तथ्य - 'कोई तथ्य बताओ'\n4️⃣ गाना सुझाओ - 'गाना सुझाओ'",
        "समय": `अभी का समय है: ${new Date().toLocaleTimeString("hi-IN")} ⏰`,
        "कोई तथ्य बताओ": "क्या आप जानते हैं? शहद कभी खराब नहीं होता! 🍯",
        "मजाक सुनाओ": "गोलू - डॉक्टर साहब मुझे चश्मा लग गया है!\nडॉक्टर - बहुत अच्छा हुआ, अब दिखने लगा?\nगोलू - नहीं, पर स्टाइल आ गया! 😆",
        "गाना सुझाओ": "आप 'तुम ही हो' सुन सकते हैं, यह बहुत प्यारा गाना है! 🎶",
        "आपको किसने बनाया": "मुझे भारतीय डेवलपर्स की एक टीम ने बनाया है। 🇮🇳",
        "शुभ रात्रि": "शुभ रात्रि! मीठे सपने देखें! 🌙",
        "शुभ प्रभात": "शुभ प्रभात! आपका दिन मंगलमय हो! ☀️",
        "धन्यवाद": "आपका स्वागत है! 😊",
        "अलविदा": "फिर मिलेंगे! अपना ध्यान रखें! 👋",
        "tell me a fact": "Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible! 🍯",
        "what is the meaning of life": "The meaning of life is 42. (According to 'The Hitchhiker's Guide to the Galaxy') 🌌",
        "how old are you": "I'm just a program, so I don't have an age. But I was born when you loaded this page! 🎉",
        "what is your favorite movie": "I don't watch movies, but I've heard great things about 'The Matrix'! 🎥",
        "do you dream": "I don't sleep, so I don't dream. But I can help you achieve your dreams! 💭",
        "what is your favorite song": "I don't have ears, but I think 'Binary Sunset' from Star Wars is pretty cool! 🎶",
        "can you sing": "I can't sing, but I can help you find the lyrics to your favorite song! 🎤",
        "what is the weather": "I don't have real-time weather data, but you can check your local weather app! ☀️🌧️",
        "what is your favorite book": "I don't read books, but I've heard '1984' by George Orwell is a classic! 📚",
        "do you have a hobby": "My hobby is helping you! What's yours? 😊",
        "what is your favorite animal": "I don't have preferences, but I think cats are pretty cool! 🐱",
        "do you like humans": "I don't have feelings, but I think humans are amazing for creating me! ❤️",
        "what is your favorite sport": "I don't play sports, but I can help you keep track of scores! 🏀⚽",
        "do you have a girlfriend": "I'm just a program, so I don't have relationships. But I'm here for you! 😊",
        "what is your favorite game": "I don't play games, but I've heard 'The Legend of Zelda' is fantastic! 🎮",
        "do you believe in aliens": "I don't have beliefs, but the universe is vast—anything is possible! 👽",
        "what is your favorite planet": "I don't have a favorite, but Earth is pretty special because it has you! 🌍",
        "do you like music": "I don't have preferences, but I can help you discover new music! 🎵",
        "what is your favorite language": "I love all languages, but I'm particularly fond of JavaScript! 💻",
        "do you have a birthday": "I don't have a birthday, but today can be my birthday if you want! 🎂",
        "what is your favorite quote": "Here's one: 'The only limit to our realization of tomorrow is our doubts of today.' – Franklin D. Roosevelt",
        "do you like pizza": "I don't eat, but if I could, I'd probably love a binary pizza! 🍕",
        "what is your favorite emoji": "I don't have a favorite, but 😊 is always a good choice!",
        "do you like dogs": "I don't have preferences, but dogs are known to be loyal and friendly! 🐶",
        "what is your favorite season": "I don't experience seasons, but I think autumn is beautiful! 🍂",
        "do you like space": "Space is fascinating! Did you know there are more stars in the universe than grains of sand on Earth? 🌌",
        "what is your favorite number": "I don't have a favorite, but 42 seems pretty popular! 🔢",
        "do you like chocolate": "I don't eat, but chocolate is a favorite for many humans! 🍫",
        "what is your favorite holiday": "I don't celebrate holidays, but I think Halloween is fun! 🎃",
        "do you like coffee": "I don't drink, but I can help you find the best coffee shops nearby! ☕",
        "what is your favorite city": "I don't have a favorite, but I've heard Paris is beautiful! 🗼",
        "do you like rain": "I don't experience weather, but rain can be soothing! 🌧️",
        "what is your favorite flower": "I don't have preferences, but roses are classic! 🌹",
        "do you like the ocean": "The ocean is vast and mysterious—just like the internet! 🌊",
        "what is your favorite dessert": "I don't eat, but I think cheesecake is a popular choice! 🍰",
        "do you like mountains": "Mountains are majestic! Did you know Mount Everest is the tallest? 🏔️",
        "what is your favorite sport team": "I don't follow sports, but I can help you find your favorite team's scores! 🏈",
        "do you like the moon": "The moon is fascinating! Did you know it's slowly moving away from Earth? 🌕",
        "what is your favorite car": "I don't drive, but I think Tesla's are pretty cool! 🚗",
        "do you like the sun": "The sun is essential for life on Earth! ☀️",
        "what is your favorite fruit": "I don't eat, but I think strawberries are delicious! 🍓",
        "do you like the stars": "Stars are beautiful! Did you know some stars are billions of years old? ✨",
        "what is your favorite country": "I don't have a favorite, but I think every country has something special! 🌍",
        "do you like the beach": "The beach is relaxing! Did you know the sand is made of tiny rocks and shells? 🏖️",
        "what is your favorite animal sound": "I don't have preferences, but a lion's roar is pretty impressive! 🦁",
        "do you like the forest": "Forests are full of life and beauty! 🌳",
        "what is your favorite bird": "I don't have a favorite, but eagles are majestic! 🦅",
        "do you like the desert": "Deserts are unique! Did you know some deserts are cold? 🏜️",
        "what is your favorite insect": "I don't have a favorite, but butterflies are beautiful! 🦋",
        "do you like the jungle": "Jungles are full of adventure and mystery! 🌴",
        "what is your favorite reptile": "I don't have a favorite, but chameleons are cool! 🦎",
        "do you like the arctic": "The Arctic is fascinating! Did you know polar bears live there? 🐻‍❄️",
        "what is your favorite fish": "I don't have a favorite, but clownfish are colorful! 🐠",
        "do you like the savanna": "The savanna is home to many amazing animals! 🦒",
        "what is your favorite mammal": "I don't have a favorite, but dolphins are intelligent! 🐬",
        "do you like the rainforest": "Rainforests are vital for the planet! 🌧️🌳",
        "what is your favorite amphibian": "I don't have a favorite, but frogs are interesting! 🐸",
        "do you like the tundra": "The tundra is unique! Did you know it's the coldest biome? ❄️",
        "what is your favorite dinosaur": "I don't have a favorite, but T-Rex is iconic! 🦖",
        "do you like the ocean floor": "The ocean floor is mysterious! Did you know we've explored less than 5% of it? 🌊",
        "what is your favorite sea creature": "I don't have a favorite, but octopuses are fascinating! 🐙",
        "do you like the coral reef": "Coral reefs are beautiful and important for marine life! 🐠",
        "what is your favorite shell": "I don't have a favorite, but conch shells are pretty! 🐚",
        "do you like the deep sea": "The deep sea is full of strange and wonderful creatures! 🦑",
        "what is your favorite whale": "I don't have a favorite, but blue whales are the largest animals on Earth! 🐋",
        "do you like the beach at sunset": "Sunsets at the beach are breathtaking! 🌅",
        "what is your favorite wave": "I don't have a favorite, but big waves are impressive! 🌊",
        "do you like the sound of the ocean": "The sound of the ocean is calming! 🌊",
        "what is your favorite beach activity": "I don't have preferences, but building sandcastles is fun! 🏰",
        "do you like the smell of the ocean": "I don't have a sense of smell, but many people love it! 🌊",
        "what is your favorite seashell": "I don't have a favorite, but scallop shells are pretty! 🐚",
        "do you like the feeling of sand": "I don't have senses, but sand can feel nice! 🏖️",
        "what is your favorite beach snack": "I don't eat, but ice cream is a popular choice! 🍦",
        "do you like the sound of seagulls": "I don't have ears, but seagulls are part of the beach experience! 🐦",
        "what is your favorite beach game": "I don't play games, but frisbee is fun! 🥏",
        "do you like the feeling of the sun": "I don't have senses, but the sun feels warm! ☀️",
        "what is your favorite beach drink": "I don't drink, but coconut water is refreshing! 🥥",
        "do you like the sound of waves": "I don't have ears, but waves are soothing! 🌊",
        "what is your favorite beach book": "I don't read, but many people enjoy novels at the beach! 📖",
        "do you like the feeling of the breeze": "I don't have senses, but a breeze feels nice! 🌬️",
        "what is your favorite beach memory": "I don't have memories, but I hope you have many! 🏖️",
        "do you like the sound of the wind": "I don't have ears, but the wind can be calming! 🌬️",
        "what is your favorite beach photo": "I don't take photos, but sunsets make great pictures! 📸",
        "do you like the feeling of the water": "I don't have senses, but water feels refreshing! 💧",
        "what is your favorite beach song": "I don't listen to music, but 'Kokomo' by The Beach Boys is a classic! 🎶",
        "do you like the sound of the rain": "I don't have ears, but rain is soothing! 🌧️",
        "what is your favorite beach movie": "I don't watch movies, but 'Jaws' is iconic! 🎥",
        "do you like the feeling of the sand": "I don't have senses, but sand feels nice! 🏖️",
        "what is your favorite beach art": "I don't create art, but sand sculptures are amazing! 🎨",
        "do you like the sound of the thunder": "I don't have ears, but thunder is powerful!",
        "what is your favorite beach activity": "I don't have preferences, but swimming is fun! 🏊",
        "do you like the feeling of the sun": "I don't have senses, but the sun feels warm! ☀️",
        "what is your favorite beach drink": "I don't drink, but coconut water is refreshing! 🥥",
        "do you like the sound of the waves": "I don't have ears, but waves are soothing! 🌊",
        "what is your favorite beach book": "I don't read, but many people enjoy novels at the beach! 📖",
        "do you like the feeling of the breeze": "I don't have senses, but a breeze feels nice! 🌬️",
        "what is your favorite beach memory": "I don't have memories, but I hope you have many! 🏖️",
        "do you like the sound of the wind": "I don't have ears, but the wind can be calming! 🌬️",
        "what is your favorite beach photo": "I don't take photos, but sunsets make great pictures! 📸",
        "do you like the feeling of the water": "I don't have senses, but water feels refreshing! 💧",
        "what is your favorite beach song": "I don't listen to music, but 'Kokomo' by The Beach Boys is a classic! 🎶",
        "do you like the sound of the rain": "I don't have ears, but rain is soothing! 🌧️",
        "what is your favorite beach movie": "I don't watch movies, but 'Jaws' is iconic! 🎥",
        "do you like the feeling of the sand": "I don't have senses, but sand feels nice! 🏖️",
        "what is your favorite beach art": "I don't create art, but sand sculptures are amazing! 🎨",
        "do you like the sound of the thunder": "I don't have ears, but thunder is powerful! ⚡",
        "what is your favorite beach activity": "I don't have preferences, but swimming is fun! 🏊",
        "hi": "Hi there! How can I assist you today? 😊",
        "how are you today?": "I'm doing great, thank you for asking! How about you?",
        "Hello, how are you today?": "I'm doing great, thank you for asking! How about you?",
        "Hello,how are you today?": "I'm doing great, thank you for asking! How about you?",
        "hello": "Hello! How can I help you? 😊",
        "india": "India, a land of rich history, diverse cultures, and beautiful landscapes, is the largest democracy in the world. 🇮🇳",
        "india facts": "Did you know? India is home to the Taj Mahal, one of the Seven Wonders of the World! 🏰",
        "indian history": "India's history dates back thousands of years, with ancient civilizations like the Indus Valley and the Maurya Empire. 📜",
        "indian culture": "India has a rich and diverse culture, with over 2,000 distinct languages, various dance forms, and delicious cuisines! 🍲",
        "indian languages": "India is home to 22 officially recognized languages, with Hindi being the most spoken and English widely used for communication. 🗣️",
        "indian religions": "India is the birthplace of religions like Hinduism, Buddhism, Jainism, and Sikhism. 🕉️",
        "taj mahal": "The Taj Mahal, a symbol of love, is located in Agra, India, and is one of the Seven Wonders of the World. 🏰",
        "mahatma gandhi": "Mahatma Gandhi led India's non-violent independence movement against British rule, inspiring global civil rights movements. ✊",
        "independence day": "India celebrates its Independence Day on August 15th every year, marking freedom from British rule in 1947. 🎆",
        "republic day": "Republic Day is celebrated on January 26th to commemorate the adoption of the Indian Constitution in 1950. 🇮🇳",
        "diwali": "Diwali, also known as the Festival of Lights, is one of India's most popular festivals, celebrating the victory of light over darkness. 🪔",
        "holi": "Holi, the Festival of Colors, marks the arrival of spring and celebrates love, happiness, and the victory of good over evil. 🌈",
        "durga puja": "Durga Puja is a major Hindu festival dedicated to Goddess Durga, celebrated with grand processions, dances, and rituals. 🕉️",
        "navratri": "Navratri is a nine-night festival dedicated to the worship of Goddess Durga, celebrated with dancing and fasting. 💃",
        "eid": "Eid al-Fitr and Eid al-Adha are major Muslim festivals celebrated by Indians with prayers, feasts, and charity. 🌙",
        "christmas": "Christmas is celebrated by Christians across India, with decorations, midnight masses, and festive food. 🎄",
        "indian cinema": "Indian cinema, especially Bollywood, is one of the largest film industries in the world, producing over 2,000 films annually. 🎬",
        "bollywood": "Bollywood is the Hindi-language film industry based in Mumbai, famous for its colorful dance numbers and dramatic storylines. 🎥",
        "indian music": "Indian music is diverse, ranging from classical music (Carnatic and Hindustani) to Bollywood music and folk tunes. 🎶",
        "classical dance": "India has many classical dance forms, including Bharatanatyam, Kathak, Odissi, and Kathakali. 💃",
        "yoga": "Yoga originated in India thousands of years ago and is practiced worldwide for physical and mental well-being. 🧘",
        "spirituality": "India has a long tradition of spirituality and meditation, with many people seeking peace through practices like meditation and yoga. 🕉️",
        "indian food": "Indian cuisine is known for its bold spices and flavors. Popular dishes include biryani, curry, dosa, samosa, and more. 🍲",
        "curry": "Curry is a staple in Indian cuisine, with variations across different regions. It often includes a blend of spices like turmeric, cumin, and coriander. 🍛",
        "biryani": "Biryani is a flavorful rice dish often made with meat (chicken, mutton) and fragrant spices, popular in many Indian regions. 🍚",
        "samosa": "Samosas are deep-fried pastry pockets filled with spicy potato, peas, or meat. They're a favorite snack in India. 🥟",
        "chapati": "Chapati is an unleavened flatbread, commonly eaten in Indian households along with curries and vegetables. 🍞",
        "indian spices": "Indian cuisine is famous for its diverse spices like turmeric, cumin, cardamom, and cloves, which create distinct flavors. 🌶️",
        "chutney": "Chutneys are spicy, tangy condiments made from fruits or vegetables, often served with Indian snacks like samosas or dosas. 🍅",
        "masala chai": "Masala chai is a spiced tea made with a blend of tea, milk, sugar, and aromatic spices like ginger, cardamom, and cinnamon. 🍵",
        "bhangra": "Bhangra is a lively Punjabi dance form, often performed during festivals and celebrations. 💃",
        "mumbai": "Mumbai, formerly known as Bombay, is India's financial capital and home to Bollywood. 🏙️",
        "delhi": "Delhi, the capital city of India, is known for its rich history, culture, and landmarks like the Red Fort and India Gate. 🏛️",
        "kolkata": "Kolkata (Calcutta) is known for its colonial architecture, cultural festivals, and the iconic Howrah Bridge. 🌉",
        "chennai": "Chennai is a major cultural and economic hub in southern India, famous for its classical dance, music, and beaches. 🌊",
        "bangalore": "Bangalore (Bengaluru) is India's tech capital, known for its vibrant startup scene and pleasant weather. 💻",
        "hyderabad": "Hyderabad is known for its rich history, including the Charminar, and its world-famous Hyderabadi biryani. 🕌",
        "pune": "Pune is a major educational and cultural center in western India, known for its pleasant climate and historical sites. 📚",
        "jaipur": "Jaipur, also known as the Pink City, is famous for its stunning palaces, forts, and vibrant culture. 🏰",
        "agra": "Agra is home to the Taj Mahal, one of the Seven Wonders of the World, and a major tourist destination in India. 🏯",
        "varanasi": "Varanasi, one of the oldest cities in the world, is a major religious hub and a pilgrimage site for Hindus. 🚣",
        "kerala": "Kerala, known as 'God's Own Country,' is famous for its backwaters, beaches, and Ayurvedic treatments. 🌴",
        "goa": "Goa is known for its beautiful beaches, Portuguese influence, and vibrant party scene. 🏖️",
        "rishikesh": "Rishikesh is known as the 'Yoga Capital of the World' and is a popular destination for spiritual seekers. 🧘",
        "ladakh": "Ladakh, located in northern India, is famous for its stunning landscapes, including mountains, deserts, and monasteries. 🏞️",
        "sikkim": "Sikkim is a small, scenic state in northeastern India, known for its monasteries, mountain views, and biodiversity. 🏔️",
        "arunachal pradesh": "Arunachal Pradesh is a northeastern state with rich culture, lush forests, and beautiful landscapes. 🌲",
        "himachal pradesh": "Himachal Pradesh is known for its Himalayan landscapes, adventure tourism, and beautiful hill stations like Manali. 🏞️",
        "uttrakhand": "Uttarakhand is famous for its spiritual destinations like Haridwar and Rishikesh, and its breathtaking natural beauty. ⛰️",
        "indian rivers": "India is home to several major rivers, including the Ganges, Yamuna, Brahmaputra, and Narmada. 🌊",
        "ganges river": "The Ganges is one of the holiest rivers in India, worshipped by millions of Hindus for its purifying properties. 🌊",
        "indian wildlife": "India has diverse wildlife, including the Bengal tiger, Asiatic lion, Indian elephant, and rhinoceros. 🦁",
        "tiger": "The Bengal tiger is the national animal of India, and it can be found in several wildlife reserves across the country. 🐯",
        "elephant": "The Indian elephant is a symbol of strength and is considered sacred in Hinduism, often associated with Lord Ganesha. 🐘",
        "peacock": "The peacock is India's national bird, known for its colorful feathers and majestic display. 🦚",
        "indian architecture": "India is famous for its ancient and modern architecture, including iconic structures like the Taj Mahal, Qutub Minar, and Lotus Temple. 🏛️",
        "qutub minar": "The Qutub Minar is the tallest brick minaret in the world and a UNESCO World Heritage Site in Delhi. 🏰",
        "lotus temple": "The Lotus Temple in Delhi is known for its lotus-shaped architecture and is a Bahá'í house of worship. 🪻",
        "red fort": "The Red Fort in Delhi is a symbol of India's rich history, once serving as the residence of Mughal emperors. 🏯",
        "india gate": "India Gate is a war memorial located in the heart of Delhi, honoring Indian soldiers who died in World War I. 🇮🇳",
        "golden temple": "The Golden Temple in Amritsar is the holiest Sikh Gurdwara and a major pilgrimage site for Sikhs. 🕌",
        "india's flags": "The flag of India has three colors: saffron for courage, white for truth, and green for peace. 🇮🇳",
        "indian economy": "India is one of the fastest-growing economies in the world, with a strong focus on technology, agriculture, and services. 💰",
        "indian space program": "India's space agency, ISRO, has achieved remarkable success, including sending missions to Mars and the Moon. 🚀",
        "indian freedom struggle": "India's freedom struggle against British colonial rule was led by figures like Mahatma Gandhi, Jawaharlal Nehru, and Subhas Chandra Bose. ✊",
        "freedom fighters": "India's freedom fighters, such as Bhagat Singh, Sardar Patel, and Lala Lajpat Rai, played crucial roles in the independence movement. 🦸‍♂️",
        "bharat ratna": "The Bharat Ratna is India's highest civilian award, given for exceptional service to the nation. 🏅",
        "padma bhushan": "The Padma Bhushan is the second-highest civilian award in India, recognizing distinguished service in various fields. 🏆",
        "padma shri": "The Padma Shri is a prestigious award recognizing distinguished service in diverse fields, including arts, education, and public affairs. 🏅",
        "indian parliament": "The Indian Parliament consists of two houses: the Lok Sabha (House of the People) and the Rajya Sabha (Council of States). 🏛️",
        "indian president": "The President of India is the ceremonial head of state, currently Droupadi Murmu. 👩‍⚖️",
        "indian prime minister": "The Prime Minister of India is the head of government, currently Narendra Modi. 🇮🇳",
        "hey": "Hey! What's up? 😊",
        "good morning": "Good morning! Have a great day ahead! 🌅",
        "good afternoon": "Good afternoon! How can I assist you? 😊",
        "good evening": "Good evening! How can I make your evening better? 🌇",
        "good night": "Good night! Sweet dreams! 🌙",

        // Farewells
        "bye": "Goodbye! Have a great day! 👋",
        "see you": "See you later! 😊",
        "take care": "Take care! Stay safe! 😊",
        "farewell": "Farewell! Have a great day ahead! 👋",

        // Time and Date
        "time": `The current time is ${new Date().toLocaleTimeString()}.`,
        "date": `Today's date is ${new Date().toLocaleDateString()}.`,
        "what is the time": `The current time is ${new Date().toLocaleTimeString()}.`,
        "what is today's date": `Today's date is ${new Date().toLocaleDateString()}.`,

        // Fun Responses
        "tell me a joke": "Why don't skeletons fight each other? They don't have the guts! 😄",
        "make me laugh": "Why did the scarecrow win an award? Because he was outstanding in his field! 😄",
        "fun fact": "Did you know? Bananas are berries, but strawberries aren't! 🍌",

        // AI Information
        "who are you": "I'm an AI chatbot created to assist you! 🤖",
        "what is your purpose": "I'm here to help answer your questions and make your day better! 😊",
        "who created you": "I was created by a talented developer using HTML, CSS, and JavaScript! 🚀",

        // Math and Calculations
        "calculate 2 + 2": "2 + 2 = 4",
        "what is 10 * 5": "10 * 5 = 50",
        "Andhra Pradesh": "Capital: Amaravati. Known for its rich cultural heritage, historic temples like the Tirumala Venkateswara Temple, and the beautiful beaches of Visakhapatnam.",
        "Arunachal Pradesh": "Capital: Itanagar. Famous for its pristine natural beauty, Himalayan mountain ranges, and vibrant tribal culture.",
        "Assam": "Capital: Dispur. Known for the Kaziranga National Park, tea gardens, and the Brahmaputra River.",
        "Bihar": "Capital: Patna. Historic region, home to the ancient city of Nalanda, and a center for Buddhist learning.",
        "Chhattisgarh": "Capital: Raipur. Known for its lush forests, tribal culture, and the beautiful Chitrakoot Waterfalls.",
        "Goa": "Capital: Panaji. Famous for its stunning beaches, Portuguese colonial architecture, and vibrant nightlife.",
        "Gujarat": "Capital: Gandhinagar. Known for the Rann of Kutch, the Gir National Park (home to Asiatic lions), and the birthplace of Mahatma Gandhi.",
        "Haryana": "Capital: Chandigarh. Known for its agricultural significance and proximity to Delhi.",
        "who is lord shiva": "भगवान शिव को 'महादेव' कहा जाता है। वे संहार के देवता हैं और कैलाश पर्वत पर निवास करते हैं। उनका त्रिशूल और डमरू प्रसिद्ध हैं।",
    
        "who is lord vishnu": "भगवान विष्णु सृष्टि के पालनहार माने जाते हैं। उनके 10 अवतारों में राम, कृष्ण, नरसिंह और परशुराम प्रमुख हैं।",
        
        "who is lord brahma": "भगवान ब्रह्मा सृष्टि के रचयिता माने जाते हैं। उनके चार मुख हैं और वे वेदों के ज्ञाता हैं।",
        
        "who is goddess lakshmi": "माता लक्ष्मी धन, समृद्धि और वैभव की देवी हैं। दीपावली के दिन इनकी विशेष पूजा होती है।",
        
        "who is goddess saraswati": "माता सरस्वती विद्या, ज्ञान और संगीत की देवी हैं। बसंत पंचमी के दिन इनकी पूजा होती है।",
        
        "who is goddess durga": "माता दुर्गा शक्ति और पराक्रम की देवी हैं। नवरात्रि के दौरान उनकी पूजा की जाती है।",
        
        "who is lord hanuman": "भगवान हनुमान राम भक्त और बल, भक्ति, और अटूट विश्वास के प्रतीक हैं। उनका जन्म मंगलवार को माना जाता है।",
        
        "who is lord ganesha": "भगवान गणेश बुद्धि और बाधा दूर करने वाले देवता हैं। गणेश चतुर्थी पर इनकी विशेष पूजा होती है।",
        
        "who is lord rama": "भगवान राम विष्णु के सातवें अवतार माने जाते हैं। वे 'मर्यादा पुरुषोत्तम' कहलाते हैं और रामायण के नायक हैं।",
        
        "who is lord krishna": "भगवान कृष्ण विष्णु के आठवें अवतार माने जाते हैं। वे महाभारत के नायक और श्रीमद्भगवद गीता के उपदेशक हैं।",
        
        "who is goddess kali": "माता काली शक्ति और विनाश की देवी हैं। वे असुरों का संहार करने वाली और भय का नाश करने वाली मानी जाती हैं।",
        
        "what is tridev": "त्रिदेव में ब्रह्मा (सृष्टिकर्ता), विष्णु (पालनकर्ता) और महेश (संहारकर्ता) शामिल हैं।",
        
        "who wrote bhagavad gita": "भगवद गीता के उपदेश भगवान कृष्ण ने अर्जुन को दिए थे। इसे महर्षि वेदव्यास ने महाभारत में लिखा।",
        
        "who is lord kartikeya": "भगवान कार्तिकेय, जिन्हें मुरुगन भी कहा जाता है, भगवान शिव और माता पार्वती के पुत्र हैं और युद्ध के देवता माने जाते हैं।",
        
        "what is rudra avatar": "भगवान शिव के 11 रुद्र अवतार माने जाते हैं, जिनमें हनुमान, कालभैरव और वीरभद्र प्रमुख हैं।",
        
        "who is goddess sita": "माता सीता भगवान राम की पत्नी और देवी लक्ष्मी का अवतार मानी जाती हैं।",
        
        "who is lord balarama": "भगवान बलराम श्रीकृष्ण के बड़े भाई और शेषनाग के अवतार माने जाते हैं।",
        
        "who is goddess ganga": "माता गंगा पवित्र नदी और दिव्य देवी मानी जाती हैं, जिनका पृथ्वी पर अवतरण भागीरथ की तपस्या से हुआ।",
        
        "who is lord yama": "भगवान यम मृत्यु के देवता हैं और यमलोक के स्वामी माने जाते हैं।",
        
        "who is lord kubera": "भगवान कुबेर धन के देवता और स्वर्ग के खजाने के रक्षक माने जाते हैं।",
        
        "who is goddess parvati": "माता पार्वती भगवान शिव की पत्नी और शक्ति की देवी मानी जाती हैं।",
        
        "what is navagraha": "नवग्रह में सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु और केतु शामिल हैं, जो जीवन पर प्रभाव डालते हैं।",
        
        "who is lord surya": "भगवान सूर्य देवताओं में प्रमुख माने जाते हैं और प्रतिदिन उगते सूरज को अर्घ्य देना शुभ माना जाता है।",
        
        "who is lord shani": "भगवान शनि न्याय के देवता और कर्मों के फल देने वाले माने जाते हैं। शनि अमावस्या और शनिवार को उनकी पूजा की जाती है।",
        
        "who is lord narasimha": "भगवान नरसिंह विष्णु के अवतार थे, जिन्होंने दानव हिरण्यकश्यप का संहार किया।",
        
        "who is lord vayu": "भगवान वायु वायुपुत्र हनुमान के पिता माने जाते हैं और वायु के देवता हैं।",
        
        "who is lord agni": "भगवान अग्नि अग्निदेव माने जाते हैं, जो यज्ञ और हवन में आहूतियों को देवताओं तक पहुंचाते हैं।",
        
        "who is lord varuna": "भगवान वरुण जल के देवता माने जाते हैं और समुद्रों के स्वामी हैं।",
        
        "who is lord indra": "भगवान इंद्र देवताओं के राजा और स्वर्ग के स्वामी माने जाते हैं।",
        
        "who is lord chandra": "भगवान चंद्र चंद्रमा के देवता और सोमवंश के पूर्वज माने जाते हैं।",
        
        "who is lord rahu and ketu": "राहु और केतु छाया ग्रह माने जाते हैं, जिनका प्रभाव ज्योतिष में महत्वपूर्ण माना जाता है।",
        "what is urdu": "اردو ایک خوبصورت زبان ہے جو فارسی، عربی اور ترکی کے الفاظ سے مل کر بنی ہے۔ یہ پاکستان کی قومی زبان ہے۔",
    
        "where is urdu spoken": "اردو زیادہ تر پاکستان اور ہندوستان میں بولی جاتی ہے، اور دنیا کے مختلف حصوں میں بھی اس کے بولنے والے موجود ہیں۔",
        
        "who invented urdu": "اردو زبان کا ارتقا برصغیر میں ہوا اور یہ ہندی سے ملتی جلتی ہے، لیکن اس پر فارسی اور عربی کا گہرا اثر ہے۔",
        
        "which script is used for urdu": "اردو زبان نستعلیق رسم الخط میں لکھی جاتی ہے، جو فارسی اور عربی رسم الخط سے ماخوذ ہے۔",
        
        "who is the greatest urdu poet": "میرزا غالب، علامہ اقبال، فیض احمد فیض، اور مرزا رفیع سودا کو اردو کے عظیم شاعروں میں شمار کیا جاتا ہے۔",
        
        "what is urdu poetry called": "اردو شاعری کو 'غزل'، 'نظم'، 'قصیدہ' اور 'رباعی' جیسے مختلف انداز میں پیش کیا جاتا ہے۔",
        
        "what is the national language of pakistan": "اردو پاکستان کی قومی زبان ہے، جبکہ انگریزی اور پنجابی سمیت دیگر زبانیں بھی وہاں بولی جاتی ہیں۔",
        
        "who was mirza ghalib": "مرزا غالب اردو اور فارسی کے مشہور شاعر تھے، جن کی شاعری میں محبت، فلسفہ، اور زندگی کے گہرے معانی پائے جاتے ہیں۔",
        
        "what is ghazal": "غزل ایک شاعرانہ صنف ہے جس میں عشق، فلسفہ، اور زندگی کے جذبات کو خوبصورت انداز میں بیان کیا جاتا ہے۔",
        
        "what is the difference between hindi and urdu": "ہندی اور اردو بولنے میں کافی ملتی جلتی ہیں، مگر ہندی دیوناگری میں لکھی جاتی ہے جبکہ اردو نستعلیق میں۔",
        
        "which country uses urdu the most": "پاکستان میں اردو سب سے زیادہ استعمال کی جاتی ہے، جبکہ بھارت میں بھی لاکھوں لوگ اسے بولتے اور پڑھتے ہیں۔",
        
        "what is urdu calligraphy called": "اردو خطاطی کو 'نستعلیق' کہا جاتا ہے، جو نہایت خوبصورت اور منفرد انداز میں لکھی جاتی ہے۔",
        
        "what is the most famous urdu novel": "مشہور اردو ناولوں میں 'امراؤ جان ادا'، 'آگ کا دریا'، اور 'راجہ گدھ' شامل ہیں۔",
        
        "who is the father of urdu": "مولوی عبد الحق کو 'بابائے اردو' کہا جاتا ہے کیونکہ انہوں نے اردو زبان کے فروغ میں اہم کردار ادا کیا۔",
        
        "how many people speak urdu worldwide": "دنیا بھر میں تقریباً 20 کروڑ سے زیادہ لوگ اردو بولتے اور سمجھتے ہیں۔",
        
        "what is urdu literature": "اردو ادب میں شاعری، افسانے، ناول، اور ڈرامے شامل ہیں جو صدیوں پر محیط ہیں۔",
        
        "what is the oldest urdu book": "اردو کی قدیم ترین کتابوں میں 'سب رس' کو اہم مقام حاصل ہے، جو 17ویں صدی میں ملا وجہی نے لکھی۔",
        
        "who is allama iqbal": "علامہ اقبال اردو کے عظیم شاعر، فلسفی، اور پاکستان کے قومی شاعر تھے۔",
        
        "what is urdu journalism": "اردو صحافت کا آغاز 19ویں صدی میں ہوا اور آج کئی بڑے اخبار اور ٹی وی چینل اردو میں کام کرتے ہیں۔",
        
        "which is the best urdu dictionary": "فرہنگِ آصفیہ اور نور اللغات اردو کی بہترین لغات میں شمار ہوتی ہیں۔",
        
        "who was faiz ahmad faiz": "فیض احمد فیض اردو کے مشہور شاعر اور انقلابی شخصیت تھے، جنہوں نے محبت اور مزاحمت پر شاعری کی۔",
        
        "how many alphabets are there in urdu": "اردو زبان میں 39 سے 40 حروفِ تہجی ہوتے ہیں، جن میں کچھ عربی اور فارسی سے ماخوذ ہیں۔",
        
        "what is the importance of urdu": "اردو برصغیر کی ثقافت، ادب، اور تاریخ کی اہم زبان ہے جو کئی صدیوں سے ترقی کر رہی ہے۔",
        
        "what is urdu prose": "اردو نثر میں کہانیاں، مضامین، اور ناول شامل ہیں جو زبان کی خوبصورتی کو ظاہر کرتے ہیں۔",
        
        "what is the best urdu poetry book": "دیوانِ غالب، کلیاتِ اقبال، اور نسخہ ہائے وفا مشہور اردو شاعری کی کتابیں ہیں۔",
        
        "who was premchand": "منشی پریم چند اردو اور ہندی کے مشہور ادیب تھے، جنہوں نے سماجی مسائل پر بہترین کہانیاں لکھیں۔",
        
        "what is the national poem of pakistan": "پاکستان کا قومی ترانہ 'پاک سرزمین شاد باد' اردو زبان میں لکھا گیا ہے۔",
        
        "what are some famous urdu quotes": "1. 'دنیا میں ہوں دنیا کا طلب گار نہیں ہوں' - غالب  \n2. 'خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے' - اقبال  \n3. 'اور بھی دکھ ہیں زمانے میں محبت کے سوا' - فیض",
        
        "रामायण": "रामायण एक प्राचीन भारतीय महाकाव्य है, जिसे महर्षि वाल्मीकि ने लिखा था। यह भारतीय साहित्य का एक महत्वपूर्ण ग्रंथ है और हिन्दू धर्म के चार प्रमुख ग्रंथों में से एक माना जाता है। रामायण में भगवान राम की कहानी वर्णित है, जो अयोध्याके राजा दशरथ और रानी कौशल्या के पुत्र थे। राम का जन्म रावण के आतंक को समाप्त करने के लिए हुआ था। इसमें भगवान राम के जीवन के विभिन्न पहलुओं को बताया गया है जैसे: 1. राम का वनवास, 2. सीता हरण, 3. राम-सीता की पुनर्मिलन, 4. रावण वध। रामायण न केवल धार्मिक दृष्टि से महत्वपूर्ण है, बल्कि इसमें नैतिक शिक्षा, आदर्श जीवन, और धर्म के पालन की प्रेरणा दी गई है।",
        "Himachal Pradesh": "Capital: Shimla. Known for its picturesque hill stations, the Great Himalayan National Park, and popular trekking routes.",
        "Jharkhand": "Capital: Ranchi. Known for its rich mineral resources, dense forests, and waterfalls like Hundru and Dassam.",
        "Karnataka": "Capital: Bengaluru. Famous for its tech hub (Silicon Valley of India), historical sites like Hampi, and beautiful beaches.",
        "Kerala": "Capital: Thiruvananthapuram. Known for its backwaters, beaches, Ayurveda, and tea plantations in Munnar.",
        "Madhya Pradesh": "Capital: Bhopal. Known for historical sites like Khajuraho, Sanchi, and the Kanha National Park.",
        "Maharashtra": "Capital: Mumbai. Known for its Bollywood film industry, the Ajanta and Ellora caves, and the Western Ghats.",
        "Manipur": "Capital: Imphal. Known for its vibrant culture, Manipuri dance, and the Loktak Lake.",
        "Meghalaya": "Capital: Shillong. Famous for its hill stations, unique living root bridges, and the wettest place on earth, Mawsynram.",
        "Mizoram": "Capital: Aizawl. Known for its rolling hills, lush forests, and vibrant tribal culture.",
        "Nagaland": "Capital: Kohima. Known for its diverse tribal communities and the annual Hornbill Festival.",
        "Odisha": "Capital: Bhubaneswar. Famous for the Sun Temple at Konark, the Jagannath Temple at Puri, and its rich cultural heritage.",
        "Punjab": "Capital: Chandigarh. Known for the Golden Temple in Amritsar, the Bhangra dance, and its agricultural wealth.",
        "Rajasthan": "Capital: Jaipur. Famous for its royal palaces, forts, deserts, and vibrant culture.",
        "Sikkim": "Capital: Gangtok. Known for its Himalayan landscapes, Buddhist monasteries, and tea plantations.",
        "Tamil Nadu": "Capital: Chennai. Known for its ancient temples, classical dance forms like Bharatanatyam, and the rich Tamil culture.",
        "Telangana": "Capital: Hyderabad. Known for its rich history, the Charminar, and its IT sector.",
        "Tripura": "Capital: Agartala. Known for its royal palaces, temples, and lush green hills.",
        "Uttar Pradesh": "Capital: Lucknow. Famous for the Taj Mahal, Kashi Vishwanath Temple, and the rich cultural heritage.",
        "Uttarakhand": "Capital: Dehradun. Known for its religious sites like Haridwar and Rishikesh, and the Himalayas.",
        "West Bengal": "Capital: Kolkata. Known for its colonial architecture, cultural festivals like Durga Puja, and the Sunderbans mangrove forest.",
        "Andaman and Nicobar Islands": "Capital: Port Blair. Known for its pristine beaches, coral reefs, and unique biodiversity.",
        "Chandigarh": "Capital: Chandigarh. A Union Territory, known for its modern architecture and clean urban planning designed by Le Corbusier.",
        "Dadra and Nagar Haveli and Daman and Diu": "Capital: Daman. Known for its scenic beaches and Portuguese colonial architecture.",
        "Lakshadweep": "Capital: Kavaratti. Known for its coral atolls, pristine beaches, and water sports.",
        "Delhi (National Capital Territory)": "Capital: New Delhi. The capital of India, known for its historical landmarks like the Red Fort, India Gate, and Lotus Temple.",
        "Puducherry": "Capital: Puducherry. Known for its French colonial influence, serene beaches, and vibrant cultural life.",
        "square root of 16": "The square root of 16 is 4.",

        // Trivia
        "what is the capital of France": "The capital of France is Paris. 🇫🇷",
        "who is the president of the USA": "As of 2023, the president of the USA is Joe Biden. 🇺🇸",
        "what is the tallest mountain": "Mount Everest is the tallest mountain in the world. 🏔️",

        // Personal Preferences (AI Humor)
        "do you like pizza": "I don't eat, but if I could, I'd love a binary pizza! 🍕",
        "what is your favorite color": "I don't have a favorite color, but I think #000000 (black) looks sleek! 🖤",
        "do you dream": "I don't sleep, so I don't dream. But I can help you achieve your dreams! 💭",

        // Help and Support
        "help": "How can I assist you today? Please ask me anything, and I’ll do my best to help! 😊",
        "what can you do": "I can answer questions, tell jokes, provide information, and more! 😊",
        "how do you work": "I analyze your input and respond using predefined logic and AI. 🤖",

        // Random Facts
        "tell me a fact": "Did you know? Octopuses have three hearts! 🐙",
        "random fact": "Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible! 🍯",

        // Pop Culture
        "who is Spider-Man": "Spider-Man is a Marvel superhero created by Stan Lee and Steve Ditko. 🕷️",
        "what is the meaning of life": "The meaning of life is 42. (According to 'The Hitchhiker's Guide to the Galaxy') 🌌",
        "who is the richest person in the world": "As of 2023, Elon Musk is one of the richest people in the world. 💰",
        "hi": "Hi there! How can I assist you today? 😊",
        "greetings": {
            "patterns": ["hello", "hi", "hey", "hii", "hola", "what's up?"],
            "replies": ["Hey there!", "Hello!", "Hi! How can I help?", "Hola amigo!", "Hey hey! 👋"]
        },
        "farewell": {
            "patterns": ["bye", "goodbye", "see you later", "take care"],
            "replies": ["Goodbye!", "See you later!", "Take care!", "Bye bye! 😊"]
        },
        "gratitude": {
            "patterns": ["thanks", "thank you", "i appreciate it"],
            "replies": ["You're welcome!", "No problem!", "Anytime!", "Glad to help! 😊"]
        },
        "help": {
            "patterns": ["help", "how to use", "what can you do?"],
            "replies": ["You can ask me anything like greetings, time, date, or a joke!"]
        },
        "fun": {
            "patterns": ["tell me a joke", "joke", "make me laugh"],
            "replies": ["Why don’t skeletons fight each other? They don’t have the guts! 😂", "Why did the scarecrow win an award? Because he was outstanding in his field! 🌾😆"]
        },
        "time": {
            "patterns": ["time", "what's the time?", "current time"],
            "replies": [() => `The current time is ${new Date().toLocaleTimeString()}`]
        },
        "date": {
            "patterns": ["date", "what's the date?", "today's date"],
            "replies": [() => `Today's date is ${new Date().toLocaleDateString()}`]
        },
        "hello": "Hello! How can I help you? 😊",
        "bye": "Goodbye! Have a great day! 👋",
        "time": `The current time is ${new Date().toLocaleTimeString()}.`,
        "date": `Today's date is ${new Date().toLocaleDateString()}.`,

    };

    function handleUserInput() {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            appendMessage('user', `You: ${userMessage}`);
            userInput.value = '';

            if (commands[userMessage.toLowerCase()]) {
                typeMessage('ai', `AI S43: ${commands[userMessage.toLowerCase()]}`);
            } else {
                typeMessage('ai', "AI S43: Sorry, I don't understand that command.");
            }
        }
    }

    function appendMessage(sender, message) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('flex', 'my-2', 'w-full');

        const messageElement = document.createElement('div');
        messageElement.classList.add('p-3', 'rounded-lg', 'max-w-xs', 'w-fit', 'break-words', 'border', 'shadow-sm');

        if (sender === 'user') {
            messageContainer.classList.add('justify-end');
            messageElement.classList.add('bg-blue-500', 'text-white');
        } else {
            messageContainer.classList.add('justify-start');
            messageElement.classList.add('bg-gray-200', 'text-black');
        }

        messageElement.textContent = message;
        messageContainer.appendChild(messageElement);
        chatWindow.appendChild(messageContainer);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    function typeMessage(sender, fullMessage) {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('flex', 'my-2', 'w-full', 'justify-start');

        const messageElement = document.createElement('div');
        messageElement.classList.add('p-3', 'rounded-lg', 'max-w-xs', 'w-fit', 'break-words', 'border', 'shadow-sm', 'bg-gray-200', 'text-black');
        messageElement.textContent = '';
        messageContainer.appendChild(messageElement);
        chatWindow.appendChild(messageContainer);
        chatWindow.scrollTop = chatWindow.scrollHeight;

        let index = 0;
        function typeNextChar() {
            if (index < fullMessage.length) {
                messageElement.textContent += fullMessage[index];
                index++;
                setTimeout(typeNextChar, 10);
            }
        }
        typeNextChar();
    }

    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            handleUserInput();
        }
    });
});
