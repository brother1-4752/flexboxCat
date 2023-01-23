const instructions__header = document.querySelector(".instructions__header");
const instructions__content = document.querySelector(".instructions__content");
const instructions__example = document.querySelector(".instructions__example");

const instructions = [
  instructions__header,
  instructions__content,
  instructions__example,
];

const stages__indicator = document.querySelector(".stages__indicator");
const stagesWrapper = document.querySelector(".stages-wrapper");
const stageMarkers = document.querySelectorAll(".stage-marker");
const currentStage = document.querySelector(".current");

const docs = {
  1: [
    `          Flexbox Cats는 CSS Flexbox를 이용해 고양이를 츄르가 있는 곳으로
  이동시키는 게임입니다.
  <code class="help">justify-content</code> 속성을 이용하여 고양이가
  츄르가 있는 곳으로 이동시켜주세요. 이 속성은 다음의 값들을 인자로 받아
  요소들을 가로선 상에서 정렬합니다.`,
    `          <li>
    <code>flex-start</code>: 요소들을 컨테이너의 왼쪽으로 정렬합니다.
  </li>
  <li>
    <code>flex-end</code>: 요소들을 컨테이너의 오른쪽으로 정렬합니다.
  </li>
  <li><code>center</code>: 요소들을 컨테이너의 가운데로 정렬합니다.</li>
  <li>
    <code>space-between</code>: 양 끝을 포함X, 요소들 사이에 동일한
    간격을 둡니다.
  </li>
  <li>
    <code>space-around</code>: 요소들 주위에 동일한 간격을 둡니다.
  </li>
  <li>
    <code>space-evenly</code>: 양 끝을 포함O, 요소들 주위에 동일한
    간격을 둡니다.
  </li>`,
    `          예를 들어, <code>justify-content : center;</code>는 고양이를 가운데로
    이동시킵니다.`,
  ],
  2: ["inst2", "property tip2", ""],
  3: ["inst3", "Ex", ""],
  4: ["inst4", "", ""],
  5: ["inst5", "property tip5", ""],
};

function toggleTooltip() {
  if (stagesWrapper.classList.contains("hide")) {
    stagesWrapper.classList.remove("hide");
  } else {
    stagesWrapper.classList.add("hide");
  }
}

function updateInstructions(t) {
  for (var i = 0; i < 3; i++) {
    instructions[i].innerHTML = docs[t.dataset.level][i];
  }
}

stages__indicator.addEventListener("click", toggleTooltip);

stageMarkers.forEach(function (marker) {
  marker.addEventListener("click", changeStage);
});

function changeStage() {
  currentStage.innerHTML = this.dataset.level;
  updateInstructions(this);

  toggleTooltip();
}
