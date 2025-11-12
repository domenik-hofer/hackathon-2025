import { Claim } from '../context/ClaimsContext'
import type { TimelineItem } from '../components/timeline/Timeline'
import type { Document } from '../components/document/DocumentList'
import type { StammdatenProps } from '../components/userData/UserData'

/** Normalisierte Basis-Typen (neu) */
export interface Person {
  id: string
  fullName: string
  email: string
  phone?: string
}

export interface ClaimEvent {
  id: string
  claimId: string
  /** ISO Date (YYYY-MM-DD) */
  date: string
  /** Optional HH:mm Zeit */
  time?: string
  /** Kurztyp für spätere Icon-Zuordnung */
  type:
    | 'submitted'
    | 'assigned'
    | 'documents_requested'
    | 'assessment_complete'
    | 'approved'
    | 'info_needed'
    | 'generic'
  message: string
  icon?: string
}

export interface NormalizedClaimMeta {
  id: string
  claimNumber: string
  status: Claim['status']
  submissionDate: string
  estimatedCompletion: string
  description: string
  personId: string
  /** Login-Passwort für erweiterten Zugriff */
  password: string
  /** Zugewiesener Sachbearbeiter */
  assignedTo: string
}

/** Dokumente zu einem Claim */
export interface ClaimDocument {
  id: string
  claimId: string
  name: string
  type: string
  uploadDate: string
  status: 'pending' | 'approved' | 'rejected'
}

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

// ---------------------------------------------------------
// Neue normalisierte Mock-Daten
// ---------------------------------------------------------

export const persons: Person[] = [
  {
    id: 'person-001',
    fullName: 'Beat Schweizer',
    email: 'beat@schweizer.ch',
    phone: '0799990101',
  },
]

export const claimsMeta: NormalizedClaimMeta[] = [
  {
    id: 'claim-001',
    claimNumber: '1234567/0001',
    status: 'in_review',
    submissionDate: '2025-10-01',
    estimatedCompletion: '2025-11-31',
    description: 'Wasserleitungsbruch',
    personId: 'person-001',
    password: 'secure123',
    assignedTo: 'Herr Müller',
  },
]

export const claimDocuments: ClaimDocument[] = [
  {
    id: 'doc-001',
    claimId: 'claim-001',
    name: 'Schadensmeldung Formular',
    type: 'PDF',
    uploadDate: '2025-10-15',
    status: 'approved',
  },
  {
    id: 'doc-002',
    claimId: 'claim-001',
    name: 'Fotos vom Schaden',
    type: 'JPG',
    uploadDate: '2025-10-15',
    status: 'approved',
  },
  {
    id: 'doc-003',
    claimId: 'claim-001',
    name: 'Kostenvoranschlag Handwerker',
    type: 'PDF',
    uploadDate: '2025-10-20',
    status: 'pending',
  },
]

export const claimEvents: ClaimEvent[] = [
  {
    id: 'evt-001',
    claimId: 'claim-001',
    date: '2025-10-15',
    time: '09:23',
    type: 'submitted',
    message: 'Schadensmeldung erfolgreich eingereicht',
    icon: 'file-text',
  },
  {
    id: 'evt-002',
    claimId: 'claim-001',
    date: '2025-10-17',
    time: '10:05',
    type: 'assigned',
    message: 'Sachbearbeiter Herr Müller wurde zugewiesen',
    icon: 'user',
  },
  {
    id: 'evt-003',
    claimId: 'claim-001',
    date: '2025-10-22',
    time: '15:40',
    type: 'assessment_complete',
    message: 'Erste Bewertung abgeschlossen. Wartet auf Prüfung des Kostenvoranschlags.',
    icon: 'clipboard-check',
  },
]

// ---------------------------------------------------------
// Helper-Funktionen für neue strukturierte Daten
// ---------------------------------------------------------

/**
 * Generiert vollständiges Claim-Objekt aus normalisierten Daten.
 * Vermeidet Duplikate - alle Daten stammen aus persons, claimsMeta, claimDocuments, claimEvents.
 */
