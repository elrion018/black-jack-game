function randomCard(sumValue) {
  const signs = ['하트', '클로바', '스페이드', '다이아몬드', '킹', '잭', '퀸'];
  const putSign = signs[Math.floor(Math.random() * signs.length)];

  if (
    putSign === '하트' ||
    putSign === '클로바' ||
    putSign === '스페이드' ||
    putSign === '다이아몬드'
  ) {
    return [putSign, Math.floor(Math.random() * 10 + 1)];
  }

  if (sumValue >= 11) {
    return [putSign, 1];
  }

  return [putSign, 11];
}

function isBlackJack(person) {
  if (person._sumValue === 21 && person._cards.length === 2) {
    return true;
  }
}

export { randomCard, isBlackJack };
