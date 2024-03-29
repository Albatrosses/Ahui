import styled from "styled-components";
import { PaletteToken, RadiusToken, paletteHelper, radiusHelp, typographyHelp, TypographyToken, ContourToken, contourHelp } from "src/common";

export const TrendingWrapper = styled.div`
  background-color: ${paletteHelper(PaletteToken.BackgroundSecondary)};
  ${radiusHelp(RadiusToken.Large)};
  display: flex;
  padding: 1rem 1.5rem 0.8rem 1.5rem;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  &:not(.loading) {
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      ${contourHelp(ContourToken.Third)};
      transform: scale(1.1);
    }
  }
`;

export const NationalWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: 1.14rem;
`;

export const FlagIcon = styled.img`
  flex: 0 0 3.125rem;
  width: 3.125rem;
  height: 3.125rem;
  flex-shrink: 0;
`;

export const TrendingDetailsWrapper = styled.div`
  flex: auto;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TrendingCategory = styled.span`
  ${typographyHelp(TypographyToken.Tips)};
  color: ${paletteHelper(PaletteToken.FontColorSecondary)};
  align-self: flex-end;
`;

export const TrendingKeyword = styled.h5`
  ${typographyHelp(TypographyToken.Content)};
  color: ${paletteHelper(PaletteToken.FontColorPrimary)};
  align-self: flex-start;
  white-space: nowrap;
  word-wrap: break-word;
  overflow: hidden;
`;

export const TrendingHeat = styled.span`
  ${typographyHelp(TypographyToken.Tips)};
  font-size: 0.6rem;
  color: ${paletteHelper(PaletteToken.FontColorSecondary)};
  align-self: flex-start;
  white-space: nowrap;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow:ellipsis;
  width: 100%;
`;