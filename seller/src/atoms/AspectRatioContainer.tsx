import * as React from 'react';
import useSize from 'react-use/lib/useSize';

interface CompProps {
  aspectWidth: number;
  aspectHeight: number;
  maxWidth: number;
  children: React.ReactNode;
  flex?: boolean;
  imageWidth?: number;
  height?: number;
}

export function AspectRatioContainer({
  aspectHeight = 100,
  aspectWidth = 100,
  maxWidth = 100,
  imageWidth,
  height,
  children,
  flex,
}: CompProps) {
  const [sized] = useSize(
    ({width}) => {
      const aspectRatio = aspectWidth / aspectHeight;
      return (
        <div
          style={{
            margin: height ? '0' : '0 auto',
            width: imageWidth ? `${imageWidth}px` : `calc(100%)`,
            height: height ? `${height}px` : `${width / aspectRatio}px`,
            maxWidth: maxWidth,
            maxHeight: `calc(${maxWidth}px / ${aspectRatio})  `,
            display: `${flex ? 'flex' : 'inherit'}`,
          }}
        >
          {children}
        </div>
      );
    },
    {width: 100, height: 100}
  );
  return <>{sized}</>;
}
