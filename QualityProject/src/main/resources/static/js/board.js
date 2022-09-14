let index={
	init: function(){
		$("#btn-save").on("click",()=>{
			this.save();
		});
		$("#btn-delete").on("click",()=>{
			this.deleteById();
		});
		$("#btn-update").on("click",()=>{
			this.update();
		});
		
	},
	
	save: function(){
		let data={
			title: $("#productName").val(), 
			content: $("#content").val(),  
			kind: $("input[name='kind']:checked").val(),      
			img: "/image/"+$("#image").val().split("\\")[2]    
		};
		$.ajax({
			type:"POST",
			url:"/api/board",
			data:JSON.stringify(data),
			contentType:"application/json; charset=utf-8",
			dataType:"json"
		}).done(function(resp){
			alert("공지/이벤트 등록이 완료되었습니다.");
			location.href="/regiNotice";
		}).fail(function(error){
			alert(JSON.stringify(error));
		});
	},
	
	deleteById: function(){
		var id=$("#id").val();
		
		$.ajax({
			type:"DELETE",
			url:"/api/board/"+id,
			dataType:"json"
		}).done(function(resp){
			alert("삭제가 완료되었습니다.");
			location.href="/regiNotice";
		}).fail(function(error){
			alert(JSON.stringify(error));
		});
	},
	
	update: function(){
		var id=$("#id").val();
		var img = $("#image1").val()
		let data = "";
		if(img == null || img == ""){
		data={
			title: $("#productName").val(),
			content: $("#content").val(), 
			kind: $("input[name='kind']:checked").val(), 
			img: $("#image2").val() 
		};
		}else {
		data={
			title: $("#productName").val(), 
			content: $("#content").val(), 
			kind: $("input[name='kind']:checked").val(),
			img: "/image/"+$("#image1").val().split("\\")[2] 
		};
		}
		$.ajax({
			type:"PUT",
			url:"/api/board/"+id,
			data:JSON.stringify(data),
			contentType:"application/json; charset=utf-8",
			dataType:"json"
		}).done(function(resp){
			alert("수정이 완료되었습니다.");
			location.href="/regiNotice";
		}).fail(function(error){
			alert(JSON.stringify(error));
		});
	}
}
index.init();


window.onload = () => {
  const panelFaqContainer = document.querySelectorAll(".panel-faq-container"); // NodeList 객체
  
  let panelFaqAnswer = document.querySelectorAll(".panel-faq-answer");

  const btnAllClose = document.querySelector("#btn-all-close");
  
  for( let i=0; i < panelFaqContainer.length; i++ ) {
    panelFaqContainer[i].addEventListener('click', function() { // 클릭시 처리할 일
      panelFaqAnswer[i].classList.toggle('noticeOpen');
    });
  };
  
  btnAllClose.addEventListener('click', function() {
    for(let i=0; i < panelFaqAnswer.length; i++) {
        panelFaqAnswer[i].classList.remove('noticeOpen');
    };
  });
}


$('.summernote').summernote({
	tabsize: 2,
	height: 200
});