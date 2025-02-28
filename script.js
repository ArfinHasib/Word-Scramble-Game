let words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flowers and plants"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair-like outer covering of a bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of the mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or growth"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of the tongue to detect flavors"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },
    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing a collection of books"
    },
    {
        word: "bridge",
        hint: "Structure built to span a physical obstacle"
    },
    {
        word: "planet",
        hint: "A celestial body orbiting a star"
    },
    {
        word: "ocean",
        hint: "A vast body of salt water"
    },
    {
        word: "pencil",
        hint: "A tool used for writing or drawing"
    },
    {
        word: "mirror",
        hint: "Reflective surface that shows an image"
    },
    {
        word: "jungle",
        hint: "Dense forest with tropical vegetation"
    },
    {
        word: "puzzle",
        hint: "A game that tests problem-solving skills"
    },
    {
        word: "shadow",
        hint: "A dark area caused by blocked light"
    },
    {
        word: "guitar",
        hint: "A stringed musical instrument"
    },
    {
        word: "ladder",
        hint: "A tool used for climbing up or down"
    },
    {
        word: "helmet",
        hint: "Protective headgear for safety"
    },
    {
        word: "candle",
        hint: "A wax stick that produces light"
    },
    {
        word: "castle",
        hint: "A large fortified building"
    },
    {
        word: "globe",
        hint: "A spherical model of Earth"
    },
    {
        word: "bottle",
        hint: "A container used to hold liquids"
    },
    {
        word: "wallet",
        hint: "A small case for holding money and cards"
    },
    {
        word: "tunnel",
        hint: "An underground passage"
    },
    {
        word: "lantern",
        hint: "A portable light source"
    },
    {
        word: "rocket",
        hint: "A spacecraft or missile"
    },
    {
        word: "saddle",
        hint: "A seat for riding horses"
    },
    {
        word: "glacier",
        hint: "A large mass of moving ice"
    },
    {
        word: "volcano",
        hint: "A mountain that erupts with lava"
    },
    {
        word: "desert",
        hint: "A dry, barren landscape"
    },
    {
        word: "compass",
        hint: "A tool for navigation"
    },
    {
        word: "furnace",
        hint: "A device for generating heat"
    },
    {
        word: "trophy",
        hint: "An award for achievement"
    },
    {
        word: "climber",
        hint: "A person who ascends mountains"
    },
    {
        word: "harvest",
        hint: "The process of gathering crops"
    }
];

let correctword, timer;

const wordText = document.querySelector(".word"),
        hintText = document.querySelector(".hint"),
        timeText = document.querySelector(".time b"),
        inputField = document.querySelector("input"),
        refreshBtn = document.querySelector(".refresh-word"),
        checkBtn = document.querySelector(".check-word");

const initTimer = (maxTime) => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime
        }
        alert(`Time Off! ${correctword.toUpperCase()} was the correct word`);
        initGame();
    }, 1000);
}

const initGame = () => {
    initTimer(30)
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split('');

    for(let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join('');
    hintText.innerText = randomObj.hint;
    correctword = randomObj.word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctword.length);
}

initGame(); // Page reload

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert("Please enter the word to check!");
    if(userWord !== correctword) return alert(`Oops ${userWord} is not the correct word.`);
    alert(`Congrats! ${correctword.toLowerCase()} is the correct word`)
    initGame();
}

refreshBtn.addEventListener("click", initGame)
checkBtn.addEventListener("click", checkWord)
