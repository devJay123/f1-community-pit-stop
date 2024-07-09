export const schedule = [
    {
      round: 13,
      date: '19-21 Jul',
      country: 'Hungary',
      title: 'FORMULA 1 HUNGARIAN GRAND PRIX 2024',
    },
    {
      round: 14,
      date: '26-28 Jul',
      country: 'Belgium',
      title: 'FORMULA 1 ROLEX BELGIAN GRAND PRIX 2024',
    },
    {
      round: 15,
      date: '23-25 Aug',
      country: 'Netherlands',
      title: 'FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2024',
    },
    {
      round: 16,
      date: '30 Aug - 01 Sep',
      country: 'Italy',
      title: 'FORMULA 1 PIRELLI GRAN PREMIO D\'ITALIA 2024',
    },
    {
      round: 17,
      date: '13-15 Sep',
      country: 'Azerbaijan',
      title: 'FORMULA 1 QATAR AIRWAYS AZERBAIJAN GRAND PRIX 2024',
    },
    {
      round: 18,
      date: '20-22 Sep',
      country: 'Singapore',
      title: 'FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2024',
    },
    {
      round: 19,
      date: '18-20 Oct',
      country: 'United States',
      title: 'FORMULA 1 PIRELLI UNITED STATES GRAND PRIX 2024',
    },
    {
      round: 20,
      date: '25-27 Oct',
      country: 'Mexico',
      title: 'FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2024',
    },
  ];

  export interface ScheduleItem {
    round: number;
    dateRange: string;
    country: string;
    eventName: string;
  }
  
  export const schedules: ScheduleItem[] = [
    { round: 13, dateRange: "19-21 JUL", country: "Hungary", eventName: "FORMULA 1 HUNGARIAN GRAND PRIX 2024" },
    { round: 14, dateRange: "26-28 JUL", country: "Belgium", eventName: "FORMULA 1 ROLEX BELGIAN GRAND PRIX 2024" },
    { round: 15, dateRange: "23-25 AUG", country: "Netherlands", eventName: "FORMULA 1 HEINEKEN DUTCH GRAND PRIX 2024" },
    { round: 16, dateRange: "30 AUG-01 SEP", country: "Italy", eventName: "FORMULA 1 PIRELLI GRAN PREMIO D'ITALIA 2024" },
    { round: 17, dateRange: "13-15 SEP", country: "Azerbaijan", eventName: "FORMULA 1 QATAR AIRWAYS AZERBAIJAN GRAND PRIX 2024" },
    { round: 18, dateRange: "20-22 SEP", country: "Singapore", eventName: "FORMULA 1 SINGAPORE AIRLINES SINGAPORE GRAND PRIX 2024" },
    { round: 19, dateRange: "18-20 OCT", country: "United States", eventName: "FORMULA 1 PIRELLI UNITED STATES GRAND PRIX 2024" },
    { round: 20, dateRange: "25-27 OCT", country: "Mexico", eventName: "FORMULA 1 GRAN PREMIO DE LA CIUDAD DE MÉXICO 2024" },
  ];
  
