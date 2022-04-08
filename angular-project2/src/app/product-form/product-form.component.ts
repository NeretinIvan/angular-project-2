import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

const idValidator = () => {
  return (control: AbstractControl) => {
    if (control.value.length > 0) {
      return null;
    }
    
    return {
      error: "ID needed to be generated first"
    }
  }
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  public productForm = new FormGroup({
    name: new FormControl("default", [Validators.required, Validators.minLength(4)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    id: new FormControl("", idValidator()),
    categories: new FormControl([])
  })

  public categoryOptions = [
    "Clothes",
    "Shoes",
    "Medicines",
    "Food",
    "Electronics"
  ]

  public generateID(): void {
    let generatedID = this.generateRandomString(16);
    this.productForm.controls["id"].setValue(generatedID);
  }

  private generateRandomString(length: number): string {
    let result:string = "";
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    for (let i = 0; i < length; i++) {
      result += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    
    return result;
  }

  public submitForm(): void {
    if (this.productForm.invalid) {
      alert("Form is invalid!");
    }
    else {
      console.log(this.productForm.value);
    }
  }
}
