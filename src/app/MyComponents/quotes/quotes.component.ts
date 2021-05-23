import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
    this.idx=Math.floor(Math.random() * (1642 - 0) + 0);
  }

  ngOnInit(): void {
    this.getQuotes();
  }

  getQuotes(){
    this.httpClient.get<any>('https://type.fit/api/quotes').subscribe(
      response=>{
        console.log(response);
        this.quotes=response;
      }
    );
  }
  
  setRandomIdx(min:number, max:number) {
    console.log(min+' '+max);
    this.idx= Math.floor(Math.random() * (max - min) + min);
    //return true;
  }
  setQuote(){
    this.currentQuote=this.quotes[this.idx];
    console.log(this.currentQuote.author);
    console.log('abcd');
    //return true;
  }
  
}
