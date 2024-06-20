import { Component, Input, inject, input } from "@angular/core";
import { CartService } from "../../helpers/services/cart.service";

@Component({
    selector: 'app-badge',
    template: `
      <button type="button" class="btn btn-primary position-relative">
        {{ title() }}
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
         {{ cartService.amount() }}
        </span>
      </button>`,
    standalone: true,
    imports: []
})
export class BadgeComponent {
    // @Input() title!: string
    title = input.required<string>();
    cartService = inject(CartService)


}