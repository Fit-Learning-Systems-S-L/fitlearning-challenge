import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent {
  @Input() user!: User;
  @Output() closeModal = new EventEmitter<void>();

  onCloseModal(): void {
    this.closeModal.emit();
  }

  onOverlayClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.onCloseModal();
    }
  }
}
