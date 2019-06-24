import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-form-inicial',
  templateUrl: './form-inicial.page.html',
  styleUrls: ['./form-inicial.page.scss'],
})
export class FormInicialPage implements OnInit {

   formInicial: FormGroup

   error_messages = {
     'nombre': [   
       { type: 'required' , message: 'Name is required!'},
       { type: 'minLength' , message: 'Name must be longer or equal than 3 characters!'},
       { type: 'maxLength' , message: 'Name must be lower or equal than 30 characters!'},
       { type: 'pattern' , message: 'Name must contain letters only!'}
     ],
     
     'apellido': [   
      { type: 'required' , message: 'Last name is required!'},
      { type: 'minLength' , message: 'Last name must be longer or equal than 3 characters!'},
      { type: 'maxLength' , message: 'Last name must be lower or equal than 30 characters!'},
      { type: 'pattern' , message: 'Last name must contain letters only!'}
    ]

   }

   value=null;

  constructor(private nav: NavController,
     public FormBuilder: FormBuilder
    ) {
  
      this.formInicial=this.FormBuilder.group({

        nombre: new FormControl('',Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z]*$')


        ])),

        apellido: new FormControl('',Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z]*$')

       ])),
      })};

      pushPage(){
        this.nav.navigateForward(`/list-orders/${this.value}`);
      }

      ngOnInit() {
  }

  

  

}
