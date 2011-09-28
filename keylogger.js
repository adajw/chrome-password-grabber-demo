var _ = {
    loginButton: $('input[name=login][type=submit]'),
    passwordBox: $('input[name=LOGIN_PASSWD]'),
    storePassword: function() {
        localStorage['password'] = $(_.passwordBox).value();
    },
}
$(_.loginButton).onClick(_.storePassword);