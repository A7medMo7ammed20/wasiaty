import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.css']
})
export class TermsConditionComponent implements OnInit {

  terms_data = [
    {
      id:'opt1',
      active:true,
      title:'Website Terms & Use',
      date : 'LAST UPDATED: 6/26/2020',
      title_1 : '1. Introduction',
      text_1 : "We have taken a number of steps to comply with the GDPR. For more details about our compliance and how  we handle your data please check our latest legal documents below:",
      list_1 : 'Privacy policy',
      list_2 : 'Terms and conditions',
      title_2 : '2. About us',
      text_2: 'When you use Ticket Tailor for selling tickets and collecting data from your attendees you are the “data controller” of all your attendees’ data. We are a “data processor”, which means that we won’t do anything with your attendees’ data other than what you need us to in order to provide our service. We won’t be sending your attendees any marketing emails, sharing their data with anyone and if you want us to delete the data, just ask. It’s your data. 100',
      title_3:'3. Accessing our Website',
      text_3:'The servers and databases that power Ticket Tailor are located in the EU in Ireland. We inevitably use a small number of third parties, some of which are outside of the EU, to provide our ticketing service and we have contracts with each of them that oblige them to comply with the GDPR. You can find the full list of these third parties and what we use them for here.'
    },
    {
      id:'opt2',
      title:'Terms & Conditions',
      date : 'LAST UPDATED: 8/26/2020',
      title_1 : '1. Introduction',
      text_1 : `This page, together with our Privacy Policy and the Website Terms of Use tells you information about us and the legal terms and conditions (the "Terms") on which we make available to you our online ticket-selling solution (the "Service").`,
      title_2 : '2. Information about us',
      text_2: 'Tickettailor.com and buytickets.at and any of their sub-domains is a site operated by Ticket Tailor, which is the trading name of Zimma Ltd ("we", “our”, “us”). We are registered in England and Wales under company number 07583551 and have our registered office at Unit 6, 14A Andre St, London, E8 2AA. Our VAT number is GB184622203.0',
    },
    {
      id:'opt3',
      title:'Privacy policy',
      date : 'LAST UPDATED: 8/26/2020',
      title_1 : '1. Introduction',
      text_1 : "We have taken a number of steps to comply with the GDPR. For more details about our compliance and how  we handle your data please check our latest legal documents below:",
      list_1 : 'Privacy policy',
      list_2 : 'Terms and conditions',
      title_2 : '2. About us',
      text_2: 'When you use Ticket Tailor for selling tickets and collecting data from your attendees you are the “data controller” of all your attendees’ data. We are a “data processor”, which means that we won’t do anything with your attendees’ data other than what you need us to in order to provide our service. We won’t be sending your attendees any marketing emails, sharing their data with anyone and if you want us to delete the data, just ask. It’s your data. 100',
      title_3:'3. Accessing our Website',
      text_3:'The servers and databases that power Ticket Tailor are located in the EU in Ireland. We inevitably use a small number of third parties, some of which are outside of the EU, to provide our ticketing service and we have contracts with each of them that oblige them to comply with the GDPR. You can find the full list of these third parties and what we use them for here.'
    },
    {
      id:'opt4',
      title:'Cookie policy',
      date : 'LAST UPDATED: 10/26/2020',
      title_1 : '1. Introduction',
      text_1 : "We have taken a number of steps to comply with the GDPR. For more details about our compliance and how  we handle your data please check our latest legal documents below:",
      list_1 : 'Privacy policy',
      list_2 : 'Terms and conditions',
      title_2 : '2. About us',
      text_2: 'When you use Ticket Tailor for selling tickets and collecting data from your attendees you are the “data controller” of all your attendees’ data. We are a “data processor”, which means that we won’t do anything with your attendees’ data other than what you need us to in order to provide our service. We won’t be sending your attendees any marketing emails, sharing their data with anyone and if you want us to delete the data, just ask. It’s your data. 100',
      title_3:'3. Accessing our Website',
      text_3:'The servers and databases that power Ticket Tailor are located in the EU in Ireland. We inevitably use a small number of third parties, some of which are outside of the EU, to provide our ticketing service and we have contracts with each of them that oblige them to comply with the GDPR. You can find the full list of these third parties and what we use them for here.'
    },
    {
      id:'opt5',
      title:'Third Party Links',
      date : 'LAST UPDATED: 12/26/2020',
      title_1 : '1. Introduction',
      text_1 : "We have taken a number of steps to comply with the GDPR. For more details about our compliance and how  we handle your data please check our latest legal documents below:",
      list_1 : 'Privacy policy',
      list_2 : 'Terms and conditions',
      title_2 : '2. About us',
      text_2: 'When you use Ticket Tailor for selling tickets and collecting data from your attendees you are the “data controller” of all your attendees’ data. We are a “data processor”, which means that we won’t do anything with your attendees’ data other than what you need us to in order to provide our service. We won’t be sending your attendees any marketing emails, sharing their data with anyone and if you want us to delete the data, just ask. It’s your data. 100',
      title_3:'3. Accessing our Website',
      text_3:'The servers and databases that power Ticket Tailor are located in the EU in Ireland. We inevitably use a small number of third parties, some of which are outside of the EU, to provide our ticketing service and we have contracts with each of them that oblige them to comply with the GDPR. You can find the full list of these third parties and what we use them for here.'
    },
    {
      id:'opt6',
      title:'GDPR',
      date : 'LAST UPDATED: 15/26/2020',
      title_1 : '1. Introduction',
      text_1 : "We have taken a number of steps to comply with the GDPR. For more details about our compliance and how  we handle your data please check our latest legal documents below:",
      list_1 : 'Privacy policy',
      list_2 : 'Terms and conditions',
      title_2 : '2. About us',
      text_2: 'When you use Ticket Tailor for selling tickets and collecting data from your attendees you are the “data controller” of all your attendees’ data. We are a “data processor”, which means that we won’t do anything with your attendees’ data other than what you need us to in order to provide our service. We won’t be sending your attendees any marketing emails, sharing their data with anyone and if you want us to delete the data, just ask. It’s your data. 100',
      title_3:'3. Accessing our Website',
      text_3:'The servers and databases that power Ticket Tailor are located in the EU in Ireland. We inevitably use a small number of third parties, some of which are outside of the EU, to provide our ticketing service and we have contracts with each of them that oblige them to comply with the GDPR. You can find the full list of these third parties and what we use them for here.'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
