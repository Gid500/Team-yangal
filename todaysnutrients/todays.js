let selectedFoods = [];

function searchFood() {
  const input = document.getElementById("searchInput").value.trim();
  const resultsDiv = document.getElementById("foodList");
  resultsDiv.innerHTML = '';

  for (let food in foodData) {
    if (food.toLowerCase().includes(input)) {
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

document.getElementById("searchInput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {  
    searchFood();  
  }
});

function addFood(food) {
  selectedFoods.push(food);
  updateSelectedFoods();
}

function removeFood(index) {
  selectedFoods.splice(index, 1);
  updateSelectedFoods();
}

function resetFoods() {
  selectedFoods = [];
  document.getElementById("selectedFoods").innerHTML = '';
  document.getElementById("foodList").innerHTML = '';
  document.getElementById("searchInput").value = '';
  updateSelectedFoods();  
}

function updateSelectedFoods() {
  const selectedDiv = document.getElementById("selectedFoods");
  selectedDiv.innerHTML = '';  // 선택된 음식 리스트 비우기
  let total = 0;

  if (selectedFoods.length === 0) {
    document.getElementById("totalCalories").innerText = `총칼로리: ${total}kcal`;
  } else {
    selectedFoods.forEach((food, index) => {
      const item = foodData[food];  
      if (item) {
        const cal = item.cal; 
        total += cal; 

        const div = document.createElement("div");
        div.className = "food-item";
        div.innerHTML = `
          ${food} (${cal}kcal)
          <button class="btn" onclick="removeFood(${index})">빼기</button>
        `;
        selectedDiv.appendChild(div);
      }
      
    });
    
  }
  document.getElementById("totalCalories").innerText = `총칼로리: ${total}kcal`;
}

/*
document.querySelector('.analyze-btn').addEventListener('click', () => {
  document.getElementById('analysisSection').style.display = 'block';
});
*/

//칼로리 분석
function getAnalysisResult(totalCalories) {
  if (totalCalories === 0) {
    return "아직 선택된 음식이 없어요.";
  } else if (totalCalories <= 1800) {
    return "적절한 섭취량입니다. 좋은 식단이네요!";
  } else if (totalCalories <= 2200) {
    return "조금 많은 편이에요. 가벼운 운동을 권장합니다.";
  } else {
    return "칼로리 과다 섭취입니다! 식단 조절이 필요해요.";
  }
}

//영양소분석
function calculateNutrients(selectedFoods) {
  let total = { cal: 0, carbs: 0, protein: 0, fat: 0 };

  selectedFoods.forEach(food => {
    const item = foodData[food];
    if (item) {
      total.cal += item.cal;
      total.carbs += item.carbs;
      total.protein += item.protein;
      total.fat += item.fat;
    }
  });

  return total;
}
function getNutritionAnalysis(nutrients) {
  const totalMacro = nutrients.carbs + nutrients.protein + nutrients.fat;
  if (totalMacro === 0) return "선택된 음식이 없습니다.";

  const carbRatio = (nutrients.carbs / totalMacro) * 100;
  const proteinRatio = (nutrients.protein / totalMacro) * 100;
  const fatRatio = (nutrients.fat / totalMacro) * 100;

  let result = `탄수화물: ${carbRatio.toFixed(1)}%, 단백질: ${proteinRatio.toFixed(1)}%, 지방: ${fatRatio.toFixed(1)}%\n`;

  // 기준 : 탄수화물 50~60%, 단백질 20~30%, 지방 15~25%
  if (carbRatio > 60) {
    result += "탄수화물이 너무 많아요! 밥이나 빵의 양을 줄여보세요.\n";
  }
  if (fatRatio > 30) {
    result += "지방 섭취가 과해요. 기름진 음식을 줄이는 것이 좋아요.\n";
  }
  if (proteinRatio < 15) {
    result += "단백질이 부족합니다. 계란, 고기, 두부 등을 추가해보세요.\n";
  }

  return result;
}

//비타민 분석
function getVitaminAnalysis(selectedFoods) {
  const vitaminKeys = ["vitA", "vitB1", "vitB2", "vitC", "vitD", "vitE"];

  const vitaminNames = {
    vitA: "비타민 A",
    vitB1: "비타민 B1",
    vitB2: "비타민 B2",
    vitC: "비타민 C",
    vitD: "비타민 D",
    vitE: "비타민 E",
  };

  // 초기값 0으로 설정
  const totalVitamins = vitaminKeys.reduce((acc, vit) => {
    acc[vit] = 0;
    return acc;
  }, {});

  // 선택된 음식들의 비타민 수치 합산
  selectedFoods.forEach(food => {
    const item = foodData[food];
    if (item) {
      vitaminKeys.forEach(vit => {
        totalVitamins[vit] += item[vit] || 0;
      });
    }
  });

  // 부족한 비타민만 필터링
  const lackingVitamins = vitaminKeys.filter(vit => totalVitamins[vit] < 1);

  // 결과 메시지 생성
  if (lackingVitamins.length === 0) {
    return "모든 비타민을 고루 섭취하고 있어요! 훌륭한 식단입니다.";
  }

  const vitNamesStr = lackingVitamins.map(vit => vitaminNames[vit]).join(", ");
  return `${vitNamesStr}가 부족해요! 해당 비타민이 풍부한 음식을 추가해보세요.`;
}

//결과 출력
document.querySelector('.analyze-btn').addEventListener('click', () => {
  const analysisSection = document.getElementById('analysisSection');
  const chartSection = document.getElementById('vitaminChartSection');

  analysisSection.style.display = 'block';
  chartSection.style.display = 'flex'; // 차트도 보이게

  const nutrients = calculateNutrients(selectedFoods);
  const nutritionMsg = getNutritionAnalysis(nutrients);
  const calMsg = getAnalysisResult(nutrients.cal);
  const vitaminMsg = getVitaminAnalysis(selectedFoods);

  analysisSection.querySelector('p').innerText = 
    `[칼로리 분석]\n${calMsg}\n\n[영양소 분석]\n${nutritionMsg}\n[비타민 분석]\n${vitaminMsg}`;

  // 차트도 바로 그려줌
  drawMacroChart();
  drawVitaminChart();
});



document.addEventListener("DOMContentLoaded", function () {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
      alert("로그인 후 이용하실 수 있습니다.");
      window.location.href = "../login/login.html"; // 로그인 페이지로 이동
  }
  else {
    document.body.classList.remove("hidden"); // 로그인 상태면 body 보여주기
  }
});


