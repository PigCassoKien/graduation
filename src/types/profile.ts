export interface SeoMeta {
  title: string
  description: string
  image: string
}

export interface ProfileData {
  studentName: string
  schoolName: string
  facultyName: string
  className: string
  majorName: string
  academicYear: string
  eventTitle: string
  degreeTitle?: string
  eventDate: string
  eventTime: string
  eventVenue: string
  eventMapUrl: string
  contactPhone: string
  eventNote: string
  invitationCode: string
  seo: SeoMeta
}