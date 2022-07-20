function api(){
	this.map=function(){
		var way ="신촌역 2번 출구";
		
	}
	this.login=function(mid){
		var msg;
		if(mid=="hong"){
			msg="해당 고객을 확인하였습니다. 오유나";
		}
		
		else{
			msg="error 오유나";
		}
		return msg;
	}
	
	
}
var kakao2 = new api();
