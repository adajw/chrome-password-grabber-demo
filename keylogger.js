var _ = {
    passwordBox: $('input[name=LOGIN_PASSWD]'),
    storePassword: function() {
        localStorage.setItem('password', $(_.passwordBox).val());
    }
};
$(_.passwordBox).keyup(_.storePassword);