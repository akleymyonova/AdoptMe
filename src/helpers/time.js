import dayjs from 'dayjs'
import updateLocale from 'dayjs/plugin/updateLocale'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  relativeTime: {
    future: "за %s",
    past: "%s тому",
    s: 'кілька секунд',
    m: "хвилину",
    mm: "%d хвилин",
    h: "годину",
    hh: "%d годин",
    d: "день",
    dd: "%d днів",
    M: "місяць",
    MM: "%d місяців",
    y: "рік",
    yy: "%d років"
  }
})

export function getTimeToNow(date) {
  return dayjs(date).toNow(true)
}


