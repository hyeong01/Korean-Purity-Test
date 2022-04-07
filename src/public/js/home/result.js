'use strict'

let searchParams = new URLSearchParams(window.location.search)
let param = searchParams.get('score')

if (param < 10) {
  remark = `당신의 순결도 점수는 ${100 - param}점 입니다. <br> 스..스고이!`
} else if (param <20) {
  remark = `당신의 순결도 점수는 ${100 - param}점 입니다. <br> 아직은 괜찮은 점수?`
}
document.getElementById("score").innerHTML = remark