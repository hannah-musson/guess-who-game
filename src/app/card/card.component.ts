import { Component, OnInit } from '@angular/core';
import { Character } from "../character";
import { ATLA } from "../atla-characters";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  characters = ATLA;

  playerCard = this.characters[0];

  constructor() { }

  ngOnInit(): void {
  }

  shuffleCards() {
    let randomInt = Math.floor(Math.random() * Math.floor(24));
    this.playerCard = this.characters[randomInt];
  }

}
