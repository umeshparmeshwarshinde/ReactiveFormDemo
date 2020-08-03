import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { zipValidator ,passwordValidator} from './validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveFormDemo';

  form:FormGroup;
  constructor(private fb:FormBuilder){
    this.form=this.fb.group({
      username:['',[Validators.required,Validators.minLength(4)]],
      password:'',
      cnfpass:['',passwordValidator],
      zip:['',zipValidator]
    })
    this.form.controls.password.valueChanges.subscribe
    (
      x=>this.form.controls.cnfpass.updateValueAndValidity()
    );
    
  }

  onSubmit(){
    console.log(this.form.value.username);
    console.log(this.form.value.password);
    console.log(this.form.value.cnfpass);
    console.log(this.form.value.zip);
    this.form.markAsTouched();
  }
}
