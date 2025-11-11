import React, { useState, createContext, useContext } from 'react'
import { mockClaims } from '../utils/mockData'
interface ClaimsContextType {
  validateClaim: (claimNumber: string, lastName: string) => string | null
  validateDetailedAccess: (claimId: string, password: string) => boolean
  getClaimById: (claimId: string) => Claim | undefined
  currentClaim: string | null
  setCurrentClaim: React.Dispatch<React.SetStateAction<string | null>>
  hasDetailedAccess: boolean
  setHasDetailedAccess: React.Dispatch<React.SetStateAction<boolean>>
}
export interface Claim {
  id: string
  claimNumber: string
  lastName: string
  password: string
  status:
    | 'submitted'
    | 'in_review'
    | 'approved'
    | 'additional_info'
    | 'completed'
    | 'denied'
  submissionDate: string
  estimatedCompletion: string
  description: string
  documents: {
    name: string
    type: string
    uploadDate: string
    status: 'pending' | 'approved' | 'rejected'
  }[]
  updates: {
    date: string
    message: string
  }[]
  assignedTo: string
  contactEmail: string
  contactPhone: string
}
const ClaimsContext = createContext<ClaimsContextType | undefined>(undefined)
export const ClaimsProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [currentClaim, setCurrentClaim] = useState<string | null>(null)
  const [hasDetailedAccess, setHasDetailedAccess] = useState(false)
  const validateClaim = (
    claimNumber: string,
    lastName: string,
  ): string | null => {
    const claim = mockClaims.find(
      (c) =>
        c.claimNumber === claimNumber &&
        c.lastName.toLowerCase() === lastName.toLowerCase(),
    )
    if (claim) {
      return claim.id
    }
    return null
  }
  const validateDetailedAccess = (
    claimId: string,
    password: string,
  ): boolean => {
    const claim = mockClaims.find((c) => c.id === claimId)
    return claim?.password === password
  }
  const getClaimById = (claimId: string): Claim | undefined => {
    return mockClaims.find((c) => c.id === claimId)
  }
  return (
    <ClaimsContext.Provider
      value={{
        validateClaim,
        validateDetailedAccess,
        getClaimById,
        currentClaim,
        setCurrentClaim,
        hasDetailedAccess,
        setHasDetailedAccess,
      }}
    >
      {children}
    </ClaimsContext.Provider>
  )
}
export const useClaims = () => {
  const context = useContext(ClaimsContext)
  if (context === undefined) {
    throw new Error('useClaims must be used within a ClaimsProvider')
  }
  return context
}
