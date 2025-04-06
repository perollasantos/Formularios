import { Component, ViewChild } from '@angular/core';
import { IonInput, IonItem, IonList, IonText, IonButton, IonIcon, IonRange, RangeCustomEvent, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { MaskitoDirective } from '@maskito/angular';
import { MaskitoOptions } from '@maskito/core';
import { MaskitoElementPredicate } from '@maskito/core';
import { maskitoTransform } from '@maskito/core';
import { addIcons } from 'ionicons';
import { eye, lockClosed, snowOutline, sunnyOutline } from 'ionicons/icons';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonLabel, IonContent, IonTitle, IonToolbar, IonHeader,
    FormsModule,
    IonInput,
    IonItem,
    IonList,
    IonText,
    IonButton,
    IonIcon,
    IonRange,
    MaskitoDirective,
  ],
})
export class HomePage {

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }


  inputModel = '';
  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;

  onInput(event: CustomEvent) {
    const value = (event.target as HTMLIonInputElement).value ?? '';
    const filteredValue = (value as string).replace(/[^a-zA-Z0-9]+/g, '');  // Remover caracteres não alfanuméricos
    this.ionInputEl.value = this.inputModel = filteredValue;
  }


  readonly phoneMask: MaskitoOptions = {
    mask: ['+', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  };
  myPhoneNumber = maskitoTransform('5555551212', this.phoneMask);

  readonly cardMask: MaskitoOptions = {
    mask: [
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(3).fill(/\d/),
    ],
  };

  readonly maskPredicate: MaskitoElementPredicate = async (el : HTMLElement) =>
    (el as HTMLIonInputElement).getInputElement();


  pinFormatter(value: number) {
    return `${value}%`;
  }


  onIonChange(event: RangeCustomEvent) {
    console.log('ionChange emitted value:', event.detail.value);
  }

  onIonKnobMoveStart(event: RangeCustomEvent) {
    console.log('ionKnobMoveStart:', event.detail.value);
  }

  onIonKnobMoveEnd(event: RangeCustomEvent) {
    console.log('ionKnobMoveEnd:', event.detail.value);
  }

  constructor() {
    addIcons({ eye, lockClosed, snowOutline, sunnyOutline });
  }
}
