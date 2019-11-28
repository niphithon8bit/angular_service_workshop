import { CustomerServiceService } from './../../service/customer-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-component',
  templateUrl: './customer-component.component.html',
  styleUrls: ['./customer-component.component.css']
})
export class CustomerComponentComponent implements OnInit {

  private customerList: any = [];
  private customerName: string;
  private customerPhone: string;
  private contactFirstName: string;
  private contactLastName: string;
  private addressLine1: string;
  private addressLine2: string;
  private city: string;
  private state: string;
  private postalCode: string;
  private country: string;
  private creditLimit: string;
  private customer: any;
  private customer2: any;
  private search_name: string;


  constructor(private customerService: CustomerServiceService) { }

  ngOnInit() {
    this.getCustomerList();
    this.customer = false;
    this.customer2 = true;
    this.search_name = "";
  }

  search_by_name(){
    // console.log(this.search_name);
    this.customerService.search_by_name(this.search_name).subscribe(res => {
      // console.log(res);
      this.customerList = res;
    });
  }

  getCustomerList() {
    console.log(this.customerService.getAllCustomer().subscribe(res => {
      // console.log(res);
      this.customerList = res;
    }));
  }

  addCustomer() {
    this.customerService.insertCustomer(this.customerName, this.customerPhone, this.contactFirstName, this.contactLastName, this.addressLine1, this.addressLine2, this.city, this.state, this.postalCode, this.country, this.creditLimit).subscribe(res => {
      console.log("Insert Success");
    });
    this.getCustomerList();
  }

  editCustomer(customerNumber: number) {
    console.log(customerNumber);

    this.customerService.editCustomer(customerNumber).subscribe(res => {
      this.customer = res;
      this.customer2 = false;
      // console.log(res);
      console.log(this.customer[0].customerNumber);
      this.customer = this.customer[0];
    });
    this.getCustomerList();
  }

  updateCustomer(customerNumber: number, customerName: string, customerPhone: string, contactFirstName: string, contactLastName: string, addressLine1: string, addressLine2: string, city: string, state: string, postalCode: string, country: string, creditLimit: string){
    this.customerService.updateCustomer(customerNumber, customerName, customerPhone, contactFirstName, contactLastName, addressLine1, addressLine2, city, state, postalCode, country, creditLimit).subscribe( res =>{
      console.log(res);
    })
    this.getCustomerList();
  }


  deleteCustomer(customerNumber: number) {
    this.customerService.removeCustomer(customerNumber).subscribe(res => {
      console.log(res);
    });
    this.getCustomerList();
  }


}
