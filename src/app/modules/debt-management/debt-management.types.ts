export interface Debt {
    id: string;
    description: string;
    creditor: string;
    debtor: string;                 // Name of the debtor or person owing the debt
    amount: number;
    currency: string;
    dueDate: Date | null;
    interestRate: number;
    maturityPercentage: number;     // Percentage of the debt that matures (if applicable)
    repaymentMethod: string;        // Method of repaying the debt (e.g., monthly installments, lump sum, etc.)
    debtType: string;               // Type of debt (e.g., mortgage, credit card, personal loan, etc.)
    specialDocuments: string[];     // Array of special documents associated with the debt
  }
  