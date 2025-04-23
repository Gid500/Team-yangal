//선택한 음식 데이터를 기반으로 
// 영양소 비율 차트와 비타민 섭취 비율 차트를 
// Chart.js의 Radar Chart 형태로 그리는 기능


let chartInstance = null; 
let vitaminChartInstance = null; 

function drawMacroChart() {
    const ctx = document.getElementById('macroChart').getContext('2d');

    const nutrients = calculateNutrients(selectedFoods);
    const totalMacro = nutrients.carbs + nutrients.protein + nutrients.fat;

    // 아무것도 선택되지 않은 경우
    if (totalMacro === 0) {
      
      if (chartInstance) chartInstance.destroy();
      return;
    }

    const carbsRatio = (nutrients.carbs / totalMacro * 100).toFixed(1);
    const proteinRatio = (nutrients.protein / totalMacro * 100).toFixed(1);
    const fatRatio = (nutrients.fat / totalMacro * 100).toFixed(1);

    // 권장 섭취 비율(고정)
    const recommendedRatios = [50, 30, 20]; 

    //차트 초기화
    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
        type: 'radar',
        data: {
        labels: ['탄수화물', '단백질', '지방'],
        datasets: [
                {
                    label: '권장 섭취 비율',
                    data: recommendedRatios,
                    backgroundColor: 'rgba(200, 200, 200, 0.2)',
                    borderColor: 'rgba(200, 200, 200, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(200, 200, 200, 1)'
                },
                {
                    label: '내 섭취 비율',
                    data: [carbsRatio, proteinRatio, fatRatio],
                    backgroundColor:'rgb(103, 255, 191)',
                    borderColor: 'rgb(103, 255, 191)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgb(103, 255, 191)'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                position: 'top'
                }
            },
            scales: {
                r: {
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                        stepSize: 50,
                        color: '#333'
                    },
                    pointLabels: {
                        font: {
                        size: 18
                        }
                    }
                }
            }
        }
    });
}


function drawVitaminChart() {
  const ctx = document.getElementById('vitaminChart').getContext('2d');

  // 비타민 값 계산
  const vitamins = calculateVitamins(selectedFoods);
  const totalVitamins = Object.values(vitamins).reduce((a, b) => a + b, 0);

  if (totalVitamins === 0) {
    // 아무것도 선택되지 않은 경우
    if (vitaminChartInstance) vitaminChartInstance.destroy();
    return;
  }

  // 각 비타민 비율 계산
  const vitaminRatios = [
    (vitamins.vitA / totalVitamins * 100).toFixed(1),
    (vitamins.vitB1 / totalVitamins * 100).toFixed(1),
    (vitamins.vitB2 / totalVitamins * 100).toFixed(1),
    (vitamins.vitC / totalVitamins * 100).toFixed(1),
    (vitamins.vitD / totalVitamins * 100).toFixed(1),
    (vitamins.vitE / totalVitamins * 100).toFixed(1),
  ];

  // 권장 섭취 비율 (고정값)
  const recommendedVitaminRatios = [20, 15, 15, 25, 15, 10];

  // 기존 차트가 있다면 제거
  if (vitaminChartInstance) {
    vitaminChartInstance.destroy();
  }

  vitaminChartInstance = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['비타민 A', '비타민 B1', '비타민 B2', '비타민 C', '비타민 D', '비타민 E'],
      datasets: [
        {
          label: '권장 섭취 비율',
          data: recommendedVitaminRatios,
          backgroundColor: 'rgba(200, 200, 200, 0.2)',
          borderColor: 'rgba(200, 200, 200, 1)',
          borderWidth: 2,
          pointBackgroundColor: 'rgba(200, 200, 200, 1)'
        },
        {
          label: '내 섭취 비율',
          data: vitaminRatios,
          backgroundColor: '#3498db',
          borderColor: '#3498db',
          borderWidth: 2,
          pointBackgroundColor: '#3498db'
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
          legend: {
              position: 'top'
          }
      },
      scales: {
          r: {
              suggestedMin: 0,
              suggestedMax: 100,
              ticks: {
                  stepSize: 50,
                  color: '#333'
              },
              pointLabels: {
                  font: {
                  size: 18
                  }
              }
          }
      }
    }
  });
}

function calculateVitamins(selectedFoods) {
  let totalVitamins = { vitA: 0, vitB1: 0, vitB2: 0, vitC: 0, vitD: 0, vitE: 0 };

  selectedFoods.forEach(food => {
    const item = foodData[food];
    if (item) {
      totalVitamins.vitA += item.vitA;
      totalVitamins.vitB1 += item.vitB1;
      totalVitamins.vitB2 += item.vitB2;
      totalVitamins.vitC += item.vitC;
      totalVitamins.vitD += item.vitD;
      totalVitamins.vitE += item.vitE;
    }
  });
  return totalVitamins;
}

// 분석하기 버튼 클릭 시 차트 자동 표시 및 생성
document.getElementById("analyze-btn").addEventListener("click", function () {
  const chartSection = document.getElementById("vitaminChartSection");
  
  chartSection.style.display = "flex";  // 항상 보이게
  drawMacroChart();
  drawVitaminChart();
});