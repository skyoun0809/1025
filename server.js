const express = require('express');
//설치한 express 를 불러오기
const app = express();
//새로운 객체를 만들어서 라이브러리 넣어주기

app.use(express.static(__dirname + '/public'))


app.listen(8080, () => {
    console.log('listening on 8080')
})

app.get('/hello',(요청, 응답)=> {

    응답.sendFile(__dirname + '/index.html')
}) 

// app.get('/hello',(요청, 응답)=> {
//     응답.send('{message : ‘hello world!’}')
// })

//=> 서버를 띄우기 위한 기본 셋팅 (express 라이브러리)