export function buildClaimFromNormalizedData(
  claimMeta: NormalizedClaimMeta,
  person: Person,
  documents: ClaimDocument[],
  events: ClaimEvent[]
): Claim {
  return {
    id: claimMeta.id,
    claimNumber: claimMeta.claimNumber,
    lastName: person.fullName.split(' ').pop() || person.fullName,
    password: claimMeta.password,
    status: claimMeta.status,
    submissionDate: claimMeta.submissionDate,
    estimatedCompletion: claimMeta.estimatedCompletion,
    description: claimMeta.description,
    documents: documents
      .filter(d => d.claimId === claimMeta.id)
      .map(d => ({
        name: d.name,
        type: d.type,
        uploadDate: d.uploadDate,
        status: d.status,
      })),
    updates: events
      .filter(e => e.claimId === claimMeta.id)
      .map(e => ({
        date: e.date,
        message: e.message,
      })),
    assignedTo: claimMeta.assignedTo,
    contactEmail: person.email,
    contactPhone: person.phone || '',
  }
}

/**
 * @deprecated Backward Compatibility Layer
 * Generiert mockClaims aus normalisierten Daten.
 * KEINE Duplikate - Daten werden aus persons/claimsMeta/claimDocuments/claimEvents abgeleitet.
 */
export const mockClaims: Claim[] = claimsMeta.map(meta => {
  const person = persons.find(p => p.id === meta.personId)!
  return buildClaimFromNormalizedData(meta, person, claimDocuments, claimEvents)
})

export function buildStammdatenFromClaimAndPerson(
  claim: NormalizedClaimMeta,
  person: Person,
  options?: { includeDescription?: boolean }
): StammdatenProps {
  return {
    name: person.fullName,
    fallnummer: claim.claimNumber,
    schadensart: claim.description.split(' ')[0] || 'Schaden',
    schadenstag: claim.submissionDate,
    estimatedCompletion: claim.estimatedCompletion,
    assignedTo: claim.assignedTo,
    kontakt: person.email,
    ...(options?.includeDescription && {
      schadensbeschreibung: claim.description,
    }),
  }
}

export function buildTimelineItemsFromEvents(events: ClaimEvent[]): TimelineItem[] {
  return events.map((e, idx) => ({
    id: idx + 1,
    title: mapEventTypeToTitle(e),
    description: e.message,
    date: formatGermanDate(e.date),
    time: e.time ? `${e.time} Uhr` : '',
    icon: e.icon || mapEventTypeToIcon(e.type),
  }))
}

export function buildDocumentsFromClaim(claim: Claim): Document[] {
  return claim.documents.map(d => ({
    name: d.name,
    type: d.type,
    uploadDate: d.uploadDate,
  }))
}

// ---------------------------------------------------------
// Interne Mapping-Helfer
// ---------------------------------------------------------
function mapEventTypeToTitle(e: ClaimEvent): string {
  switch (e.type) {
    case 'submitted':
      return 'Schadensmeldung eingegangen'
    case 'assigned':
      return 'Sachbearbeiter zugewiesen'
    case 'documents_requested':
      return 'Dokumente angefordert'
    case 'assessment_complete':
      return 'Bewertung abgeschlossen'
    case 'approved':
      return 'Freigabe erteilt'
    case 'info_needed':
      return 'Zusätzliche Informationen benötigt'
    default:
      return 'Aktualisierung'
  }
}

function mapEventTypeToIcon(type: ClaimEvent['type']): string {
  switch (type) {
    case 'submitted':
      return 'file-text'
    case 'assigned':
      return 'user'
    case 'documents_requested':
      return 'mail'
    case 'assessment_complete':
      return 'clipboard-check'
    case 'approved':
      return 'check'
    case 'info_needed':
      return 'warning'
    default:
      return 'list'
  }
}

function formatGermanDate(dateISO: string): string {
  const [y, m, d] = dateISO.split('-')
  return `${d}.${m}.${y}`
}

