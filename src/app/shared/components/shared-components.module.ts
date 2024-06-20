import { NgModule } from "@angular/core";
import { SnackBarComponent } from "./snackbar.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        SnackBarComponent
    ],
    imports: [CommonModule],
    exports: [SnackBarComponent]
})
export class SharedComponentsModule {

}