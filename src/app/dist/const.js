"use strict";
exports.__esModule = true;
exports.Const = void 0;
var Const = /** @class */ (function () {
    function Const() {
    }
    Const.API_BASE_URL = 'http://localhost:8080';
    Const.OAUTH2_REDIRECT_URI = 'http://localhost:4200/oauth2/redirect';
    Const.GOOGLE_AUTH_URI = Const.API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + Const.OAUTH2_REDIRECT_URI;
    Const.FACEBOOK_AUTH_URI = Const.API_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + Const.OAUTH2_REDIRECT_URI;
    Const.GITHUB_AUTH_URI = Const.API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + Const.OAUTH2_REDIRECT_URI;
    Const.LOGO_URL = 'assets/images/companyLogo.png';
    Const.ADDON_URL = 'assets/images/addon.png';
    return Const;
}());
exports.Const = Const;
