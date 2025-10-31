import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Icon, UilFilesLandscapesAlt } from '@iconscout/react-unicons';

export interface Route {
  name: string;
  icon?: IconProp | string | string[];
  iconSet?: 'font-awesome' | 'feather' | 'unicons';
  pages?: Route[];
  path?: string;
  pathName?: string;
  flat?: boolean;
  topNavIcon?: string;
  dropdownInside?: boolean;
  active?: boolean;
  new?: boolean;
  hasNew?: boolean;
  isNext?: boolean;
  isTargetBlank?: boolean;
}

export interface RouteItems {
  label: string;
  horizontalNavLabel?: string;
  icon: Icon;
  labelDisabled?: boolean;
  pages: Route[];
  megaMenu?: boolean;
  active?: boolean;
}

export const routes: RouteItems[] = [
  {
    label: 'organization',
    icon: UilFilesLandscapesAlt,
    active: true,
    pages: [
      {
        name: 'settings',
        icon: 'share-2',
        path: '/apps/social/settings',
        pathName: 'settings',
        active: true,
      },
      {
        name: 'members',
        icon: 'users',
        path: '/pages/members',
        pathName: 'members-page',
        active: true
      }
    ]
  }
];
