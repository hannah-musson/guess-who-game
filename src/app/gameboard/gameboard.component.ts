import { Component, OnInit, Input } from '@angular/core';
import { Character } from "../character";
import { ATLA } from "../atla-characters";
import { LOK } from "../lok-characters";

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {
  characters = ATLA;

  @Input()
  get childMessage(): string {return this._childMessage};

  set childMessage(childMessage: string) {
    this._childMessage = (childMessage && childMessage.trim()) || '<no fandom set>';
    switch (childMessage) {
      case "ATLA":
        this.characters = ATLA;
        break;
      case "LOK":
        this.characters = LOK;
        break;
      default:
        this.characters = ATLA;
        break;
    }
    this.resetGameboard();
  }

  private _childMessage = '';

  constructor() { }

  ngOnInit(): void {
  }

  picClicked(card) {
    card.showPic = !card.showPic;
  }

  resetGameboard() {
    for (let i = 0; i < this.characters.length; i++) {
      this.characters[i].showPic = true;
    }
  }
}
