import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {generateGuid} from '../../helpers/guid';

interface IQuestion {
  id: string;
  type: 'checkbox' | 'text',
  title: string,
  value: string[]
}


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  isAddQuestion = false;
  createQuestionType: 'checkbox' | 'text' = 'text';
  public questionList: IQuestion[] = [
    {
      id: generateGuid(),
      type: 'text',
      title: "sample text question 1",
      value: ['']
    },
    {
      id: generateGuid(),
      type: 'checkbox',
      title: 'sample checkbox question 1',
      value: ['sample 1','sample 2','sample 3']
    }
  ];
  public builderFormGroup: FormGroup;
  public addTextGroup: FormGroup;

  constructor() { 
    this.builderFormGroup = new FormGroup({});
    this.addTextGroup = new FormGroup({
      title: new FormControl(''),
    });
  }

  ngOnInit(): void {
    
  }

  createNewQuestion(): void{
    this.isAddQuestion = !this.isAddQuestion;
  }

  addTextQuestion(): void {
    this.questionList.push({
      id: generateGuid(),
      type: 'text',
      title: this.addTextGroup.controls['title'].value,
      value: ['']
    });
    console.log(this.questionList);
  }

}
