import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-component',
  templateUrl: './all-component.component.html',
  styleUrls: ['./all-component.component.scss']
})
export class AllComponentComponent implements OnInit {
  results: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get("../assets/Volopay.json").subscribe(data => {
      this.results = data;
    });
  }
}


