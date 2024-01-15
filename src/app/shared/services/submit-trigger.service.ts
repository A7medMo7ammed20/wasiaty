import { Injectable } from '@angular/core';
import { VMEndowment } from 'app/modules/assets-management/endowment/endowment.types';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmitTriggerService {
    private formSubmitSubject = new Subject<void>();
  private formDataSubject = new Subject<any>();


  private selectedFormSubject = new BehaviorSubject<boolean>(false);

  selectedForm$ = this.selectedFormSubject.asObservable();

  setSelectedForm(selected: boolean) {
    this.selectedFormSubject.next(selected);
  }
  triggerFormSubmit() {
    this.formSubmitSubject.next();
  }

  formSubmitObservable(): Observable<void> {
    return this.formSubmitSubject.asObservable();
  }

  setFormData(data: any) {
    this.formDataSubject.next(data);
  }

  getFormDataObservable(): Observable<any> {
    return this.formDataSubject.asObservable();
  }

}
