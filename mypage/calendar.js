new FullCalendar.Calendar(document.getElementById('calendar')).render();

const today = new Date();
const target = document.getElementById('calendar')
let calendar = null
let eventsList = [{'start': today, 'end': today}]

// 함수 //
const fn_DateClick = (event) => {
  
  var title = prompt(event.dateStr+" 일정 추가?");
  if (title) {
    calendar.addEvent({'start': event.date, 'end' : event.date})
    
    calendar.render();
  }
}

// 함수 끝//
let options = {
  firstDay: 1, // 월요일부터 출력
  contentHeight: 'auto', // 높이를 알아서 조절, 달력 내 스크롤이 등장하지 않음
  locale: 'ko', // 한글로 출력
  headerToolbar: {
    left: '', // 왼쪽에 배치할 요소를 작성, 스페이스바(공백)로 구분
    right: 'prev next'
  },
  
  events: eventsList, // 일정 리스트 넣기, 
  editable: true, // 일정 수정 여부

  dateClick : fn_DateClick
}
calendar = new FullCalendar.Calendar(target, options)

calendar.render();