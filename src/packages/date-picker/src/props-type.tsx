import {VNode} from 'vue';
import {Options, Vue} from 'vue-class-component';
import locale from './locale/zh_CN';

@Options({
  name: 'DatePickerProps',
  props: {
    value: {},
    mode: {default: 'datetime'},
    minDate: {},
    maxDate: {},
    visible: {type: Boolean},
    locale: type: Object, default: () => locale}
  }
})
export default class DatePickerProps extends Vue {
  public value?: Date | number;
  public mode?: 'datetime' | 'date' | 'year' | 'month' | 'time';
  public minDate?: Date;
  public maxDate?: Date;
  public visible?: boolean;
  public locale?: {
    okText: string;
    dismissText: string;
    extra: string;
    DatePickerLocale: {
      year: string;
      month: string;
      day: string;
      hour: string;
      minute: string;
      am?: string;
      pm?: string;
    };
  };
  @Prop({
    type: Number,
    default: 1
  })
  public minuteStep?: number;
  @Prop({type: Boolean})
  public disabled?: boolean;
  @Prop({type: Boolean, default: true})
  public editable?: boolean;
  @Prop({})
  public format?: string | ((value: Date) => string);
  @Prop({type: String})
  public extra?: string;
  @Prop({})
  public dismissText?: VNode | string;
  @Prop({})
  public okText?: VNode | string;
  @Prop({})
  public title?: VNode | string;
}

export interface IDatePickerPropsType {
  value?: Date | number;
  mode?: 'datetime' | 'date' | 'year' | 'month' | 'time';
  minDate?: Date;
  maxDate?: Date;
  visible?: boolean;
  locale?: {
    okText: string;
    dismissText: string;
    extra: string;
    DatePickerLocale: {
      year: string;
      month: string;
      day: string;
      hour: string;
      minute: string;
      am?: string;
      pm?: string;
    };
  };
  minuteStep?: number;
  disabled?: boolean;
  format?: string | ((value: Date) => string);
  extra?: string;
  dismissText?: VNode | string;
  okText?: VNode | string;
  title?: VNode | string;
}
