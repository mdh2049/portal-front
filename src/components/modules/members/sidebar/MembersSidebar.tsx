import { Dispatch, SetStateAction } from 'react';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserGroup,
  faUserCheck,
  faUserClock,
  faUserPlus,
  faXmark,
  faUsersViewfinder,
  faUserShield
} from '@fortawesome/free-solid-svg-icons';
import { Nav } from 'react-bootstrap';
import classNames from 'classnames';
import { members } from 'data/members';

interface MembersSidebarProps {
  setOpenOffcanvas: Dispatch<SetStateAction<boolean>>;
}

const statusItems = [
  {
    label: 'All members',
    count: members.length,
    icon: faUserGroup,
    active: true
  },
  {
    label: 'Active',
    count: 28,
    icon: faUserCheck
  },
  {
    label: 'Invited',
    count: 12,
    icon: faUserPlus
  },
  {
    label: 'Inactive',
    count: 6,
    icon: faUserClock
  }
];

const segmentItems = [
  {
    label: 'Administrators',
    count: 8,
    icon: faUserShield
  },
  {
    label: 'New joiners',
    count: 14,
    icon: faUsersViewfinder
  }
];

const MembersSidebar = ({ setOpenOffcanvas }: MembersSidebarProps) => {
  return (
    <div className="file-manager-sidebar scrollbar">
      <div className="d-flex flex-between-center mb-3">
        <h5 className="mb-0">Members overview</h5>
        <Button
          className="p-0 fs-8 d-lg-none"
          onClick={() => setOpenOffcanvas(false)}
        >
          <FontAwesomeIcon icon={faXmark} transform={'up-3'} />
        </Button>
      </div>

      <div className="mb-4">
        <p className="text-uppercase fs-10 text-body-tertiary text-opacity-85 mb-1 fw-bold">
          Status
        </p>
        <Nav className="flex-column border-top border-translucent fs-9 vertical-nav">
          {statusItems.map(item => (
            <Nav.Item key={item.label}>
              <Nav.Link
                className={classNames(
                  'py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none',
                  {
                    active: item.active
                  }
                )}
                href="#!"
              >
                <div className="d-flex gap-2 align-items-center">
                  <FontAwesomeIcon icon={item.icon} className="text-body-tertiary" />
                  <span className="flex-1">{item.label}</span>
                  <span className="nav-item-count">{item.count}</span>
                </div>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>

      <div className="mb-4">
        <p className="text-uppercase fs-10 text-body-tertiary text-opacity-85 mb-1 fw-bold">
          Segments
        </p>
        <Nav className="flex-column border-top border-translucent fs-9 vertical-nav">
          {segmentItems.map(item => (
            <Nav.Item key={item.label}>
              <Nav.Link
                className="py-2 ps-0 pe-3 border-end border-bottom border-translucent text-start outline-none"
                href="#!"
              >
                <div className="d-flex gap-2 align-items-center">
                  <FontAwesomeIcon icon={item.icon} className="text-body-tertiary" />
                  <span className="flex-1">{item.label}</span>
                  <span className="nav-item-count">{item.count}</span>
                </div>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>

      <div>
        <p className="text-uppercase fs-10 text-body-tertiary text-opacity-85 mb-1 fw-bold">
          Summary
        </p>
        <ul className="list-unstyled fs-9 mb-0">
          <li className="d-flex justify-content-between py-1 border-top border-translucent">
            <span>Total members</span>
            <span className="fw-semibold">{members.length}</span>
          </li>
          <li className="d-flex justify-content-between py-1 border-top border-translucent">
            <span>Monthly growth</span>
            <span className="fw-semibold text-success">+8.2%</span>
          </li>
          <li className="d-flex justify-content-between py-1 border-top border-translucent">
            <span>Churn rate</span>
            <span className="fw-semibold text-danger">2.1%</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MembersSidebar;
