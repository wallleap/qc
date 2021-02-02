(function(){
  let data = null
  let num = 0
  let question = null
  let op = null
  let url = '../qc/data/001qc.json'
  let request = new XMLHttpRequest()
  request.open('get', url)
  request.send(null)
  request.onload = function (){
    if(request.status == 200){
      data = JSON.parse(request.responseText)
      num = data.count 
      count.innerText = num
      for(let i = 0; i < num; i++){
        question = data.data[i]
        op = question.options
        app.innerHTML += '<div class="page"><h3 class="question">' + i + '、' + question.title + question.answer + '</h3>'
         + '<div class="options">' 
         + op.map((el) => {
           return '<p class="option">' + '<span class="code" ' + 'style="' + (el.value===1 ? 'background:rgb(0,122,0,.6)' : ' ') + '">' + el.code + '</span>' + el.content + '</p>'
         }).join('')
         /* + '<p class="option">' +  op[0] + question.options[0].content + '</p>' */
         + '</div></div>'
      }
      console.log(data)
    }
  }
})()
