import { format } from 'date-fns'

export const formateDate = (date: string) => {
  return format(new Date(date), 'yyyy.MM.dd')
}

