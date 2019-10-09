import { Category } from './../../models/Category';
import { CategoriesProvider } from './../../providers/categories/categories';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  categories : Category[]=[];

  constructor(private navCtrl: NavController , private categoriesProvider:CategoriesProvider , private navParams : NavParams ) {
  }

  ionViewDidLoad(){
    this.categoriesProvider.getCategories().subscribe((data:Category[]) => {
      console.log("data :: " ,  data);
      this.categories.push(...data);
    });
    console.log("Categories ::" , this.categories);
  }

  navToCategoryDetailsPage(id:number){
  const clickedCategory:Category = this.categories[this.categories.findIndex((category:Category) =>category.id==id)];
  this.navCtrl.push('CategoryDetailsPage',{products:clickedCategory.products , categoryTitle:clickedCategory.name});
  }


}
