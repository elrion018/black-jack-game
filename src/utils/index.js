function randomCard() {
  const signs = ['하트', '클로바', '스페이드', '다이아몬드', '킹', '잭', '퀸'];
  const putSign = signs[Math.random() * signs.length];

  if (
    putSign === '하트' ||
    putSign === '클로바' ||
    putSign === '스페이드' ||
    putSign === '다이아몬드'
  ) {
    return [putSign, Math.random() * 10 + 1];
  }

  return [putSign, 0];
}

export { randomCard };
