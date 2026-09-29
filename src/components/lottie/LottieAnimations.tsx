import React from 'react';
import { Lottie } from 'lottie-react';

// 1. High-precision Craft & Tailoring Scissors Lottie
export const scissorsLottie = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 120,
  h: 120,
  nm: "Tailor Scissors & Thread",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Shear Blade Top",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [-12], e: [14] },
            { t: 30, s: [14], e: [-12] },
            { t: 60, s: [-12] }
          ]
        },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [60, 60, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: true,
                  v: [[60, 60], [95, 42], [92, 38], [55, 54], [35, 46], [28, 54], [40, 62]],
                  i: [[0, 0], [-2, -2], [0, 0], [0, 0], [-3, 0], [0, 3], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0], [0, 0], [3, 0], [0, -3], [0, 0]]
                }
              }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.612, 0.478, 0.294, 1] }, // Bronze #9C7A4B
              o: { a: 0, k: 100 }
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 }
            }
          ]
        }
      ]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Shear Blade Bottom",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [14], e: [-12] },
            { t: 30, s: [-12], e: [14] },
            { t: 60, s: [14] }
          ]
        },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [60, 60, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "sh",
              ks: {
                a: 0,
                k: {
                  c: true,
                  v: [[60, 60], [95, 78], [92, 82], [55, 66], [35, 74], [28, 66], [40, 58]],
                  i: [[0, 0], [-2, 2], [0, 0], [0, 0], [-3, 0], [0, -3], [0, 0]],
                  o: [[0, 0], [0, 0], [0, 0], [0, 0], [3, 0], [0, 3], [0, 0]]
                }
              }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.784, 0.718, 0.612, 1] }, // Sand #C8B79C
              o: { a: 0, k: 100 }
            },
            {
              ty: "tr",
              p: { a: 0, k: [0, 0] },
              a: { a: 0, k: [0, 0] },
              s: { a: 0, k: [100, 100] },
              r: { a: 0, k: 0 },
              o: { a: 0, k: 100 }
            }
          ]
        }
      ]
    },
    {
      ddd: 0,
      ind: 3,
      ty: 4,
      nm: "Pivot Brass Bolt",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [8, 8] }
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.612, 0.478, 0.294, 1] },
          o: { a: 0, k: 100 }
        }
      ]
    }
  ]
};

// 2. Haute Couture Shimmer Star / Diamond Emblem Lottie
export const luxuryStarLottie = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Luxury Shimmer Star",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Pulsing Glow",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [30], e: [90] },
            { t: 30, s: [90], e: [30] },
            { t: 60, s: [30] }
          ]
        },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [90] },
            { t: 60, s: [90] }
          ]
        },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [75, 75, 100], e: [115, 115, 100] },
            { t: 30, s: [115, 115, 100], e: [75, 75, 100] },
            { t: 60, s: [75, 75, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "sr",
          sy: 1,
          d: 1,
          pt: { a: 0, k: 4 },
          p: { a: 0, k: [0, 0] },
          r: { a: 0, k: 0 },
          ir: { a: 0, k: 8 },
          is: { a: 0, k: 0 },
          or: { a: 0, k: 32 },
          os: { a: 0, k: 0 }
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.612, 0.478, 0.294, 1] }, // Bronze #9C7A4B
          o: { a: 0, k: 100 }
        }
      ]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Core Star",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [-90] },
            { t: 60, s: [-90] }
          ]
        },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "sr",
          sy: 1,
          d: 1,
          pt: { a: 0, k: 4 },
          p: { a: 0, k: [0, 0] },
          r: { a: 0, k: 45 },
          ir: { a: 0, k: 6 },
          is: { a: 0, k: 0 },
          or: { a: 0, k: 22 },
          os: { a: 0, k: 0 }
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.96, 0.945, 0.91, 1] }, // Warm Ivory #F5F1E8
          o: { a: 0, k: 100 }
        }
      ]
    }
  ]
};

// 3. Tailor Tape & Measuring Needle Lottie
export const measuringTapeLottie = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "Measuring Tape & Thread",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Orbit Thread",
      sr: 1,
      ks: {
        o: { a: 0, k: 90 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [0], e: [360] },
            { t: 60, s: [360] }
          ]
        },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [56, 56] }
        },
        {
          ty: "st",
          c: { a: 0, k: [0.612, 0.478, 0.294, 1] },
          o: { a: 0, k: 90 },
          w: { a: 0, k: 2 },
          d: [
            { n: "d", nm: "dash", v: { a: 0, k: 6 } },
            { n: "g", nm: "gap", v: { a: 0, k: 4 } }
          ]
        }
      ]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Needle Eye",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: {
          a: 1,
          k: [
            { t: 0, s: [-30], e: [30] },
            { t: 30, s: [30], e: [-30] },
            { t: 60, s: [-30] }
          ]
        },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] }
      },
      shapes: [
        {
          ty: "rc",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [3, 44] },
          r: { a: 0, k: 1.5 }
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.784, 0.718, 0.612, 1] },
          o: { a: 0, k: 100 }
        }
      ]
    }
  ]
};

// 4. Live WhatsApp Pulse Radar Lottie
export const whatsappRadarLottie = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 60,
  h: 60,
  nm: "WhatsApp Radar Pulse",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Wave 1",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [80], e: [0] },
            { t: 45, s: [0], e: [0] },
            { t: 60, s: [0] }
          ]
        },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [30, 30, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [30, 30, 100], e: [120, 120, 100] },
            { t: 45, s: [120, 120, 100], e: [120, 120, 100] },
            { t: 60, s: [120, 120, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [36, 36] }
        },
        {
          ty: "st",
          c: { a: 0, k: [0.145, 0.827, 0.4, 1] }, // #25D366
          o: { a: 0, k: 100 },
          w: { a: 0, k: 2 }
        }
      ]
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Center Dot",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [30, 30, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            { t: 0, s: [90, 90, 100], e: [110, 110, 100] },
            { t: 30, s: [110, 110, 100], e: [90, 90, 100] },
            { t: 60, s: [90, 90, 100] }
          ]
        }
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [14, 14] }
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.145, 0.827, 0.4, 1] },
          o: { a: 0, k: 100 }
        }
      ]
    }
  ]
};

// React Component Wrappers
export const TailorScissorsAnimation: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 54
}) => (
  <div style={{ width: size, height: size }} className={`flex items-center justify-center ${className}`}>
    <Lottie src={scissorsLottie as any} loop autoplay className="w-full h-full" />
  </div>
);

export const LuxuryStarAnimation: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 48
}) => (
  <div style={{ width: size, height: size }} className={`flex items-center justify-center ${className}`}>
    <Lottie src={luxuryStarLottie as any} loop autoplay className="w-full h-full" />
  </div>
);

export const MeasuringTapeAnimation: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 50
}) => (
  <div style={{ width: size, height: size }} className={`flex items-center justify-center ${className}`}>
    <Lottie src={measuringTapeLottie as any} loop autoplay className="w-full h-full" />
  </div>
);

export const WhatsAppRadarAnimation: React.FC<{ className?: string; size?: number }> = ({
  className = '',
  size = 32
}) => (
  <div style={{ width: size, height: size }} className={`flex items-center justify-center ${className}`}>
    <Lottie src={whatsappRadarLottie as any} loop autoplay className="w-full h-full" />
  </div>
);
