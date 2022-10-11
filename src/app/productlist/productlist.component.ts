import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  constructor(private newapi:ApiService) { 
    this.FetchData()
  }

FetchData=()=>{
  this.newapi.viewProduct().subscribe(
    (data)=>{
      this.productsData=data
    }
  )
}

productsData:any = []

  ngOnInit(): void {
  }

}
