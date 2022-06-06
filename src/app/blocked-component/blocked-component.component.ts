import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blocked-component',
  templateUrl: './blocked-component.component.html',
  styleUrls: ['./blocked-component.component.scss']
})
export class BlockedComponentComponent implements OnInit {
  results1: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get("../assets/blocked.json").subscribe(data => {
      this.results1 = data;
    });
  }

}
