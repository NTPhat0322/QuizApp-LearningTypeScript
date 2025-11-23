export const shuffleArray = <T>(array: T[]): T[] => {
  // tạo bản copy để không làm thay đổi mảng gốc
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    // random index từ 0 đến i
    const j = Math.floor(Math.random() * (i + 1));

    // hoán đổi phần tử result[i] và result[j]
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};
