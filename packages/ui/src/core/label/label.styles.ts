import styled, { css } from 'styled-components';
import { generateClassNames, applyDisplayNames } from '../../utils/functions';
import type { With } from '../../utils/types';
import type { WithTheme } from '../../theme/entity';
import { Color as PColor } from '../../utils/types/palette';
import type { LabelProps } from './label.props';
import { errorMixin } from './label.mixin';

const baseClassName = 'Label';

const Label = styled.label.attrs({
  className: generateClassNames(baseClassName, 'root'),
})(
  ({ error = false, htmlFor, theme }: With<WithTheme, LabelProps>) => css`
    display: flex;
    align-items: center;
    color: ${theme.palette[PColor.TextSecondary]};
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    cursor: ${htmlFor && 'pointer'};

    ${error && errorMixin};
  `
);

const Icon = styled.span.attrs({
  className: generateClassNames(baseClassName, 'Icon'),
})(
  ({ error = false, theme: { palette } }: With<WithTheme, { error: boolean }>) => css`
    display: flex;
    margin-right: 4px;
    color: ${palette[PColor.IconsPrimary]};

    ${error ? `color: ${palette[PColor.Error]};` : ''}
  `
);

const Styled = applyDisplayNames({
  Label,
  Icon,
});

export default Styled;
