import { Component } from '@angular/core';
import { Barcode, BarcodeFormat, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { scan } from 'rxjs';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  code : any;
  // barcodes: Barcode[] = [];

  constructor() {}

  //  scan()
  // {
  //   BarcodeScanner.startScan().then(
  //     data=>
  //     {
  //       this.code = data;
  //       console.log(data);
  //     }
  //   )
  // }



  async scanCode() {
    // Check camera permission
    await BarcodeScanner.requestPermissions();

    // Check if the Google ML Kit barcode scanner is available
    await BarcodeScanner.isGoogleBarcodeScannerModuleAvailable().then(async (data) => {
        if (data.available) {
            // Start the barcode scanner
            await this.startScanner().then(async (barcodes) => {
                this.code = barcodes[0].rawValue;

            });
        } else {
            // Install the Google ML Kit barcode scanner
            await BarcodeScanner.installGoogleBarcodeScannerModule().then(async () => {
                await this.startScanner().then(async (barcodes) => {
                    this.code = barcodes[0].rawValue;
                });
            });
        }
    });
}

  async startScanner() {
    const { barcodes } = await BarcodeScanner.scan({
        formats: [BarcodeFormat.QrCode, BarcodeFormat.Ean13]
    });
    return barcodes;
}

}



// const prepare = () => {
//   BarcodeScanner.prepare();
// };

// const startScan = async () => {
//   BarcodeScanner.hideBackground();
//   const result = await BarcodeScanner.startScan();
//   if (result.hasContent) {
//     console.log(result.content);
//   }
// };

// const stopScan = () => {
//   BarcodeScanner.showBackground();
//   BarcodeScanner.stopScan();
// };

// const askUser = () => {
//   prepare();
  
//   if (true) {
//     startScan();
//   } 
// };


