import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FAQ } from '../models/faq';


@Injectable({
  providedIn: 'root'
})
export class FaqsService {

  constructor(
    private http: HttpClient,
    private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private faqURL = 'http://localhost:9090/faqs'; 
   
  /** GET FAQs from the server */
  getFAQs(page:number): Observable<FAQ[]> {
    const params = {
      page: page.toString(),
     };
    return this.http.get<FAQ[]>(this.faqURL + '/readall/', {params});
  }

  /** GET FAQ by Id */
  getFAQ(id: string): Observable<FAQ> {
    const url = `${this.faqURL}/readfaq/${id}`;
    return this.http.get<FAQ>(url);
  }

  /** PUT: update the FAQ on the server */
  updateFAQ(id: string, username: FAQ): Observable<FAQ> {
    const url = `${this.faqURL}/updatefaq/${id}`;
    return this.http.put<FAQ>(url, username);
  }

  /** POST: add a new FAQ to the server */
  addFAQ(username: any): Observable<FAQ> {
    return this.http.post<FAQ>(this.faqURL + '/createFAQ', username);
  }
  
  /** DELETE: delete the FAQ from the server */
  deleteFAQ(_id: string): Observable<FAQ> {
    const url = `${this.faqURL}/deleteFAQ/${_id}`;
    return this.http.delete<FAQ>(url);
  }
  /* GET FAQ whose name contains search term */
  searchPurchases(term: string): Observable<FAQ[]> {
    if (!term.trim()) {
      // if not search term, return empty user array.
      return of([]);
    }
    return this.http.get<FAQ[]>(`${this.faqURL}/?name=${term}`);
  }
}
