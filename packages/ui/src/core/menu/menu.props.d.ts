import type { PropsWithChildren } from 'react';
import { Position } from '../popper/types';
import type { PopperOptions } from '../popper/popper.props';

export type PopperPositionType = Values<typeof Position>;

export type AnchorElType = Element | null | undefined;

export interface MenuProps extends PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  fullWidth?: boolean;
  anchorElPosition?: DOMRect;
  anchorEl?: AnchorElType;
  onClose?: () => void;
  id?: string;
  containerProps?: object;
  alignCenter?: boolean;
  maxHeight?: string | number;
  position?: PopperPositionType;
  popperOptions?: PopperOptions;
  enableOverlay?: boolean;
  zIndex?: number;
}
