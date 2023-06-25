export interface RootObject {
    seed: string
    description: string
    coreColors: CoreColors
    schemes: Schemes
    palettes: Palettes
    styles: Styles
    extendedColors: any[]
    name: string
  }
  
  export interface CoreColors {
    primary: string
  }
  
  export interface Schemes {
    light: Light
    dark: Dark
  }
  
  export interface Light {
    primary: string
    onPrimary: string
    primaryContainer: string
    onPrimaryContainer: string
    primaryFixed: string
    onPrimaryFixed: string
    primaryFixedDim: string
    onPrimaryFixedVariant: string
    secondary: string
    onSecondary: string
    secondaryContainer: string
    onSecondaryContainer: string
    secondaryFixed: string
    onSecondaryFixed: string
    secondaryFixedDim: string
    onSecondaryFixedVariant: string
    tertiary: string
    onTertiary: string
    tertiaryContainer: string
    onTertiaryContainer: string
    tertiaryFixed: string
    onTertiaryFixed: string
    tertiaryFixedDim: string
    onTertiaryFixedVariant: string
    error: string
    onError: string
    errorContainer: string
    onErrorContainer: string
    outline: string
    background: string
    onBackground: string
    surface: string
    onSurface: string
    surfaceVariant: string
    onSurfaceVariant: string
    inverseSurface: string
    inverseOnSurface: string
    inversePrimary: string
    shadow: string
    surfaceTint: string
    outlineVariant: string
    scrim: string
    surfaceContainerHighest: string
    surfaceContainerHigh: string
    surfaceContainer: string
    surfaceContainerLow: string
    surfaceContainerLowest: string
    surfaceBright: string
    surfaceDim: string
  }
  
  export interface Dark {
    primary: string
    onPrimary: string
    primaryContainer: string
    onPrimaryContainer: string
    primaryFixed: string
    onPrimaryFixed: string
    primaryFixedDim: string
    onPrimaryFixedVariant: string
    secondary: string
    onSecondary: string
    secondaryContainer: string
    onSecondaryContainer: string
    secondaryFixed: string
    onSecondaryFixed: string
    secondaryFixedDim: string
    onSecondaryFixedVariant: string
    tertiary: string
    onTertiary: string
    tertiaryContainer: string
    onTertiaryContainer: string
    tertiaryFixed: string
    onTertiaryFixed: string
    tertiaryFixedDim: string
    onTertiaryFixedVariant: string
    error: string
    onError: string
    errorContainer: string
    onErrorContainer: string
    outline: string
    background: string
    onBackground: string
    surface: string
    onSurface: string
    surfaceVariant: string
    onSurfaceVariant: string
    inverseSurface: string
    inverseOnSurface: string
    inversePrimary: string
    shadow: string
    surfaceTint: string
    outlineVariant: string
    scrim: string
    surfaceContainerHighest: string
    surfaceContainerHigh: string
    surfaceContainer: string
    surfaceContainerLow: string
    surfaceContainerLowest: string
    surfaceBright: string
    surfaceDim: string
  }
  
  export interface Palettes {
    primary: Primary
    secondary: Secondary
    tertiary: Tertiary
    error: Error
    neutral: Neutral
    neutralVariant: NeutralVariant
  }
  
  export interface Primary {
    "0": string
    "5": string
    "10": string
    "20": string
    "25": string
    "30": string
    "35": string
    "40": string
    "50": string
    "60": string
    "70": string
    "80": string
    "90": string
    "95": string
    "98": string
    "99": string
    "100": string
  }
  
  export interface Secondary {
    "0": string
    "5": string
    "10": string
    "20": string
    "25": string
    "30": string
    "35": string
    "40": string
    "50": string
    "60": string
    "70": string
    "80": string
    "90": string
    "95": string
    "98": string
    "99": string
    "100": string
  }
  
  export interface Tertiary {
    "0": string
    "5": string
    "10": string
    "20": string
    "25": string
    "30": string
    "35": string
    "40": string
    "50": string
    "60": string
    "70": string
    "80": string
    "90": string
    "95": string
    "98": string
    "99": string
    "100": string
  }
  
  export interface Error {
    "0": string
    "5": string
    "10": string
    "20": string
    "25": string
    "30": string
    "35": string
    "40": string
    "50": string
    "60": string
    "70": string
    "80": string
    "90": string
    "95": string
    "98": string
    "99": string
    "100": string
  }
  
  export interface Neutral {
    "0": string
    "5": string
    "10": string
    "20": string
    "25": string
    "30": string
    "35": string
    "40": string
    "50": string
    "60": string
    "70": string
    "80": string
    "90": string
    "95": string
    "98": string
    "99": string
    "100": string
  }
  
  export interface NeutralVariant {
    "0": string
    "5": string
    "10": string
    "20": string
    "25": string
    "30": string
    "35": string
    "40": string
    "50": string
    "60": string
    "70": string
    "80": string
    "90": string
    "95": string
    "98": string
    "99": string
    "100": string
  }
  
  export interface Styles {
    display: Display
    headline: Headline
    body: Body
    label: Label
    title: Title
  }
  
  export interface Display {
    large: Large
    medium: Medium
    small: Small
  }
  
  export interface Large {
    fontFamilyName: string
    fontFamilyStyle: string
    fontWeight: number
    fontSize: number
    lineHeight: number
    letterSpacing: number
  }
  
  export interface Medium {
    fontFamilyName: string
    fontFamilyStyle: string
    fontWeight: number
    fontSize: number
    lineHeight: number
    letterSpacing: number
  }
  
  export interface Small {
    fontFamilyName: string
    fontFamilyStyle: string
    fontWeight: number
    fontSize: number
    lineHeight: number
    letterSpacing: number
  }
  
  export interface Headline {
    large: Large2
    medium: Medium2
    small: Small2
  }
  
  export interface Large2 {
    fontFamilyName: string
    fontFamilyStyle: string
    fontWeight: number
    fontSize: number
    lineHeight: number
    letterSpacing: number
  }
  
  export interface Medium2 {
    fontFamilyName: string
    fontFamilyStyle: string
    fontWeight: number
    fontSize: number
    lineHeight: number
    letterSpacing: number
  }
  
  export interface Small2 {
    fontFamilyName: string
    fontFamilyStyle: string
    fontWeight: number
    fontSize: number
    lineHeight: number
    letterSpacing: number
  }
  
  export interface Body {
    large: Large3
    medium: Medium3
    small: Small3
  }
  
  export interface Large3 {
    fontFamilyName: string
    fontFamilyStyle: string
    fontWeight: number
    fontSize: number
    lineHeight: number
    letterSpacing: number
  }
  
  export interface Medium3 {
    fontFamilyName: string
    fontFamilyStyle: string
    fontWeight: number
    fontSize: number
    lineHeight: number
    letterSpacing: number
  }
  
  export interface Small3 {
    fontFamilyName: string
    fontFamilyStyle: string
    fontWeight: number
    fontSize: number
    lineHeight: number
    letterSpacing: number
  }
  
  export interface Label {
    large: Large4
    medium: Medium4
    small: Small4
  }
  
  export interface Large4 {
    fontFamilyName: string
    fontFamilyStyle: string
    fontWeight: number
    fontSize: number
    lineHeight: number
    letterSpacing: number
  }
  
  export interface Medium4 {
    fontFamilyName: string
    fontFamilyStyle: string
    fontWeight: number
    fontSize: number
    lineHeight: number
    letterSpacing: number
  }
  
  export interface Small4 {
    fontFamilyName: string
    fontFamilyStyle: string
    fontWeight: number
    fontSize: number
    lineHeight: number
    letterSpacing: number
  }
  
  export interface Title {
    large: Large5
    medium: Medium5
    small: Small5
  }
  
  export interface Large5 {
    fontFamilyName: string
    fontFamilyStyle: string
    fontWeight: number
    fontSize: number
    lineHeight: number
    letterSpacing: number
  }
  
  export interface Medium5 {
    fontFamilyName: string
    fontFamilyStyle: string
    fontWeight: number
    fontSize: number
    lineHeight: number
    letterSpacing: number
  }
  
  export interface Small5 {
    fontFamilyName: string
    fontFamilyStyle: string
    fontWeight: number
    fontSize: number
    lineHeight: number
    letterSpacing: number
  }
  