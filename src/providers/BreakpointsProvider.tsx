import {
  createContext,
  PropsWithChildren,
  use,
  useEffect,
  useState
} from 'react';

type Breakpoints = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

interface BreakpointContextInterface {
  breakpoints: {
    up: (bp: keyof Breakpoints) => boolean;
    down: (bp: keyof Breakpoints) => boolean;
  };
}

export const BreakpointContext = createContext(
  {} as BreakpointContextInterface
);

export const gridBreakpoints: Breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1540
};

const BreakpointsProvider = ({ children }: PropsWithChildren) => {
  const [width, setWidth] = useState(window.innerWidth);

  const [breakpoints, setBreakpoints] = useState({
    up: (bp: keyof Breakpoints) => {
      return width > gridBreakpoints[bp];
    },
    down: (bp: keyof Breakpoints) => {
      return width < gridBreakpoints[bp];
    }
  });
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    setBreakpoints({
      up: bp => width >= gridBreakpoints[bp],
      down: bp => width <= gridBreakpoints[bp]
    });
  }, [width]);

  return (
    <BreakpointContext value={{ breakpoints }}>
      {children}
    </BreakpointContext>
  );
};

export const useBreakpoints = () => use(BreakpointContext);

export default BreakpointsProvider;
