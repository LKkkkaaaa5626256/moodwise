const responses = {
    "hi": ["Hello! How's your day going? 😊", "Hey there! What's up? 😃"],
    "hello": ["Hey there! How can I help? 😃", "Hello! Hope you're having a great day! 😊", "Hey! What's new?"],
    "hey": ["Hey! What's up? 😊", "Yo! How's it going?", "Hey hey! What's on your mind?"],
    "good": ["That's great to hear! Keep it up! 😊", "Awesome! Anything exciting happening?", "Glad to hear! What's been good?"],
    "bad": ["Oh no! Want to talk about it? 💙", "I'm here if you need to vent. What happened?", "That's tough. Let me know if I can help!"],
    "sad": ["I'm here for you. Want to share what's on your mind? 💙", "Check out MoodWise! 🤗", "It's okay to feel this way. Want to talk?"],
    "happy": ["Yay! That makes me happy too! 😁", "That's great! What's making you happy?", "Awesome! Keep that good energy going!"],
    "excited": ["That's awesome! What's got you so excited? 🎉", "Love the energy! Tell me more!", "Exciting times ahead! What's happening?"],
    "bored": ["Bored? Let's talk! What do you love to do for fun? 🎮", "Maybe try something new! Any hobbies?", "Boredom is a sign of creativity waiting to happen!"],
    "tired": ["Rest is important! Maybe take a short break? 💤", "Sounds like you need some relaxation!", "Don't forget to recharge!"],
    "help": ["I'm here to help! What do you need? 😊", "Ask away! I love helping out!", "Need assistance? I've got you covered!"],
    "joke": ["I love jokes! Here's one: Why don't skeletons fight each other? Because they don't have the guts! 😂", "Want to hear a joke? I got plenty!", "Tell me your best joke!"],
    "yes": ["Great! Let's continue! 😊", "Awesome! What else can I do for you?"],
    "no": ["No worries! Let me know if you change your mind.", "That's okay! Anything else you'd like to discuss?"],
    "thanks": ["You're welcome! 😊", "Anytime! Happy to help!"],
    "bye": ["Goodbye! Have a great day! 😊", "See you later! Take care!"],
    "please": ["Of course! What do you need? 😊", "Sure thing! How can I assist?"],
    "sorry": ["No problem! We all make mistakes. 😊", "It's okay! How can I help?"],
    "love": ["Love is a beautiful thing! 💖", "Spread the love! 😊"],
    "hate": ["That's a strong word. Want to talk about it?", "I'm here if you need to vent."],
    "who": ["That's a great question! Who are you curious about?"],
    "what": ["What are you interested in? Let's explore!"],
    "where": ["Where would you like to go? Let's imagine!"],
    "when": ["When is a good time for you?"],
    "why": ["Why not? Let's find out together!"],
    "how": ["How can I assist you today?"],
    "friend": ["Friends are wonderful! Tell me about yours."],
    "family": ["Family is important. How's yours doing?"],
    "work": ["Work can be challenging. How's it going for you?"],
    "school": ["School is a place of learning. What's your favorite subject?"],
    "home": ["Home is where the heart is. What's it like?"],
    "food": ["Food is delicious! What's your favorite dish?"],
    "today": ["Today is a new day! What's on your agenda?"],
    "tomorrow": ["Tomorrow holds new possibilities. Any plans?"],
    "yesterday": ["Yesterday is history. What did you learn?"],
    "now": ["Now is the moment. What are you doing?"],
    "later": ["Later is fine. What do you have in mind?"],
    "sunny": ["Sunny days are the best! Do you like the sun?"],
    "rainy": ["Rainy days can be cozy. Do you enjoy the rain?"],
    "cold": ["Cold weather calls for warmth. How do you stay warm?"],
    "hot": ["Hot days are perfect for ice cream! What's your favorite flavor?"],
    "windy": ["Windy days can be refreshing. Do you like the wind?"],
    "shalom": ["Shalom! Peace and blessings to you. ✡️", "Hey there! Shalom! 😊", "Shalom Aleichem!"],
    "mazel": ["Mazel tov! 🎉", "That's amazing news—mazel tov!", "Mazel tov on everything big or small!"],
    "mazel tov": ["Big congrats! ��", "Mazel tov, that's awesome!", "Such a simcha! Mazel tov!"],
    "simcha": ["A simcha is always worth celebrating! 🎊", "What's the occasion?", "Simchas are what we live for!"],
    "mitzvah": ["Doing a mitzvah? Kol hakavod! ✡️", "One good deed at a time!", "That's a beautiful mitzvah!"],
    "tzedakah": ["Giving back is a big deal. Tzedakah power! 💙", "That's a mitzvah right there!", "Tzedakah brings blessing."],
    "kosher": ["Keeping it kosher, nice!", "Kosher vibes only! 🥯", "What's your favorite kosher snack?"],
    "shabbat": ["Shabbat shalom! 🕯🕯", "Ready for some rest and challah?", "Time to unplug and recharge."],
    "havdalah": ["Love the smell of spices! 🕯🍷", "That Havdalah melody hits different.", "A peaceful way to end Shabbat."],
    "challah": ["Golden braided goodness! 🥖", "Fresh challah is the best challah.", "Got any extra? 😋"],
    "latkes": ["Latkes for days! 🥔", "With applesauce or sour cream?", "Chanukah snacks are elite!"],
    "hamantaschen": ["Three corners of joy! 🥠", "Which flavor's your fave?", "Purim treats incoming!"],
    "chanukah": ["Spin that dreidel! 🕎", "Miracles, lights, and latkes!", "Happy Chanukah!"],
    "purim": ["Costumes + noise + joy = Purim! 🎭", "Purim sameach!", "What's your Purim costume this year?"],
    "pesach": ["Pass the matzah! 🍷", "Dayenu! We love Pesach!", "Four questions? Ask me anything!"],
    "sukkot": ["Under the stars in the sukkah! 🌿", "Sukkot vibes = cozy vibes!", "Shake that lulav!"],
    "torah": ["The wisdom of the Torah lasts forever 📖", "Studying Torah? Kol hakavod!", "Every verse has something deep."],
    "rebbe": ["Rebbe vibes—so much wisdom. ✡️", "Got a favorite teaching?", "Every Rebbe has their spark."],
    "bracha": ["Sending you a big bracha! ✨", "What's your favorite bracha?", "Baruch Hashem for the good things."],
    "baruch": ["Baruch Hashem! 🙏", "Feeling blessed today?", "Gratitude is everything!"],
    "emunah": ["Faith keeps us going. 💙", "Emunah through the ups and downs!", "That's deep—emunah strong."],
    "chesed": ["Acts of kindness go a long way. ✨", "What chesed have you done today?", "Chesed = heart in action."],
    "shofar": ["Tekiah! 🐏", "Wake-up call!", "Shofar blast vibes."],
    "tzaddik": ["A real tzaddik, huh?", "So inspiring!", "We need more tzaddik energy in the world."],
    "wiseguys": ["Wiseguys—where all our guys are wise! 😎", "You've found the right place—Wiseguys HQ!", "Wisdom and fun? That's us."],
    "moodwise": ["MoodWise magic incoming! 🌈", "Need a boost? MoodWise to the rescue!", "One click away from a better mood."],
    "motivation": ["You got this 💪", "Every step counts!", "Even slow progress is progress."],
    "inspire": ["You're already inspiring!", "Need a quote? I've got you!", "Inspiration is everywhere!"],
    "funny": ["Laughter is holy! 😂", "Let's get silly!", "You're in for a laugh!"],
    "kindness": ["Kindness is contagious 💙", "Be the reason someone smiles!", "Tiny acts matter most."],
    "smile": ["Don't forget to smile 😊", "Smile check!", "Smiling looks good on you!"],
    "laugh": ["Let's LOL together!", "Laughter = instant mood boost 😄", "Something funny coming your way!"],
    "deep": ["Let's go deep—like Torah deep.", "That's some soul stuff right there!", "Feeling thoughtful today?"],
    "energy": ["Let's boost your vibes! ⚡", "Feeling that spark?", "Energy shift in 3...2...1!"],
    "vibes": ["Good vibes only! ✨", "Feel the frequency shift?", "Vibes = everything."],
    "routine": ["Routines keep us grounded.", "What's your daily flow like?", "Consistency is key!"],
    "habits": ["Small habits = big change!", "What's a habit you want to build?", "Let's make it stick!"],
    "wise": ["Wise move. 🧠", "Wisdom wins every time.", "Wiseguys approve!"],
    "random": ["Here's a random mood booster! 🎲", "Spin the wheel of wisdom!", "Surprise mode: activated!"],
    "quote": ["'This too shall pass.' – King Solomon ✨", "Need another quote?", "Quotes keep us grounded."],
    "truth": ["The truth will always shine. 💡", "Real talk incoming!", "Speak truth, live truth."],
    "calm": ["Deep breath in... and out. 🌬", "Let's find some inner peace.", "Calm mode: ON."],
    "fire": ["🔥 You're on fire today!", "Lit energy!", "Big fire emoji energy!"],
    "light": ["Shine your light!", "You're a little candle in a dark world.", "Light always wins!"],
    "growth": ["Keep growing 🌱", "Stretch, evolve, rise!", "Growing pains = progress!"],
    "focus": ["Let's zero in! 🎯", "What's the goal today?", "Eyes on the prize!"],
    "learn": ["Learning never stops!", "Every day's a school day!", "Teach me something!"],
    "think": ["Thinking cap on 🧢", "Deep thoughts incoming!", "What's on your mind?"],
    "wisdom": ["Wise words await!", "Here's a nugget of wisdom:", "Seek wisdom—find peace."],
    "legend": ["You're a legend in the making. 🌟", "Legend status: confirmed!", "Own it, legend!"],
    "grateful": ["Gratitude changes everything.", "What are you grateful for today?", "So much to be thankful for!"],
    "balance": ["Let's find your center 🧘", "Balance is beautiful.", "Work + rest = flow."],
    "joy": ["Joy is your birthright!", "Choose joy today!", "Joy is contagious!"],
    "blessing": ["Blessings upon blessings. ✨", "You're a walking bracha!", "Share the blessing!"],
    "connection": ["Connection is everything 💬", "We're in this together!", "Want to talk heart to heart?"],
    "purpose": ["You've got a purpose, for sure.", "Still finding it? That's okay!", "Purpose fuels the journey."],
    "power": ["You're more powerful than you think 💥", "Tap into your strength!", "Power up!"],
    "peace": ["Shalom inside and out. ✌️", "Peaceful vibes coming your way.", "Breathe in peace, exhale stress."],
    "real": ["Let's keep it 100 ��", "No filters here—just real talk.", "Being real is powerful."]
};

function sendMessage() {
    const inputField = document.getElementById("user-input");
    const message = inputField.value.trim().toLowerCase();
    if (message === "") return;

    appendMessage(inputField.value, "user");
    inputField.value = "";

    setTimeout(() => {
        let botMessage = "That sounds interesting! Tell me more! 😊"; // Default response
        
        // Check if any keyword from responses is found in the user's message
        for (const key in responses) {
            if (message.includes(key)) {
                const possibleResponses = responses[key];
                botMessage = possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
                break;
            }
        }

        appendMessage(botMessage, "bot");
    }, 500);
}

function appendMessage(text, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.textContent = text;
    messageDiv.classList.add("message", sender);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

window.onload = function() {
    appendMessage("Hey there! I'm ChatBuddy. How can I make your day better? 😊", "bot");
}; 