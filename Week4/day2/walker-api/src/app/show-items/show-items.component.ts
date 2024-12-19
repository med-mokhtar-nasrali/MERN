import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-show-items',
  imports: [CommonModule,FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule,MatCardModule, MatSelectModule],
  templateUrl: './show-items.component.html',
  styleUrl: './show-items.component.css'
})
export class ShowItemsComponent {
  id!: number;
  type!: string;
  items: any;
  selected="Select"

  constructor(private apiService: ApiService){}

  onSubmit(): void {
    this.apiService.getOne(this.id,this.type).subscribe({
      next: (data) =>{
        console.log(data);
        
        this.items = data;
      },
      error:(err)=> {
        console.log(err);
      }
    })
  }
}
