$('#newReportForm').ajaxForm({
    success: function(data) {
        if (data.msg == "success") {
        } else {
            daw.alert(data.tips);
        }
    }
});