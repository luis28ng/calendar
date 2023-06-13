import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import timeGridPlugin from '@fullcalendar/timegrid';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { useState } from "react";

// const events = [
//   { title: 'Meeting', start: new Date() }
// ]


export default function App() {

  const [events, setEvents] = useState([]);

  const handleDateClick = (info) => {
    const {start, end} = info;
    const eventName = prompt('Enter event name: ');
    if (eventName) {
      setEvents([
        events, {
          start,
          end,
          title: eventName,
        },
      ]);
    }
    // alert(info.date)
    console.log(info.date)
  }

  // const handleDateSelection = (selection) => {
  //   this.setState({
  //     start: selection.startStr,
  //     end: selection.endStr,
  //     filledIn: true
  //   })
  // }

  return (
    <div>
      <div>
        <h1>TimeView Calendar</h1>
        <FullCalendar
        plugins={[interactionPlugin, listPlugin, resourceTimelinePlugin, bootstrap5Plugin]}
        initialView='resourceTimelineDay'
        editable={true}
        headerToolbar={
          {left: 'prev,next',
          center: 'title',
          right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'}
        }
        resources={[
          { id: 'a', title: 'Team A' },
          { id: 'b', title: 'Team B' },
          { id: 'c', title: 'Team C' }
        ]}
        aspectRatio={2.5}
        resourceAreaHeaderContent={"Teams"}
        // events={events}
        // eventContent={renderEventContent}
        selectable={true}
        // dateClick= {handleDateClick}
        select={handleDateClick}
        themeSystem='bootstrap5'
        nowIndicator={true}
        events={events}
        height={'90vh'}
      />
      </div>
      <div>
        <h1>Week Calendar</h1>
        <FullCalendar
        plugins={[interactionPlugin, listPlugin, timeGridPlugin, dayGridPlugin, bootstrap5Plugin]}
        initialView='timeGridWeek'
        selectable={true}
        dateClick= {handleDateClick}
        themeSystem='bootstrap5'
        nowIndicator={true}
        editable={true}
        headerToolbar={
          {left: 'prev,next',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'}
        }
        events={events}
        select={handleDateClick}
        height={'90vh'}
        />
      </div>
    </div>
  )
}



// export default function App() {
//   return (
//     <div>
//       <h1>Calendar</h1>
//       <FullCalendar
//         plugins={[dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin]}
//         initialView='timeGridWeek'
//         weekends={false}
//         timeZone='UTC'
//         editable={true}
//         headerToolbar={
//           {left: 'prev,next',
//           center: 'title',
//           right: 'timeGridWeek,timeGridDay'}
//         }
//         aspectRatio={2.5}
//         resourceAreaHeaderContent={"Teams"}
//         // events={events}
//         // eventContent={renderEventContent}
//         selectable={true}
//         dateClick= {function(info) {
//           alert('Date: ' + info.dateStr);
//         }}
//       />
//     </div>
//   )
// }


// a custom render function
// function renderEventContent(eventInfo) {
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </>
//   )
// }
