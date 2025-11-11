import { Claim } from '../context/ClaimsContext'
export const mockClaims: Claim[] = [
  {
    id: 'claim-001',
    claimNumber: 'BLD-2023-001',
    lastName: 'Smith',
    password: 'secure123',
    status: 'in_review',
    submissionDate: '2023-10-15',
    estimatedCompletion: '2023-11-15',
    description:
      'Water damage from roof leak affecting living room ceiling and flooring',
    documents: [
      {
        name: 'Initial Claim Form',
        type: 'PDF',
        uploadDate: '2023-10-15',
        status: 'approved',
      },
      {
        name: 'Property Photos',
        type: 'JPG',
        uploadDate: '2023-10-15',
        status: 'approved',
      },
      {
        name: 'Contractor Estimate',
        type: 'PDF',
        uploadDate: '2023-10-20',
        status: 'pending',
      },
    ],
    updates: [
      { date: '2023-10-15', message: 'Claim submitted successfully' },
      {
        date: '2023-10-17',
        message: 'Claim assigned to adjuster Sarah Johnson',
      },
      {
        date: '2023-10-22',
        message:
          'Initial assessment completed. Waiting for contractor estimate review.',
      },
    ],
    assignedTo: 'Sarah Johnson',
    contactEmail: 'sarah.j@claimstrack.com',
    contactPhone: '555-123-4567',
  },
  {
    id: 'claim-002',
    claimNumber: 'BLD-2023-002',
    lastName: 'Johnson',
    password: 'secure456',
    status: 'additional_info',
    submissionDate: '2023-09-28',
    estimatedCompletion: '2023-11-05',
    description: 'Fire damage in kitchen from electrical fault',
    documents: [
      {
        name: 'Initial Claim Form',
        type: 'PDF',
        uploadDate: '2023-09-28',
        status: 'approved',
      },
      {
        name: 'Property Photos',
        type: 'JPG',
        uploadDate: '2023-09-28',
        status: 'approved',
      },
      {
        name: 'Fire Department Report',
        type: 'PDF',
        uploadDate: '2023-09-30',
        status: 'approved',
      },
    ],
    updates: [
      { date: '2023-09-28', message: 'Claim submitted successfully' },
      {
        date: '2023-09-30',
        message: 'Claim assigned to adjuster Mike Thompson',
      },
      {
        date: '2023-10-10',
        message:
          'Initial assessment completed. Additional information required about electrical system.',
      },
      {
        date: '2023-10-20',
        message: 'Waiting for electrical inspection report from homeowner',
      },
    ],
    assignedTo: 'Mike Thompson',
    contactEmail: 'mike.t@claimstrack.com',
    contactPhone: '555-987-6543',
  },
  {
    id: 'claim-003',
    claimNumber: 'BLD-2023-003',
    lastName: 'Brown',
    password: 'secure789',
    status: 'approved',
    submissionDate: '2023-08-05',
    estimatedCompletion: '2023-10-30',
    description: 'Structural damage from fallen tree during storm',
    documents: [
      {
        name: 'Initial Claim Form',
        type: 'PDF',
        uploadDate: '2023-08-05',
        status: 'approved',
      },
      {
        name: 'Property Photos',
        type: 'JPG',
        uploadDate: '2023-08-05',
        status: 'approved',
      },
      {
        name: 'Arborist Report',
        type: 'PDF',
        uploadDate: '2023-08-10',
        status: 'approved',
      },
      {
        name: 'Structural Engineer Report',
        type: 'PDF',
        uploadDate: '2023-08-25',
        status: 'approved',
      },
      {
        name: 'Contractor Estimate',
        type: 'PDF',
        uploadDate: '2023-09-15',
        status: 'approved',
      },
    ],
    updates: [
      { date: '2023-08-05', message: 'Claim submitted successfully' },
      { date: '2023-08-07', message: 'Claim assigned to adjuster Lisa Chen' },
      { date: '2023-08-30', message: 'All assessments completed' },
      { date: '2023-09-20', message: 'Contractor estimate approved' },
      {
        date: '2023-10-05',
        message: 'Claim approved. Payment processing in progress.',
      },
    ],
    assignedTo: 'Lisa Chen',
    contactEmail: 'lisa.c@claimstrack.com',
    contactPhone: '555-456-7890',
  },
]
export const getStatusLabel = (status: Claim['status']) => {
  switch (status) {
    case 'submitted':
      return 'Submitted'
    case 'in_review':
      return 'In Review'
    case 'approved':
      return 'Approved'
    case 'additional_info':
      return 'Additional Information Required'
    case 'completed':
      return 'Completed'
    case 'denied':
      return 'Denied'
    default:
      return 'Unknown'
  }
}
export const getStatusColor = (status: Claim['status']) => {
  switch (status) {
    case 'submitted':
      return 'bg-blue-500'
    case 'in_review':
      return 'bg-yellow-500'
    case 'approved':
      return 'bg-green-500'
    case 'additional_info':
      return 'bg-orange-500'
    case 'completed':
      return 'bg-green-700'
    case 'denied':
      return 'bg-red-500'
    default:
      return 'bg-gray-500'
  }
}
