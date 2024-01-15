import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/service-data/services.service';

@Component({
  selector: 'app-services-v2',
  templateUrl: './services-v2.component.html',
  styleUrls: ['./services-v2.component.css']
})
export class ServicesV2Component implements OnInit {

  servicesItems: any;

  constructor(private services: ServicesService) {
    this.servicesItems = this.services.servicesData().slice(6,10)
   }

  ngOnInit(): void {
  }

}
