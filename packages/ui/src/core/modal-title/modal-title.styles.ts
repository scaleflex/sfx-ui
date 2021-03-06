import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import { BorderRadiusSize as BRSize } from '../../utils/types/shape';
import type { ModalTitleProps, ModalTitleVariantType } from './modal-title.props';
import { Variant } from './types';

const baseClassName = 'ModalTitle';

const Icon = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ theme: { palette } }: With<WithTheme, { iconShadow: boolean }>) => css`
    display: flex;
    margin-bottom: 8px;
    padding: 12.5px;
    border-radius: 50%;
    background: ${palette[PColor.BackgroundPrimary]};
    color: ${palette[PColor.AccentPrimary]};
  `
);

const LabelPrimary = styled.div.attrs({
  className: generateClassNames(baseClassName, 'LabelPrimary'),
})(
  () => css`
    font-size: 16px;
    line-height: 18px;
  `
);

const LabelSecondary = styled.div.attrs({
  className: generateClassNames(baseClassName, 'LabelSecondary'),
})`
  font-size: 12px;
  line-height: 14px;
  margin-top: 4px;
`;

const Close = styled.div.attrs({
  className: generateClassNames(baseClassName, 'Close'),
})(
  ({ variant = Variant.Default, theme: { palette } }: With<WithTheme, { variant?: ModalTitleVariantType }>) => css`
    position: absolute;
    display: flex;
    top: ${variant === Variant.WithIcon ? 12 : 16}px;
    right: ${variant === Variant.WithIcon ? 12 : 16}px;
    color: ${palette[PColor.IconsSecondary]};
    &:hover {
      color: ${palette[PColor.IconsPrimary]};
    }
    cursor: pointer;
  `
);

const ModalTitle = styled.div.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({
    variant = Variant.Default,
    theme: {
      palette,
      shape: { borderRadius },
    },
  }: With<WithTheme, ModalTitleProps>) => css`
    position: relative;
    color: ${palette[PColor.TextPrimary]};
    border-radius: ${borderRadius[BRSize.Md]}px ${borderRadius[BRSize.Md]}px 0px 0px;

    ${() => {
      const paddingY = variant === Variant.WithIcon ? 12 : 11;
      const paddingLeft = 18;
      const paddingRight = variant === Variant.WithIcon ? paddingLeft : 40;

      return css`
        padding: ${paddingY}px ${paddingRight}px ${paddingY}px ${paddingLeft}px;
      `;
    }}

    ${variant === Variant.Default &&
    css`
      background: ${palette[PColor.BackgroundPrimary]};
      border-bottom: 1px solid ${palette[PColor.BordersSecondary]};
    `}

    ${variant === Variant.WithIcon &&
    css`
      display: flex;
      align-items: center;
      flex-direction: column;
    `}
  `
);

const Styled = applyDisplayNames({
  ModalTitle,
  LabelPrimary,
  LabelSecondary,
  Close,
  Icon,
});

export default Styled;
