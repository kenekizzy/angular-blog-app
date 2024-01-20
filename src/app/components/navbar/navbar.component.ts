import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categoryData: Array<any> = []
  constructor (private categoryService: CategoryService) {}

  ngOnInit(): void {
     this.categoryService.getCategories().subscribe(data => {
      this.categoryData = data
    })
  }
}
