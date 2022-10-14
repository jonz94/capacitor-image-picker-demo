import { Component } from '@angular/core';
import { Camera } from '@capacitor/camera';
import { Filesystem } from '@capacitor/filesystem';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { ImagePicker } from '@jonz94/capacitor-image-picker';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  webPaths: any[] = [];

  constructor() {}

  async present(limit = 1) {
    try {
      const { images } = await ImagePicker.present({ limit });
      console.log(images);
      this.webPaths = images.map((image) => image.webPath);

      for (const image of images) {
        const contents = await Filesystem.readFile({ path: image.path });
        console.log(contents);

        const file = await this.convertBase64DataToFile(
          contents.data,
          image.mimeType,
          image.path.split('/')[image.path.split('/').length - 1],
        );
        console.log(file);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async pickImages() {
    try {
      const { photos } = await Camera.pickImages({ limit: 1 });
      console.log(photos);
    } catch (error) {
      console.log(error);
    }
  }

  async pickFiles() {
    try {
      const result = await FilePicker.pickFiles();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  async convertBase64DataToFile(base64Data: string, mimeType: string, filename = '') {
    const url = `data:${mimeType};base64,${base64Data}`;
    return fetch(url)
      .then((res) => res.arrayBuffer())
      .then((buf) => new File([buf], filename));
  }
}
