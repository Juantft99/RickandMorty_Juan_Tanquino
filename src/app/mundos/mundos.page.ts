import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-mundos',
  templateUrl: './mundos.page.html',
  styleUrls: ['./mundos.page.scss'],
})
export class MundosPage implements OnInit {
  mundosId:String
  characters:String[];


  constructor(
    private ActivatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.mundosId= this.ActivatedRoute.snapshot.paramMap.get('id')
    this.http.get<any>('https://rickandmortyapi.com/api/location/' + this.mundosId)
    .subscribe(res=>{
      console.log(res)
      this.characters=res;

    })
  }

}
