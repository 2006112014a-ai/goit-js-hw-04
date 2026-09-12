function calcAverageCalories(days) {
  if (days.length === 0) {
    return 0;
  }

  let totalCalories = 0;

  for (const day of days) {
    totalCalories += day.calories;
  }

  return totalCalories / days.length;
}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
  ])
);

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
  ])
);

// Перевірка порожнього масиву
console.log(calcAverageCalories([])); // 0