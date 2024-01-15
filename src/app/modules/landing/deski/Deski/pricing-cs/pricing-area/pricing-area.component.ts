import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-area',
  templateUrl: './pricing-area.component.html',
  styleUrls: ['./pricing-area.component.css']
})
export class PricingAreaComponent implements OnInit {

  pricing_data = [
    {
      id: 'month',
      active: true,
      pricing_items: [
        {
          id: 1,
          pac_name: 'FREE',
          price: 0,
          bill_cycle: '3 Free Agents',
          list_items: [
            { list: 'Email Ticketing' },
            { list: 'Customer Management' },
            { list: 'Help Center' },
            { list: 'Private Knowledge Base' },
            { list: 'Predefined SLAs' },
            { list: 'Macros' },
          ]
        },
        {
          id: 2,
          pac_name: 'Standard',
          price: 29,
          bill_cycle: 'Per agent billed',
          list_items: [
            { list: 'Social & Community' },
            { list: 'Channels' },
            { list: 'Product-based Ticket' },
            { list: 'Management' },
            { list: 'Help Center Themes' },
            { list: 'Gallery' },
            { list: 'Public Knowledge Base' },
            { list: 'SLAs & Escalations' },
            { list: 'Workflow, Assignment' },
          ]
        },
        {
          id: 3,
          pac_name: 'Start up',
          price: 38,
          bill_cycle: 'Per agent billed',
          list_items: [
            { list: 'Multi-Department Ticketing' },
            { list: 'Team Management' },
            { list: 'Telephony' },
            { list: 'Automatic Time Tracking' },
            { list: 'Blueprint - Basic Process' },
            { list: 'Management' },
            { list: 'Round Robin Ticket' },
            { list: 'Assignment' },
            { list: 'Agent Collision' },
            { list: 'Tasks, Events & Call' },
            { list: 'Activities' },
            { list: 'Mobile SDKs' },
          ]
        },
        {
          id: 4,
          pac_name: 'Business',
          price: 56,
          bill_cycle: 'Per agent billed',
          list_items: [
            { list: 'Live Chat' },
            { list: 'Zia - Artificial Intelligence' },
            { list: 'Help Center' },
            { list: 'Customization' },
            { list: 'Multi-brand Help Center' },
            { list: 'Advanced Process' },
            { list: 'Management' },
            { list: 'Custom Functions' },
            { list: 'Multi-level IVR' },
            { list: 'Global Reports &' },
            { list: 'Dashboards' },
            { list: 'Scheduled Reports' },
            { list: 'Contract Management' },
            { list: 'Validation Rules' },
          ]
        },
      ]
    },

    {
      id: 'year',
      pricing_items: [
        {
          id: 1,
          pac_name: 'FREE',
          price: 0,
          bill_cycle: '3 Free Agents',
          list_items: [
            { list: 'Email Ticketing' },
            { list: 'Customer Management' },
            { list: 'Help Center' },
            { list: 'Private Knowledge Base' },
            { list: 'Predefined SLAs' },
            { list: 'Macros' },
          ]
        },
        {
          id: 2,
          pac_name: 'Standard',
          price: 129,
          bill_cycle: 'Per agent billed',
          list_items: [
            { list: 'Social & Community' },
            { list: 'Channels' },
            { list: 'Product-based Ticket' },
            { list: 'Management' },
            { list: 'Help Center Themes' },
            { list: 'Gallery' },
            { list: 'Public Knowledge Base' },
            { list: 'SLAs & Escalations' },
            { list: 'Workflow, Assignment' },
          ]
        },
        {
          id: 3,
          pac_name: 'Start up',
          price: 138,
          bill_cycle: 'Per agent billed',
          list_items: [
            { list: 'Multi-Department Ticketing' },
            { list: 'Team Management' },
            { list: 'Telephony' },
            { list: 'Automatic Time Tracking' },
            { list: 'Blueprint - Basic Process' },
            { list: 'Management' },
            { list: 'Round Robin Ticket' },
            { list: 'Assignment' },
            { list: 'Agent Collision' },
            { list: 'Tasks, Events & Call' },
            { list: 'Activities' },
            { list: 'Mobile SDKs' },
          ]
        },
        {
          id: 4,
          pac_name: 'Business',
          price: 156,
          bill_cycle: 'Per agent billed',
          list_items: [
            { list: 'Live Chat' },
            { list: 'Zia - Artificial Intelligence' },
            { list: 'Help Center' },
            { list: 'Customization' },
            { list: 'Multi-brand Help Center' },
            { list: 'Advanced Process' },
            { list: 'Management' },
            { list: 'Custom Functions' },
            { list: 'Multi-level IVR' },
            { list: 'Global Reports &' },
            { list: 'Dashboards' },
            { list: 'Scheduled Reports' },
            { list: 'Contract Management' },
            { list: 'Validation Rules' },
          ]
        },
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
