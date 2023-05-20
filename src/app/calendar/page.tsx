import calendar from '#@/styles/css/calendar.module.css';
import '#@/styles/css/calendar.module.css'
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import weekOfYear from 'dayjs/plugin/weekOfYear'
const wdays = dayjs.extend(
  weekday
)
const woy = dayjs.extend(
  weekOfYear
)
export default function Page () {
  const WEEKDAYS = [ "lun", "mar", "mier", "jue", "vie", "sab", "dom" ];
  const TODAY = dayjs().format(
    "YYYY-MM-DD"
  );

  const INITIAL_YEAR = dayjs().format(
    "YYYY"
  );
  const INITIAL_MONTH = dayjs().format(
    "M"
  );

  let selectedMonth = dayjs(
    new Date(
      INITIAL_YEAR,
      INITIAL_MONTH - 1,
      1
    )
  );
  let currentMonthDays;
  let previousMonthDays;
  let nextMonthDays;


  WEEKDAYS.forEach(
    day => {
      return ( <p>{ day }</p> )
    }
  )
  return (

    <div className={ calendar.month }>
      <div className={ calendar.weekdaysRow }>
        <div className={ calendar.weekdays }>
          { WEEKDAYS.map(
            (
              weekday, index, array
            ) => {
              return (
                <div key={ index } className={ calendar.weekday }>
                  <p>{ weekday }</p>
                </div>
              )
            }
          ) }
        </div>
      </div>

      <div className={ calendar.weekOfYearColumn }>
        <div className={ calendar.weeksOfYear }>
          { weekOfYear.map(
            (
              weekofYear, index
            ) => {
              return (
                <div key={ weekofYear } className={ calendar.weekOfYear }>
                  <p>{ weekofYear }</p>
                </div>
              )
            }
          ) }
        </div>
      </div>
      <div className="subgrid-main-ui">
        <!-- SLOTS -->
        <div className={ calendar.slot }>
          <h2>Talk Title 1</h2>
          <div className={ calendar.details }>
            <span>Time: 10-11</span>
            <span>Stage</span>
            <span>Presenter</span>
          </div>
        </div>

        <div className={ calendar.slot }>
          <h2>Talk Title 2 & 3</h2>
          <div className={ calendar.details }>
            <span>Time: 10-11</span>
            <span>Stage</span>
            <span>Presenter</span>
          </div>
        </div>
      </div >

      )
}