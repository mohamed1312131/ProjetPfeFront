import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { HomeComponent } from './ui/home/home.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { MarquesComponent } from './ui/marques/marques.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UsersComponent } from './user/users/users.component';

import {  FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FooterComponent } from './ui/footer/footer.component';
import { CarouselComponent } from './ui/carousel/carousel.component';
import { ProductComponent } from './user/product/product.component';
import { FavoritComponent } from './user/favorit/favorit.component';
import { BrouillonsComponent } from './user/brouillons/brouillons.component';
import { DonnerComponent } from './auth/donner/donner.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AddComponent } from './article/add/add.component';

import { AddDetailsComponent } from './article/add-details/add-details.component';
import { BoostComponent } from './article/boost/boost.component';
import { ArticleDetailsComponent } from './article/article-details/article-details.component';
import { PanierComponent } from './commande/panier/panier.component';

import { ToastrModule } from 'ngx-toastr';
import { ExternalUrlDirective } from './directive/external-url.directive';
import { Auth2HandlerComponent } from './auth2-handler/auth2-handler.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ChangerMdpComponent } from './changer-mdp/changer-mdp.component';
import {MatCardModule} from '@angular/material/card';
import { ArticlesComponent } from './ui/articles/articles.component';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SidemenuComponent } from './user/sidemenu/sidemenu.component';
import { ContentOutletComponent } from './user/content-outlet/content-outlet.component';
import { CommandeComponent } from './user/commande/commande.component';
import { VenteComponent } from './user/vente/vente.component';
import { EarningsComponent } from './user/earnings/earnings.component';
import { OffresComponent } from './user/offres/offres.component';
import { ParametresComponent } from './user/parametres/parametres.component';
import { ParametreContentComponent } from './user/parametre-content/parametre-content.component';
import { AjourComponent } from './user/ajour/ajour.component';
import { ParamsOutletComponent } from './user/params-outlet/params-outlet.component';
import { BoutiqueComponent } from './user/boutique/boutique.component';
import { UpdateDetailsComponent } from './user/update-details/update-details.component';
import { UpdateMdpComponent } from './user/update-mdp/update-mdp.component';
import { RatingModule } from 'ng-starrating';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BoosterArticleComponent } from './ui/booster-article/booster-article.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SimilaireComponent } from './article/similaire/similaire.component';
import { HttpInterceptorInterceptor } from './services/http/http-interceptor.interceptor';
import { LoaderInterceptor } from './services/http/loader.interceptor';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ResultComponent } from './ui/result/result.component';
import { ResultOutletComponent } from './ui/result-outlet/result-outlet.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HomeArticleComponent } from './ui/home-article/home-article.component';
import { ShipingComponent } from './commande/shiping/shiping.component';
import {MatBadgeModule} from '@angular/material/badge';
import { AccueilComponent } from './ui/accueil/accueil.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';

import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { UserUrlComponent } from './user/user-url/user-url.component';

import { DashboredComponent } from './admin/dashbored/dashbored.component';
import { DataTableComponent } from './admin/data-table/data-table.component';

import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { DashComponent } from './admin/dash/dash.component';

import {MatTableModule} from '@angular/material/table';
import { CommandesComponent } from './admin/commandes/commandes.component';
import { ReclamationComponent } from './admin/reclamation/reclamation.component';
import { CategorieComponent } from './admin/categorie/categorie.component';
import {DecimalPipe} from '@angular/common';
import { CatComponent } from './ui/cat/cat.component';
import { UploadImageComponent } from './user/upload-image/upload-image.component';
import { RecComponent } from './user/rec/rec.component';
import { PdfComponent } from './user/pdf/pdf.component';

import {MatExpansionModule} from '@angular/material/expansion';
import { SendMailComponent } from './admin/send-mail/send-mail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MarquesComponent,
    LoginComponent,
    SignupComponent,
    UsersComponent,
    FooterComponent,
    CarouselComponent,
    ProductComponent,
    FavoritComponent,
    BrouillonsComponent,
    DonnerComponent,
    AddComponent,
    AddDetailsComponent,
    BoostComponent,
    ArticleDetailsComponent,
    PanierComponent,
    ExternalUrlDirective,
    Auth2HandlerComponent,
    ForgetPasswordComponent,
    ChangerMdpComponent,
    ArticlesComponent,
    SidemenuComponent,
    ContentOutletComponent,
    CommandeComponent,
    VenteComponent,
    EarningsComponent,
    OffresComponent,
    ParametresComponent,
    ParametreContentComponent,
    AjourComponent,
    ParamsOutletComponent,
    BoutiqueComponent,
    UpdateDetailsComponent,
    UpdateMdpComponent,
    BoosterArticleComponent,
    SimilaireComponent,
    ResultComponent,
    ResultOutletComponent,
    HomeArticleComponent,
    ShipingComponent,
    AccueilComponent,
    UserUrlComponent,
    DashboredComponent,
    DataTableComponent,
    DashComponent,
    CommandesComponent,
    ReclamationComponent,
    CategorieComponent,
    CatComponent,
    UploadImageComponent,
    RecComponent,
    PdfComponent,
    SendMailComponent,













  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    ModalModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatMenuModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
	  ToastrModule.forRoot(),
    MatCheckboxModule,
    MatCardModule,
    InfiniteScrollModule,
    RatingModule,
    NgbModule,
    MatDialogModule,
    AutocompleteLibModule,
    IvyCarouselModule,
    MatBadgeModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatIconModule,
    MatAutocompleteModule,
    MatTableModule,
    MatButtonModule,
    LayoutModule,
    MatExpansionModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },DecimalPipe
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
