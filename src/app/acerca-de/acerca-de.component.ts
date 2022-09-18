import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  public showMenu: boolean = false;
  public showAgregar: boolean = false;
  public showListar: boolean = false;
  public showReporta: boolean = false;

  constructor() { }

  ngOnInit() {
  }
}
