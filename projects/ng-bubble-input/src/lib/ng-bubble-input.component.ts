import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';

import {fromEvent, Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'ng-bubble-input',
  templateUrl: './ng-bubble-input.component.html',
  styleUrls: ['./ng-bubble-input.component.scss']
})
export class NgBubbleInputComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  @ViewChild('input', {static: true}) input!: ElementRef;

  @Output() change = new EventEmitter<string[]>();

  @Output() delete = new EventEmitter<string[]>();

  @Input() defaultClass = 'ng-bubble-input-box';

  @Input() itemsList: string[] = [];

  private destroy$ = new Subject<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.input) {
      this.input.nativeElement.focus();
    }
  }

  ngAfterViewInit(): void {
    if (this.input) {
      fromEvent(this.input.nativeElement, 'keydown')
        .pipe(
          tap((event: any) => {
            if (event.keyCode === 32 || event.keyCode === 13) {
              event.preventDefault();
              this.onChange(this.input?.nativeElement.value);
            } else if (event.keyCode === 8 && !this.input?.nativeElement.value) {
              this.onDelete('');
            }
          }),
          takeUntil(this.destroy$),
        )
        .subscribe();
    }
  }

  public onChange(val: string): void {
    if (val.trim()) {
      this.itemsList.push(val);
      if (this.input) {
        this.input.nativeElement.value = '';
      }
      this.change.emit(this.itemsList);
    }
  }

  public onDelete(val: string): void {
    if (val) {
      this.itemsList = this.itemsList.filter(e => e !== val);
    } else {
      this.itemsList.pop();
    }
    this.delete.emit(this.itemsList);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

