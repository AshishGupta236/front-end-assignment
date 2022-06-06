import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-component',
  templateUrl: './your-component.component.html',
  styleUrls: ['./your-component.component.scss']
})
export class YourComponentComponent implements OnInit {
  results: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get("../assets/your.json").subscribe(data => {
      this.results = data;
    });
  }

}
