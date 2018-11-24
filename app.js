var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/keyboard', function(req, res){
  console.log('get');
 
 var data = {
    'type' : 'buttons',
    'buttons' : ['월','화','수','목','금']
  };

  res.json(data);
});

http.createServer(app).listen(80, function(){
  console.log('server start');
});

app.post('/message', function(req, res){
	var msg = req.body.content;
	console.log('전달받은 메시지:'+msg);
	
	var send = {};		// 응답할 데이터
	switch(msg){
		case '월':
		send = {
		'message':{
			'text': '햅쌀밥\n대파육계장\n파파야함박스테이크\n닭볶음탕\n철판두부구이\n메츄리알어묵볶음\n쟁반막국수'
		}
		}
		break;
		case '화':
				send = {
		'message':{
			'text':'햅쌀밥,참치김치찌개\n돼지고기주물럭\n생선까스/소스\n옛날짜장면\n비엔나피망볶음\n쪽파무생채'
		}	
		}	
		break;
		case '수':
					send = {
		'message':{
			'text':'햄쌀밥\n스끼야끼\n수제닭강정\n파기름오징어두루치기\n한식잡채\n에그샌드위치\n숙주미나리나물\n포기김치'
		}	
		}	
	
		break;
		case '목':
							send = {
		'message':{
			'text':'햄쌀밥\n팽이된장찌개\n등심돈까스\n매콤등뼈찜\n고구마카레\n군만두\n시금치무침'
		}	
		}	

		break;
		case '금':
							send = {
		'message':{
			'text':'김치볶음밥\n모듬어묵탕\n수제케이준치킨\n제육간장불고기\n미트볼케첩조림\n조미구이김\n열무나물'
		}	
		}	

		break;
		
		default:
							send = {
		'message':{
			'text':'알 수 없는 명령'
		}	
		}	

		break;
	}
	res.json(send);
});