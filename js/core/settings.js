const storedTheme = localStorage.getItem("theme");

let currentTheme =
  storedTheme === "dark" ? "dark" : "light";

document.documentElement.dataset.theme = currentTheme;

export function getTheme() {
  return currentTheme;
}

export function setTheme(theme) {
  if (theme === "light" || theme === "dark") {
    currentTheme = theme;
    localStorage.setItem("theme", theme);
    document.documentElement.dataset.theme = theme;
  }
}

const textSizes = [6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26];

const storedTextSize = Number(localStorage.getItem("textSize"));

let currentTextSize = textSizes.includes(storedTextSize)
  ? storedTextSize
  : 16;

document.documentElement.style.fontSize = `${currentTextSize}px`;

export function getTextSize() {
  return currentTextSize;
}

export function getTextSizeLevel() {
  const defaultIndex = textSizes.indexOf(16);
  const currentIndex = textSizes.indexOf(currentTextSize);

  return currentIndex - defaultIndex;
}

export function resetTextSize() {
  currentTextSize = 16;
  applyTextSize();
}

export function decreaseTextSize() {
  const currentIndex = textSizes.indexOf(currentTextSize);

  if (currentIndex > 0) {
    currentTextSize = textSizes[currentIndex - 1];
    applyTextSize();
  }
}

export function increaseTextSize() {
  const currentIndex = textSizes.indexOf(currentTextSize);

  if (currentIndex < textSizes.length - 1) {
    currentTextSize = textSizes[currentIndex + 1];
    applyTextSize();
  }
}

function applyTextSize() {
  document.documentElement.style.fontSize = `${currentTextSize}px`;
  localStorage.setItem("textSize", currentTextSize);
}