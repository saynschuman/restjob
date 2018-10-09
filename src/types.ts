export interface Vacancy {
    id: number
    quantityReviews: number
    quantityViews: number
    quantityShows: number
    notViewed: number,
    isArchived: boolean
    title: string
    views: number
    textDescription: string
    isHot: boolean
    isRecommended: boolean
    isActive: boolean
    isStandard: boolean
    salaryText: string
    hasTea: boolean
    isActually: boolean
    isClosed: boolean
    hasPercent: boolean
    addressesList: Address[]
    specialization: Specialization
    company: Company
    publishedDate: string
    params: any[]
    callbackPhone: string
    number: string
    link: string
    isNew: boolean
    isInvitation: boolean
    isRejection: boolean
    isNoAnswer: boolean
    rejectionDate: string
    rejectionText: string
    feedBackDate: string
    feedBackText: string
    notAnsweredText: string
    invitationDate: string
    invitationText: string
    recruiterName: string
    recruiterContacts: string
    isAccepted: boolean
    offerDate: string
    offerText: string
    acceptanceDate: string
    acceptanceText?: string
    isRejectedOffer: boolean
    rejectedOfferDate: string
    rejectedOfferText?: string
    offerIsNoAnswer: boolean
    offerIsNew: boolean
    lastUpTurnDate: string
    expiryDate: string
    isUpTurned: boolean
    upTurnPlan: string
    archDate: string
    RelatedResume: RelatedResumes[]
}

export interface Specialization {
    id: number
    title: string
}

export interface Address {
    color: string
    station: string
    coord: string
    address: string
}

export interface Place {
    title: string
    city: string
}

export interface City {
    id: number
    name: string
    dnsAlias: string
    isActivated?: boolean
}

export interface Company {
    id: number
    brend: string
    brendOfMonth: Date
    logo: string
    orgname: string
    openDate: string
    city: City
    textDescription: string
    photoSet: string[]
    vacancyPublished?: Vacancy[]
    link?: string
    companyDescription: string
}

export interface Employee {
    name: string
    vacancy: string
    salary: string
    photo: string
}

export interface Banner {
    href: string
    img: string
}

export interface WorkPlace {
    id: number
    orgname: string
    position: string
    period: string
    description: string
    photoSet?: string[]
}

export interface QuestionProps {
    title: string
    phone?: string
    description: string
    link: string
    linkName: string
}

export interface AnyQuestionsBlockProps {
    questions: QuestionProps[]
}

export interface RelatedResumes {
    avatar: string
    name: string
    company: string
    position: string
}

export interface Action {
    date: string
    act: string
    sum: string
    vacancy?: string
    vacancyLink?: string
    company?: string
}

export interface Bill {
    bilNum: number
    date: string
    entity: string
    sum: string
    status: string
    billLink: string
    actLink: string
}

export interface Data {
    label: string
    value: string
}
