import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from '../../models/Product';

/**
 * Generated class for the CategoryDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category-details',
  templateUrl: 'category-details.html',
})
export class CategoryDetailsPage {

  products : Product[]= [];
  categoryTitle:string;
  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.products= this.navParams.get('products');
    this.categoryTitle= this.navParams.get('categoryTitle');
    console.log("products :: ", this.products);
  }

  navToProductDetailsPage(id:number){
    const productPressed:Product=this.products[this.products.findIndex((product:Product) =>product.id==id)]
    this.navCtrl.push('ProductDetailsPage',{productTitle:productPressed.name})
  }

}
