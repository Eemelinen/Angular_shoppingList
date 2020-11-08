import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Test recipe description for an incoming delicious recipe.', 'https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135_1280.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
