import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonImg, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ImagePicker } from '@jonz94/capacitor-image-picker';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  standalone: true,
  imports: [NgFor, IonButton, IonContent, IonHeader, IonImg, IonTitle, IonToolbar],
})
export class Tab1Page {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  webPaths: any[] = [];

  async present(limit = 1) {
    try {
      const { images } = await ImagePicker.present({
        limit,
      });

      console.log(images);

      this.webPaths = images.map((image) => image.webPath);

      // for (const image of images) {
      //   const contents = await Filesystem.readFile({ path: image.path });
      //   console.log(contents);

      //   const file = await this.convertBase64DataToFile(
      //     contents.data,
      //     image.mimeType,
      //     image.path.split('/')[image.path.split('/').length - 1],
      //   );
      //   console.log(file);
      // }
    } catch (error) {
      console.log(error);
    }
  }
}
