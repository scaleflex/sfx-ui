import styled, { css } from 'styled-components';
import { generateClassNames } from '@sfx-ui/utils/functions';
import type { With } from '@sfx-ui/utils/types';
import type { WithTheme } from '@sfx-ui/theme/entity';
import { Color as PColor } from '@sfx-ui/utils/types/palette';
import { BorderRadiusSize as BRSize } from '@sfx-ui/utils/types/shape';
import type { ModalTitleProps } from './modal-title.props';

const baseClassName = 'ModalTitle';

const Icon = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ theme: { palette } }: WithTheme) => css`
    /* display: flex;
    flex-shrink: 0;

    &:first-child {
      margin-right: 8px;
    }

    &:last-child {
      margin-left: 8px;
    }

    svg {
      color: ${palette[PColor.IconsPrimary]};
    } */
  `
);

const LabelPrimary = styled(Icon).attrs({
  className: generateClassNames(baseClassName, 'LabelPrimary'),
})(
  ({ iconMode = false, theme: { palette, shape: { borderRadius } } }: With<WithTheme, {iconMode: boolean}>) => css`
    border-radius: ${borderRadius[BRSize.Md]}px ${borderRadius[BRSize.Md]}px 0px 0px;
    padding: 11px ${iconMode ? 24 : 40}px 11px 18px;

    ${!iconMode && css`
      background: ${palette[PColor.BackgroundPrimary]};
    `}

    ${iconMode && css`
      border-bottom: 1px solid ${palette[PColor.BordersSecondary]};
    `}

  `
);

const LabelSecondary = styled.div.attrs({
  className: generateClassNames(baseClassName, 'LabelSecondary'),
})`
`;

const Close = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Close'),
})(
  ({ iconMode = false }: {iconMode: boolean}) => `
    position: absolute;
    display: flex;
    top: ${iconMode ? 8 : 16}px;
    right: ${iconMode ? 8 : 16}px;
    cursor: pointer;
  `
);

const ModalTitle = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ theme }: With<WithTheme, ModalTitleProps>) => css`
    position: relative;
    /* display: inline-flex;
    align-items: center;
    background: ${theme.palette[active ? PColor.BackgroundPrimaryHover : PColor.BackgroundSecondary]};
    cursor: pointer;
    box-sizing: border-box;

    &:focus-within,
    &:focus,
    &:hover {
      background-color: ${theme.palette[PColor.BackgroundPrimaryHover]};
    } */
  `
);

const Styled = {
  ModalTitle,
  LabelPrimary,
  LabelSecondary,
  Close,
};

export default Styled;