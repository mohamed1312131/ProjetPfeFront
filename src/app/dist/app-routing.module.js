"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var add_details_component_1 = require("./article/add-details/add-details.component");
var add_component_1 = require("./article/add/add.component");
var article_details_component_1 = require("./article/article-details/article-details.component");
var donner_component_1 = require("./auth/donner/donner.component");
var forget_password_component_1 = require("./auth/forget-password/forget-password.component");
var login_component_1 = require("./auth/login/login.component");
var signup_component_1 = require("./auth/signup/signup.component");
var auth2_handler_component_1 = require("./auth2-handler/auth2-handler.component");
var changer_mdp_component_1 = require("./changer-mdp/changer-mdp.component");
var panier_component_1 = require("./commande/panier/panier.component");
var commande_component_1 = require("./user/commande/commande.component");
var home_component_1 = require("./ui/home/home.component");
var content_outlet_component_1 = require("./user/content-outlet/content-outlet.component");
var favorit_component_1 = require("./user/favorit/favorit.component");
var product_component_1 = require("./user/product/product.component");
var users_component_1 = require("./user/users/users.component");
var vente_component_1 = require("./user/vente/vente.component");
var earnings_component_1 = require("./user/earnings/earnings.component");
var offres_component_1 = require("./user/offres/offres.component");
var parametres_component_1 = require("./user/parametres/parametres.component");
var ajour_component_1 = require("./user/ajour/ajour.component");
var params_outlet_component_1 = require("./user/params-outlet/params-outlet.component");
var boutique_component_1 = require("./user/boutique/boutique.component");
var update_details_component_1 = require("./user/update-details/update-details.component");
var update_mdp_component_1 = require("./user/update-mdp/update-mdp.component");
var boost_component_1 = require("./article/boost/boost.component");
var result_component_1 = require("./ui/result/result.component");
var shiping_component_1 = require("./commande/shiping/shiping.component");
var dashbored_component_1 = require("./admin/dashbored/dashbored.component");
var data_table_component_1 = require("./admin/data-table/data-table.component");
var dash_component_1 = require("./admin/dash/dash.component");
var commandes_component_1 = require("./admin/commandes/commandes.component");
var reclamation_component_1 = require("./admin/reclamation/reclamation.component");
var cat_component_1 = require("./ui/cat/cat.component");
var categorie_component_1 = require("./admin/categorie/categorie.component");
// import { DashbordComponent } from './dashbored/DashbordComponent';
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'profile/:id', component: users_component_1.UsersComponent, children: [
            { path: '', component: content_outlet_component_1.ContentOutletComponent },
            { path: 'produit/:id', component: product_component_1.ProductComponent },
            { path: 'produit-cachee', component: product_component_1.ProductComponent },
            { path: 'favorit', component: favorit_component_1.FavoritComponent },
            { path: 'evaluation', component: product_component_1.ProductComponent },
        ] },
    { path: 'cordoner', component: donner_component_1.DonnerComponent },
    { path: 'sell-now/:id', component: add_component_1.AddComponent },
    { path: 'sell-now/product-details', component: add_details_component_1.AddDetailsComponent },
    { path: 'article/:id', component: article_details_component_1.ArticleDetailsComponent },
    { path: 'oauth2/redirect', component: auth2_handler_component_1.Auth2HandlerComponent },
    { path: 'resetPassword', component: forget_password_component_1.ForgetPasswordComponent },
    { path: 'reset', component: changer_mdp_component_1.ChangerMdpComponent },
    { path: 'commandes', component: commande_component_1.CommandeComponent },
    { path: 'ventes', component: vente_component_1.VenteComponent },
    { path: 'porte-monnaie', component: earnings_component_1.EarningsComponent },
    { path: 'offres', component: offres_component_1.OffresComponent },
    { path: 'parametres', component: parametres_component_1.ParametresComponent, children: [
            { path: '', component: params_outlet_component_1.ParamsOutletComponent },
            { path: 'settings', component: ajour_component_1.AjourComponent },
            { path: 'boutique', component: boutique_component_1.BoutiqueComponent },
            { path: 'mettre-ajour', component: update_details_component_1.UpdateDetailsComponent },
            { path: 'mettre-ajour', component: update_details_component_1.UpdateDetailsComponent },
            { path: 'updatePassword', component: update_mdp_component_1.UpdateMdpComponent },
        ] },
    { path: 'panier/:id', component: panier_component_1.PanierComponent },
    { path: 'shiping/:id', component: shiping_component_1.ShipingComponent },
    { path: 'booster/:id', component: boost_component_1.BoostComponent },
    { path: 'result/:data', component: result_component_1.ResultComponent },
    { path: 'cat/:name', component: cat_component_1.CatComponent },
    { path: 'admin', component: dashbored_component_1.DashboredComponent, children: [
            { path: 'dash', component: dash_component_1.DashComponent },
            { path: 'commandes', component: commandes_component_1.CommandesComponent },
            { path: 'reclamation', component: reclamation_component_1.ReclamationComponent },
            { path: 'categorie', component: categorie_component_1.CategorieComponent },
            { path: 'users', component: data_table_component_1.DataTableComponent },
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
