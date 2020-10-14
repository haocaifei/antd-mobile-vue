import { defineComponent } from 'vue';
import { useBaseCalendar } from './calendar-base';
import CalendarProps from './calendar-props';
const CalendarView = defineComponent({
    name: 'CalendarView',
    props: Object.assign({}, CalendarProps),
    setup(props, ctx) {
        const { renderCalendar } = useBaseCalendar(props, ctx);
        return { renderCalendar };
    },
    render() {
        return this.renderCalendar();
    }
});
export default CalendarView;
//# sourceMappingURL=calendar-view.jsx.map