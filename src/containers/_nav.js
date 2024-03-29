import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Navigate']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Orders',
    to: '/orders',
    icon: 'cil-cursor',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Promotions',
    to: '/promotions',
    icon: 'cil-cursor',
  },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Movers',
  //   to: '/movers',
  //   icon: 'cil-cursor',
  // },
  {
    _tag: 'CSidebarNavItem',
    name: 'Customers',
    to: '/customers',
    icon: 'cil-puzzle',
    // _children: [
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Breadcrumb',
    //     to: '/base/breadcrumbs',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Cards',
    //     to: '/base/cards',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Carousel',
    //     to: '/base/carousels',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Collapse',
    //     to: '/base/collapses',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Forms',
    //     to: '/base/forms',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Jumbotron',
    //     to: '/base/jumbotrons',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'List group',
    //     to: '/base/list-groups',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Navs',
    //     to: '/base/navs',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Navbars',
    //     to: '/base/navbars',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Pagination',
    //     to: '/base/paginations',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Popovers',
    //     to: '/base/popovers',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Progress',
    //     to: '/base/progress-bar',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Switches',
    //     to: '/base/switches',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Tables',
    //     to: '/base/tables',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Tabs',
    //     to: '/base/tabs',
    //   },
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Tooltips',
    //     to: '/base/tooltips',
    //   },
    // ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Reports',
    to: '/reports',
    icon: 'cil-cursor',
  },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Buttons',
  //   route: '/buttons',
  //   icon: 'cil-cursor',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Brand buttons',
  //       to: '/buttons/brand-buttons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Dropdowns',
  //       to: '/buttons/button-dropdowns',
  //     }
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: 'cil-chart-pie'
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Icons',
  //   route: '/icons',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Notifications',
  //   route: '/notifications',
  //   icon: 'cil-bell',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Toaster',
  //       to: '/notifications/toaster'
  //     }
  //   ]
  // },
]

export default _nav
