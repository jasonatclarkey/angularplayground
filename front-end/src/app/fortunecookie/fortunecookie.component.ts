import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-fortunecookie',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './fortunecookie.component.html',
  styleUrl: './fortunecookie.component.css'
})

export class FortunecookieComponent implements OnInit {
  constructor(private http: HttpClient) { }


  jsonData: string = "";

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get<any>('http://localhost:5190/api/fortunecookie/').subscribe(data => {
      console.log(data);
      this.jsonData = JSON.stringify(data);

    });
  }
}
