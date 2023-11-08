import { Component, OnInit } from '@angular/core';
import { FAQ } from 'src/app/models/faq';
import { FaqsService } from 'src/app/services/faqs.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faqs-detail',
  templateUrl: './faqs-detail.component.html',
  styleUrls: ['./faqs-detail.component.css']
})
export class FaqsDetailComponent implements OnInit {

  faq: FAQ | undefined;

  faqupdate: any = {
    username:'',
    question:'',
    answer:'',
    likes: '',
    verified:''
  }

  showUpdateForm = false;

  constructor(    
    private faqService: FaqsService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.getFAQ();
  }
  getFAQ(): void {
    const id = String(this.route.snapshot.paramMap.get('_id'));
    console.log(id);
    this.faqService.getFAQ(id)
      .subscribe(faq => this.faq = faq);
  }
  delete() {
    const isConfirmed = window.confirm('¿Estás seguro de que deseas borrar la FAQ?');
      if (isConfirmed) {
        const id = String(this.route.snapshot.paramMap.get('_id'));
        this.faqService.deleteFAQ(id)
        .subscribe(faq => this.faq = faq);
        console.log('FAQ borrada exitosamente');
        this.router.navigate(['faq']);
    }
  }

  update(): void {
    const id = String(this.route.snapshot.paramMap.get('_id'));
    this.faqService.updateFAQ(id, this.faqupdate)
      .subscribe(updated => {
        this.router.navigate(['faq']);
        const popUp = window.alert('FAQ actualizada');
        console.log('FAQ actualizada exitosamente', updated);
      });
  }
  toggleUpdateForm() {
    this.showUpdateForm = !this.showUpdateForm;
    if (!this.showUpdateForm) {

      this.faqupdate = {
        username:'',
        question:'',
        answer:'',
        likes: '',
        verified:''
      };
    }
  }

  cancelUpdate() {
    this.showUpdateForm = false;
   
  }

}
