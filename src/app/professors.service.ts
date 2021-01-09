import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Professor } from './professors.type';
import professors from '../assets/professors.json';

@Injectable({
  providedIn: 'root'
})
export class ProfessorsService {

  constructor() { }

  get(): Observable<Professor[]> {
    return of(professors.professors);
  }
}
