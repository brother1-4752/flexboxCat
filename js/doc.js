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
const arrowRight = document.querySelector(".arrow.right");
const arrowLeft = document.querySelector(".arrow.left");
const editorCode = document.querySelector(".editor-code--text");
const boardFirst = document.querySelector("#board__first");
const nextBtn = document.querySelector(".next-btn");
const resetBtn = document.querySelector("#reset");

const docs = {
  1: [
    `Flexbox Cats는 CSS Flexbox를 이용해 고양이를 츄르가 있는 곳으로 이동시키는 게임입니다.<code class="help">justify-content</code> 속성을 이용하여 고양이가
  츄르가 있는 곳으로 이동시켜주세요. 이 속성은 다음의 값들을 인자로 받아 요소들을 가로선 상에서 정렬합니다.`,
    `<li><code>flex-start</code>: 요소들을 컨테이너의 왼쪽으로 정렬합니다.</li><li><code>flex-end</code>: 요소들을 컨테이너의 오른쪽으로 정렬합니다.</li><li><code>center</code>: 요소들을 컨테이너의 가운데로 정렬합니다.</li><li><code>space-between</code>: 양 끝을 포함X, 요소들 사이에 동일한 간격을 둡니다.</li><li><code>space-around</code>: 요소들 주위에 동일한 간격을 둡니다.</li><li><code>space-evenly</code>: 양 끝을 포함O, 요소들 주위에 동일한 간격을 둡니다.
  </li>`,
    `예를 들어, <code>justify-content : center;</code>는 고양이를 가운데로 이동시킵니다.`,
  ],
  2: [
    `<code class="help">justify-content</code>를 이용해 고양이가 츄르를 먹을 수 있도록 도와주세요. 이 CSS 속성은 요소들을 가로선 상에서 정렬하며 다음의 값들을 인자로 받습니다.`,
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
    "",
  ],
  3: [
    `<code class="help">justify-content</code>를 이용해 3명의 고양이 주인님이 모두 츄르 앞으로 이동할 수 있도록 도와주세요. 배고파서 야옹합니다. 이번에는 츄르 주위에 간격이 많습니다. 서둘러주세요.`,
    "",
    `만약 이 속성에서 사용 가능한 인자들이 기억나지 않는다면, <code class="help">justify-content</code>를 클릭해보세요.`,
  ],
  4: [
    `집사가 장난끼가 발동하여 츄르 사이의 간격을 넓혀 놓았습니다. <code class="help">justify-content</code>를 사용하세요. 이번에는 츄르 사이에 동일한 간격으로 배치되어 있습니다.`,
    "",
    "",
  ],
  5: [
    `이제 <code class="help">align-items</code>를 이용해 고양이들이 아래에 있는 츄르에 도착할 수 있도록 도와주세요. 안 그러면 냥냥펀치가 기다리고 있습니다. 이 CSS속성은 다음의 값들을 인자로 받아 요소들을 세로선 상에서 정렬합니다.`,
    `          <li>
    <code>flex-start</code>: 요소들을 컨테이너의 꼭대기로 정렬합니다.
  </li>
  <li>
    <code>flex-end</code>: 요소들을 컨테이너의 바닥으로 정렬합니다.
  </li>
  <li><code>center</code>: 요소들을 컨테이너의 세로선 상의 가운데로 정렬합니다.</li>
  <li>
    <code>baseline</code>: 요소들을 컨테이너의 시작 위치에 정렬합니다.
  </li>
  <li>
    <code>stretch</code>: 요소들을 컨테이너에 맞도록 늘립니다.
  </li>`,
    "",
  ],
  6: [
    `<code class="help">justify-content</code>와 <code clas"help">align-items</code>를 함께 사용하여 고양이가 집의 중앙에 이동할 수 있도록 도와주세요.`,
    "",
    "",
  ],
  7: [
    `츄르 주위에 간격이 있습니다. <code class="help">justify-content</code>와 <code clas"help">align-items</code>를 함께 사용하세요.`,
    "",
    "",
  ],
  8: [
    `고양이들이 자신의 컬러와 같은 츄르 앞으로 이동할 수 있도록 도와주세요. 이번에는 <code class="help">flex-direction</code>를 사용하세요. 이 CSS속성은 다음의 값들을 인자로 받아 컨테이너 안에서 요소들이 정렬해야 할 방향을 지정합니다.`,
    `          <li>
    <code>row</code>: 요소들을 텍스트의 방향과 동일하게 정렬합니다.
  </li>
  <li>
    <code>row-reverse</code>: 요소들을 텍스트의 반대 방향으로 정렬합니다.
  </li>
  <li><code>column</code>: 요소들을 위에서 아래로 정렬합니다.</li>
  <li>
    <code>column-reverse</code>: 요소들을 아래에서 위로 정렬합니다.
  </li>`,
    "",
  ],
  9: [
    `<code class="help">flex-direction</code>를 이용해 고양이들이 자신의 컬러와 같은 츄르 앞으로 이동할 수 있도록 도와주세요. 이 CSS 속성은 다음의 값들을 인자로 받아 컨테이너 안에서 요소들이 정렬해야 할 방향을 지정합니다.`,
    `<li><code>row</code>: 요소들을 텍스트의 방향과 동일하게 정렬합니다.</li>
  <li>
    <code>row-reverse</code>: 요소들을 텍스트의 반대 방향으로 정렬합니다.
  </li>
  <li><code>column</code>: 요소들을 위에서 아래로 정렬합니다.</li>
  <li>
    <code>column-reverse</code>: 요소들을 아래에서 위로 정렬합니다.
  </li>`,
    "",
  ],
  10: [
    `고양이들이 자기 컬러와 같은 생선으로 이동할 수 있도록 도와주세요.<code class="help">flex-direction</code class="help">과 <code>justify-content</code>를 모두 사용해야 합니다.`,
    "",
    "column-reverse 또는 row-reverse를 사용하면 요소들의 start와 end의 순서도 뒤바뀝니다.",
  ],
  11: [
    `고양이들이 자기 컬러와 같은 생선으로 이동할 수 있도록 도와주세요.<code class="help">flex-direction</code class="help">과 <code>justify-content</code>를 모두 사용해야 합니다.`,
    "",
    `Flex의 방향이 column일 경우 <code class="help">justify-content</code>의 방향이 세로로, <code class="help">align-items</code>의 방향이 가로로 바뀝니다.`,
  ],
  12: [
    `<code class="help">flex-direction</code class="help">과 <code>justify-content</code>를 이용해 고양이들이 자기 컬러와 같은 생선으로 이동할 수 있도록 도와주세요.`,
    "",
    "",
  ],
  13: [
    `<code class="help">flex-direction</code class="help">, <code>justify-content</code>, 그리고 <code class="help">align-items</code>를 이용해 고양이들이 자기 컬러와 같은 생선으로 이동할 수 있도록 도와주세요.`,
    "",
    "",
  ],
  14: [
    `가끔 컨테이너의 row나 column의 순서를 역으로 바꾸는 것만으로 충분하지 않을 때가 있습니다. 이러한 경우, <code class="help">order</code> 속성을 각 요소에 적용할 수 있습니다. order의 기본 값은 0이며, 양수나 음수로 바꿀 수 있습니다.`,
    "",
    `<code class="help">order</code>속성을 이용해 서로 같은 컬러와 매치되도록 고양이 순서를 조정해주세요.`,
  ],
  15: [
    `<code class="help">order</code>속성을 이용해 검은 고양이를 검은색 생선으로 옮겨주세요.`,
    "",
    "",
  ],
  16: [
    `<code class="help">align-self</code>는 개별 요소에 적용할 수 있는 또 다른 속성입니다. 이 속성은 <code class="help">align-items</code>가 사용하는 값들을 인자로 받으며, 그 값들은 지정한 요소에만 적용됩니다.`,
    "",
    "",
  ],
  17: [
    `<code class="help">order</code>와 <code class="help">align-self</code>를 이용해 고양이들을 자기 컬러와 같은 생선으로 이동할 수 있도록 도와주세요.`,
    "",
    "",
  ],
  18: [
    `고양이들이 배가 고팠나봐요! 한 줄로 다닥다닥 붙어있네요. 다음의 값들을 인자로 받는 <code class="help">flex-wrap</code>속성을 이용해 고양이들이 넓게 앉을 수 있도록 해주세요.`,
    `<li><code>nowrap</code>: 모든 요소들을 한 줄에 정렬합니다.</li>
  <li><code>wrap</code>: 요소들을 여러 줄에 걸쳐 정렬합니다.</li>
  <li><code>wrap-reverse</code>: 요소들을 여러 줄에 걸쳐 반대로 정렬합니다.</li>`,
    "",
  ],
  19: [
    `<code class="help">flex-direction</code>과 <code class="help">flex-wrap</code>를 이용해 고양이들이 3개의 column에 정렬할 수 있도록 도와주세요.`,
    "",
    "",
  ],
  20: [
    `<code class="help">flex-direction</code>과 <code class="help">flex-wrap</code>이 자주 같이 사용되기 때문에, <code class="help">flex-flow</code>가 이를 대신할 수 있습니다. 이 속성은 공백문자를 이용해 두 속성의 값들을 인자로 받습니다.<br><br>예를 들어, 요소들을 가로선 상의 여러줄에 걸쳐 정렬하기 위해 <code>flex-flow: row wrap</code>을 사용할 수 있습니다.`,
    "",
    `<code class="help">flex-flow</code>를 사용하여 이전 단계와 같은 문제를 풀어보세요.`,
  ],
  21: [
    `고양이들이 사방에 흩어져있고, 생선은 위쪽에 모여있습니다. <code class="help">align-content</code>속성을 이용해 여러 줄 사이의 간격을 지정할 수 있습니다. 이 속성은 다음의 값들을 인자로 받습니다.`,
    `<li><code>flex-start</code>: 컨테이너의 꼭대기에 정렬합니다.</li>
  <li><code>flex-end</code>: 컨테이너의 바닥에 정렬합니다.</li>
  <li><code>center</code>: 세로선 상의 가운데에 정렬합니다.</li>
  <li><code>space-between</code>: 양끝포함X, 줄들 사이에 동일한 간격을 둡니다.</li>
  <li><code>space-around</code>: 줄들 주위에 동일한 간격을 둡니다.</li>
  <li><code>space-evenly</code>: 양끝포함O, 줄들 사이에 동일한 간격을 둡니다.</li>
  <li><code>stretch</code>: 줄들을 컨테이너에 맞도록 늘립니다.</li>`,
    `이 속성은 사용하기 어려울 수 있습니다. <code>align-content</code>는 여러 줄들 사이의 간격을 지정하며, <code>align-items</code>는 컨테이너 안에서 어떻게 모든 요소들이 정렬하는지를 지정합니다. 한 줄만 있는 경우, <code>align-content</code>는 효과를 보이지 않습니다.`,
  ],
  22: [
    `가게 아저씨가 생선이 없어진 것을 알아차리고, 아래쪽으로 뺐습니다. <code class="help">align-content</code>를 이용해 고양이들이 다시 생선을 훔칠 수 있게 도와주세요.`,
    "",
    "",
  ],
  23: [
    `고양이들이 배터지게 생선을 먹어 기뻐합니다. 이제 낮잠을 잘 시간입니다. 마지막으로 생선 하나를 물고 집으로 돌아갈 수 있도록 도와주세요. <code class="help">flex-direction</code>과 <code class="help">align-content</code>를 이용하세요.`,
    "",
    "",
  ],
  24: [
    `지금까지 배운 CSS 속성들을 이용해 고양이들을 옮겨주세요.`,
    `<li><code>justify-content</code></li>
  <li><code>align-items</code></li>
  <li><code>flex-direction</code></li>
  <li><code>order</code></li>
  <li><code>align-self</code></li>
  <li><code>flex-wrap</code></li>
  <li><code>flex-flow</code></li>
  <li><code>align-content</code></li>`,
    "",
  ],
};

