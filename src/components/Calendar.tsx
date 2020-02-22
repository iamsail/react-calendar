import * as React from "react";
import moment from 'moment';
// import './test.less';
import './calendar.less';

export interface Props {

}

interface State {
    // daysArr: Array<Array<any>>;
    daysArr: Array<Array<{
        day: number
        info: string
    }>>;
};


class Calendar extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      // 这个很重要，设置时区
      moment.locale('zh-cn');
      this.state = {
          daysArr: this.generateMonthDay(moment().year(), moment().month())
      }
    }

  /**
   * 参考链接: https://segmentfault.com/q/1010000009206517 数据格式
   * 前端生成每个月的日历
   * 
   * @param {*} date 
   */
    generateMonthDay(year: number, month: number) {
        const date = [year, month];
        // const daysArr:  = [[], [], [], [], [], []]; // 5*7的日历数组
        const daysArr: Array<Array<any>> = [[], [], [], [], [], []];

        // 这里因为时区的问题，需要加1 。moment官网的，不是zh-cn
        const currentWeekday = moment(date).date(1).weekday() + 1; // 获取当月1日为星期几
        const lastMonthDays = moment(date).subtract(1, 'month').daysInMonth(); // 获取上月天数
        const currentMonthDays = moment(date).daysInMonth(); // 获取当月天数
    
        // 日期处理
        const getDay = (day: any) => (day <= lastMonthDays ? day : (day <= (lastMonthDays + currentMonthDays)) ? day - lastMonthDays : day - (lastMonthDays + currentMonthDays)); 
        for (let i = 0; i < 7; i += 1) {
          let virtualDay = (lastMonthDays - currentWeekday) + i + 1;
          for (let j = 0; j < 6; j += 1) {
            daysArr[j][i] = {};
            let temp = getDay(virtualDay + (j * 7));
            daysArr[j][i].day = temp;
            daysArr[j][i].info = "正常" + j + i;
          }
        }
        return daysArr;
    }

    render() {

      const {
        daysArr
      } = this.state;

      console.log('daysArr======> ', daysArr);


      return (
        <div className="Calendar-wrapper">   
            我是日历组件
            <div className="header"></div>
            <div className="body">
                <div className="week-day-wrapper">
                    <ul>		
                        <li>日</li>
                        <li>一</li>
                        <li>二</li>
                        <li>三</li>
                        <li>四</li>
                        <li>五</li>
                        <li>六</li>
                    </ul>
                </div>
                <div className="calendar-day-wrapper">
                    {
                        daysArr ?
                            <div>
                                {
                                    daysArr.map((item, row) => {
                                        return <ul key={row}> 
                                            {
                                                item.map((val, col) => {
                                                    return <li
                                                        key={`${row}-${val}-${col}-x`} 
                                                    >
                                                        <span>
                                                            {val.day}
                                                        </span>
                                                    </li>
                                                })
                                            }
                                         </ul>
                                    })
                                }
                            </div>
                        : null
                    }
                </div>
            </div>
            <div className="footer"></div>
        </div>
      );
    }
  }
  
  export default Calendar;