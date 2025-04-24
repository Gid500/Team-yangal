const foodData = {
    '밥 한공기': { 
      cal: 300, carbs: 69, protein: 6, fat: 1, 
      vitA: 0, vitB1: 1, vitB2: 0, vitC: 0, vitD: 0, vitE: 0 
    },
    '김밥 한줄': { 
      cal: 350, carbs: 50, protein: 10, fat: 10, 
      vitA: 0, vitB1: 0, vitB2: 1, vitC: 0, vitD: 0, vitE: 1 
    },
    '비빔밥': { 
      cal: 500, carbs: 80, protein: 15, fat: 15, 
      vitA: 1, vitB1: 1, vitB2: 1, vitC: 1, vitD: 0, vitE: 0 
    },
    '된장찌개': { 
      cal: 180, carbs: 10, protein: 12, fat: 8, 
      vitA: 0, vitB1: 1, vitB2: 1, vitC: 1, vitD: 0, vitE: 0 
    },
    '순두부찌개': { 
      cal: 250, carbs: 8, protein: 18, fat: 15, 
      vitA: 0, vitB1: 1, vitB2: 0, vitC: 0, vitD: 1, vitE: 0 
    },
    '떡볶이(1인분)': { 
      cal: 450, carbs: 85, protein: 8, fat: 10, 
      vitA: 0, vitB1: 0, vitB2: 0, vitC: 1, vitD: 0, vitE: 0 
    },     
    '라면': { 
      cal: 500, carbs: 72, protein: 10, fat: 18, 
      vitA: 0, vitB1: 0, vitB2: 0, vitC: 0, vitD: 0, vitE: 0 
    },
    '볶음밥': { 
      cal: 700, carbs: 85, protein: 20, fat: 25, 
      vitA: 0, vitB1: 1, vitB2: 1, vitC: 1, vitD: 0, vitE: 0 
    },
    '삼계탕': { 
      cal: 800, carbs: 18, protein: 60, fat: 50, 
      vitA: 1, vitB1: 0, vitB2: 0, vitC: 1, vitD: 1, vitE: 1 
    },
    '계란후라이': { 
      cal: 90, carbs: 1, protein: 6, fat: 7, 
      vitA: 1, vitB1: 0, vitB2: 1, vitC: 0, vitD: 1, vitE: 1 
    },
    '닭가슴살(100g)': { 
      cal: 165, carbs: 0, protein: 31, fat: 3, 
      vitA: 0, vitB1: 1, vitB2: 1, vitC: 0, vitD: 0, vitE: 0 
    },
    '샐러드(야채만)': { 
      cal: 80, carbs: 10, protein: 3, fat: 1, 
      vitA: 1, vitB1: 0, vitB2: 0, vitC: 1, vitD: 0, vitE: 1 
    },
    '잡채': { 
      cal: 300, carbs: 45, protein: 8, fat: 10, 
      vitA: 0, vitB1: 1, vitB2: 0, vitC: 1, vitD: 0, vitE: 0 
    },
    '갈비탕': { 
      cal: 450, carbs: 10, protein: 35, fat: 30, 
      vitA: 0, vitB1: 1, vitB2: 0, vitC: 0, vitD: 0, vitE: 0 
    },
    '불고기': { 
      cal: 400, carbs: 20, protein: 30, fat: 20, 
      vitA: 0, vitB1: 1, vitB2: 0, vitC: 0, vitD: 0, vitE: 0 
    },
    '오징어볶음': { 
      cal: 280, carbs: 12, protein: 25, fat: 15, 
      vitA: 0, vitB1: 0, vitB2: 0, vitC: 1, vitD: 1, vitE: 0 
    },
    '제육볶음': { 
      cal: 450, carbs: 20, protein: 30, fat: 25, 
      vitA: 0, vitB1: 1, vitB2: 1, vitC: 0, vitD: 0, vitE: 0 
    },
    '김치찌개': { 
      cal: 220, carbs: 10, protein: 15, fat: 12, 
      vitA: 1, vitB1: 1, vitB2: 1, vitC: 1, vitD: 0, vitE: 0 
    },
    '참치마요덮밥': { 
      cal: 650, carbs: 80, protein: 20, fat: 25, 
      vitA: 0, vitB1: 1, vitB2: 0, vitC: 1, vitD: 1, vitE: 1 
    },
    '스팸구이': { 
      cal: 300, carbs: 3, protein: 10, fat: 28, 
      vitA: 0, vitB1: 1, vitB2: 1, vitC: 0, vitD: 0, vitE: 0 
    },
    '소고기미역국': { 
      cal: 180, carbs: 5, protein: 20, fat: 8, 
      vitA: 0, vitB1: 1, vitB2: 1, vitC: 0, vitD: 1, vitE: 0 
    },
    '달걀찜': { 
      cal: 120, carbs: 2, protein: 9, fat: 8, 
      vitA: 1, vitB1: 0, vitB2: 1, vitC: 0, vitD: 1, vitE: 1 
    },
    '콩나물국': { 
      cal: 70, carbs: 5, protein: 5, fat: 2, 
      vitA: 0, vitB1: 1, vitB2: 0, vitC: 1, vitD: 0, vitE: 0 
    },
    '유부초밥(2개)': { 
      cal: 320, carbs: 60, protein: 8, fat: 6, 
      vitA: 0, vitB1: 1, vitB2: 1, vitC: 0, vitD: 0, vitE: 0 
    },
    '고등어구이': { 
      cal: 250, carbs: 0, protein: 22, fat: 18, 
      vitA: 0, vitB1: 0, vitB2: 0, vitC: 0, vitD: 1, vitE: 1 
    },
    '감자조림': { 
      cal: 200, carbs: 30, protein: 3, fat: 8, 
      vitA: 0, vitB1: 0, vitB2: 1, vitC: 1, vitD: 0, vitE: 0 
    },
    '멸치볶음': { 
      cal: 150, carbs: 8, protein: 15, fat: 6, 
      vitA: 0, vitB1: 1, vitB2: 1, vitC: 0, vitD: 0, vitE: 1 
    },
    '양념갈비': { 
      cal: 550, carbs: 15, protein: 40, fat: 35, 
      vitA: 0, vitB1: 1, vitB2: 0, vitC: 0, vitD: 0, vitE: 0 
    },
    'LA갈비': { 
      cal: 600, carbs: 10, protein: 45, fat: 40, 
      vitA: 0, vitB1: 1, vitB2: 0, vitC: 0, vitD: 0, vitE: 0 
    },
    '치킨 한마리': { 
      cal: 2000, carbs: 20, protein: 120, fat: 130, 
      vitA: 1, vitB1: 0, vitB2: 0, vitC: 0, vitD: 1, vitE: 1 
    },
    '삼겹살(100g)': { 
      cal: 320, carbs: 0, protein: 20, fat: 28, 
      vitA: 0, vitB1: 0, vitB2: 0, vitC: 0, vitD: 0, vitE: 0 
    },
};