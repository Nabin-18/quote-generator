const toggleTheme = document.getElementById("toggle-theme");
const quoteText = document.querySelector(".quotes");
const authorText = document.querySelector(".author_name");
const categorySelect = document.getElementById("category-select");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const randomBtn = document.getElementById("random");
const increaseFontBtn = document.getElementById("font-increase");
const decreaseFontBtn = document.getElementById("font-decrease");

let isDark = false;
let currentIndex = 0;
let fontSize = 16;

const quotes = [
  {
    category: "science",
    quote: "“Everything is theoretically impossible, until it is done.”",
    author: " Robert A. Heinlein.",
  },
  {
    category: "religion",
    quote: "“God has no religion.”",
    author: "Mahatma Gandhi",
  },
  {
    category: "science",
    quote: "“Impossible only means that you haven’t found the solution yet.”",
    author: "Anonymous",
  },
  {
    category: "religion",
    quote: "Religion is what keeps the poor from murdering the rich.”",
    author: "Napoleon Bonaparte",
  },
  {
    category: "science",
    quote:
      "“Research is to see what everybody else has seen, and to think what nobody else has thought.”",
    author: "Albert Szent-Györgyi",
  },
  {
    category: "religion",
    quote: "“Doubt everything. Find your own light.”",
    author: "Buddha",
  },
];

function getFilteredQuotes() {
  const selectedCategory = categorySelect.value;
  return quotes.filter((q) => q.category === selectedCategory);
}

function showQuote(index) {
  const filteredQuotes = getFilteredQuotes();
  if (filteredQuotes.length === 0) {
    quoteText.textContent = "No quotes available.";
    authorText.textContent = "";
    return;
  }

  if (index < 0) currentIndex = filteredQuotes.length - 1;
  else if (index >= filteredQuotes.length) currentIndex = 0;
  else currentIndex = index;

  const quote = filteredQuotes[currentIndex];
  quoteText.textContent = quote.quote;
  authorText.textContent = `- ${quote.author}`;
}

toggleTheme.addEventListener("click", () => {
  if (isDark) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
  isDark = !isDark;
});

categorySelect.addEventListener("change", () => {
  currentIndex = 0;
  showQuote(currentIndex);
});

nextBtn.addEventListener("click", () => showQuote(currentIndex + 1));
prevBtn.addEventListener("click", () => showQuote(currentIndex - 1));

randomBtn.addEventListener("click", () => {
  const filtered = getFilteredQuotes();
  const randomIndex = Math.floor(Math.random() * filtered.length);
  showQuote(randomIndex);
});

increaseFontBtn.addEventListener("click", () => {
  fontSize += 2;
  quoteText.style.fontSize = `${fontSize}px`;
  authorText.style.fontSize = `${fontSize}px`;
});

decreaseFontBtn.addEventListener("click", () => {
  fontSize = Math.max(12, fontSize - 2);
  quoteText.style.fontSize = `${fontSize}px`;
  authorText.style.fontSize = `${fontSize}px`;
});

// Initial load
showQuote(currentIndex);
