import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

export class Quotes{
  text: string
  author: string
  constructor(){
    this.text='text',
    this.author='author'
  }
}

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  idx: number;
  quotes: Quotes[];
  currentQuote!: Quotes;
  constructor(
    private httpClient: HttpClient
  ) { 
    this.quotes=[];
    this.idx=0;
  }

  ngOnInit(): void {
    this.getQuotes();
    let setRandomIdx=interval(3000);
    setRandomIdx.subscribe(res=>{
      this.idx=Math.floor(Math.random() * ((this.quotes.length-1) - 0) + 0);
    })

    let setQuote=interval(3000);
    setQuote.subscribe(res=>{
      this.currentQuote=this.quotes[this.idx];
    })
  }

  getQuotes(){
    this.httpClient.get<any>('https://type.fit/api/quotes').subscribe(
      response=>{
        console.log(response);
        this.quotes=response;
      }
    );
  }
  
  /*setRandomIdx(min:number, max:number) {
    console.log(min+' '+max);
    this.idx= Math.floor(Math.random() * (max - min) + min);
  }
  setQuote(){
    this.currentQuote=this.quotes[this.idx];
    console.log(this.currentQuote.author);
    console.log('abcd');
  }*/
  
}
