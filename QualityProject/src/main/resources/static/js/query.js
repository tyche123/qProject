let index={
	init: function(){
		$("#btn-save").on("click",()=>{
			this.save();
		});
		$("#btn-update").on("click",()=>{
			this.update();
		});
		$("#btn-answer").on("click",()=>{
			this.answer();
		});
		
	},
	
	save: function(){
		let data={
			title: $("#title").val(),
			content: $("#content").val()
		};
		$.ajax({
			type:"POST",
			url:"/api/query",
			data:JSON.stringify(data),
			contentType:"application/json; charset=utf-8",
			dataType:"json"
		}).done(function(resp){
			alert("문의가 완료되었습니다.");
			location.href="/queryPage";
		}).fail(function(error){
			alert(JSON.stringify(error));
		});
	},
	
	answer: function(){
		var id=$("#id").val();
		let data={
			answer: $("#answer").val()
		};
		$.ajax({
			type:"PUT",
			url:"/api/query2/"+id,
			data:JSON.stringify(data),
			contentType:"application/json; charset=utf-8",
			dataType:"json"
		}).done(function(resp){
			alert("답변이 등록되었습니다.");
			location.href="/queryReply";
		}).fail(function(error){
			alert(JSON.stringify(error));
		});
	},
	
	update: function(){
		var id=$("#id").val();
		let data={
			title: $("#title").val(),
			content: $("#content").val()
		};
		$.ajax({
			type:"PUT",
			url:"/api/query1/"+id,
			data:JSON.stringify(data),
			contentType:"application/json; charset=utf-8",
			dataType:"json"
		}).done(function(resp){
			alert("수정이 완료되었습니다.");
			location.href="/queryPage";
		}).fail(function(error){
			alert(JSON.stringify(error));
		});
	}
}
index.init();


$('.summernote').summernote({
	tabsize:2,
	height:300
});