"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./ui/header/header.component");
var home_component_1 = require("./ui/home/home.component");
var animations_1 = require("@angular/platform-browser/animations");
var marques_component_1 = require("./ui/marques/marques.component");
var login_component_1 = require("./auth/login/login.component");
var signup_component_1 = require("./auth/signup/signup.component");
var users_component_1 = require("./user/users/users.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var modal_1 = require("ngx-bootstrap/modal");
var footer_component_1 = require("./ui/footer/footer.component");
var carousel_component_1 = require("./ui/carousel/carousel.component");
var product_component_1 = require("./user/product/product.component");
var favorit_component_1 = require("./user/favorit/favorit.component");
var brouillons_component_1 = require("./user/brouillons/brouillons.component");
var donner_component_1 = require("./auth/donner/donner.component");
var stepper_1 = require("@angular/material/stepper");
var form_field_1 = require("@angular/material/form-field");
var forms_2 = require("@angular/forms");
var input_1 = require("@angular/material/input");
var datepicker_1 = require("@angular/material/datepicker");
var core_2 = require("@angular/material/core");
var toolbar_1 = require("@angular/material/toolbar");
var menu_1 = require("@angular/material/menu");
var progress_bar_1 = require("@angular/material/progress-bar");
var grid_list_1 = require("@angular/material/grid-list");
var sidenav_1 = require("@angular/material/sidenav");
var list_1 = require("@angular/material/list");
var add_component_1 = require("./article/add/add.component");
var add_details_component_1 = require("./article/add-details/add-details.component");
var boost_component_1 = require("./article/boost/boost.component");
var article_details_component_1 = require("./article/article-details/article-details.component");
var panier_component_1 = require("./commande/panier/panier.component");
var ngx_toastr_1 = require("ngx-toastr");
var external_url_directive_1 = require("./directive/external-url.directive");
var auth2_handler_component_1 = require("./auth2-handler/auth2-handler.component");
var forget_password_component_1 = require("./auth/forget-password/forget-password.component");
var checkbox_1 = require("@angular/material/checkbox");
var changer_mdp_component_1 = require("./changer-mdp/changer-mdp.component");
var card_1 = require("@angular/material/card");
var articles_component_1 = require("./ui/articles/articles.component");
var ngx_infinite_scroll_1 = require("ngx-infinite-scroll");
var sidemenu_component_1 = require("./user/sidemenu/sidemenu.component");
var content_outlet_component_1 = require("./user/content-outlet/content-outlet.component");
var commande_component_1 = require("./user/commande/commande.component");
var vente_component_1 = require("./user/vente/vente.component");
var earnings_component_1 = require("./user/earnings/earnings.component");
var offres_component_1 = require("./user/offres/offres.component");
var parametres_component_1 = require("./user/parametres/parametres.component");
var parametre_content_component_1 = require("./user/parametre-content/parametre-content.component");
var ajour_component_1 = require("./user/ajour/ajour.component");
var params_outlet_component_1 = require("./user/params-outlet/params-outlet.component");
var boutique_component_1 = require("./user/boutique/boutique.component");
var update_details_component_1 = require("./user/update-details/update-details.component");
var update_mdp_component_1 = require("./user/update-mdp/update-mdp.component");
var ng_starrating_1 = require("ng-starrating");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var booster_article_component_1 = require("./ui/booster-article/booster-article.component");
var dialog_1 = require("@angular/material/dialog");
var similaire_component_1 = require("./article/similaire/similaire.component");
var http_interceptor_interceptor_1 = require("./services/http/http-interceptor.interceptor");
var loader_interceptor_1 = require("./services/http/loader.interceptor");
var angular_ng_autocomplete_1 = require("angular-ng-autocomplete");
var result_component_1 = require("./ui/result/result.component");
var result_outlet_component_1 = require("./ui/result-outlet/result-outlet.component");
var angular_responsive_carousel_1 = require("angular-responsive-carousel");
var home_article_component_1 = require("./ui/home-article/home-article.component");
var shiping_component_1 = require("./commande/shiping/shiping.component");
var badge_1 = require("@angular/material/badge");
var accueil_component_1 = require("./ui/accueil/accueil.component");
var paginator_1 = require("@angular/material/paginator");
var tooltip_1 = require("@angular/material/tooltip");
var icon_1 = require("@angular/material/icon");
var autocomplete_1 = require("@angular/material/autocomplete");
var user_url_component_1 = require("./user/user-url/user-url.component");
var dashbored_component_1 = require("./admin/dashbored/dashbored.component");
var data_table_component_1 = require("./admin/data-table/data-table.component");
var ngx_pagination_1 = require("ngx-pagination"); // <-- import the module
var button_1 = require("@angular/material/button");
var layout_1 = require("@angular/cdk/layout");
var dash_component_1 = require("./admin/dash/dash.component");
var table_1 = require("@angular/material/table");
var commandes_component_1 = require("./admin/commandes/commandes.component");
var reclamation_component_1 = require("./admin/reclamation/reclamation.component");
var categorie_component_1 = require("./admin/categorie/categorie.component");
var common_1 = require("@angular/common");
var cat_component_1 = require("./ui/cat/cat.component");
var upload_image_component_1 = require("./user/upload-image/upload-image.component");
var rec_component_1 = require("./user/rec/rec.component");
var pdf_component_1 = require("./user/pdf/pdf.component");
var expansion_1 = require("@angular/material/expansion");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                home_component_1.HomeComponent,
                marques_component_1.MarquesComponent,
                login_component_1.LoginComponent,
                signup_component_1.SignupComponent,
                users_component_1.UsersComponent,
                footer_component_1.FooterComponent,
                carousel_component_1.CarouselComponent,
                product_component_1.ProductComponent,
                favorit_component_1.FavoritComponent,
                brouillons_component_1.BrouillonsComponent,
                donner_component_1.DonnerComponent,
                add_component_1.AddComponent,
                add_details_component_1.AddDetailsComponent,
                boost_component_1.BoostComponent,
                article_details_component_1.ArticleDetailsComponent,
                panier_component_1.PanierComponent,
                external_url_directive_1.ExternalUrlDirective,
                auth2_handler_component_1.Auth2HandlerComponent,
                forget_password_component_1.ForgetPasswordComponent,
                changer_mdp_component_1.ChangerMdpComponent,
                articles_component_1.ArticlesComponent,
                sidemenu_component_1.SidemenuComponent,
                content_outlet_component_1.ContentOutletComponent,
                commande_component_1.CommandeComponent,
                vente_component_1.VenteComponent,
                earnings_component_1.EarningsComponent,
                offres_component_1.OffresComponent,
                parametres_component_1.ParametresComponent,
                parametre_content_component_1.ParametreContentComponent,
                ajour_component_1.AjourComponent,
                params_outlet_component_1.ParamsOutletComponent,
                boutique_component_1.BoutiqueComponent,
                update_details_component_1.UpdateDetailsComponent,
                update_mdp_component_1.UpdateMdpComponent,
                booster_article_component_1.BoosterArticleComponent,
                similaire_component_1.SimilaireComponent,
                result_component_1.ResultComponent,
                result_outlet_component_1.ResultOutletComponent,
                home_article_component_1.HomeArticleComponent,
                shiping_component_1.ShipingComponent,
                accueil_component_1.AccueilComponent,
                user_url_component_1.UserUrlComponent,
                dashbored_component_1.DashboredComponent,
                data_table_component_1.DataTableComponent,
                dash_component_1.DashComponent,
                commandes_component_1.CommandesComponent,
                reclamation_component_1.ReclamationComponent,
                categorie_component_1.CategorieComponent,
                cat_component_1.CatComponent,
                upload_image_component_1.UploadImageComponent,
                rec_component_1.RecComponent,
                pdf_component_1.PdfComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                ngx_pagination_1.NgxPaginationModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                modal_1.ModalModule,
                stepper_1.MatStepperModule,
                forms_2.ReactiveFormsModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                datepicker_1.MatDatepickerModule,
                core_2.MatNativeDateModule,
                form_field_1.MatFormFieldModule,
                toolbar_1.MatToolbarModule,
                progress_bar_1.MatProgressBarModule,
                menu_1.MatMenuModule,
                grid_list_1.MatGridListModule,
                sidenav_1.MatSidenavModule,
                list_1.MatListModule,
                animations_1.BrowserAnimationsModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                checkbox_1.MatCheckboxModule,
                card_1.MatCardModule,
                ngx_infinite_scroll_1.InfiniteScrollModule,
                ng_starrating_1.RatingModule,
                ng_bootstrap_1.NgbModule,
                dialog_1.MatDialogModule,
                angular_ng_autocomplete_1.AutocompleteLibModule,
                angular_responsive_carousel_1.IvyCarouselModule,
                badge_1.MatBadgeModule,
                paginator_1.MatPaginatorModule,
                tooltip_1.MatTooltipModule,
                icon_1.MatIconModule,
                autocomplete_1.MatAutocompleteModule,
                table_1.MatTableModule,
                button_1.MatButtonModule,
                layout_1.LayoutModule,
                expansion_1.MatExpansionModule
            ],
            providers: [{ provide: http_1.HTTP_INTERCEPTORS, useClass: http_interceptor_interceptor_1.HttpInterceptorInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: loader_interceptor_1.LoaderInterceptor, multi: true }, common_1.DecimalPipe
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
