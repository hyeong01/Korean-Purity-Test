'use strict'

let searchParams = new URLSearchParams(window.location.search)
let param = searchParams.get('score')
var remark = ' '

if (param < 10) {
  remark = `당신의 순결도 점수는 ${100 - param}점 입니다. <br> 당신은 이 시대의 진정한 유교걸?`
} else if (param <20) {
  remark = `당신의 순결도 점수는 ${100 - param}점 입니다. <br> 상당히 높은 점수네요! 남자(여자)친구가 부럽습니다.`
} else if (param <30) {
  remark = `당신의 순결도 점수는 ${100 - param}점 입니다. <br> 그래도 아직은 평범합니다`
} else if (param <40) {
  remark = `당신의 순결도 점수는 ${100 - param}점 입니다. <br> 재밌는 삶은 사셨네요!`
} else if (param <50) {
  remark = `당신의 순결도 점수는 ${100 - param}점 입니다. <br> 이제 그만 즐기셔도 될 것 같습니다.`
} else if (param <60) {
  remark = `당신의 순결도 점수는 ${100 - param}점 입니다. <br> 도대체 어떤 삶을 사신 겁니까?`
} else if (param <70) {
  remark = `당신의 순결도 점수는 ${100 - param}점 입니다. <br> 오 제발 그만. 당신이 인간입니까?`
} else if (param <80) {
  remark = `당신의 순결도 점수는 ${100 - param}점 입니다. <br> 돌아올 수 없는 강을 건넜군요. 부디 평안하시길
  `
} else if (param <85) {
  remark = `당신의 순결도 점수는 ${100 - param}점 입니다. <br> 돌아올 수 없는 강을 두 번 건넜군요.`
} else if (param <90) {
  remark = `당신의 순결도 점수는 ${100 - param}점 입니다. <br> 이게 가능한 점수였나요? 진료를 추천드립니다`
} else if (param <93) {
  remark = `당신의 순결도 점수는 ${100 - param}점 입니다. <br> 제발 삶을 포기하지 말아주세요.`
} else if (param <95) {
  remark = `당신의 순결도 점수는 ${100 - param}점 입니다. <br> 순수악에 가까운 점수입니다.`
} else if (param <97) {
  remark = `당신의 순결도 점수는 ${100 - param}점 입니다. <br> 다른 의미의 천연기념물입니다.`
} else if (param <100) {
  remark = `당신의 순결도 점수는 ${100 - param}점 입니다. <br> 물러가라 악마야!`
} else {
  remark = `당신의 순결도 점수는 ${100 - param}점 입니다. <br> 버킷리스트 달성 축하드립니다.`
}

document.getElementById("score").innerHTML = remark