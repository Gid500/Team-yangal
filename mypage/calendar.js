const target = document.getElementById('calendar')
let calendar = null

let options = {
  firstDay: 1, 
  contentHeight: 'auto', 
  locale: 'ko', 
  headerToolbar: {
    left: 'title', 
    center: '', 
    right: 'prev next'
  }
  
}

calendar = new FullCalendar.Calendar(target, options)

calendar.render();



