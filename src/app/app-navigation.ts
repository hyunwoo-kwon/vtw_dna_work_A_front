export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Examples',
    icon: 'folder',
    items: [
      {
        text: 'Profile',
        path: '/profile'
      },
      {
        text: 'Tasks',
        path: '/tasks'
      },
      {
        text: '직원 관리',
        path: '/employee'
      }
    ]
  },
  {
    text: '(관리자)영화관 관리',
    icon: 'folder',
    items: [
      {
        text: '1.상영관 관리',
        path: '/screenRoom'
      },
      {
        text: '2.상영작 관리',
        path: '/movie'
      },
      {
        text: '3.상영작 스케줄 관리',
        path: '/screen'
      },
      {
        text: '4.상영작 할인 관리',
        path: '/4'
      },
    ]
  },
  {
    text: '(고객)영화예매',
    icon: 'folder',
    items: [
      {
        text: '영화예매',
        path: '/reservation'
      }
    ]
  }
];
