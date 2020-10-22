import { Component, OnInit } from '@angular/core';
import { Character } from "../character";
import { ATLA } from "../atla-characters";
import { LOK } from "../lok-characters";

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {

  characters = LOK;

  constructor() { }

  ngOnInit(): void {
  }

  picClicked(card) {
    card.showPic = !card.showPic;
  }

}
