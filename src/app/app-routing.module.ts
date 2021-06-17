import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddDetailsComponent } from './article/add-details/add-details.component';
import { AddComponent } from './article/add/add.component';
import { ArticleDetailsComponent } from './article/article-details/article-details.component';
import { DonnerComponent } from './auth/donner/donner.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { Auth2HandlerComponent } from './auth2-handler/auth2-handler.component';
import { ChangerMdpComponent } from './changer-mdp/changer-mdp.component';
import { PanierComponent } from './commande/panier/panier.component';
import { CommandeComponent } from './user/commande/commande.component';
import { HomeComponent } from './ui/home/home.component';
import { ContentOutletComponent } from './user/content-outlet/content-outlet.component';
import { FavoritComponent } from './user/favorit/favorit.component';
import { ProductComponent } from './user/product/product.component';
import { UsersComponent } from './user/users/users.component';
import { VenteComponent } from './user/vente/vente.component';
import { EarningsComponent } from './user/earnings/earnings.component';
import { OffresComponent } from './user/offres/offres.component';
import { ParametresComponent } from './user/parametres/parametres.component';
import { AjourComponent } from './user/ajour/ajour.component';
import { ParamsOutletComponent } from './user/params-outlet/params-outlet.component';
import { BoutiqueComponent } from './user/boutique/boutique.component';
import { UpdateDetailsComponent } from './user/update-details/update-details.component';
import { UpdateMdpComponent } from './user/update-mdp/update-mdp.component';

import { BoostComponent } from './article/boost/boost.component';
import { ResultComponent } from './ui/result/result.component';
import { ShipingComponent } from './commande/shiping/shiping.component';

import { DashboredComponent } from './admin/dashbored/dashbored.component';
import { DataTableComponent } from './admin/data-table/data-table.component';
import { DashComponent } from './admin/dash/dash.component';

import { CommandesComponent } from './admin/commandes/commandes.component';
import { ReclamationComponent } from './admin/reclamation/reclamation.component';
import { CatComponent } from './ui/cat/cat.component';
import { PdfComponent } from './user/pdf/pdf.component';
import { CategorieComponent } from './admin/categorie/categorie.component';


// import { DashbordComponent } from './dashbored/DashbordComponent';






const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  { path: 'profile/:id', component:UsersComponent ,children:[
          { path: '', component: ContentOutletComponent},
          { path: 'produit/:id', component: ProductComponent},
          { path: 'produit-cachee', component: ProductComponent},
          { path: 'favorit', component: FavoritComponent},
          { path: 'evaluation', component: ProductComponent},
        ]},

  { path: 'cordoner', component: DonnerComponent},
  { path: 'sell-now/:id', component: AddComponent},
  { path: 'sell-now/product-details', component: AddDetailsComponent},
  { path: 'article/:id', component: ArticleDetailsComponent},

  { path: 'oauth2/redirect', component: Auth2HandlerComponent },
  { path: 'resetPassword', component: ForgetPasswordComponent },
  { path: 'reset', component: ChangerMdpComponent },
  { path: 'commandes', component: CommandeComponent },
  { path: 'ventes', component: VenteComponent },
  { path: 'porte-monnaie', component: EarningsComponent },
  { path: 'offres', component: OffresComponent },
  { path: 'parametres', component: ParametresComponent ,children:[
        { path: '', component: ParamsOutletComponent},
        { path: 'settings', component: AjourComponent},
        { path: 'boutique', component: BoutiqueComponent},
        { path: 'mettre-ajour', component: UpdateDetailsComponent},
        { path: 'mettre-ajour', component: UpdateDetailsComponent},
        { path: 'updatePassword', component: UpdateMdpComponent},

      ]},
  { path: 'panier/:id', component: PanierComponent},
  { path: 'shiping/:id', component: ShipingComponent},
  { path: 'booster/:id', component: BoostComponent},
  { path: 'result/:data', component: ResultComponent },
  { path: 'cat/:name', component: CatComponent},
  {path:'admin', component:DashboredComponent,children:[
    { path: 'dash', component: DashComponent},
    { path: 'commandes', component: CommandesComponent},
    { path: 'reclamation', component: ReclamationComponent},
    { path: 'categorie', component: CategorieComponent},
    { path: 'users', component: DataTableComponent},

    ]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
