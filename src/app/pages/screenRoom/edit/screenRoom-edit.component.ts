import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import 'devextreme/data/odata/store';
import {DxFormComponent, DxValidationGroupComponent} from "devextreme-angular";
import {ScreenRoom, ScreenRoomService} from "../service/screenRoom.service";
import notify from "devextreme/ui/notify";

@Component({
  selector: 'sample-screenRoom-edit-popup',
  providers: [ScreenRoomService],
  templateUrl: 'screenRoom-edit.component.html'
})

export class ScreenRoomEditComponent {
  screenRoom: ScreenRoom;
  editMode: 'create' | 'update';
  popupVisible = false;

  @Output() onSaved = new EventEmitter<ScreenRoom>();

  @ViewChild(DxFormComponent, {static: false}) form: DxFormComponent;

  @ViewChild(DxValidationGroupComponent, {static: false}) validationGroup: DxValidationGroupComponent;

  constructor(private screenRoomService : ScreenRoomService) {
  }

  open(editMode: 'create' | 'update', screenRoomSeq?: number) {
    this.editMode = editMode;

    if(this.isUpdateMode()){
      this.screenRoomService.find(screenRoomSeq).subscribe({
        next: (v) => {
          this.screenRoom = v;
          this.popupVisible = true;
        },
        error: (e) => {
          console.log(e);
          notify('상영관 정보를 불러오는데 오류가 발생하였습니다.', 'error', 3000);
        }
      });
    }else{
      this.screenRoom = {} as ScreenRoom;
      this.popupVisible = true;
    }

  }

  close() {
    this.popupVisible = false;
  }

  isCreateMode() {
    return this.editMode === 'create';
  }

  isUpdateMode() {
    return this.editMode === 'update';
  }

  save = (e) => {
    const result = this.validationGroup.instance.validate();
    if (!result.isValid) {
      return;
    }

    this.popupVisible = false;
    if(this.isCreateMode()){
      this.screenRoomService.create(this.screenRoom).subscribe({
        next: (v) => {
          notify('상영관 생성이 성공적으로 완료되었습니다.', 'success', 3000);
          this.onSaved.emit(v);
        },
        error: (e) => {
          console.log(e);
          notify('상영관 생성에 실패하였습니다.', 'error', 3000);
        }
      });
    }else{

    }
  }

  cancel = () => {
    this.popupVisible = false;
  }
}
