import { Component, OnInit } from '@angular/core';
import { Character } from "../character";
import { ATLA } from "../atla-characters";

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css']
})
export class GameboardComponent implements OnInit {

  characters = ATLA;

  constructor() { }

  ngOnInit(): void {
  }

  picClicked(card) {
    card.showPic = !card.showPic;
  }

}
