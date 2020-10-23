import { Component, OnInit, Input } from '@angular/core';
import { Character } from "../character";
import { ATLA } from "../atla-characters";
import { LOK } from "../lok-characters";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  get childMessage(): string {return this._childMessage};

  set childMessage(childMessage: string) {
    this._childMessage = (childMessage && childMessage.trim()) || '<no fandom set>';
    switch (childMessage) {
      case "ATLA":
        this.characters = ATLA;
        this.shuffleCards();
        break;
      case "LOK":
        this.characters = LOK;
        this.shuffleCards();
        break;
      default:
        this.characters = ATLA;
        break;
    }
  }

  characters = ATLA;

  playerCard;

  private _childMessage = '';

  constructor() {
    this.shuffleCards();
  }

  ngOnInit(): void {
    this.shuffleCards();
  }

  shuffleCards() {
    let randomInt = Math.floor(Math.random() * Math.floor(24));
    this.playerCard = this.characters[randomInt];
  }

}
