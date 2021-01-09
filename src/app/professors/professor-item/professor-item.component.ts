import { Component, OnInit, Input } from '@angular/core';
import { Professor } from 'src/app/professors.type';

@Component({
  selector: 'app-professor-item',
  templateUrl: './professor-item.component.html',
  styleUrls: ['./professor-item.component.css']
})
export class ProfessorItemComponent implements OnInit {
  @Input() professor: Professor;
  constructor() { }

  ngOnInit(): void {
  }

}
