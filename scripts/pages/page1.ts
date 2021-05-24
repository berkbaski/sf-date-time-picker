import Page1Design from 'generated/pages/page1';
import { DateTimePicker } from 'lib/date-time-picker'
import Dialog from 'sf-core/ui/dialog';

export default class Page1 extends Page1Design {
    router: any;
    constructor() {
        super();
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

        this.btnOpenDatePicker.onPress = () => {
            const dateTimePicker = new DateTimePicker({});
            const datePickerDialog = dateTimePicker.createDatePicker({
                onPickerDone: date => {
                    this.lblDateValue.text = date.toDateString();
                }
            }) as Dialog;
            datePickerDialog.show();
        };
        this.btnOpenTimePicker.onPress = () => {
            const dateTimePicker = new DateTimePicker({});
            const timePickerDialog = dateTimePicker.createHourPicker({
                skipInputView: true,
                onPickerDone: date => {
                    this.lblTimeValue.text = date.toTimeString();
                }
            }) as Dialog;
            timePickerDialog.show();
        };
    }
}

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 */
function onShow(superOnShow: () => void) {
    superOnShow();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 */
function onLoad(superOnLoad: () => void) {
    superOnLoad();
}
