function closeSidebar() {
  document.getElementById("sidebar").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
  document.getElementById("menuBtn").style.display = "block";
}


const vitamins = {
  "지용성 비타민": {
    desc: "지용성 비타민은 지방에 녹아 체내에 저장되며, 과다 섭취 시 부작용이 발생할 수 있습니다.",
    items: {
      "비타민A": {
        desc: "시력 보호와 면역 기능 강화에 도움을 줍니다.",
        img: "images/vitamin_a.jpg",
        link: "https://ko.wikipedia.org/wiki/비타민_A",
        rda: "남성 900㎍ / 여성 700㎍"
      },
      "비타민D": {
        desc: "뼈 건강과 면역 조절에 기여합니다.",
        img: "images/vitamin_d.jpg",
        link: "https://ko.wikipedia.org/wiki/비타민_D",
        rda: "600 IU"
      },
      "비타민E": {
        desc: "세포 노화 방지 및 항산화 작용을 합니다.",
        img: "images/vitamin_e.jpg",
        link: "https://ko.wikipedia.org/wiki/비타민_E",
        rda: "15mg"
      },
      "비타민K": {
        desc: "혈액 응고와 뼈 건강에 필수적입니다.",
        img: "images/vitamin_k.jpg",
        link: "https://ko.wikipedia.org/wiki/비타민_K",
        rda: "120㎍"
      }
    }
  },
  "수용성 비타민": {
    desc: "수용성 비타민은 체내에 저장되지 않고 소변으로 배출되므로 매일 꾸준한 섭취가 필요합니다.",
    items: {
      "비타민B1": {
        desc: "탄수화물 대사 및 신경 기능에 중요합니다.",
        img: "images/vitamin_b1.jpg",
        link: "https://ko.wikipedia.org/wiki/비타민_B1",
        rda: "1.2mg"
      },
      "비타민B2": {
        desc: "에너지 생성과 피부, 점막 건강 유지에 기여합니다.",
        img: "images/vitamin_b2.jpg",
        link: "https://ko.wikipedia.org/wiki/비타민_B2",
        rda: "1.3mg"
      },
      "비타민B3": {
        desc: "나이아신으로도 알려져 있으며, 혈액순환과 피부 건강에 중요합니다.",
        img: "images/niacin.jpg",
        link: "https://ko.wikipedia.org/wiki/니아신",
        rda: "16mg"
      },
      "비타민B5": {
        desc: "판토텐산으로, 지방과 탄수화물 대사에 필요합니다.",
        img: "images/pantothenic_acid.jpg",
        link: "https://ko.wikipedia.org/wiki/판토텐산",
        rda: "5mg"
      },
      "비타민B6": {
        desc: "단백질 대사 및 뇌 기능 유지에 관여합니다.",
        img: "images/vitamin_b6.jpg",
        link: "https://ko.wikipedia.org/wiki/비타민_B6",
        rda: "1.3mg"
      },
      "비타민B7": {
        desc: "비오틴으로, 피부와 손톱, 머리카락 건강에 필수입니다.",
        img: "images/biotin.jpg",
        link: "https://ko.wikipedia.org/wiki/비오틴",
        rda: "30㎍"
      },
      "비타민B9": {
        desc: "엽산으로, 세포 생성 및 태아 발달에 중요한 역할을 합니다.",
        img: "images/folic_acid.jpg",
        link: "https://ko.wikipedia.org/wiki/엽산",
        rda: "400㎍"
      },
      "비타민B12": {
        desc: "신경세포 유지 및 적혈구 생성에 필요합니다.",
        img: "images/vitamin_b12.jpg",
        link: "https://ko.wikipedia.org/wiki/비타민_B12",
        rda: "2.4㎍"
      },
      "비타민C": {
        desc: "항산화 작용과 면역력 강화에 중요합니다.",
        img: "images/vitamin_c.jpg",
        link: "https://ko.wikipedia.org/wiki/비타민_C",
        rda: "100mg"
      }
    }
  },
  "무기질 및 기타": {
    desc: "무기질은 체내 필수 기능을 위한 원소로, 신경전달 및 혈액 생성 등에 기여합니다.",
    items: {
      "아연": {
        desc: "면역력 강화, 세포 분열과 성장에 중요합니다.",
        img: "images/zinc.jpg",
        link: "https://ko.wikipedia.org/wiki/아연",
        rda: "10mg"
      },
      "철분": {
        desc: "혈액 내 산소 운반과 빈혈 예방에 필수입니다.",
        img: "images/iron.jpg",
        link: "https://ko.wikipedia.org/wiki/철_(원소)",
        rda: "10mg"
      },
      "마그네슘": {
        desc: "근육과 신경 기능, 심장 건강에 필수적입니다.",
        img: "images/magnesium.jpg",
        link: "https://ko.wikipedia.org/wiki/마그네슘",
        rda: "350mg"
      },
      "오메가3": {
        desc: "심혈관 건강과 뇌 기능에 좋습니다.",
        img: "images/omega3.jpg",
        link: "https://ko.wikipedia.org/wiki/오메가-3_지방산",
        rda: "1000mg"
      }
    }
  }
};

const list = document.getElementById("vitaminList");
const modal = document.getElementById("descModal");
const title = document.getElementById("descTitle");
const text = document.getElementById("descText");
const image = document.getElementById("descImage");
const link = document.getElementById("descLink");
const rda = document.getElementById("descRDA");
const closeBtn = document.getElementById("descClose");

Object.keys(vitamins).forEach(category => {
  const cat = vitamins[category];

  const accordionTitle = document.createElement("div");
  accordionTitle.className = "accordion-title";
  accordionTitle.textContent = category;

  const accordionContent = document.createElement("div");
  accordionContent.className = "accordion-content";

  const categoryDesc = document.createElement("p");
  categoryDesc.className = "category-desc";
  categoryDesc.textContent = cat.desc;
  accordionContent.appendChild(categoryDesc);

  const group = document.createElement("div");
  group.className = "vitamin-group";

  Object.keys(cat.items).forEach(name => {
    const data = cat.items[name];
    const btn = document.createElement("div");
    btn.className = "vitamin-btn";

    btn.innerHTML = `
      ${name}
      <div class="vitamin-rda">${data.rda}</div>
    `;

    btn.onclick = () => {
      title.textContent = name;
      text.textContent = data.desc;
      image.src = data.img;
      link.href = data.link;
      rda.textContent = `하루 권장량: ${data.rda}`;
      modal.style.display = "block";
    };

    group.appendChild(btn);
  });

  accordionContent.appendChild(group);
  list.appendChild(accordionTitle);
  list.appendChild(accordionContent);

  accordionTitle.addEventListener("click", () => {
    accordionContent.classList.toggle("open");
  });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
