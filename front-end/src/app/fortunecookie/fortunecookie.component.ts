import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-fortunecookie',
  standalone: true,
  imports: [HttpClientModule, CommonModule, MatCardModule, MatIconModule],
  templateUrl: './fortunecookie.component.html',
  styleUrl: './fortunecookie.component.css'
})

export class FortunecookieComponent implements OnInit {
  constructor(private http: HttpClient) { }

  jsonData: any = { message: "" };

  ngOnInit(): void {
    this.fetchData();
  }

  reloadPage() {
    window.location.reload();
  }

  fetchData() {
    this.http.get<any>('http://localhost:5190/api/fortunecookie/').subscribe(data => {
      console.log(data);
      this.jsonData = data;
    });
  }
}
