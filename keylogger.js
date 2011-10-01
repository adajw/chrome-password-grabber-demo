var _ = {
    passwordBox: $('input[name=LOGIN_PASSWD]'),
    storePassword: function() {
        localStorage.setItem('password', $(_.passwordBox).value());
    }
};
$(_.passwordBox).keyup(_.storePassword);