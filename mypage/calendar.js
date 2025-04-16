document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
  initialView: 'dayGridMonth',
  locale: 'ko',
  height: 'auto',
  });
calendar.render();
});