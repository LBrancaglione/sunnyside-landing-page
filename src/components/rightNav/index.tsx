import { FunctionComponent } from 'react';
import * as C from './styles'

interface NavProp {
  open: boolean;
}

export const RightNav: FunctionComponent<NavProp> = (item: NavProp) => {
  return (
    <C.rightNav open={item.open}>
      <li>About</li>
      <li>Servies</li>
      <li>Projects</li>
      <li>Contacts</li>
    </C.rightNav>
  );
};
