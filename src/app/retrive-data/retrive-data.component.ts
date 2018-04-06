import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-retrive-data',
  templateUrl: './retrive-data.component.html',
  styleUrls: ['./retrive-data.component.css']
})
export class RetriveDataComponent implements OnInit {

  responseData = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void { 
    this.http.get('http://jsonplaceholder.typicode.com/posts').subscribe(data => {
      for (var key in data) {
        this.responseData.push(key, data[key]);
      }
      console.log(this.responseData);
    });
  }

}
