import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/service-data/services.service';

@Component({
  selector: 'app-services-v3',
  templateUrl: './services-v3.component.html',
  styleUrls: ['./services-v3.component.css']
})
export class ServicesV3Component implements OnInit {

  servicesItems: any;

  constructor(private services: ServicesService) {
    this.servicesItems = this.services.servicesData().slice(10,15)
   }

  ngOnInit(): void {
  }

}
