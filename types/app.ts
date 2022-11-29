export interface Business {
  businessName: string
  loanAmout: number
  description: string
  ownerName: string
  ownerContact: string
  businessType: string
  collateral: string
  bussinessPhotoUrl: string
}

export interface Investor {
  fullName: string
  occupation: number
  telephoneNumber: string
  emailAddress: string
  rates: string
  profilePhotoUrl: string
}

export interface UserProfile {
  firstName: string
  lastname: string
  emailAddress: string
}
