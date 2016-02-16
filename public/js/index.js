$('#loginForm').ajaxForm({
    success: function(data) {
        if (data.msg == "success") {
            daw.alert(data.tips, function() {
                window.location.href = '/';
            });
        } else {
            daw.alert(data.tips);
        }
    }
});

$('#registerForm').ajaxForm({
    success: function(data) {
        if (data.msg == "success") {
            daw.alert(data.tips, function() {
                window.location.href = '/';
            });
        } else {
            daw.alert(data.tips);
        }
    }
});
