const foodData = {
  '양념갈비': 550,
  'LA갈비': 600,
  '치킨 한마리': 2000,
  '삼겹살(100g)': 320,
  '김밥 한줄': 350,
  '비빔밥': 500
};

let selectedFoods = [];

function searchFood() {
  const input = document.getElementById("searchInput").value.trim();
  const resultsDiv = document.getElementById("foodList");
  resultsDiv.innerHTML = '';

  for (let food in foodData) {
    if (food.includes(input)) {
      const div = document.createElement("div");
      div.className = "food-item";
      div.innerHTML = `
        ${food}
        <button class="btn" onclick="addFood('${food}')">넣기</button>
      `;
      resultsDiv.appendChild(div);
    }
  }
}

function addFood(food) {
  selectedFoods.push(food);
  updateSelectedFoods();
}

function removeFood(index) {
  selectedFoods.splice(index, 1);
  updateSelectedFoods();
}

function updateSelectedFoods() {
  const selectedDiv = document.getElementById("selectedFoods");
  selectedDiv.innerHTML = '';
  let total = 0;

  selectedFoods.forEach((food, index) => {
    const cal = foodData[food];
    total += cal;

    const div = document.createElement("div");
    div.className = "food-item";
    div.innerHTML = `
      ${food} (${cal}kcal)
      <button class="btn" onclick="removeFood(${index})">빼기</button>
    `;
    selectedDiv.appendChild(div);
  });

  document.getElementById("totalCalories").innerText = `총칼로리: ${total}kcal`;
}

/*
document.querySelector('.analyze-btn').addEventListener('click', () => {
  document.getElementById('analysisSection').style.display = 'block';
});
*/
document.querySelector('.analyze-btn').addEventListener('click', () => {
  const analysisSection = document.getElementById('analysisSection');
  if (analysisSection.style.display === 'block') {
    analysisSection.style.display = 'none';  // 분석 영역 숨기기
  } else {
    analysisSection.style.display = 'block';  // 분석 영역 보이기
  }
});