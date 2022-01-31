import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  length = 0;
  includeLetters = false;
  includesNumbers = false;
  includesSymbols = false;

  onButtonClick() {
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwz";
    const symbols = "!@#$%^&*()";
    let validChars ='';

    if(this.includeLetters) {
      validChars +=letters;
    }

    if(this.includesNumbers) {
      validChars +=numbers;
    }

    if(this.includesSymbols) {
      validChars +=symbols;
    }

    let generatedPassword = '';

    for (let i=0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword+=validChars[index];
    }

    this.password = generatedPassword;

    // console.log(`
    //   About to generate a password with the following:
    //   Length: ${this.length}
    //   Includes letters: ${this.includeLetters}
    //   Includes numbers: ${this.includesNumbers}
    //   Includes Symbols: ${this.includesSymbols}
    // `);

  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    //Check if the user entered a number or non isNaN returns false if the user entered a number
    if(!isNaN(parsedValue)) {
      //The entered value is number
      this.length = parsedValue;
    }
  }
  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includesNumbers = !this.includesNumbers;
  }

  onChangeUseSymbols() {
    this.includesSymbols = !this.includesSymbols;
  }
}
