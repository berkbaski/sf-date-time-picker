import TextBox from 'sf-core/ui/textbox';
import FlexLayout from 'sf-core/ui/flexlayout';
import Color from 'sf-core/ui/color'

export interface ILayoutStyle {
    justifyContent?: FlexLayout.JustifyContent = FlexLayout.JustifyContent.CENTER;
    alignItems?: FlexLayout.AlignItems = FlexLayout.AlignItems.CENTER;
    backgroundColor?: Color = Color.create(0, 0, 0, 0.7)
}

export interface IDateHourPicker {
    yearRange?: number = 40;
    dateFormat?: string = 'DD.MM.YYYY';
    hourFormat?: string = 'HH:mm';
    dayWithNameFormat?: string = 'D ddd';
    momentStartYear?: number = 1900;
    layoutStyle?: ILayoutStyle;
}

export interface IDatePicker {
    /**
    * Sets the starting day. Defaults to first day of the current month or given month.
    */
    startDay?: number;

    /**
     * Sets the ending day. Defaults to last day of the current month or given month. Includes leap year.
     */
    endDay?: number;

    /**
     * Sets starting day on the picker. Defaults to startDay
     */
    currentDay?: number;

    /**
     * Sets the starting month. Defaults to current month.
     */

    startMonth?: number | string;
    /**
     * Sets the ending month. Defaults to December
     */

    endMonth?: number | string;

    /**
     * Sets starting month of picker. Defaults to startMonth. 
     */
    currentMonth?: number | string;

    /**
     * Sets the starting year. Defaults to PICKER_YEAR_RANGE at constants
     */
    startYear?: number;

    /**
     * Sets the ending year. Defaults to current year.
     */
    endYear?: number;

    /**
     * Sets the starting year on picker. Defaults to endYear ( default year picker is reversed. )
     */
    currentYear?: number;

    /**
     * If textbox is passed, it will create inputView on iOS and write results to textbox.
     */

    textBox?: TextBox;
    /**
     * Function to execute when Done button is pressed. Does not take any callbacks.
     */
    onPickerDone: (date: Date) => void;
}

export interface IHourPicker {
    /**
     * Sets the starting hour. Defaults to current hour.
     */
    startHour?: number;

    /**
     * Sets the ending hour. Defaults to 23, last hour at the day.
     * If given 0, it will fallback to 23
     */
    endHour?: number;

    /**
     * Sets starting hour on picker. Defaults to startHour
     */
    currentHour?: number;

    /**
     * Sets the starting minute. Defaults to 0
     */
    startMinute?: number;

    /**
     * Sets the ending minute. Defaults to 60 - period specified ( Period defaults to 1 ).
     */
    endMinute?: number;

    /**
     * Sets starting minute on picker. Defaults to startMinute
     */
    currentMinute?: number;

    /**
     * Sets the incremental period of minutes. Defaults to 1.
     * If given 0, it will fallback to 1.
     * There is no check for negative periods, so don't do that unless you know what you are doing.
     */
    minutePeriod?: number;

    /**
     * If set, the picker will not be shown in keyboard layout
     */
    skipInputView?: boolean;

    /**
     * If textbox is passed, it will create inputView on iOS and write results to textbox.
     */
    textBox?: TextBox;

    /**
     * Function to execute when Done button is pressed. Does not take any callbacks.
     */
    onPickerDone: (date: Date) => void;
}
