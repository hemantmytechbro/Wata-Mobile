// src/theme/spacing.ts
// Use @s for width-based, @vs for height-based scaling

import { scale, verticalScale } from "react-native-size-matters";

const SPACING = {
  xs: scale(4),
  sm: scale(8),
  md: scale(16),
  lg: scale(24),
};

const RADIUS = {
  sm: scale(6),
  md: scale(10),
  lg: scale(20),
};

export { SPACING, RADIUS };
