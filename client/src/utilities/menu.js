import { faList, faGear, faCommentDots, faChartSimple, faBell } from '@fortawesome/free-solid-svg-icons';

export default function Menu (){
  return [
    {
      label: 'My adverts',
      name: 'adverts',
      icon: faList
    },
    {
      label: 'Performance',
      name: 'performance',
      icon: faChartSimple
    },
    {
      label: 'Feedback',
      name: 'feedback',
      icon: faCommentDots
    },
    {
      label: 'Notifications',
      name: 'notifications',
      icon: faBell
    },
    {
      label: 'Settings',
      name: 'settings',
      icon: faGear
    },
  ]
}