import { FormControl, FormGroup } from "@angular/forms"

export interface Survey {
    email?: FormControl<string | null>,
    password?: FormControl<string | null>
    fullName?: FormControl<string | null>
    age?: FormControl<number | null>
    address?: FormControl<string | null>
    address2?: FormControl<string | null>,
    address3?: FormControl<string | null>,
    addressCity?: FormGroup<any>,
    contact?: FormGroup<any>
}