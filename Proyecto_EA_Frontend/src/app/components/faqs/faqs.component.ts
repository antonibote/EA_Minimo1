import { Component, OnInit } from '@angular/core';
import { FAQ } from 'src/app/models/faq';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { FaqsService } from 'src/app/services/faqs.service';
import { FaqNotificationComponent } from '../notifications/faq-notification/faq-notification.component';
import { FaqFailureNotificationComponent } from '../notifications/faq-failure-notification/faq-failure-notification.component';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FAQsComponent implements OnInit {

  faqs: FAQ[] = [];

  faq: any = {
   username: '',
   question: '',
   answer: '',
   likes: '',
   verified: '',
 } 
 currentPage: number = 1; // Página actual
  totalPages: number = 1; // Número total de páginas
  showAddForm: boolean = false;

 constructor(
   private faqService: FaqsService,
   private router: Router,
   private dialog: MatDialog
   ) { }
 
 //Ordena obtener los 'purchases' cuando se inicializa la pagina
 ngOnInit(): void {
   this.getFAQs(this.currentPage);
 }
 // Obtiene los 'purchases' proporcionados por el purchaseService
 getFAQs(page:number): void {
   this.faqService.getFAQs(page)
   .subscribe((response: any) => {
    this.faqs = response.docs;
    this.currentPage = response.page;
    this.totalPages = response.totalPages;
  });
   
 }
 //addpurchase method
 add() {
   this.faqService.addFAQ(this.faq).subscribe((response) => {
     // You can perform actions after adding the purchase here
     console.log('FAQ added:', response);
     this.showFAQNotification();
     // Clear the input fields after adding
    this.faq = {
      username: '',
      question: '',
      answer:'',
      likes: '',
      verified:''
    };
   },
   (error) => {
    // Purchase failed
    console.error('FAQ failed:', error);
    // Show a failure notification
    this.showFailureNotification();
      // Clear the input fields after adding
      this.faq = {
        username: '',
        question: '',
        answer:'',
        likes: '',
        verified:''
      };
  });
 }

 showFAQNotification() {
  this.dialog.open(FaqNotificationComponent, {
    width: '300px',
  });
}

showFailureNotification() {
  this.dialog.open(FaqFailureNotificationComponent, {
    width: '435px',
  });
}

 showForm() {
  this.showAddForm = true;
}
toggleFormVisibility() {
  this.showAddForm = !this.showAddForm;
}

previousPage() {
  if (this.currentPage > 1) {
    this.getFAQs(this.currentPage - 1);
  }
}

nextPage() {
  if (this.currentPage < this.totalPages) {
    this.getFAQs(this.currentPage + 1);
  }
}

}
