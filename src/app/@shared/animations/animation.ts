import {
  animate,
  animateChild,
  group,
  query,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

// export const slideInAnimation = trigger('routeAnimations', [
//   transition('UserList <=> UserDetails', [
//     style({ position: 'relative' }),
//     query(':enter, :leave', [
//       style({
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//       }),
//     ]),
//     query(':enter', [style({ left: '-100%' })]),
//     query(':leave', animateChild()),
//     group([
//       query(':leave', [animate('300ms ease-out', style({ left: '100%' }))]),
//       query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
//     ]),
//     query(':enter', animateChild()),
//   ]),
//   transition('* <=> FilterPage', [
//     style({ position: 'relative' }),
//     query(':enter, :leave', [
//       style({
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         width: '100%',
//       }),
//     ]),
//     query(':enter', [style({ left: '-100%' })]),
//     query(':leave', animateChild()),
//     group([
//       query(':leave', [animate('200ms ease-out', style({ left: '100%' }))]),
//       query(':enter', [animate('300ms ease-out', style({ left: '0%' }))]),
//     ]),
//     query(':enter', animateChild()),
//   ]),
// ]);

export const fader = trigger('routeAnimations', [
  transition('UserList <=> UserDetails, UserList <=> registerPage', [
    query(':enter, :leave', [
      animate(
        '100ms ease',
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        })
      ),
    ]),
    query(':enter', [
      animate(
        '100ms ease',
        style({
          opacity: 0,
          transform: 'scale(1) translateY(0)',
        })
      ),
    ]),
  ]),
]);

export const fadeInOut = trigger('fadeInOut', [
  state(
    'void',
    style({
      opacity: 0,
    })
  ),
  transition('void <=> *', animate(1000)),
]);

export const openClose = trigger('openClose', [
  // ...
  state(
    'open',
    style({
      // height: '200px',
      opacity: 1,
      backgroundColor: 'yellow',
    })
  ),
  state(
    'closed',
    style({
      // height: '100px',
      opacity: 0.5,
      backgroundColor: 'green',
    })
  ),
  transition('open => closed', [animate('1s')]),
  transition('closed => open', [animate('0.5s')]),
]);
