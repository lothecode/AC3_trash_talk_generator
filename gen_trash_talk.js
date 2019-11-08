// generate random index function
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}



function genTrashTalk(role, target) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  let trash_talk = ''

  if (role === undefined) {
    trash_talk = '請選擇一個角色產生幹話'
  } else {
    trash_talk = `身為一個<b style="color:black">${target}</b>${sample(task[role])}${sample(phrase)}吧!!`
  }
  return trash_talk
}

module.exports = genTrashTalk