export function calculateMonthlyPayment(
  principal: number,
  annualRate: number,
  termMonths: number,
  downPayment: number = 0
): { monthly: number; totalInterest: number; totalCost: number } {
  const loanAmount = principal - downPayment;

  if (loanAmount <= 0) {
    return { monthly: 0, totalInterest: 0, totalCost: downPayment };
  }

  if (annualRate === 0) {
    const monthly = loanAmount / termMonths;
    return { monthly, totalInterest: 0, totalCost: principal };
  }

  const monthlyRate = annualRate / 100 / 12;
  const monthly =
    (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, termMonths))) /
    (Math.pow(1 + monthlyRate, termMonths) - 1);

  const totalCost = monthly * termMonths + downPayment;
  const totalInterest = totalCost - principal;

  return { monthly, totalInterest, totalCost };
}