function toggleTooltip() {
  if (stagesWrapper.classList.contains("hide")) {
    stagesWrapper.classList.remove("hide");
  } else {
    stagesWrapper.classList.add("hide");
  }
}

function updateInstructionsByMarker(t) {
  for (var i = 0; i < 3; i++) {
    instructions[i].innerHTML = docs[t.dataset.level][i];
  }
}

function changeStage() {
  currentStage.innerHTML = this.dataset.level;
  updateInstructionsByMarker(this);
  toggleTooltip();
}

function updateInstructionsByArrowRight() {
  if (docs[parseInt(currentStage.innerHTML) + 1] != undefined) {
    currentStage.innerHTML = parseInt(currentStage.innerHTML) + 1;
    for (var i = 0; i < 3; i++) {
      instructions[i].innerHTML = docs[parseInt(currentStage.innerHTML)][i];
    }
  }
}

function updateInstructionsByArrowLeft() {
  if (currentStage.innerHTML != "1") {
    currentStage.innerHTML = parseInt(currentStage.innerHTML) - 1;
    for (var i = 0; i < 3; i++) {
      instructions[i].innerHTML = docs[`${currentStage.innerHTML}`][i];
    }
  }
}

function moveCats() {
  let code = editorCode.value.replace(/(\s*)/g, "");
  const justifyContent = [
    "flex-start",
    "flex-end",
    "center",
    "space-between",
    "space-around",
    "space-evenly",
  ];

  justifyContent.forEach((value) => {
    if (code.includes(`justify-content:${value}`)) {
      boardFirst.style.justifyContent = `${value}`;
    }

    if (code.includes("justify-content:flex-end")) {
      nextBtn.classList.add("animated-btn");
    } else {
      nextBtn.classList.remove("animated-btn");
    }
  });
}

function updateInstructionsByNextBtn() {
  if (nextBtn.classList.contains("animated-btn")) {
    updateInstructionsByArrowRight();
    nextBtn.classList.remove("animated-btn");
    boardFirst.style.justifyContent = "flex-start";
    editorCode.value = "";
    stageMarkers[parseInt(currentStage.innerHTML) - 2].classList.add(
      "completed"
    );
  }
}

function resetGame() {
  let resetTest = confirm(
    "게임을 다시 시작하시겠습니까? 지금까지 완료한 퀘스트는 사라지고 게임이 처음부터 다시 시작됩니다."
  );
  if (resetTest == true) {
    window.location.reload();
  }
}

stages__indicator.addEventListener("click", toggleTooltip);
stageMarkers.forEach(function (marker) {
  marker.addEventListener("click", changeStage);
});
arrowRight.addEventListener("click", updateInstructionsByArrowRight);
arrowLeft.addEventListener("click", updateInstructionsByArrowLeft);
editorCode.addEventListener("input", moveCats);
nextBtn.addEventListener("click", updateInstructionsByNextBtn);
resetBtn.addEventListener("click", resetGame);
