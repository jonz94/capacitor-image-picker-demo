import { Component } from '@angular/core';
import { ImagePicker } from '@jonz94/capacitor-image-picker';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor() {}

  async present() {
    try {
      const result = await ImagePicker.present();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}
