import { Product } from "./Product";

export interface Category{
  id:number;
  name:string;
  category_img:string;
  products:Product[];
}
