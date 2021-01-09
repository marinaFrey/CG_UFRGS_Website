import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Professor } from '../professors.type';
import { ProfessorsService } from '../professors.service';

@Component({
  selector: 'app-professors',
  templateUrl: './professors.component.html',
  styleUrls: ['./professors.component.css']
})
export class ProfessorsComponent implements OnInit {
  professorsGroupedList;
  constructor(private professorsService: ProfessorsService) { }

  ngOnInit(): void {
    this.professorsService.get().subscribe(professors => {
      this.professorsGroupedList = this.getProfessorGroup(professors)
    });
  }

  getProfessorGroup(professors: Professor[]) {
    let groupedList = [];
    let listIndex = 0;
    groupedList[listIndex] = [];
    for( let i = 0; i < professors.length; i++) {
      if (groupedList[listIndex].length > 4) {
        listIndex++;
        groupedList[listIndex] = [];
      }
      groupedList[listIndex].push(professors[i]);
    }
    console.log(groupedList)
    return groupedList;
  }

}
