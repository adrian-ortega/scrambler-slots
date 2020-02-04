export const randomBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const EMOTICON_LIST = [
  "🦄",
  "😍",
  "🤪",
  "🤖",
  "🐮",
  "🐷",
  "🐸",
  "🐽",
  "🐛",
  "🐴",
  "🐺",
  "🐯",
  "🦎",
  "🦓",
  "🐆",
  "🦀",
  "✌",
  "😂",
  "😝",
  "😁",
  "😱",
  "👉",
  "🙌",
  "🍻",
  "🔥",
  "🌈",
  "☀",
  "🎈",
  "🌹",
  "💄",
  "🎀",
  "⚽",
  "🎾",
  "🏁",
  "😡",
  "👿",
  "🐻",
  "🐶",
  "🐬",
  "🐟",
  "🍀",
  "👀",
  "🚗",
  "🍎",
  "💝",
  "💙",
  "👌",
  "❤",
  "😍",
  "😉",
  "😓",
  "😳",
  "💪",
  "💩",
  "🍸",
  "🔑",
  "💖",
  "🌟",
  "🎉",
  "🌺",
  "🎶",
  "👠",
  "🏈",
  "⚾",
  "🏆",
  "👽",
  "💀",
  "🐵",
  "🐮",
  "🐩",
  "🐎",
  "💣",
  "👃",
  "👂",
  "🍓",
  "💘",
  "💜",
  "👊",
  "💋",
  "😘",
  "😜",
  "😵",
  "🙏",
  "👋",
  "🚽",
  "💃",
  "💎",
  "🚀",
  "🌙",
  "🎁",
  "⛄",
  "🌊",
  "⛵",
  "🏀",
  "🎱",
  "💰",
  "👶",
  "👸",
  "🐰",
  "🐷",
  "🐍",
  "🐫",
  "🔫",
  "👄",
  "🚲",
  "🍉",
  "💛",
  "💚"
];

export const getRandomEmoticon = () => {
  const i = randomBetween(0, EMOTICON_LIST.length - 1);
  return EMOTICON_LIST[i];
};

export const getOccurrence = (array, value) => {
  let count = 0;
  array.forEach(v => v === value && count++);
  return count;
};

export const randomizeArray = array => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[randomIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const pxToRem = value => {
  value = parseInt(value, 10);
  const baseValue = window.getComputedStyle(window.document.body).fontSize;
  const rem = parseFloat(value / parseInt(baseValue, 10)).toPrecision(4);
  return `${rem}rem`;
};
