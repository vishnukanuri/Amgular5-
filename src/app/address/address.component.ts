import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import {Address} from './address';

import * as $ from 'jquery';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  stateAbbrList = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA',
  'GU', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MH', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC',
  'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'PR', 'PW', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
  'VA', 'VI', 'VT', 'WA', 'WI', 'WV', 'WY'];

modifiedAddress: Address;

public streetAddress = "22309 30th Dr SE";
public city = "Krikalnd";
public state = "WA";
public postCode = "98052";

  constructor(private modalService: BsModalService) { }
  

  ngOnInit() {
  }
  modalRef: BsModalRef;

openModal(template: TemplateRef<any>) {
this.modalRef = this.modalService.show(template);
}

save(): void {
  this.modalRef.hide();
}
}
