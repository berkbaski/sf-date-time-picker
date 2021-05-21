import TextBox from 'sf-core/ui/textbox';

interface IDatePickerCreateOptions {
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
}

interface IHourPickerCreateOptions {
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
}

export interface IDatePicker extends IDatePickerCreateOptions {
    /**
     * If textbox is passed, it will create inputView on iOS and write results to textbox.
     */
    textBox?: TextBox;
    /**
     * Function to execute when Done button is pressed. Does not take any callbacks.
     */
    onPickerDone: (date: Date) => void;
}

export interface IHourPicker extends IHourPickerCreateOptions {
    /**
     * If textbox is passed, it will create inputView on iOS and write results to textbox.
     */
    textBox?: TextBox;
    /**
     * Function to execute when Done button is pressed. Does not take any callbacks.
     */
    onPickerDone: (date: Date) => void;
}
