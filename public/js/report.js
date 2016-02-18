$('#newReportForm').ajaxForm({
    success: function(data) {
        if (data.msg == "success") {
        	daw.alert("保存成功",function(){
        		window.location.href="/reports";
        	})
        } else {
            daw.alert(data.tips);
        }
    }
});