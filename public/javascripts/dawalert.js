daw = {
    'style': 'info',
    'inited': false,
    'title': "提示",
    alert: function(message, fun) {
        if (!this.inited || !$('#dawalert')) {
            this.init();
        }
        var $alertwindow = $('#dawalert');
        $alertwindow.find('.daw-title').html(this.title);
        $alertwindow.find('.js_dawicon').addClass('dawicon-warning').removeClass('dawicon-info')
        $alertwindow.find('.dawmsgbody').html(message);
        $alertwindow.removeClass('dawhidden');
        $('.dawbackdrop').removeClass('dawhidden');
        $alertwindow.find('.dawmsgfooter').removeClass('dawhidden').find('.dawclosebtn').addClass('dawhidden');
        $alertwindow.find('.dawconfirmbtn').removeClass('dawhidden');
        $('body').addClass('dawalert-open');
        $alertwindow.on('click.dawalert', '.dawconfirmbtn', function() {
            daw.close()
        });
        $alertwindow.on('click.dawalert', '.dawclosebtn', function() {
            daw._close()
        });
        if (typeof fun === 'function') {
            this.afterclosehandler = fun;
        } else {
            this.afterclosehandler = function() {};
        }
    },
    confirm: function(message, fun) {
        if (!this.inited || !$('#dawalert')) {
            this.init();
        }
        var $alertwindow = $('#dawalert');
        $alertwindow.find('.daw-title').html(this.title);
        $alertwindow.find('.js_dawicon').removeClass('dawicon-warning').addClass('dawicon-info')
        $alertwindow.find('.dawmsgbody').html(message);
        $alertwindow.find('.dawconfirmbtn').removeClass('dawhidden');
        $alertwindow.removeClass('dawhidden');
        $('.dawbackdrop').removeClass('dawhidden');
        $alertwindow.find('.dawmsgfooter').removeClass('dawhidden').find('.dawclosebtn').removeClass('dawhidden');
        $('body').addClass('dawalert-open');
        $alertwindow.on('click.dawalert', '.dawconfirmbtn', function() {
            daw.close()
        });
        $alertwindow.on('click.dawalert', '.dawclosebtn', function() {
            daw._close()
        });
        if (typeof fun === 'function') {
            this.afterclosehandler = fun;
        } else {
            this.afterclosehandler = function() {};
        }
    },
    info: function(message, time) {
        if (!this.inited || !$('#dawalert')) {
            this.init();
        }
        var $alertwindow = $('#dawalert');
        $alertwindow.find('.daw-title').html(this.title);
        $alertwindow.find('.js_dawicon').removeClass('dawicon-warning').addClass('dawicon-info')
        $alertwindow.find('.dawmsgbody').html(message);
        $alertwindow.removeClass('dawhidden');
        $('.dawbackdrop').removeClass('dawhidden');
        $alertwindow.find('.dawmsgfooter').addClass('dawhidden');
        $('body').addClass('dawalert-open');
        $alertwindow.on('click.dawalert', '.dawclosebtn', function() {
            daw._close()
        });
        if (!isNaN(time)) {
            setTimeout(function() {
                daw._close();
            }, time);
        }
    },
    init: function() {
        this.inited = true;
        var alertmodel = '<div id="dawalert"><div class="dawmessage"><div class="dawmsgheader"><i class="daw-icon js_dawicon"></i><span class="daw-title">警告框</span><i class="daw-icon dawicon-close dawclosebtn"></i></div><div class="dawmsgbody"></div><div class="dawmsgfooter"><input type="button" class="dawbtn dawconfirmbtn" value="确认"><input type="button" class="dawbtn dawclosebtn" value="取消"> </div></div></div>'
        $('body').append(alertmodel).append('<div class="dawbackdrop"></div>');
    },
    close: function() {
        var $alertwindow = $('#dawalert');
        $alertwindow.addClass('dawhidden').off('click.dawalert');
        $('.dawbackdrop').addClass('dawhidden');
        $('body').removeClass('dawalert-open');
        this.afterclosehandler();
    },
    _close: function() {
        var $alertwindow = $('#dawalert');
        $alertwindow.addClass('dawhidden').off('click.dawalert');
        $('.dawbackdrop').addClass('dawhidden');
        $('body').removeClass('dawalert-open');
    },
    afterclosehandler: function() {

    }
}
