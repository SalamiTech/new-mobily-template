import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation, ViewChild } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { environment } from 'src/environments/environment';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: 'app-stepper-component',
  templateUrl: './stepper-component.component.html',
  styleUrls: ['./stepper-component.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: CDKProgressStepper }],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CDKProgressStepper extends CdkStepper implements OnInit {

  assetUrl = environment.assetsUrl;

  @Input() value = 0;
  @Output() valueChange = new EventEmitter<number>();

  @Output() emitCurrentState = new EventEmitter();

  ngAfterViewChecked() {

    if (this.value >= 0 && this.value < this.steps.length) {
      this.selectStepByIndex(this.value);
    }

    this.emitCurrentState.emit(this.selectedIndex)
  }

  ngOnInit(): void {
  }

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }


  setStepperPosition(i: number) {
    // this.selectedIndex = i;
    this.value = i;
    this.selectStepByIndex(i);
  }
}
