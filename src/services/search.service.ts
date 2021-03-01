import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class SearchService {
public result:any  = [];
private data = [
    {"userID": "ex001", "PEIN":"ex001", "firstName": "Arun", "lastName": "Sobti", "manager": "Someone"},
    {"userID": "ex002", "PEIN":"ex002", "firstName": "Paresh", "lastName": "Sobti", "manager": "Someone"},
    {"userID": "ex003", "PEIN":"ex003", "firstName": "Saadi", "lastName": "Gebara", "manager": "Someone"},
    {"userID": "ex003", "PEIN":"ex003", "firstName": "Saadi", "lastName": "Gebara", "manager": "Someone"},
    {"userID": "ex003", "PEIN":"ex003", "firstName": "Saadi", "lastName": "Gebara", "manager": "Someone"},
    {"userID": "ex003", "PEIN":"ex003", "firstName": "Saadi", "lastName": "Gebara", "manager": "Someone"},
    {"userID": "ex003", "PEIN":"ex003", "firstName": "Saadi", "lastName": "Gebara", "manager": "Someone"},
    {"userID": "ex003", "PEIN":"ex003", "firstName": "Saadi", "lastName": "Gebara", "manager": "Someone"},
    {"userID": "ex003", "PEIN":"ex003", "firstName": "Saadi", "lastName": "Gebara", "manager": "Someone"},
    {"userID": "ex003", "PEIN":"ex003", "firstName": "Saadi", "lastName": "Gebara", "manager": "Someone"},
    {"userID": "ex003", "PEIN":"ex003", "firstName": "Saadi", "lastName": "Gebara", "manager": "Someone"},
    {"userID": "ex003", "PEIN":"ex003", "firstName": "Saadi", "lastName": "Gebara", "manager": "Someone"},
    {"userID": "ex003", "PEIN":"ex003", "firstName": "Saadi", "lastName": "Gebara", "manager": "Someone"},
    {"userID": "ex003", "PEIN":"ex003", "firstName": "Saadi", "lastName": "Gebara", "manager": "Someone"},
    {"userID": "ex003", "PEIN":"ex003", "firstName": "Saadi", "lastName": "Gebara", "manager": "Someone"},
    {"userID": "ex003", "PEIN":"ex003", "firstName": "Saadi", "lastName": "Gebara", "manager": "Someone"},
    {"userID": "ex003", "PEIN":"ex003", "firstName": "Saadi", "lastName": "Gebara", "manager": "Someone"},
    {"userID": "ex003", "PEIN":"ex003", "firstName": "Saadi", "lastName": "Gebara", "manager": "Someone"},
    {"userID": "ex003", "PEIN":"ex003", "firstName": "Saadi", "lastName": "Gebara", "manager": "Someone"},
    {"userID": "ex004", "PEIN":"ex004", "firstName": "Matt", "lastName": "Abarbanel", "manager": "Someone"}
];

  search(searchForm: FormGroup): string[] {

    this.reset();

    let userID = searchForm.value.userID;
    let PEIN = searchForm.value.PEIN;
    let firstName = searchForm.value.firstName;
    let lastName = searchForm.value.lastName;

    for(var i = 0; i < this.data.length; i++)
    {
      if    ((userID == '' || this.data[i].userID == userID) 
        && (PEIN == '' || this.data[i].PEIN == PEIN) 
        && (firstName == '' || this.data[i].firstName == firstName) 
        && (lastName == '' || this.data[i].lastName == lastName) )
      {
        this.result.push(this.data[i]);
      }
    }
    return this.result;
  }

  reset() {
    this.result = [];
  }
}
