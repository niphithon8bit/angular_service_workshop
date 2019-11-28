import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: Http) { }

  getAllCustomer() {
    return this.http.get("http://localhost:3000/api/customer").map((res) => res.json());
  }

  insertCustomer(customerName: string, customerPhone: string, contactFirstName: string, contactLastName: string, addressLine1: string, addressLine2: string, city: string, state: string, postalCode: string, country: string, creditLimit: string) {
    let data = {
      "customerName": customerName,
      "contactLastName": contactLastName,
      "contactFirstName": contactFirstName,
      "phone": customerPhone,
      "addressLine1": addressLine1,
      "addressLine2": addressLine2,
      "city": city,
      "state": state,
      "postalCode": postalCode,
      "country": country,
      "salesRepEmployeeNumber": 1370,
      "creditLimit": creditLimit
    };
    return this.http.post("http://localhost:3000/customers/", data);
  }
  
  search_by_name(search_name: string){
    // return console.log(search_name);
    return this.http.get(`http://localhost:3000/api/search_by_name/${search_name}`).map(res => [...res.json()]);
  }

  editCustomer(customerNumber: number) {
    console.log(customerNumber);
    return this.http.get(`http://localhost:3000/api/${customerNumber}`).map(res => [...res.json()]);
  }

  removeCustomer(customerNumber) {
    console.log(customerNumber);
    return this.http.delete(`http://localhost:3000/api/delete/${customerNumber}`);
  }

  updateCustomer(customerNumber: number, customerName: string, customerPhone: string, contactFirstName: string, contactLastName: string, addressLine1: string, addressLine2: string, city: string, state: string, postalCode: string, country: string, creditLimit: string) {
    console.log(customerNumber);
    let data = {
      "customerNumber": customerNumber,
      "customerName": customerName,
      "contactLastName": contactLastName,
      "contactFirstName": contactFirstName,
      "phone": customerPhone,
      "addressLine1": addressLine1,
      "addressLine2": addressLine2,
      "city": city,
      "state": state,
      "postalCode": postalCode,
      "country": country,
      "salesRepEmployeeNumber": 1370,
      "creditLimit": creditLimit
    };
    console.log(data);
    return this.http.put("http://localhost:3000/api/customers/update/", data);
  }
}
