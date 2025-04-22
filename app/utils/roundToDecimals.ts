interface roundToDecimalsParams {
  number: number;
  decimalAmount?: number;
}

export const roundToDecimals = ({ number, decimalAmount = 2 }: roundToDecimalsParams): number => {
  const factor = Math.pow(10, decimalAmount);
  return Math.round(number * factor) / factor;
};